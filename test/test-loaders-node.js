/* eslint-env mocha */

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
var helpers = require('./helpers');
var fs = require('fs');
var http = require('http');
var path = require('path');
var {
  pathLoader
} = require('..');

var projectJson = require('./browser/project.json');
var baseLocation = 'http://localhost:55555/';
var projectJsonLocation = baseLocation + 'project.json';

function customFileLoader(basePath) {
  return function (location, options, callback) {
    if (path.resolve(location) !== path.normalize(location)) {
      // Handle relative paths
      location = basePath ? path.resolve(process.cwd(), basePath, location) : path.resolve(process.cwd(), location);
    }

    fs.readFile(location, {
      encoding: options.encoding || 'utf-8'
    }, callback);
  }
}

describe('path-loader (node.js loaders)', function () {
  describe('#load', function () {
    it('should return proper error for invalid arguments', function (done) {
      pathLoader
        .load(path.resolve(__dirname, './browser/project.json'), {
          encoding: false
        })
        .then(function () {
          throw new Error('pathLoader.load should had failed');
        }, function (err) {
          assert.equal(err.message, 'options.encoding must be a string');
        })
        .then(done, done);
    });

    describe('file', function () {
      it('absolute existing file', function (done) {
        pathLoader
          .load(path.resolve(__dirname, './browser/project.json'))
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      it('absolute existing file using basePath', function (done) {
        pathLoader
          .load('project.json', {
            basePath: path.resolve(__dirname, './browser')
          })
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
          .load('test/browser/project.json')
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          })
          .then(done, done);
      });

      it('relative existing file with basePath', function (done) {
        pathLoader
          .load('./browser/project.json', {
            basePath: './test'
          })
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          })
          .then(done, done);
      });

      it('relative existing file (with dot)', function (done) {
        pathLoader
          .load('./test/browser/project.json')
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      it('custom file loader', function (done) {
        pathLoader
          .load('project.json', {
            loaders: {
              file: customFileLoader('./test/browser/')
            }
          })
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      it('URL to existing file', function (done) {
        pathLoader
          .load('file://' + path.resolve(__dirname, './browser/project.json'))
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      it('missing file', function (done) {
        var filePath = path.resolve(__dirname, './browser/missing.json');

        pathLoader
          .load(filePath)
          .then(function () {
            throw new Error('pathLoader.load should had failed');
          }, function (err) {
            assert.ok(err.message.indexOf('ENOENT') > -1);
            assert.ok(err.message.indexOf(filePath) > -1);
          })
          .then(done, done);
      });

      it('should support options.encoding', function (done) {
        pathLoader
          .load('file://' + path.resolve(__dirname, './browser/project.json'), {
            encoding: 'utf-8'
          })
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      it('should support options.processContent', function (done) {
        // Error tests are in test-general.js
        pathLoader
          .load('./test/browser/project.json', {
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
    });

    describe('http', function () {
      var server;

      before(function (done) {
        server = helpers.createServer(http).listen(55555, function () {
          done();
        });
      });

      after(function (done) {
        server.close(done);
      });

      it('absolute existing file', function (done) {
        pathLoader
          .load(projectJsonLocation)
          .then(JSON.parse)
          .then(function (json) {
            assert.deepEqual(projectJson, json);
          }, function (err) {
            throw err;
          })
          .then(done, done);
      });

      it('missing file', function (done) {
        pathLoader
          .load(baseLocation + 'missing.json')
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
          .load(projectJsonLocation, {
            method: 'delete'
          })
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
          var expectedMessage = 'Thrown error';

          pathLoader
            .load(projectJsonLocation, {
              prepareRequest: function () {
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
            .load(projectJsonLocation, {
              prepareRequest: function (res, callback) {
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

        it('valid callback', function (done) {
          var fileUrl = baseLocation + 'secure/project.json';

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
                    prepareRequest: function (req, callback) {
                      req.auth('whitlockjc', 'path-loader');

                      callback(undefined, req);
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
      });

      it('should support options.processContent', function (done) {
        // Error tests are in test-general.js
        pathLoader
          .load(projectJsonLocation, {
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
    });

    // Since http and https have the same implementation, no need to test them individually
    describe('https', function () {
      it('make sure we get a loader', function (done) {
        pathLoader
          .load('https://cdn.rawgit.com/whitlockjc/path-loader/master/package.json')
          .then(JSON.parse)
          .then(function (json) {
            assert.equal('path-loader', json.name);
          })
          .then(done, done);
      });
    });
  });
});
