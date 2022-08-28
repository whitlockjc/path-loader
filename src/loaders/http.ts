/* eslint-env node, browser */

/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Jeremy Whitlock
 * Copyright (c) 2022 Robert Kesterson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import {isString, isUndefined} from 'lodash';
import request, {ResponseError} from 'superagent';
import {LoadCallback, LoadOptions} from '../typedefs';
import Bluebird from 'bluebird';

const supportedHttpMethods = ['delete', 'get', 'head', 'patch', 'post', 'put'];

function validateOptions (options: LoadOptions): Error {
  if (!isUndefined(options.method)) {
    if (!isString(options.method)) {
      return new TypeError('options.method must be a string');
    }
    if (!supportedHttpMethods.includes(options.method)) {
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
export function load (
  location: string,
  options: LoadOptions,
  callback: LoadCallback
) {
  loadAsync(location, options).then(
    (document) => {
      callback(null, document);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (err: any) => {
      callback(err);
    }
  );
}

type Methods = 'del' | 'get' | 'head' | 'patch' | 'post' | 'put';

function processRequest (method: Methods, location: string) {
  return request[method](location);
}

export async function loadAsync (location: string, options: LoadOptions) {
  const realMethod = options.method ? options.method.toLowerCase() : 'get';

  const err = validateOptions(options);

  if (err) {
    throw err;
  }

  const mthd: Methods = (
    realMethod === 'delete' ? 'del' : realMethod
  ) as Methods;

  const realRequest = processRequest(mthd, location);

  try {
  if (options.prepareRequest) {
    const pr = Bluebird.promisify(options.prepareRequest);
    const d = await pr(realRequest);

    return d.text;
  }


    const d = await realRequest;

    return d.text;
  } catch (err: unknown) {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((err as any).code === 'ECONNREFUSED') {
      const error = new Error('Failed connection');
      const respError = error as ResponseError;

      respError.status = 503;

    throw respError;

    }
    throw err;
  }
}
