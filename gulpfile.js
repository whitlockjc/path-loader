/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Jeremy Whitlock
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* global Promise */

'use strict';

var $ = require('gulp-load-plugins')();
var jsdoc2md = require('jsdoc-to-markdown');
var fs = require('fs');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var KarmaServer = require('karma').Server;
var path = require('path');
var testHelpers = require('./test/helpers');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var runningAllTests = false;

// Load promises polyfill if necessary
if (typeof Promise === 'undefined') {
  require('native-promise-only');
}

function displayCoverageReport (display) {
  if (display) {
    gulp.src('.', {allowEmpty: true})
      .pipe($.istanbul.writeReports());
  }
}

gulp.task('clean', function () {
  return del([
    'bower_components',
    'coverage'
  ]);
});

gulp.task('dist', function (done) {
	webpack(webpackConfig, function (err, stats) {
		if (err) throw new gutil.PluginError('webpack', err);
		gutil.log('[webpack]', 'Bundles generated:\n' + stats.toString('minimal').split('\n').map(function (line) {
      return '  ' + line.replace('Child ', 'dist/').replace(':', '.js:');
    }).join('\n'));
		done();
	});
});

gulp.task('docs', function (done) {
  debugger;
  jsdoc2md.render({
    files: [
      './index.js',
      './lib/typedefs.js'
    ]
  }).then(output => {
    fs.writeFile('docs/API.md', output, (err) => {
      if (err) console.err(err);
      else done();
    });
  });
});

gulp.task('docs-ts-raw', function (done) {
  return gulp.src([
    './index.js',
    './lib/typedefs.js'
  ])
    .pipe($.jsdoc3({
      opts: {
        destination: 'index.d.ts',
        template: 'node_modules/@otris/jsdoc-tsd'
      }
    }, done));
});

// Due to bugs in @otris/jsdoc-tsd, we need to "fix" the generated TSD.
//
//  * https://github.com/otris/jsdoc-tsd/issues/38
//  * https://github.com/otris/jsdoc-tsd/issues/39
gulp.task('docs-ts', gulp.series('docs-ts-raw', function () {
  return gulp.src(['index.d.ts'])
    .pipe($.replace('<*>', '<any>'))
    .pipe($.replace('module:path-loader~', ''))
    .pipe($.replace('module:path-loader.', ''))
    .pipe(gulp.dest('.'));
}));

gulp.task('lint', function () {
  return gulp.src([
      'lib/**/*.js',
      'test/**/*.js',
      '!test/**/*.js',
      'gulpfile.js'
    ])
    .pipe($.eslint())
    .pipe($.eslint.format('stylish'))
    .pipe($.eslint.failAfterError());
});

gulp.task('pre-test', function () {
  return gulp.src([
    'index.js',
    'lib/**/*.js',
    '!lib/loaders/file-browser.js'
  ])
    .pipe($.istanbul({includeUntested: true}))
    .pipe($.istanbul.hookRequire()); // Force `require` to return covered files
});

gulp.task('test-node', gulp.series('pre-test', function () {
  return gulp.src([
    'test/**/test-*.js',
    '!test/browser/test-*.js',
    '!test/test-loaders-browser.js'
  ])
    .pipe($.mocha({
      reporter: 'spec',
      timeout: 5000
    }))
    .on('end', function () {
      displayCoverageReport(!runningAllTests);
    });
}));

gulp.task('test-browser', function () {
  var httpServer;

  function cleanUp () {
    if (httpServer) {
      httpServer.close();
    }
  }

  function finisher (err) {
    cleanUp();

    displayCoverageReport(runningAllTests);

    return err;
  }

  return Promise.resolve()
    .then(function () {
      httpServer = testHelpers.createServer(require('http')).listen(44444);
    })
    .then(function () {
      return new Promise(function (resolve, reject) {
        new KarmaServer({
          configFile: path.join(__dirname, 'test/browser/karma.conf.js'),
          singleRun: true
        }, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }).start();
      });
    })
    .then(finisher, finisher);
});

gulp.task('test', gulp.series(function (done) {
  runningAllTests = true;
  done();
}, 'test-node', 'test-browser'));

gulp.task('default', gulp.series('lint', 'test', 'dist', 'docs', 'docs-ts'));
