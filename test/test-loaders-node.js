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
var http = require('http');
var path = require('path');
var pathLoader = require('..');
var YAML = require('js-yaml');

var personJson = require('./browser/project.json');

describe('path-loader (node.js loaders)', function () {
  describe('file', function () {
    it('absolute existing file', function (done) {
      pathLoader
        .load(path.resolve(__dirname, './browser/project.json'))
        .then(JSON.parse)
        .then(function (json) {
          assert.deepEqual(personJson, json);
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
          assert.deepEqual(personJson, json);
        })
        .then(done, done);
    });

    it('relative existing file (with dot)', function (done) {
      pathLoader
        .load('./test/browser/project.json')
        .then(JSON.parse)
        .then(function (json) {
          assert.deepEqual(personJson, json);
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
          assert.deepEqual(personJson, json);
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

    it('should support non-JSON with options.processContent', function (done) {
      var filePath = path.resolve(__dirname, './browser/project.yaml');

      pathLoader
        .load(filePath)
        .then(YAML.safeLoad)
        .then(function (json) {
          assert.deepEqual(personJson, json);
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
        .load('http://localhost:55555/project.json')
        .then(JSON.parse)
        .then(function (json) {
          assert.deepEqual(personJson, json);
        }, function (err) {
          throw err;
        })
        .then(done, done);
    });

    it('missing file', function (done) {
      pathLoader
        .load('http://localhost:55555/missing.json')
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
        .load('http://localhost:55555/project.json', {method: 'delete'})
        .then(JSON.parse)
        .then(function (json) {
          assert.deepEqual(personJson, json);
        }, function (err) {
          throw err;
        })
        .then(done, done);
    });

    it('should support non-JSON with options.processContent', function (done) {
      var fileUrl = 'http://localhost:55555/project.json';

      pathLoader
        .load(fileUrl)
        .then(YAML.safeLoad)
        .then(function (json) {
          assert.deepEqual(personJson, json);
        }, function (err) {
          throw err;
        })
        .then(done, done);
    });

    it('should support path requiring authentication/authorization using options.prepareRequest', function (done) {
      var fileUrl = 'http://localhost:55555/secure/project.json';

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
          assert.deepEqual(personJson, document);
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
        .load('https://api.github.com/repos/whitlockjc/path-loader')
        .then(JSON.parse)
        .then(function (json) {
          assert.equal('whitlockjc/path-loader', json.full_name);
        })
        .then(done, done);
    });
  });

  // Since we know Promises are already handling errors/responses properly, we just need to test a successful callback
  // with a callback.
  it('callback', function (done) {
    pathLoader
      .load(path.resolve(__dirname, './browser/project.json'), function (err, document) {
        assert.ok(!err);
        assert.deepEqual(personJson, JSON.parse(document));

        done();
      });
  });
});
