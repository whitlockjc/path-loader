"use strict";
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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const lodash_1 = require("lodash");
/**
 * Loads a file from the filesystem.
 *
 * @param location - The filesystem location (If relative, location is relative to process.cwd()).
 * @param options - The loader options (Unused)
 * @param callback - The error-first callback
 */
function load(location, options, callback) {
    loadAsync(location, options)
        .then((data) => {
        callback(null, data);
    })
        .catch((err) => callback(err));
}
exports.load = load;
function loadAsync(location, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Start');
        if (!(0, lodash_1.isUndefined)(options.encoding) && !(0, lodash_1.isString)(options.encoding)) {
            throw new TypeError(`options.encoding must be a string`);
        }
        console.log(`'Valid' ${options.encoding}`);
        // Strip the scheme portion of the URI
        if (location.startsWith('file://')) {
            // Handle URI
            location = location.substring(7);
        }
        if (path_1.default.resolve(location) !== path_1.default.normalize(location)) {
            console.log(`Resolve relative path ${location}`);
            // Handle relative paths
            location = path_1.default.resolve(process.cwd(), location);
        }
        const data = fs_1.default.readFileSync(location, {});
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return data.toString(((_a = options.encoding) !== null && _a !== void 0 ? _a : 'utf-8'));
    });
}
exports.loadAsync = loadAsync;
