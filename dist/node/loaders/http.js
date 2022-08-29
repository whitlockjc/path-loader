"use strict";
/* eslint-env node, browser */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAsync = exports.load = void 0;
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
const lodash_1 = require("lodash");
const superagent_1 = __importDefault(require("superagent"));
const bluebird_1 = __importDefault(require("bluebird"));
const supportedHttpMethods = ['delete', 'get', 'head', 'patch', 'post', 'put'];
function validateOptions(options) {
    if (!(0, lodash_1.isUndefined)(options.method)) {
        if (!(0, lodash_1.isString)(options.method)) {
            return new TypeError('options.method must be a string');
        }
        if (!supportedHttpMethods.includes(options.method)) {
            return new TypeError('options.method must be one of the following: ' +
                supportedHttpMethods
                    .slice(0, supportedHttpMethods.length - 1)
                    .join(', ') +
                ' or ' +
                supportedHttpMethods[supportedHttpMethods.length - 1]);
        }
    }
    else if (typeof options.prepareRequest !== 'undefined' &&
        typeof options.prepareRequest !== 'function') {
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
function load(location, options, callback) {
    loadAsync(location, options).then((document) => {
        callback(null, document);
    }, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (err) => {
        callback(err);
    });
}
exports.load = load;
function processRequest(method, location) {
    return superagent_1.default[method](location);
}
function loadAsync(location, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const realMethod = options.method ? options.method.toLowerCase() : 'get';
        const err = validateOptions(options);
        if (err) {
            throw err;
        }
        const mthd = (realMethod === 'delete' ? 'del' : realMethod);
        const realRequest = processRequest(mthd, location);
        try {
            if (options.prepareRequest) {
                const pr = bluebird_1.default.promisify(options.prepareRequest);
                const d = yield pr(realRequest);
                return d.text;
            }
            const d = yield realRequest;
            return d.text;
        }
        catch (err) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (err.code === 'ECONNREFUSED') {
                const error = new Error('Failed connection');
                const respError = error;
                respError.status = 503;
                throw respError;
            }
            throw err;
        }
    });
}
exports.loadAsync = loadAsync;
