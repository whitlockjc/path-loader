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

'use strict';

var browserify = require('browserify');
var del = require('del');
var eslint = require('gulp-eslint');
var fs = require('fs');
var gulp = require('gulp');
var testHelpers = require('./test/helpers');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var runSequence = require('run-sequence');
var source = require('vinyl-source-stream');

var runningAllTests = false;

// Load promises polyfill if necessary
if (typeof Promise === 'undefined') {
  require('native-promise-only');
}

function displayCoverageReport (display) {
  if (display) {
    gulp.src([])
      .pipe(istanbul.writeReports());
  }
}

gulp.task('browserify', function (cb) {
  function browserifyBuild (useDebug) {
    return new Promise(function (resolve, reject) {
      var b = browserify('./index.js', {
        debug: useDebug,
        standalone: 'PathLoader'
      });

      if (!useDebug) {
        b.transform({global: true}, 'uglifyify');
      }

      b.transform('brfs')
        .bundle()
        .pipe(source('path-loader' + (!useDebug ? '-min' : '') + '.js'))
        .pipe(gulp.dest('browser/'))
        .on('error', reject)
        .on('end', resolve);
    });
  }

  Promise.resolve()
    // Standalone build with source maps and complete source
    .then(browserifyBuild(true))
    // Standalone build minified and without source maps
    .then(browserifyBuild(false))
    .then(cb, cb);
});

gulp.task('clean', function (done) {
  del([
    'bower_components',
    'coverage'
  ], done);
});

gulp.task('lint', function () {
  return gulp.src([
      'lib/**/*.js',
      'test/**/*.js',
      '!test/**/*.js',
      'gulpfile.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format('stylish'))
    .pipe(eslint.failAfterError());
});

gulp.task('test-node', function (cb) {
  gulp.src([
      'index.js',
      'lib/**/*.js',
      '!lib/loaders/file-browser.js'
    ])
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src([
        'test/**/test-*.js',
        '!test/browser/test-*.js',
        '!test/test-loaders-browser.js'
      ])
        .pipe(mocha({reporter: 'spec'}))
        .on('end', function () {
          displayCoverageReport(!runningAllTests);

          cb();
        });
    });
});

gulp.task('test-browser', ['browserify'], function (cb) {
  var basePath = './test/browser/';
  var httpServer;

  function cleanUp () {
    // Clean up just in case
    del.sync([
      basePath + 'path-loader.js',
      basePath + 'test-browser.js'
    ]);

    if (httpServer) {
      httpServer.close();
    }
  }

  Promise.resolve()
    .then(cleanUp)
    .then(function () {
      // Copy the browser build of path-loader to the test directory
      fs.createReadStream('./browser/path-loader.js')
        .pipe(fs.createWriteStream(basePath + 'path-loader.js'));

      return new Promise(function (resolve, reject) {
        var b = browserify([
          './test/test-general.js',
          './test/test-loaders-browser.js'
        ], {
          debug: true
        });

        b.transform('brfs')
          .bundle()
          .pipe(source('test-browser.js'))
          .pipe(gulp.dest(basePath))
          .on('error', function (err) {
            reject(err);
          })
          .on('end', function () {
            resolve();
        });
      });
    })
    .then(function () {
      httpServer = testHelpers.createServer(require('http')).listen(44444);
    })
    .then(function () {
      return new Promise(function (resolve, reject) {
        gulp
          .src(basePath + 'test-browser.html')
          .pipe(mochaPhantomJS({
            phantomjs: {
              localToRemoteUrlAccessEnabled: true,
              webSecurityEnabled: false,
              ignoreResourceErrors: true
            },
            timeout: 5000
          }))
          .on('error', function (err) {
            cleanUp();
            displayCoverageReport(runningAllTests);

            reject(err);
          })
          .on('finish', function () {
            cleanUp();
            displayCoverageReport(runningAllTests);

            resolve();
          });
      });
    })
    .then(cb, cb);
});

gulp.task('test', function (cb) {
  runningAllTests = true;

  // Done this way to ensure that test-node runs prior to test-browser.  Since both of those tasks are independent,
  // doing this 'The Gulp Way' isn't feasible.
  runSequence('test-node', 'test-browser', cb);
});

gulp.task('default', ['lint', 'test', 'browserify']);
