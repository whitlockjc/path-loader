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
var jsonLoader = require('..');
var YAML = require('js-yaml');

var personJson = require('./browser/project.json');

describe('path-loader (browser loaders)', function () {
  describe('file', function () {
    it('URL', function (done) {
      jsonLoader
        .load('file:///Users/not-you/projects/path-loaders/test/browser/project.json')
        .then(function () {
          throw new Error('jsonLoader.load should had failed');
        }, function (err) {
          assert.ok(err instanceof TypeError);
          assert.equal('The \'file\' scheme is not supported in the browser', err.message);
        })
        .then(done, done);
    });
  });

  describe('http', function () {
    it('absolute existing file', function (done) {
      jsonLoader
        .load('http://localhost:44444/project.json')
        .then(JSON.parse)
        .then(function (json) {
          assert.deepEqual(personJson, json);
        }, function (err) {
          throw err;
        })
        .then(done, done);
    });

    it('missing file', function (done) {
      jsonLoader
        .load('http://localhost:44444/missing.json')
        .then(function () {
          throw new Error('jsonLoader.load should had failed');
        }, function (err) {
          // superagent doesn't handle an XHR request that returns 404 very well
          assert.equal('Origin is not allowed by Access-Control-Allow-Origin', err.message);
        })
        .then(done, done);
    });

    it('make sure options.method works right', function (done) {
      // This is a convoluted test but it helps get code coverage up
      jsonLoader
        .load('http://localhost:44444/project.json', {method: 'delete'})
        .then(JSON.parse)
        .then(function (json) {
          assert.deepEqual(personJson, json);
        }, function (err) {
          throw err;
        })
        .then(done, done);
    });

    it('should support non-JSON with options.processContent', function (done) {
      var fileUrl = 'http://localhost:44444/project.json';

      jsonLoader
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
      var fileUrl = 'http://localhost:44444/secure/project.json';

      jsonLoader
        .load(fileUrl)
        .then(function () {
          throw new Error('jsonLoader.load should had failed');
        }, function (err) {
          assert.equal(401, err.status);
        })
        .then(function () {
          return new Promise(function (resolve) {
            jsonLoader.load(fileUrl, {
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
      jsonLoader
        .load('https://localhost:44445/project.json')
        .then(function () {
          throw new Error('jsonLoader.load should had failed');
        }, function (err) {
          // Since we did not setup a valid https server, just ensure we get the expected error back

          // superagent doesn't handle an XHR request that returns 404 very well
          assert.equal('Origin is not allowed by Access-Control-Allow-Origin', err.message);
        })
        .then(done, done);
    });
  });

  // Since we know Promises are already handling errors/responses properly, we just need to test a successful callback
  // with a callback.
  it('callback', function (done) {
    jsonLoader
      .load('http://localhost:44444/project.json', function (err, document) {
        assert.ok(!err);
        assert.deepEqual(personJson, JSON.parse(document));

        done();
      });
  });
});
