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
var swaggerLoader = require('..');

var invalidLoadScenarios = [
  [[], 'location is required'],
  [[false], 'location must be a string'],
  [['someLocation', false], 'options must be an object'],
  [['http://localhost:55555/project.json', {method: false}], 'options.method must be a string'],
  [['http://localhost:55555/project.json', {method: 'fake'}], 'options.method must be one of the following: ' +
    'delete, get, head, patch, post or put'],
  [['http://localhost:55555/project.json', {prepareRequest: 'wrongType'}], 'options.prepareRequest must be a function'],
  [['someLocation', {}, 'wrongType'], 'callback must be a function']
];

var header = typeof window === 'undefined' ? 'node.js' : 'browser';

describe('path-loader (' + header + ' general)', function () {
  it('should always return a promise', function () {
    // Promise invocation
    assert.ok(swaggerLoader.load({}) instanceof Promise);
    // Callback invocation
    assert.ok(swaggerLoader.load({}, function () {}) instanceof Promise);
  });

  describe('promises', function () {
    it('should return proper error for invalid arguments', function (done) {
      var allTests = Promise.resolve();

      invalidLoadScenarios.forEach(function (scenario, index) {
        allTests = allTests
          .then(function () {
            return new Promise(function (resolve, reject) {
              swaggerLoader.load.apply(swaggerLoader, scenario[0])
                .then(function () {
                  reject(new Error('swaggerLoader.load should had failed (Test #' + index + ')'));
                }, function (err) {
                  try {
                    assert.ok(err instanceof TypeError);
                    assert.equal(scenario[1], err.message);

                    resolve();
                  } catch (err) {
                    reject(err);
                  }
                });
            });
          });
      });

      allTests.then(done, done);
    });
  });

  describe('callbacks', function () {
    it('should return proper error for invalid arguments', function (done) {
      var allTests = Promise.resolve();

      // We cannot test the first or last scenarios with callbacks
      invalidLoadScenarios.slice(1, invalidLoadScenarios.length - 1).forEach(function (scenario) {
        allTests = allTests
          .then(function () {
            return new Promise(function (resolve, reject) {
              var args = scenario[0].concat(function (err) {
                try {
                  assert.ok(err instanceof TypeError);
                  assert.equal(scenario[1], err.message);

                  resolve();
                } catch (err) {
                  reject(err);
                }
              });

              swaggerLoader.load.apply(swaggerLoader, args);
            });
          });
      });

      allTests.then(done, done);
    });
  });
});
