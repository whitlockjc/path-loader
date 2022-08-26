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

// import * as FilerLoaderBrowser from './loaders/file-browser';
import * as FilerLoader from './loaders/file';
import * as HttpLoader from './loaders/http';
import Bluebird from 'bluebird';
import {Loader, LoadOptions, Response} from './typedefs';
import {isBuffer, isEmpty, isPlainObject, isUndefined} from 'lodash';
import {Buffer} from 'buffer';

type LoadModule = { load: Loader };

function isABuffer (value: unknown): value is Buffer {
  return isBuffer(value);
}

const supportedLoaders: Record<string, LoadModule> = {
  file: FilerLoader,
  http: HttpLoader,
  https: HttpLoader,
};
const defaultLoader: LoadModule =
  typeof window === 'object' ? supportedLoaders.http : supportedLoaders.file;

function getScheme (location: string): string {
  if (!isUndefined (location)) {
    location = !location.includes('://') ? '' : location.split('://')[0];
  }

  return location;
}

/**
 * Utility that provides a single API for loading the content of a path/URL.
 *
 * @module path-loader
 */

function getLoader (location: string): LoadModule {
  const scheme = getScheme(location);
  let loader = supportedLoaders[scheme];

  if (isUndefined(loader)) {
    if (isEmpty (scheme)) {
      loader = defaultLoader;
    } else {
      throw new Error('Unsupported scheme: ' + scheme);
    }
  }

  return loader;
}

function validateArgs (location: string, opts: LoadOptions = {}) {
  if (typeof location === 'undefined') {
    throw new TypeError('location is required');
  } else if (typeof location !== 'string') {
    throw new TypeError('location must be a string');
  }
  if (typeof opts !== 'object') {
    throw new TypeError('options must be an object');
  } else if (
    typeof opts.processContent !== 'undefined' &&
    typeof opts.processContent !== 'function'
  ) {
    throw new TypeError('options.processContent must be a function');
  }
}

/**
 * Loads a document at the provided location and returns a JavaScript object representation.
 *
 * @param {string} location - The location to the document
 * @param {module:path-loader.LoadOptions} [options] - The loader options
 *
 * @returns {Promise<*>} Always returns a promise even if there is a callback provided
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
 *     prepareRequest: function (req, callback) {
 *       req.auth('my-username', 'my-password');
 *       callback(undefined, req);
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
 *
 * @example
 * // Example loading a YAML file with options.processContent (Useful if you need information in the raw response)
 *
 * PathLoader
 *   .load('/Users/not-you/projects/path-loader/.travis.yml', {
 *     processContent: function (res, callback) {
 *       callback(YAML.safeLoad(res.text));
 *     }
 *   })
 *   .then(function (document) {
 *     console.log('path-loader uses the', document.language, 'language.');
 *   }, function (err) {
 *     console.error(err.stack);
 *   });
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function load (
  location: string,
  options: LoadOptions<string> = {}
): Promise<string> {

  // Validate arguments
  validateArgs(location, options);

  // Load the document from the provided location and process it
  const loader: LoadModule = getLoader(location);
  const promisifiedLoader = Bluebird.promisify(loader.load);

  console.log(`Calling Loader`);
  const data: string = await promisifiedLoader(location, options);


  if (!options.processContent) {
    return data;
  }
  // For consistency between file and http, always send an object with a 'text' property containing the raw
  // string value being processed.
  const res: Response = isPlainObject(data)
    ? (data as unknown as Response)
    : {text: data} as unknown as Response;

  // Pass the path being loaded
  res.location = location;
  const processContent = Bluebird.promisify(options.processContent);

  return processContent(res);
}
