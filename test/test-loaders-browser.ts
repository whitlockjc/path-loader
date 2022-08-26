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

import assert from 'assert';
import * as pathLoader from '../src/index';
import http from 'http';
import karma from 'karma';

import projectJson from './browser/project.json';
import {startKarma, stopKarma} from './helpers';
const baseLocation = 'http://localhost:44444/';
const projectJsonLocation = baseLocation + 'project.json';

describe('path-loader (browser loaders)', function () {

  let testContext: {
    httpServer: http.Server;
    srv: karma.Server;
  } | undefined = undefined;

  before(async () => {
    testContext = await startKarma();
  });

  after(async () => {
    return stopKarma(testContext);
  });

  describe('#load', function () {
    describe('file', function () {
      it('not implemented', function (done) {
        pathLoader
          .load('file:///Users/not-you/projects/path-loaders/test/browser/project.json')
          .then(function () {
            throw new Error('pathLoader.load should have failed');
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
          .load(baseLocation + 'project.json')
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
          .load('base/browser/project.json')
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          })
          .then(done, done);
      });

      it('relative existing file (with dot)', function (done) {
        pathLoader
          .load('./base/browser/project.json')
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      it('missing file (different origin)', function () {
        return pathLoader
          .load(baseLocation + 'missing.json')
          .then(function () {
            throw new Error('pathLoader.load should have failed');
          }, function (err) {
            assert.equal(err.status, 404);
          });
      });

      it('missing file (same origin)', function (done) {
        pathLoader
          .load('base/missing.json')
          .then(function () {
            throw new Error('pathLoader.load should have failed');
          }, function (err) {
            assert.equal(404, err.status);
          })
          .then(done, done);
      });

      it('make sure options.method works right', function (done) {
        // This is a convoluted test but it helps get code coverage up
        pathLoader
          .load(baseLocation + 'project.json', {method: 'delete'})
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      describe('should support options.prepareRequest', function () {
        it('thrown error', function (done) {
          const expectedMessage = 'Thrown error';

          pathLoader
            .load(projectJsonLocation, {
              prepareRequest: function () {
                throw new Error(expectedMessage);
              }
            })
            .then(function () {
              throw new Error('pathLoader.load should have failed');
            }, function (err) {
              assert.equal(err.message, expectedMessage);
            })
            .then(done, done);
        });

        it('returned error', function (done) {
          const expectedMessage = 'Thrown error';

          pathLoader
            .load(projectJsonLocation, {
              prepareRequest: function (res, callback) {
                callback(new Error(expectedMessage));
              }
            })
            .then(function () {
              throw new Error('pathLoader.load should have failed');
            }, function (err) {
              assert.equal(err.message, expectedMessage);
            })
            .then(done, done);
        });

        it('valid callback', function (done) {
          const fileUrl = baseLocation + 'secure/project.json';

          pathLoader
            .load(fileUrl)
            .then(function () {
              throw new Error('pathLoader.load should have failed');
            }, function (err) {
              assert.equal(401, err.status);
            })
            .then(function () {
              return new Promise(function (resolve, reject) {
                pathLoader.load(fileUrl, {
                  prepareRequest: function (req, callback) {
                    req.auth('whitlockjc', 'path-loader');

                    callback(undefined, req);
                  }
                })
                  .then(function (document) {
                    resolve(document);
                  }, function (err) {
                    reject(err);
                  });
              });
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((d) => JSON.parse(d as any))
            .then(function (document) {
              assert.deepEqual(projectJson, document);
            }, function (err) {
              throw err;
            })
            .then(done, done);
        });
      });

      it('should support options.processContent', function (done) {
        // Error tests are in test-general.js
        pathLoader
          .load(baseLocation + 'project.json', {
            processContent: function (res, callback) {
              assert.equal(res.location, baseLocation + 'project.json');

              callback(null, JSON.parse(res.text));
            }
          })
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });
    });

    // Since http and https have the same implementation, no need to test them individually
    describe('https', function () {
      it('make sure we get a loader', function () {
       return pathLoader
          .load('https://rawgit.com/whitlockjc/path-loader/master/package.json')
          .then((r) => JSON.parse(r))
          .then(function (json) {
            assert.equal('path-loader', json.name);
          });

      });
    });
  });
});
