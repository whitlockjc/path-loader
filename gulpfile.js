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
var log = require('fancy-log');
var karma = require('karma');
var path = require('path');
var PluginError = require('plugin-error');
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
		if (err) throw new PluginError('webpack', err);
		log('[webpack]', 'Bundles generated:\n' + stats.toString('minimal').split('\n').map(function (line) {
      return '  ' + line.replace('Child ', 'dist/').replace(':', '.js:');
    }).join('\n'));
		done();
	});
});

gulp.task('docs', function (done) {
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

gulp.task('lint', function () {
  return gulp.src([
      'src/**/*.ts',
      'test/**/*.ts',
      '!test/**/*.ts',
      'gulpfile.js'
    ])
    .pipe($.eslint())
    .pipe($.eslint.format('stylish'))
    .pipe($.eslint.failAfterError());
});

gulp.task('pre-test', function () {
  return gulp.src([
    'src/**/*.ts',
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
    if (typeof err !== 'undefined') {
      log('Browser tests failed');
      log(err);
    }

    cleanUp();

    displayCoverageReport(runningAllTests);

    return err;
  }

  return Promise.resolve()
    .then(function () {
      httpServer = testHelpers.createServer(require('http')).listen(44444);
    })
    .then(function () {
      return karma.config.parseConfig(
        path.join(__dirname, 'test/browser/karma.conf.js'),
        {port: 9876},
        {promiseConfig: true, throwErrors: true}
      );
    })
    .then(function (karmaConfig) {
      return new Promise(function (resolve, reject) {
        new karma.Server(karmaConfig, function (exitCode) {
          console.log(`Karma exit code: ${exitCode}`);
          if (exitCode !== 0) {
            reject(new Error(`Karma exited with status code: ${exitCode}`));
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

gulp.task('default', gulp.series('lint', 'test', 'dist', 'docs'));
