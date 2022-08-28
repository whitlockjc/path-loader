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

import fs from 'fs';
import path from 'path';
import {LoadCallback, LoadOptions} from '../typedefs';
import {isString, isUndefined} from 'lodash';
import {ResponseError} from 'superagent';

/**
 * Loads a file from the filesystem.
 *
 * @param location - The filesystem location (If relative, location is relative to process.cwd()).
 * @param options - The loader options (Unused)
 * @param callback - The error-first callback
 */
export function load (
  location: string,
  options: LoadOptions,
  callback: LoadCallback
) {

  loadAsync(location, options)
    .then((data) => {
      callback(null, data);
    })
    .catch((err: Error) => callback(err));
}

export async function loadAsync (location: string, options: LoadOptions) {

  console.log('Start');
  if (!isUndefined(options.encoding) && !isString(options.encoding)) {
    throw new TypeError(`options.encoding must be a string`);
  }
  console.log(`'Valid' ${options.encoding}`);


  // Strip the scheme portion of the URI
  if (location.startsWith('file://')) {
    // Handle URI
    location = location.substring(7);
  }

  if (path.resolve(location) !== path.normalize(location)) {
    console.log(`Resolve relative path ${location}`);
    // Handle relative paths
    location = path.resolve(process.cwd(), location);
  }
  
  const data = fs.readFileSync(location, {});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.toString((options.encoding ?? 'utf-8') as any);
}
