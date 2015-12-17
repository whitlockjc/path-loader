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

var projectJson = require('./browser/project.json');

describe('path-loader (browser loaders)', function () {
  describe('#load', function () {
    describe('file', function () {
      it('not implemented', function (done) {
        pathLoader
          .load('file:///Users/not-you/projects/path-loaders/test/browser/project.json')
          .then(function () {
            throw new Error('pathLoader.load should had failed');
          }, function (err) {
            assert.ok(err instanceof TypeError);
            assert.equal('The \'file\' scheme is not supported in the browser', err.message);
          })
          .then(done, done);
      });
    });

    describe('http', function () {
      it('absolute existing file', function (done) {
        pathLoader
          .load('http://localhost:44444/project.json')
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      it('relative existing file (without dot)', function (done) {
        pathLoader
          .load('base/project.json')
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          })
          .then(done, done);
      });

      it('relative existing file (with dot)', function (done) {
        pathLoader
          .load('./base/project.json')
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      it('missing file (different origin)', function (done) {
        pathLoader
          .load('http://localhost:44444/missing.json')
          .then(function () {
            throw new Error('pathLoader.load should had failed');
          }, function (err) {
            // superagent doesn't handle an XHR request that returns 404 very well
            assert.ok(err.message.indexOf('Origin is not allowed by Access-Control-Allow-Origin') > -1);
          })
          .then(done, done);
      });

      it('missing file (same origin)', function (done) {
        pathLoader
          .load('base/missing.json')
          .then(function () {
            throw new Error('pathLoader.load should had failed');
          }, function (err) {
            assert.equal(404, err.status);
          })
          .then(done, done);
      });

      it('make sure options.method works right', function (done) {
        // This is a convoluted test but it helps get code coverage up
        pathLoader
          .load('http://localhost:44444/project.json', {method: 'delete'})
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      it('should support path requiring authentication/authorization using options.prepareRequest', function (done) {
        var fileUrl = 'http://localhost:44444/secure/project.json';

        pathLoader
          .load(fileUrl)
          .then(function () {
            throw new Error('pathLoader.load should had failed');
          }, function (err) {
            assert.equal(401, err.status);
          })
          .then(function () {
            return new Promise(function (resolve) {
              pathLoader.load(fileUrl, {
                prepareRequest: function (req) {
                  req.auth('whitlockjc', 'path-loader');
                }
              })
                .then(function (document) {
                  resolve(document);
                });
            });
          })
          .then(JSON.parse)
          .then(function (document) {
            assert.deepEqual(projectJson, document);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      it('should support path requiring authentication/authorization using options.prepareRequest', function (done) {
        var fileUrl = 'http://localhost:44444/secure/project.json';

        pathLoader
          .load(fileUrl)
          .then(function () {
            throw new Error('pathLoader.load should had failed');
          }, function (err) {
            assert.equal(401, err.status);
          })
          .then(function () {
            return new Promise(function (resolve) {
              pathLoader.load(fileUrl, {
                prepareRequest: function (req) {
                  req.auth('whitlockjc', 'path-loader');
                }
              })
                .then(function (document) {
                  resolve(document);
                });
            });
          })
          .then(JSON.parse)
          .then(function (document) {
            assert.deepEqual(projectJson, document);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      describe('should support options.processContent', function () {
        it('valid response', function (done) {
          pathLoader
            .load('http://localhost:44444/project.json', {
              processContent: function (res, callback) {
                callback(undefined, JSON.parse(res.text));
              }
            })
            .then(function (json) {
              assert.deepEqual(projectJson, json);
            }, function (err) {
              throw err;
            })
            .then(done, done);
        });

        it('thrown error', function (done) {
          var expectedMessage = 'Thrown error';

          pathLoader
            .load('http://localhost:44444/project.json', {
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
      });
    });

    // Since http and https have the same implementation, no need to test them individually
    describe('https', function () {
      it('make sure we get a loader', function (done) {
        pathLoader
          .load('https://rawgit.com/whitlockjc/path-loader/master/package.json')
          .then(JSON.parse)
          .then(function (json) {
            assert.equal('path-loader', json.name);
          })
          .then(done, done);
      });
    });

    // Since we know Promises are already handling errors/responses properly, we just need to test a successful callback
    // with a callback.
    it('callback', function (done) {
      pathLoader
        .load('http://localhost:44444/project.json', function (err, document) {
          assert.ok(!err);
          assert.deepEqual(projectJson, JSON.parse(document));

          done();
        });
    });
  });
});
