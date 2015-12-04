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

/**
 * Utility that provides a single API for loading the content of a path/URL.
 *
 * @module PathLoader
 */

var supportedLoaders = {
  file: require('./lib/loaders/file'),
  http: require('./lib/loaders/http'),
  https: require('./lib/loaders/http')
};
var defaultLoader = typeof window === 'object' || typeof importScripts === 'function' ?
      supportedLoaders.http :
      supportedLoaders.file;

// Load promises polyfill if necessary
/* istanbul ignore if */
if (typeof Promise === 'undefined') {
  require('native-promise-only');
}

/**
 * Callback used to provide access to altering a remote request prior to the request being made.
 *
 * @typedef {function} PrepareRequestCallback
 *
 * @param {object} req - The Superagent request object
 * @param {string} location - The location being retrieved
 *
 * @alias module:PathLoader~PrepareRequestCallback
 */

/**
 * Error-first callback.
 *
 * @typedef {function} ResultCallback
 *
 * @param {error} [err] - The error if there is a problem
 * @param {string} [result] - The result of the function
 *
 * @alias module:PathLoader~ResultCallback
 */

/**
 * Returns the loader for the given location.
 *
 * @param {string} location - The location to load
 *
 * @returns {object} The loader to use
 *
 * @private
 */
function getLoader (location) {
  var scheme = location.indexOf('://') === -1 ? '' : location.split('://')[0];
  var loader = supportedLoaders[scheme];

  if (typeof loader === 'undefined') {
    if (scheme === '') {
      loader = defaultLoader;
    } else {
      throw new Error('Unsupported scheme: ' + scheme);
    }
  }

  return loader;
}

/**
 * Loads a document at the provided location and returns a JavaScript object representation.
 *
 * @param {object} location - The location to the document
 * @param {object} [options] - The options
 * @param {module:PathLoader~PrepareRequestCallback} [options.prepareRequest] - The callback used to prepare the request
 * @param {module:PathLoader~ResultCallback} [done] - The result callback
 *
 * @returns {Promise} Always returns a promise even if there is a callback provided
 *
 * @example
 * // Example using callbacks
 *
 * PathLoader
 *   .load('./package.json', function (err, document) {
 *     if (err) {
 *       console.error(err.stack);
 *     } else {
 *       try {
 *         document = JSON.parse(document)
 *         console.log(document.name + ' (' + document.version + '): ' + document.description);
 *       } catch (err2) {
 *         callback(err2);
 *       }
 *     });
 *
 * @example
 * // Example using Promises
 *
 * PathLoader
 *   .load('./package.json')
 *   .then(JSON.parse)
 *   .then(function (document) {
 *     console.log(document.name + ' (' + document.version + '): ' + document.description);
 *   }, function (err) {
 *     console.error(err.stack);
 *   });
 *
 * @example
 * // Example using options.prepareRequest to provide authentication details for a remotely secure URL
 *
 * PathLoader
 *   .load('https://api.github.com/repos/whitlockjc/path-loader', {
 *     prepareRequest: function (req) {
 *       req.auth('my-username', 'my-password')
 *     }
 *   })
 *   .then(JSON.parse)
 *   .then(function (document) {
 *     console.log(document.full_name + ': ' + document.description);
 *   }, function (err) {
 *     console.error(err.stack);
 *   });
 *
 * @example
 * // Example loading a YAML file
 *
 * PathLoader
 *   .load('/Users/not-you/projects/path-loader/.travis.yml')
 *   .then(YAML.safeLoad)
 *   .then(function (document) {
 *     console.log('path-loader uses the', document.language, 'language.');
 *   }, function (err) {
 *     console.error(err.stack);
 *   });
 */
module.exports.load = function (location, options, done) {
  var allTasks = Promise.resolve();

  if (arguments.length === 2 && typeof options === 'function') {
    done = options;
    options = undefined;
  }

  // Validate arguments
  allTasks = allTasks.then(function () {
    if (typeof location === 'undefined') {
      throw new TypeError('location is required');
    } else if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }

    if (typeof options !== 'undefined') {
      if (typeof options !== 'object') {
        throw new TypeError('options must be an object');
      }
    } else {
      options = {};
    }

    if (typeof done !== 'undefined' && typeof done !== 'function') {
      throw new TypeError('callback must be a function');
    }
  });

  // Load the document from the provided location and process it
  allTasks = allTasks.then(function () {
    return new Promise(function (resolve, reject) {
      var loader = getLoader(location);

      loader.load(location, options, function (err, document) {
        if (err) {
          reject(err);
        } else {
          resolve(document);
        }
      });
    });
  });

  // Use the callback if provided and it is a function
  if (typeof done === 'function') {
    allTasks = allTasks
      .then(function (document) {
        done(undefined, document);
      }, function (err) {
        done(err);
      });
  }

  return allTasks;
};
