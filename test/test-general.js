/* eslint-env browser, mocha */

/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Jeremy Whitlock
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

var assert = require('assert');
var pathLoader = require('..');

var pkgJsonLocation = 'http://cdn.rawgit.com/whitlockjc/path-loader/master/package.json';
var invalidLoadScenarios = [
  [[], 'location is required'],
  [[false], 'location must be a string'],
  [['someLocation', false], 'options must be an object'],
  [['git://github.com/whitlockjc/path-loader.git'], 'Unsupported scheme: git'],
  [[pkgJsonLocation, {method: false}], 'options.method must be a string'],
  [[pkgJsonLocation, {method: 'fake'}],
   'options.method must be one of the following: delete, get, head, patch, post or put'],
  [[pkgJsonLocation, {prepareRequest: 'wrongType'}], 'options.prepareRequest must be a function'],
  [[pkgJsonLocation, {processContent: 'wrongType'}], 'options.processContent must be a function']
];

var header = typeof window === 'undefined' ? 'node.js' : 'browser';

function makeShouldHadFailedError (index) {
  return new Error('pathLoader.load should had failed (Test #' + index + ')');
}

function validateError (expectedMessage, err, resolve, reject) {
  try {
    if (err.message.indexOf('Unsupported scheme: ') > -1) {
      assert.ok(err instanceof Error);
    } else {
      assert.ok(err instanceof TypeError);
    }

    assert.equal(expectedMessage, err.message);

    if (typeof resolve !== 'undefined') {
      resolve();
    }
  } catch (err2) {
    if (typeof reject === 'undefined') {
      throw err2;
    } else {
      reject(err2);
    }
  }
}

describe('path-loader (' + header + ' general)', function () {
  describe('#load', function () {
    it('should always return a promise', function () {
      // Promise invocation
      assert.ok(pathLoader.load({}) instanceof Promise);
      // Callback invocation
      assert.ok(pathLoader.load({}, function () {}) instanceof Promise);
    });

    it('should return proper error for invalid arguments', function (done) {
      var allTests = Promise.resolve();

      invalidLoadScenarios.forEach(function (scenario, index) {
        allTests = allTests
          .then(function () {
            return new Promise(function (resolve, reject) {
              pathLoader.load.apply(pathLoader, scenario[0])
                .then(function () {
                  reject(makeShouldHadFailedError(index));
                }, function (err) {
                  validateError(scenario[1], err, resolve, reject);
                });
            });
          });
      });

      allTests.then(done, done);
    });

    describe('options.processContent error handling', function () {
      it('thrown error', function (done) {
        var expectedMessage = 'Thrown error';

        pathLoader
          .load(pkgJsonLocation, {
            processContent: function () {
              throw new Error(expectedMessage);
            }
          })
          .then(function () {
            throw new Error('pathLoader.load should had failed');
          }, function (err) {
            assert.equal(err.message, expectedMessage);
          })
          .then(done, done);
      });

      it('returned error', function (done) {
        var expectedMessage = 'Thrown error';

        pathLoader
          .load(pkgJsonLocation, {
            processContent: function (res, callback) {
              callback(new Error(expectedMessage));
            }
          })
          .then(function () {
            throw new Error('pathLoader.load should had failed');
          }, function (err) {
            assert.equal(err.message, expectedMessage);
          })
          .then(done, done);
      });
    });
  });
});
