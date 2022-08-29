"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.load = void 0;
__exportStar(require("./typedefs"), exports);
const HttpLoader = __importStar(require("./loaders/http"));
const FilerLoader = __importStar(require("./loaders/file"));
const bluebird_1 = __importDefault(require("bluebird"));
const lodash_1 = require("lodash");
const supportedLoaders = {
    file: FilerLoader,
    http: HttpLoader,
    https: HttpLoader,
};
const defaultLoader = typeof window === 'object' ? supportedLoaders.http : supportedLoaders.file;
function getScheme(location) {
    if (!(0, lodash_1.isUndefined)(location)) {
        location = !location.includes('://') ? '' : location.split('://')[0];
    }
    return location;
}
/**
 * Utility that provides a single API for loading the content of a path/URL.
 *
 * @module path-loader
 */
function getLoader(location) {
    const scheme = getScheme(location);
    let loader = supportedLoaders[scheme];
    if ((0, lodash_1.isUndefined)(loader)) {
        if ((0, lodash_1.isEmpty)(scheme)) {
            loader = defaultLoader;
        }
        else {
            throw new Error('Unsupported scheme: ' + scheme);
        }
    }
    return loader;
}
function validateArgs(location, opts = {}) {
    if (typeof location === 'undefined') {
        throw new TypeError('location is required');
    }
    else if (typeof location !== 'string') {
        throw new TypeError('location must be a string');
    }
    if (typeof opts !== 'object') {
        throw new TypeError('options must be an object');
    }
    else if (typeof opts.processContent !== 'undefined' &&
        typeof opts.processContent !== 'function') {
        throw new TypeError('options.processContent must be a function');
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function load(location, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        // Validate arguments
        validateArgs(location, options);
        // Load the document from the provided location and process it
        const loader = getLoader(location);
        const promisifiedLoader = bluebird_1.default.promisify(loader.load);
        const data = yield promisifiedLoader(location, options);
        if (!options.processContent) {
            return data;
        }
        // For consistency between file and http, always send an object with a 'text' property containing the raw
        // string value being processed.
        const res = (0, lodash_1.isPlainObject)(data)
            ? (data)
            : { text: data };
        // Pass the path being loaded
        res.location = location;
        const processContent = bluebird_1.default.promisify(options.processContent);
        return processContent(res);
    });
}
exports.load = load;
