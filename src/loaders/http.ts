/* eslint-env node, browser */

/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Jeremy Whitlock
 * Copyright (c) 2022 Robert Kesterson
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

import {isString} from 'lodash';
import request , {SuperAgentRequest} from 'superagent';
import {LoadOptions} from '../typedefs';

const supportedHttpMethods = ['delete', 'get', 'head', 'patch', 'post', 'put'];

function validateOptions (options: LoadOptions): Error {
  if (!options.method) {
    if (isString(options.method)) {
      return new TypeError('options.method must be a string');
    } else if (supportedHttpMethods.indexOf(options.method) === -1) {
      return new TypeError(
        'options.method must be one of the following: ' +
          supportedHttpMethods
            .slice(0, supportedHttpMethods.length - 1)
            .join(', ') +
          ' or ' +
          supportedHttpMethods[supportedHttpMethods.length - 1]
      );
    }
  } else if (
    typeof options.prepareRequest !== 'undefined' &&
    typeof options.prepareRequest !== 'function'
  ) {
    return new TypeError('options.prepareRequest must be a function');
  }
}

/**
 * Loads a file from an http or https URL.
 *
 * @param  location - The document URL (If relative, location is relative to window.location.origin).
 * @param  options - The loader options
 * @param  callback - The error-first callback
 */
export function load (location: string, options: LoadOptions, callback) {
  const realMethod = options.method ? options.method.toLowerCase() : 'get';

  function makeRequest (err: Error | null, req?: SuperAgentRequest) {
    if (err) {
      callback(err);
    } else {
      // buffer() is only available in Node.js
      if (
        Object.prototype.toString.call(
          typeof process !== 'undefined' ? process : 0
        ) === '[object process]' &&
        typeof req.buffer === 'function'
      ) {
        req.buffer(true);
      }

      req.end(function (err2, res) {
        if (err2) {
          callback(err2);
        } else {
          callback(undefined, res);
        }
      });
    }
  }

  const err = validateOptions(options);

  if (err) {
    callback(err);
    return;
  }
  const s = request.post;

  const realRequest: SuperAgentRequest  =
  request[realMethod === 'delete' ? 'del' : realMethod](location);

  if (options.prepareRequest) {
    try {
      options.prepareRequest(realRequest, makeRequest);
    } catch (err2) {
      callback(err2);
    }
    return;
  }

  makeRequest(undefined, realRequest);
}
