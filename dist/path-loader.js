var PathLoader =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var supportedLoaders = {
  file: __webpack_require__(/*! ./lib/loaders/file */ "./lib/loaders/file-browser.js"),
  http: __webpack_require__(/*! ./lib/loaders/http */ "./lib/loaders/http.js"),
  https: __webpack_require__(/*! ./lib/loaders/http */ "./lib/loaders/http.js")
};
var defaultLoader = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' || typeof importScripts === 'function' ? supportedLoaders.http : supportedLoaders.file;

// Load promises polyfill if necessary
/* istanbul ignore if */
if (typeof Promise === 'undefined') {
  __webpack_require__(/*! native-promise-only */ "./node_modules/native-promise-only/lib/npo.src.js");
}

function getScheme(location) {
  if (typeof location !== 'undefined') {
    location = location.indexOf('://') === -1 ? '' : location.split('://')[0];
  }

  return location;
}

/**
 * Utility that provides a single API for loading the content of a path/URL.
 *
 * @module path-loader
 */

function getLoader(location) {
  var scheme = getScheme(location);
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
module.exports.load = function (location, options) {
  var allTasks = Promise.resolve();

  // Default options to empty object
  if (typeof options === 'undefined') {
    options = {};
  }

  // Validate arguments
  allTasks = allTasks.then(function () {
    if (typeof location === 'undefined') {
      throw new TypeError('location is required');
    } else if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }

    if (typeof options !== 'undefined') {
      if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
        throw new TypeError('options must be an object');
      } else if (typeof options.processContent !== 'undefined' && typeof options.processContent !== 'function') {
        throw new TypeError('options.processContent must be a function');
      }
    }
  });

  // Load the document from the provided location and process it
  allTasks = allTasks.then(function () {
    return new Promise(function (resolve, reject) {
      var loader = getLoader(location);

      loader.load(location, options || {}, function (err, document) {
        if (err) {
          reject(err);
        } else {
          resolve(document);
        }
      });
    });
  }).then(function (res) {
    if (options.processContent) {
      return new Promise(function (resolve, reject) {
        // For consistency between file and http, always send an object with a 'text' property containing the raw
        // string value being processed.
        if ((typeof res === 'undefined' ? 'undefined' : _typeof(res)) !== 'object') {
          res = { text: res };
        }

        // Pass the path being loaded
        res.location = location;

        options.processContent(res, function (err, processed) {
          if (err) {
            reject(err);
          } else {
            resolve(processed);
          }
        });
      });
    } else {
      // If there was no content processor, we will assume that for all objects that it is a Superagent response
      // and will return its `text` property value.  Otherwise, we will return the raw response.
      return (typeof res === 'undefined' ? 'undefined' : _typeof(res)) === 'object' ? res.text : res;
    }
  });

  return allTasks;
};

/***/ }),

/***/ "./lib/loaders/file-browser.js":
/*!*************************************!*\
  !*** ./lib/loaders/file-browser.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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



var unsupportedError = new TypeError('The \'file\' scheme is not supported in the browser');

/**
 * The file loader is not supported in the browser.
 *
 * @throws {error} the file loader is not supported in the browser
 */
module.exports.getBase = function () {
  throw unsupportedError;
};

/**
 * The file loader is not supported in the browser.
 */
module.exports.load = function () {
  var fn = arguments[arguments.length - 1];

  if (typeof fn === 'function') {
    fn(unsupportedError);
  } else {
    throw unsupportedError;
  }
};

/***/ }),

/***/ "./lib/loaders/http.js":
/*!*****************************!*\
  !*** ./lib/loaders/http.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env node, browser */

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



var request = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

var supportedHttpMethods = ['delete', 'get', 'head', 'patch', 'post', 'put'];

/**
 * Loads a file from an http or https URL.
 *
 * @param {string} location - The document URL (If relative, location is relative to window.location.origin).
 * @param {object} options - The loader options
 * @param {string} [options.method=get] - The HTTP method to use for the request
 * @param {module:PathLoader~PrepareRequestCallback} [options.prepareRequest] - The callback used to prepare a request
 * @param {module:PathLoader~ProcessResponseCallback} [options.processContent] - The callback used to process the
 * response
 * @param {function} callback - The error-first callback
 */
module.exports.load = function (location, options, callback) {
  var realMethod = options.method ? options.method.toLowerCase() : 'get';
  var err;
  var realRequest;

  function makeRequest(err, req) {
    if (err) {
      callback(err);
    } else {
      // buffer() is only available in Node.js
      if (Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]' && typeof req.buffer === 'function') {
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

  if (typeof options.method !== 'undefined') {
    if (typeof options.method !== 'string') {
      err = new TypeError('options.method must be a string');
    } else if (supportedHttpMethods.indexOf(options.method) === -1) {
      err = new TypeError('options.method must be one of the following: ' + supportedHttpMethods.slice(0, supportedHttpMethods.length - 1).join(', ') + ' or ' + supportedHttpMethods[supportedHttpMethods.length - 1]);
    }
  } else if (typeof options.prepareRequest !== 'undefined' && typeof options.prepareRequest !== 'function') {
    err = new TypeError('options.prepareRequest must be a function');
  }

  if (!err) {
    realRequest = request[realMethod === 'delete' ? 'del' : realMethod](location);

    if (options.prepareRequest) {
      try {
        options.prepareRequest(realRequest, makeRequest);
      } catch (err2) {
        callback(err2);
      }
    } else {
      makeRequest(undefined, realRequest);
    }
  } else {
    callback(err);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/fast-safe-stringify/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-safe-stringify/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = stringify;
stringify.default = stringify;
stringify.stable = deterministicStringify;
stringify.stableStringify = deterministicStringify;

var arr = [];
var replacerStack = [];

// Regular stringify
function stringify(obj, replacer, spacer) {
  decirc(obj, '', [], undefined);
  var res;
  if (replacerStack.length === 0) {
    res = JSON.stringify(obj, replacer, spacer);
  } else {
    res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
  }
  while (arr.length !== 0) {
    var part = arr.pop();
    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3]);
    } else {
      part[0][part[1]] = part[2];
    }
  }
  return res;
}
function decirc(val, k, stack, parent) {
  var i;
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: '[Circular]' });
            arr.push([parent, k, val, propertyDescriptor]);
          } else {
            replacerStack.push([val, k]);
          }
        } else {
          parent[k] = '[Circular]';
          arr.push([parent, k, val]);
        }
        return;
      }
    }
    stack.push(val);
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, stack, val);
      }
    } else {
      var keys = Object.keys(val);
      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        decirc(val[key], key, stack, val);
      }
    }
    stack.pop();
  }
}

// Stable-stringify
function compareFunction(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function deterministicStringify(obj, replacer, spacer) {
  var tmp = deterministicDecirc(obj, '', [], undefined) || obj;
  var res;
  if (replacerStack.length === 0) {
    res = JSON.stringify(tmp, replacer, spacer);
  } else {
    res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
  }
  while (arr.length !== 0) {
    var part = arr.pop();
    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3]);
    } else {
      part[0][part[1]] = part[2];
    }
  }
  return res;
}

function deterministicDecirc(val, k, stack, parent) {
  var i;
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: '[Circular]' });
            arr.push([parent, k, val, propertyDescriptor]);
          } else {
            replacerStack.push([val, k]);
          }
        } else {
          parent[k] = '[Circular]';
          arr.push([parent, k, val]);
        }
        return;
      }
    }
    if (typeof val.toJSON === 'function') {
      return;
    }
    stack.push(val);
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, stack, val);
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {};
      var keys = Object.keys(val).sort(compareFunction);
      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        deterministicDecirc(val[key], key, stack, val);
        tmp[key] = val[key];
      }
      if (parent !== undefined) {
        arr.push([parent, k, val]);
        parent[k] = tmp;
      } else {
        return tmp;
      }
    }
    stack.pop();
  }
}

// wraps replacer function to handle values we couldn't replace
// and mark them as [Circular]
function replaceGetterValues(replacer) {
  replacer = replacer !== undefined ? replacer : function (k, v) {
    return v;
  };
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i];
        if (part[1] === key && part[0] === val) {
          val = '[Circular]';
          replacerStack.splice(i, 1);
          break;
        }
      }
    }
    return replacer.call(this, key, val);
  };
}

/***/ }),

/***/ "./node_modules/native-promise-only/lib/npo.src.js":
/*!*********************************************************!*\
  !*** ./node_modules/native-promise-only/lib/npo.src.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/

(function UMD(name, context, definition) {
	// special form of UMD for polyfilling across evironments
	context[name] = context[name] || definition();
	if ( true && module.exports) {
		module.exports = context[name];
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function $AMD$() {
			return context[name];
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
})("Promise", typeof global != "undefined" ? global : undefined, function DEF() {
	/*jshint validthis:true */
	"use strict";

	var builtInProp,
	    cycle,
	    scheduling_queue,
	    ToString = Object.prototype.toString,
	    timer = typeof setImmediate != "undefined" ? function timer(fn) {
		return setImmediate(fn);
	} : setTimeout;

	// dammit, IE8.
	try {
		Object.defineProperty({}, "x", {});
		builtInProp = function builtInProp(obj, name, val, config) {
			return Object.defineProperty(obj, name, {
				value: val,
				writable: true,
				configurable: config !== false
			});
		};
	} catch (err) {
		builtInProp = function builtInProp(obj, name, val) {
			obj[name] = val;
			return obj;
		};
	}

	// Note: using a queue instead of array for efficiency
	scheduling_queue = function Queue() {
		var first, last, item;

		function Item(fn, self) {
			this.fn = fn;
			this.self = self;
			this.next = void 0;
		}

		return {
			add: function add(fn, self) {
				item = new Item(fn, self);
				if (last) {
					last.next = item;
				} else {
					first = item;
				}
				last = item;
				item = void 0;
			},
			drain: function drain() {
				var f = first;
				first = last = cycle = void 0;

				while (f) {
					f.fn.call(f.self);
					f = f.next;
				}
			}
		};
	}();

	function schedule(fn, self) {
		scheduling_queue.add(fn, self);
		if (!cycle) {
			cycle = timer(scheduling_queue.drain);
		}
	}

	// promise duck typing
	function isThenable(o) {
		var _then,
		    o_type = typeof o === "undefined" ? "undefined" : _typeof(o);

		if (o != null && (o_type == "object" || o_type == "function")) {
			_then = o.then;
		}
		return typeof _then == "function" ? _then : false;
	}

	function notify() {
		for (var i = 0; i < this.chain.length; i++) {
			notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
		}
		this.chain.length = 0;
	}

	// NOTE: This is a separate function to isolate
	// the `try..catch` so that other code can be
	// optimized better
	function notifyIsolated(self, cb, chain) {
		var ret, _then;
		try {
			if (cb === false) {
				chain.reject(self.msg);
			} else {
				if (cb === true) {
					ret = self.msg;
				} else {
					ret = cb.call(void 0, self.msg);
				}

				if (ret === chain.promise) {
					chain.reject(TypeError("Promise-chain cycle"));
				} else if (_then = isThenable(ret)) {
					_then.call(ret, chain.resolve, chain.reject);
				} else {
					chain.resolve(ret);
				}
			}
		} catch (err) {
			chain.reject(err);
		}
	}

	function resolve(msg) {
		var _then,
		    self = this;

		// already triggered?
		if (self.triggered) {
			return;
		}

		self.triggered = true;

		// unwrap
		if (self.def) {
			self = self.def;
		}

		try {
			if (_then = isThenable(msg)) {
				schedule(function () {
					var def_wrapper = new MakeDefWrapper(self);
					try {
						_then.call(msg, function $resolve$() {
							resolve.apply(def_wrapper, arguments);
						}, function $reject$() {
							reject.apply(def_wrapper, arguments);
						});
					} catch (err) {
						reject.call(def_wrapper, err);
					}
				});
			} else {
				self.msg = msg;
				self.state = 1;
				if (self.chain.length > 0) {
					schedule(notify, self);
				}
			}
		} catch (err) {
			reject.call(new MakeDefWrapper(self), err);
		}
	}

	function reject(msg) {
		var self = this;

		// already triggered?
		if (self.triggered) {
			return;
		}

		self.triggered = true;

		// unwrap
		if (self.def) {
			self = self.def;
		}

		self.msg = msg;
		self.state = 2;
		if (self.chain.length > 0) {
			schedule(notify, self);
		}
	}

	function iteratePromises(Constructor, arr, resolver, rejecter) {
		for (var idx = 0; idx < arr.length; idx++) {
			(function IIFE(idx) {
				Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
					resolver(idx, msg);
				}, rejecter);
			})(idx);
		}
	}

	function MakeDefWrapper(self) {
		this.def = self;
		this.triggered = false;
	}

	function MakeDef(self) {
		this.promise = self;
		this.state = 0;
		this.triggered = false;
		this.chain = [];
		this.msg = void 0;
	}

	function Promise(executor) {
		if (typeof executor != "function") {
			throw TypeError("Not a function");
		}

		if (this.__NPO__ !== 0) {
			throw TypeError("Not a promise");
		}

		// instance shadowing the inherited "brand"
		// to signal an already "initialized" promise
		this.__NPO__ = 1;

		var def = new MakeDef(this);

		this["then"] = function then(success, failure) {
			var o = {
				success: typeof success == "function" ? success : true,
				failure: typeof failure == "function" ? failure : false
			};
			// Note: `then(..)` itself can be borrowed to be used against
			// a different promise constructor for making the chained promise,
			// by substituting a different `this` binding.
			o.promise = new this.constructor(function extractChain(resolve, reject) {
				if (typeof resolve != "function" || typeof reject != "function") {
					throw TypeError("Not a function");
				}

				o.resolve = resolve;
				o.reject = reject;
			});
			def.chain.push(o);

			if (def.state !== 0) {
				schedule(notify, def);
			}

			return o.promise;
		};
		this["catch"] = function $catch$(failure) {
			return this.then(void 0, failure);
		};

		try {
			executor.call(void 0, function publicResolve(msg) {
				resolve.call(def, msg);
			}, function publicReject(msg) {
				reject.call(def, msg);
			});
		} catch (err) {
			reject.call(def, err);
		}
	}

	var PromisePrototype = builtInProp({}, "constructor", Promise,
	/*configurable=*/false);

	// Note: Android 4 cannot use `Object.defineProperty(..)` here
	Promise.prototype = PromisePrototype;

	// built-in "brand" to signal an "uninitialized" promise
	builtInProp(PromisePrototype, "__NPO__", 0,
	/*configurable=*/false);

	builtInProp(Promise, "resolve", function Promise$resolve(msg) {
		var Constructor = this;

		// spec mandated checks
		// note: best "isPromise" check that's practical for now
		if (msg && (typeof msg === "undefined" ? "undefined" : _typeof(msg)) == "object" && msg.__NPO__ === 1) {
			return msg;
		}

		return new Constructor(function executor(resolve, reject) {
			if (typeof resolve != "function" || typeof reject != "function") {
				throw TypeError("Not a function");
			}

			resolve(msg);
		});
	});

	builtInProp(Promise, "reject", function Promise$reject(msg) {
		return new this(function executor(resolve, reject) {
			if (typeof resolve != "function" || typeof reject != "function") {
				throw TypeError("Not a function");
			}

			reject(msg);
		});
	});

	builtInProp(Promise, "all", function Promise$all(arr) {
		var Constructor = this;

		// spec mandated checks
		if (ToString.call(arr) != "[object Array]") {
			return Constructor.reject(TypeError("Not an array"));
		}
		if (arr.length === 0) {
			return Constructor.resolve([]);
		}

		return new Constructor(function executor(resolve, reject) {
			if (typeof resolve != "function" || typeof reject != "function") {
				throw TypeError("Not a function");
			}

			var len = arr.length,
			    msgs = Array(len),
			    count = 0;

			iteratePromises(Constructor, arr, function resolver(idx, msg) {
				msgs[idx] = msg;
				if (++count === len) {
					resolve(msgs);
				}
			}, reject);
		});
	});

	builtInProp(Promise, "race", function Promise$race(arr) {
		var Constructor = this;

		// spec mandated checks
		if (ToString.call(arr) != "[object Array]") {
			return Constructor.reject(TypeError("Not an array"));
		}

		return new Constructor(function executor(resolve, reject) {
			if (typeof resolve != "function" || typeof reject != "function") {
				throw TypeError("Not a function");
			}

			iteratePromises(Constructor, arr, function resolver(idx, msg) {
				resolve(msg);
			}, reject);
		});
	});

	return Promise;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/superagent/lib/agent-base.js":
/*!***************************************************!*\
  !*** ./node_modules/superagent/lib/agent-base.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }return arr2;
}

function Agent() {
  this._defaults = [];
}

['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert', 'disableTLSCerts'].forEach(function (fn) {
  // Default setting for all requests from this agent
  Agent.prototype[fn] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._defaults.push({
      fn: fn,
      args: args
    });

    return this;
  };
});

Agent.prototype._setDefaults = function (req) {
  this._defaults.forEach(function (def) {
    req[def.fn].apply(req, _toConsumableArray(def.args));
  });
};

module.exports = Agent;

/***/ }),

/***/ "./node_modules/superagent/lib/client.js":
/*!***********************************************!*\
  !*** ./node_modules/superagent/lib/client.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  }return _typeof(obj);
}

/**
 * Root reference for iframes.
 */
var root;

if (typeof window !== 'undefined') {
  // Browser window
  root = window;
} else if (typeof self === 'undefined') {
  // Other environments
  console.warn('Using browser-only version of superagent in non-browser environment');
  root = void 0;
} else {
  // Web Worker
  root = self;
}

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/superagent/node_modules/component-emitter/index.js");

var safeStringify = __webpack_require__(/*! fast-safe-stringify */ "./node_modules/fast-safe-stringify/index.js");

var RequestBase = __webpack_require__(/*! ./request-base */ "./node_modules/superagent/lib/request-base.js");

var isObject = __webpack_require__(/*! ./is-object */ "./node_modules/superagent/lib/is-object.js");

var ResponseBase = __webpack_require__(/*! ./response-base */ "./node_modules/superagent/lib/response-base.js");

var Agent = __webpack_require__(/*! ./agent-base */ "./node_modules/superagent/lib/agent-base.js");
/**
 * Noop.
 */

function noop() {}
/**
 * Expose `request`.
 */

module.exports = function (method, url) {
  // callback
  if (typeof url === 'function') {
    return new exports.Request('GET', method).end(url);
  } // url first


  if (arguments.length === 1) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports = module.exports;
var request = exports;
exports.Request = Request;
/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || root.location.protocol !== 'file:' || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  }

  try {
    return new ActiveXObject('Microsoft.XMLHTTP');
  } catch (_unused) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.6.0');
  } catch (_unused2) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.3.0');
  } catch (_unused3) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP');
  } catch (_unused4) {}

  throw new Error('Browser-only version of superagent could not find XHR');
};
/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim ? function (s) {
  return s.trim();
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};
/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) pushEncodedKeyValuePair(pairs, key, obj[key]);
  }

  return pairs.join('&');
}
/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val === undefined) return;

  if (val === null) {
    pairs.push(encodeURI(key));
    return;
  }

  if (Array.isArray(val)) {
    val.forEach(function (v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  } else if (isObject(val)) {
    for (var subkey in val) {
      if (Object.prototype.hasOwnProperty.call(val, subkey)) pushEncodedKeyValuePair(pairs, "".concat(key, "[").concat(subkey, "]"), val[subkey]);
    }
  } else {
    pairs.push(encodeURI(key) + '=' + encodeURIComponent(val));
  }
}
/**
 * Expose serialization method.
 */

request.serializeObject = serialize;
/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');

    if (pos === -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}
/**
 * Expose parser.
 */

request.parseString = parseString;
/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  form: 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};
/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': safeStringify
};
/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};
/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');

    if (index === -1) {
      // could be empty line, just skip it
      continue;
    }

    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}
/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return (/[/+]json($|[^-\w])/.test(mime)
  );
}
/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr; // responseText is accessible only if responseType is '' or 'text' and on older browsers

  this.text = this.req.method !== 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status; // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request

  if (status === 1223) {
    status = 204;
  }

  this._setStatusProperties(status);

  this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  this.header = this.headers; // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.

  this.header['content-type'] = this.xhr.getResponseHeader('content-type');

  this._setHeaderProperties(this.header);

  if (this.text === null && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method === 'HEAD' ? null : this._parseBody(this.text ? this.text : this.xhr.response);
  }
} // eslint-disable-next-line new-cap


ResponseBase(Response.prototype);
/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function (str) {
  var parse = request.parse[this.type];

  if (this.req._parser) {
    return this.req._parser(this, str);
  }

  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }

  return parse && str && (str.length > 0 || str instanceof Object) ? parse(str) : null;
};
/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var url = req.url;
  var msg = "cannot ".concat(method, " ").concat(url, " (").concat(this.status, ")");
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;
  return err;
};
/**
 * Expose `Response`.
 */

request.Response = Response;
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case

  this._header = {}; // coerces header names to lowercase

  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch (err_) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = err_; // issue #675: return the raw response if the response parsing fails

      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType === 'undefined' ? self.xhr.responseText : self.xhr.response; // issue #876: return the http status code if the response parsing fails

        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);
    var new_err;

    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || res.text || 'Unsuccessful HTTP response');
      }
    } catch (err_) {
      new_err = err_; // ok() callback can throw
    } // #1000 don't catch errors from the callback to avoid double calling it


    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}
/**
 * Mixin `Emitter` and `RequestBase`.
 */
// eslint-disable-next-line new-cap


Emitter(Request.prototype); // eslint-disable-next-line new-cap

RequestBase(Request.prototype);
/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function (type) {
  this.set('Content-Type', request.types[type] || type);
  return this;
};
/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function (type) {
  this.set('Accept', request.types[type] || type);
  return this;
};
/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function (user, pass, options) {
  if (arguments.length === 1) pass = '';

  if (_typeof(pass) === 'object' && pass !== null) {
    // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }

  if (!options) {
    options = {
      type: typeof btoa === 'function' ? 'basic' : 'auto'
    };
  }

  var encoder = function encoder(string) {
    if (typeof btoa === 'function') {
      return btoa(string);
    }

    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};
/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function (val) {
  if (typeof val !== 'string') val = serialize(val);
  if (val) this._query.push(val);
  return this;
};
/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw new Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }

  return this;
};

Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new root.FormData();
  }

  return this._formData;
};
/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function (err, res) {
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};
/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;
  err.status = this.status;
  err.method = this.method;
  err.url = this.url;
  this.callback(err);
}; // This only warns, because the request is still likely to work


Request.prototype.agent = function () {
  console.warn('This is not supported in browser version of superagent');
  return this;
};

Request.prototype.ca = Request.prototype.agent;
Request.prototype.buffer = Request.prototype.ca; // This throws, because it can't send/receive data as expected

Request.prototype.write = function () {
  throw new Error('Streaming is not supported in browser version of superagent');
};

Request.prototype.pipe = Request.prototype.write;
/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj host object
 * @return {Boolean} is a host object
 * @api private
 */

Request.prototype._isHost = function (obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && _typeof(obj) === 'object' && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};
/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function (fn) {
  if (this._endCalled) {
    console.warn('Warning: .end() was called twice. This is not supported in superagent');
  }

  this._endCalled = true; // store callback

  this._callback = fn || noop; // querystring

  this._finalizeQueryString();

  this._end();
};

Request.prototype._setUploadTimeout = function () {
  var self = this; // upload timeout it's wokrs only if deadline timeout is off

  if (this._uploadTimeout && !this._uploadTimeoutTimer) {
    this._uploadTimeoutTimer = setTimeout(function () {
      self._timeoutError('Upload timeout of ', self._uploadTimeout, 'ETIMEDOUT');
    }, this._uploadTimeout);
  }
}; // eslint-disable-next-line complexity


Request.prototype._end = function () {
  if (this._aborted) return this.callback(new Error('The request has been aborted even before .end() was called'));
  var self = this;
  this.xhr = request.getXHR();
  var xhr = this.xhr;
  var data = this._formData || this._data;

  this._setTimeouts(); // state change


  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;

    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }

    if (readyState !== 4) {
      return;
    } // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"


    var status;

    try {
      status = xhr.status;
    } catch (_unused5) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }

    self.emit('end');
  }; // progress


  var handleProgress = function handleProgress(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;

      if (e.percent === 100) {
        clearTimeout(self._uploadTimeoutTimer);
      }
    }

    e.direction = direction;
    self.emit('progress', e);
  };

  if (this.hasListeners('progress')) {
    try {
      xhr.addEventListener('progress', handleProgress.bind(null, 'download'));

      if (xhr.upload) {
        xhr.upload.addEventListener('progress', handleProgress.bind(null, 'upload'));
      }
    } catch (_unused6) {// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  if (xhr.upload) {
    this._setUploadTimeout();
  } // initiate request


  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  } // CORS


  if (this._withCredentials) xhr.withCredentials = true; // body

  if (!this._formData && this.method !== 'GET' && this.method !== 'HEAD' && typeof data !== 'string' && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];

    var _serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];

    if (!_serialize && isJSON(contentType)) {
      _serialize = request.serialize['application/json'];
    }

    if (_serialize) data = _serialize(data);
  } // set header fields


  for (var field in this.header) {
    if (this.header[field] === null) continue;
    if (Object.prototype.hasOwnProperty.call(this.header, field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  } // send stuff


  this.emit('request', this); // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined

  xhr.send(typeof data === 'undefined' ? null : data);
};

request.agent = function () {
  return new Agent();
};

['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (method) {
  Agent.prototype[method.toLowerCase()] = function (url, fn) {
    var req = new request.Request(method, url);

    this._setDefaults(req);

    if (fn) {
      req.end(fn);
    }

    return req;
  };
});
Agent.prototype.del = Agent.prototype.delete;
/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function (url, data, fn) {
  var req = request('GET', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function (url, data, fn) {
  var req = request('HEAD', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function (url, data, fn) {
  var req = request('OPTIONS', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request.del = del;
request.delete = del;
/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function (url, data, fn) {
  var req = request('PATCH', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function (url, data, fn) {
  var req = request('POST', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function (url, data, fn) {
  var req = request('PUT', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/***/ }),

/***/ "./node_modules/superagent/lib/is-object.js":
/*!**************************************************!*\
  !*** ./node_modules/superagent/lib/is-object.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  }return _typeof(obj);
}

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/superagent/lib/request-base.js":
/*!*****************************************************!*\
  !*** ./node_modules/superagent/lib/request-base.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  }return _typeof(obj);
}

/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(/*! ./is-object */ "./node_modules/superagent/lib/is-object.js");
/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;
/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(RequestBase.prototype, key)) obj[key] = RequestBase.prototype[key];
  }

  return obj;
}
/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function () {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  clearTimeout(this._uploadTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  delete this._uploadTimeoutTimer;
  return this;
};
/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function (fn) {
  this._parser = fn;
  return this;
};
/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function (val) {
  this._responseType = val;
  return this;
};
/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function (fn) {
  this._serializer = fn;
  return this;
};
/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 * - upload is the time  since last bit of data was sent or received. This timeout works only if deadline timeout is off
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function (options) {
  if (!options || _typeof(options) !== 'object') {
    this._timeout = options;
    this._responseTimeout = 0;
    this._uploadTimeout = 0;
    return this;
  }

  for (var option in options) {
    if (Object.prototype.hasOwnProperty.call(options, option)) {
      switch (option) {
        case 'deadline':
          this._timeout = options.deadline;
          break;

        case 'response':
          this._responseTimeout = options.response;
          break;

        case 'upload':
          this._uploadTimeout = options.upload;
          break;

        default:
          console.warn('Unknown timeout option', option);
      }
    }
  }

  return this;
};
/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function (count, fn) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err an error
 * @param {Response} [res] response
 * @returns {Boolean} if segment should be retried
 */

RequestBase.prototype._shouldRetry = function (err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }

  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);

      if (override === true) return true;
      if (override === false) return false; // undefined falls back to defaults
    } catch (err_) {
      console.error(err_);
    }
  }

  if (res && res.status && res.status >= 500 && res.status !== 501) return true;

  if (err) {
    if (err.code && ERROR_CODES.includes(err.code)) return true; // Superagent timeout

    if (err.timeout && err.code === 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }

  return false;
};
/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function () {
  this.clearTimeout(); // node

  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;
  this.timedoutError = null;
  return this._end();
};
/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function (resolve, reject) {
  var _this = this;

  if (!this._fullfilledPromise) {
    var self = this;

    if (this._endCalled) {
      console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
    }

    this._fullfilledPromise = new Promise(function (resolve, reject) {
      self.on('abort', function () {
        if (_this._maxRetries && _this._maxRetries > _this._retries) {
          return;
        }

        if (_this.timedout && _this.timedoutError) {
          reject(_this.timedoutError);
          return;
        }

        var err = new Error('Aborted');
        err.code = 'ABORTED';
        err.status = _this.status;
        err.method = _this.method;
        err.url = _this.url;
        reject(err);
      });
      self.end(function (err, res) {
        if (err) reject(err);else resolve(res);
      });
    });
  }

  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function (cb) {
  return this.then(undefined, cb);
};
/**
 * Allow for extension
 */

RequestBase.prototype.use = function (fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if (typeof cb !== 'function') throw new Error('Callback required');
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};
/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};
/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;
/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function (field, val) {
  if (isObject(field)) {
    for (var key in field) {
      if (Object.prototype.hasOwnProperty.call(field, key)) this.set(key, field[key]);
    }

    return this;
  }

  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};
/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field field name
 */

RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};
/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name name of field
 * @param {String|Blob|File|Buffer|fs.ReadStream} val value of field
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.field = function (name, val) {
  // name should be either a string or an object.
  if (name === null || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      if (Object.prototype.hasOwnProperty.call(name, key)) this.field(key, name[key]);
    }

    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      if (Object.prototype.hasOwnProperty.call(val, i)) this.field(name, val[i]);
    }

    return this;
  } // val should be defined now


  if (val === null || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }

  if (typeof val === 'boolean') {
    val = String(val);
  }

  this._getFormData().append(name, val);

  return this;
};
/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request} request
 * @api public
 */

RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }

  this._aborted = true;
  if (this.xhr) this.xhr.abort(); // browser

  if (this.req) this.req.abort(); // node

  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', "Bearer ".concat(user));
      break;

    default:
      break;
  }

  return this;
};
/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on === undefined) on = true;
  this._withCredentials = on;
  return this;
};
/**
 * Set the max redirects to `n`. Does nothing in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};
/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n number of bytes
 * @return {Request} for chaining
 */

RequestBase.prototype.maxResponseSize = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Invalid argument');
  }

  this._maxResponseSize = n;
  return this;
};
/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};
/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */
// eslint-disable-next-line complexity


RequestBase.prototype.send = function (data) {
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw new Error("Can't merge these send calls");
  } // merge


  if (isObj && isObject(this._data)) {
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) this._data[key] = data[key];
    }
  } else if (typeof data === 'string') {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];

    if (type === 'application/x-www-form-urlencoded') {
      this._data = this._data ? "".concat(this._data, "&").concat(data) : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  } // default to json


  if (!type) this.type('json');
  return this;
};
/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};
/**
 * Compose querystring to append to req.url
 *
 * @api private
 */

RequestBase.prototype._finalizeQueryString = function () {
  var query = this._query.join('&');

  if (query) {
    this.url += (this.url.includes('?') ? '&' : '?') + query;
  }

  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');

    if (index >= 0) {
      var queryArr = this.url.slice(index + 1).split('&');

      if (typeof this._sort === 'function') {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }

      this.url = this.url.slice(0, index) + '?' + queryArr.join('&');
    }
  }
}; // For backwards compat only


RequestBase.prototype._appendQueryString = function () {
  console.warn('Unsupported');
};
/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }

  var err = new Error("".concat(reason + timeout, "ms exceeded"));
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.timedoutError = err;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this; // deadline

  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  } // response timeout


  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};

/***/ }),

/***/ "./node_modules/superagent/lib/response-base.js":
/*!******************************************************!*\
  !*** ./node_modules/superagent/lib/response-base.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var utils = __webpack_require__(/*! ./utils */ "./node_modules/superagent/lib/utils.js");
/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;
/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(ResponseBase.prototype, key)) obj[key] = ResponseBase.prototype[key];
  }

  return obj;
}
/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};
/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function (header) {
  // TODO: moar!
  // TODO: make this a util
  // content-type
  var ct = header['content-type'] || '';
  this.type = utils.type(ct); // params

  var params = utils.params(ct);

  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) this[key] = params[key];
  }

  this.links = {}; // links

  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (_unused) {// ignore
  }
};
/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0; // status / class

  this.statusCode = status;
  this.status = this.statusCode;
  this.statusType = type; // basics

  this.info = type === 1;
  this.ok = type === 2;
  this.redirect = type === 3;
  this.clientError = type === 4;
  this.serverError = type === 5;
  this.error = type === 4 || type === 5 ? this.toError() : false; // sugar

  this.created = status === 201;
  this.accepted = status === 202;
  this.noContent = status === 204;
  this.badRequest = status === 400;
  this.unauthorized = status === 401;
  this.notAcceptable = status === 406;
  this.forbidden = status === 403;
  this.notFound = status === 404;
  this.unprocessableEntity = status === 422;
};

/***/ }),

/***/ "./node_modules/superagent/lib/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/superagent/lib/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function (str) {
  return str.split(/ *; */).shift();
};
/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function (str) {
  return str.split(/ *; */).reduce(function (obj, str) {
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();
    if (key && val) obj[key] = val;
    return obj;
  }, {});
};
/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function (str) {
  return str.split(/ *, */).reduce(function (obj, str) {
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};
/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function (header, changesOrigin) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header.host; // secuirty

  if (changesOrigin) {
    delete header.authorization;
    delete header.cookie;
  }

  return header;
};

/***/ }),

/***/ "./node_modules/superagent/node_modules/component-emitter/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/superagent/node_modules/component-emitter/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || undefined && undefined.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || undefined && undefined.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QYXRoTG9hZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbGliL2xvYWRlcnMvZmlsZS1icm93c2VyLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9saWIvbG9hZGVycy9odHRwLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9ub2RlX21vZHVsZXMvZmFzdC1zYWZlLXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbm9kZV9tb2R1bGVzL25hdGl2ZS1wcm9taXNlLW9ubHkvbGliL25wby5zcmMuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi4vc3JjL2FnZW50LWJhc2UuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uLi9zcmMvY2xpZW50LmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi4vc3JjL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4uL3NyYy9yZXF1ZXN0LWJhc2UuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uLi9zcmMvcmVzcG9uc2UtYmFzZS5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJzdXBwb3J0ZWRMb2FkZXJzIiwiZmlsZSIsInJlcXVpcmUiLCJodHRwIiwiaHR0cHMiLCJkZWZhdWx0TG9hZGVyIiwid2luZG93IiwiaW1wb3J0U2NyaXB0cyIsIlByb21pc2UiLCJnZXRTY2hlbWUiLCJsb2NhdGlvbiIsImluZGV4T2YiLCJzcGxpdCIsImdldExvYWRlciIsInNjaGVtZSIsImxvYWRlciIsIkVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImxvYWQiLCJvcHRpb25zIiwiYWxsVGFza3MiLCJyZXNvbHZlIiwidGhlbiIsIlR5cGVFcnJvciIsInByb2Nlc3NDb250ZW50IiwicmVqZWN0IiwiZXJyIiwiZG9jdW1lbnQiLCJyZXMiLCJ0ZXh0IiwicHJvY2Vzc2VkIiwidW5zdXBwb3J0ZWRFcnJvciIsImdldEJhc2UiLCJmbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInJlcXVlc3QiLCJzdXBwb3J0ZWRIdHRwTWV0aG9kcyIsImNhbGxiYWNrIiwicmVhbE1ldGhvZCIsIm1ldGhvZCIsInRvTG93ZXJDYXNlIiwicmVhbFJlcXVlc3QiLCJtYWtlUmVxdWVzdCIsInJlcSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInByb2Nlc3MiLCJidWZmZXIiLCJlbmQiLCJlcnIyIiwidW5kZWZpbmVkIiwic2xpY2UiLCJqb2luIiwicHJlcGFyZVJlcXVlc3QiLCJzdHJpbmdpZnkiLCJkZWZhdWx0Iiwic3RhYmxlIiwiZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeSIsInN0YWJsZVN0cmluZ2lmeSIsImFyciIsInJlcGxhY2VyU3RhY2siLCJvYmoiLCJyZXBsYWNlciIsInNwYWNlciIsImRlY2lyYyIsIkpTT04iLCJyZXBsYWNlR2V0dGVyVmFsdWVzIiwicGFydCIsInBvcCIsImRlZmluZVByb3BlcnR5IiwidmFsIiwiayIsInN0YWNrIiwicGFyZW50IiwiaSIsInByb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsImNvbmZpZ3VyYWJsZSIsInZhbHVlIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsImtleXMiLCJrZXkiLCJjb21wYXJlRnVuY3Rpb24iLCJhIiwiYiIsInRtcCIsImRldGVybWluaXN0aWNEZWNpcmMiLCJ0b0pTT04iLCJzb3J0IiwidiIsInNwbGljZSIsIlVNRCIsIm5hbWUiLCJjb250ZXh0IiwiZGVmaW5pdGlvbiIsImRlZmluZSIsIiRBTUQkIiwiZ2xvYmFsIiwiREVGIiwiYnVpbHRJblByb3AiLCJjeWNsZSIsInNjaGVkdWxpbmdfcXVldWUiLCJUb1N0cmluZyIsInRpbWVyIiwic2V0SW1tZWRpYXRlIiwic2V0VGltZW91dCIsImNvbmZpZyIsIndyaXRhYmxlIiwiUXVldWUiLCJmaXJzdCIsImxhc3QiLCJpdGVtIiwiSXRlbSIsInNlbGYiLCJuZXh0IiwiYWRkIiwiZHJhaW4iLCJmIiwic2NoZWR1bGUiLCJpc1RoZW5hYmxlIiwibyIsIl90aGVuIiwib190eXBlIiwibm90aWZ5IiwiY2hhaW4iLCJub3RpZnlJc29sYXRlZCIsInN0YXRlIiwic3VjY2VzcyIsImZhaWx1cmUiLCJjYiIsInJldCIsIm1zZyIsInByb21pc2UiLCJ0cmlnZ2VyZWQiLCJkZWYiLCJkZWZfd3JhcHBlciIsIk1ha2VEZWZXcmFwcGVyIiwiJHJlc29sdmUkIiwiYXBwbHkiLCIkcmVqZWN0JCIsIml0ZXJhdGVQcm9taXNlcyIsIkNvbnN0cnVjdG9yIiwicmVzb2x2ZXIiLCJyZWplY3RlciIsImlkeCIsIklJRkUiLCIkcmVzb2x2ZXIkIiwiTWFrZURlZiIsImV4ZWN1dG9yIiwiX19OUE9fXyIsImNvbnN0cnVjdG9yIiwiZXh0cmFjdENoYWluIiwiJGNhdGNoJCIsInB1YmxpY1Jlc29sdmUiLCJwdWJsaWNSZWplY3QiLCJQcm9taXNlUHJvdG90eXBlIiwiUHJvbWlzZSRyZXNvbHZlIiwiUHJvbWlzZSRyZWplY3QiLCJQcm9taXNlJGFsbCIsImxlbiIsIm1zZ3MiLCJjb3VudCIsIlByb21pc2UkcmFjZSIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJjb25jYXQiLCJkcmFpblF1ZXVlIiwidGltZW91dCIsInJ1biIsIm5leHRUaWNrIiwiYXJncyIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiZG9jIiwicmVnaXN0ZXJJbW1lZGlhdGUiLCJGdW5jdGlvbiIsInRhc2siLCJjbGVhckltbWVkaWF0ZSIsImhhbmRsZSIsInJ1bklmUHJlc2VudCIsImluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uIiwiY2FuVXNlUG9zdE1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJNYXRoIiwicmFuZG9tIiwib25HbG9iYWxNZXNzYWdlIiwiZXZlbnQiLCJzb3VyY2UiLCJkYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24iLCJjaGFubmVsIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsInBvcnQyIiwiaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbiIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24iLCJhdHRhY2hUbyIsImdldFByb3RvdHlwZU9mIiwiQWdlbnQiLCJyb290IiwiY29uc29sZSIsIkVtaXR0ZXIiLCJzYWZlU3RyaW5naWZ5IiwiUmVxdWVzdEJhc2UiLCJpc09iamVjdCIsIlJlc3BvbnNlQmFzZSIsInRyaW0iLCJzIiwicGFpcnMiLCJwdXNoRW5jb2RlZEtleVZhbHVlUGFpciIsImVuY29kZVVSSSIsImVuY29kZVVSSUNvbXBvbmVudCIsInN0ciIsInBhaXIiLCJwb3MiLCJkZWNvZGVVUklDb21wb25lbnQiLCJqc29uIiwieG1sIiwidXJsZW5jb2RlZCIsImZvcm0iLCJwYXJzZSIsImxpbmVzIiwiZmllbGRzIiwibGluZSIsImluZGV4IiwiZmllbGQiLCJzdGF0dXMiLCJwYXJzZUhlYWRlciIsIlJlc3BvbnNlIiwiaXNKU09OIiwibmV3X2VyciIsIlJlcXVlc3QiLCJwYXNzIiwidHlwZSIsImVuY29kZXIiLCJidG9hIiwic2VyaWFsaXplIiwieGhyIiwicmVhZHlTdGF0ZSIsImhhbmRsZVByb2dyZXNzIiwiY29udGVudFR5cGUiLCJtaXhpbiIsIkVSUk9SX0NPREVTIiwib3ZlcnJpZGUiLCJTdHJpbmciLCJiYXNlNjRFbmNvZGVyIiwidXJsIiwiaGVhZGVycyIsIl9oZWFkZXIiLCJpc09iaiIsInF1ZXJ5IiwicXVlcnlBcnIiLCJyZWFzb24iLCJ1dGlscyIsImN0IiwiaGVhZGVyIiwicGFyYW1zIiwicGFydHMiLCJyZWwiLCJfY2FsbGJhY2tzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrcyIsImhhc0xpc3RlbmVycyIsInNjb3BlIiwiVGltZW91dCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsb3NlIiwiaWQiLCJjbGVhckZuIiwiX2lkIiwiX2NsZWFyRm4iLCJ1bnJlZiIsInJlZiIsImVucm9sbCIsIm1zZWNzIiwiX2lkbGVUaW1lb3V0SWQiLCJfaWRsZVRpbWVvdXQiLCJ1bmVucm9sbCIsIl91bnJlZkFjdGl2ZSIsImFjdGl2ZSIsIm9uVGltZW91dCIsIl9vblRpbWVvdXQiLCJnIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JhOzs7O0FBRWIsSUFBSUEsbUJBQW1CO0FBQ3JCQyxRQUFNQyxtQkFBT0EsQ0FBQyx5REFBUixDQURlO0FBRXJCQyxRQUFNRCxtQkFBT0EsQ0FBQyxp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O0FBQ0E7O0FBRUFXLE9BQU9DLE9BQVAsR0FBaUJtVSxDQUFqQixDIiwiZmlsZSI6InBhdGgtbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgSmVyZW15IFdoaXRsb2NrXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdXBwb3J0ZWRMb2FkZXJzID0ge1xuICBmaWxlOiByZXF1aXJlKCcuL2xpYi9sb2FkZXJzL2ZpbGUnKSxcbiAgaHR0cDogcmVxdWlyZSgnLi9saWIvbG9hZGVycy9odHRwJyksXG4gIGh0dHBzOiByZXF1aXJlKCcuL2xpYi9sb2FkZXJzL2h0dHAnKVxufTtcbnZhciBkZWZhdWx0TG9hZGVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbicgP1xuICAgICAgc3VwcG9ydGVkTG9hZGVycy5odHRwIDpcbiAgICAgIHN1cHBvcnRlZExvYWRlcnMuZmlsZTtcblxuLy8gTG9hZCBwcm9taXNlcyBwb2x5ZmlsbCBpZiBuZWNlc3Nhcnlcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICByZXF1aXJlKCduYXRpdmUtcHJvbWlzZS1vbmx5Jyk7XG59XG5cbmZ1bmN0aW9uIGdldFNjaGVtZSAobG9jYXRpb24pIHtcbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uLmluZGV4T2YoJzovLycpID09PSAtMSA/ICcnIDogbG9jYXRpb24uc3BsaXQoJzovLycpWzBdO1xuICB9XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufVxuXG4vKipcbiAqIFV0aWxpdHkgdGhhdCBwcm92aWRlcyBhIHNpbmdsZSBBUEkgZm9yIGxvYWRpbmcgdGhlIGNvbnRlbnQgb2YgYSBwYXRoL1VSTC5cbiAqXG4gKiBAbW9kdWxlIHBhdGgtbG9hZGVyXG4gKi9cblxuZnVuY3Rpb24gZ2V0TG9hZGVyIChsb2NhdGlvbikge1xuICB2YXIgc2NoZW1lID0gZ2V0U2NoZW1lKGxvY2F0aW9uKTtcbiAgdmFyIGxvYWRlciA9IHN1cHBvcnRlZExvYWRlcnNbc2NoZW1lXTtcblxuICBpZiAodHlwZW9mIGxvYWRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoc2NoZW1lID09PSAnJykge1xuICAgICAgbG9hZGVyID0gZGVmYXVsdExvYWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBzY2hlbWU6ICcgKyBzY2hlbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2FkZXI7XG59XG5cbi8qKlxuICogTG9hZHMgYSBkb2N1bWVudCBhdCB0aGUgcHJvdmlkZWQgbG9jYXRpb24gYW5kIHJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gLSBUaGUgbG9jYXRpb24gdG8gdGhlIGRvY3VtZW50XG4gKiBAcGFyYW0ge21vZHVsZTpwYXRoLWxvYWRlci5Mb2FkT3B0aW9uc30gW29wdGlvbnNdIC0gVGhlIGxvYWRlciBvcHRpb25zXG4gKlxuICogQHJldHVybnMge1Byb21pc2U8Kj59IEFsd2F5cyByZXR1cm5zIGEgcHJvbWlzZSBldmVuIGlmIHRoZXJlIGlzIGEgY2FsbGJhY2sgcHJvdmlkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXhhbXBsZSB1c2luZyBQcm9taXNlc1xuICpcbiAqIFBhdGhMb2FkZXJcbiAqICAgLmxvYWQoJy4vcGFja2FnZS5qc29uJylcbiAqICAgLnRoZW4oSlNPTi5wYXJzZSlcbiAqICAgLnRoZW4oZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gKiAgICAgY29uc29sZS5sb2coZG9jdW1lbnQubmFtZSArICcgKCcgKyBkb2N1bWVudC52ZXJzaW9uICsgJyk6ICcgKyBkb2N1bWVudC5kZXNjcmlwdGlvbik7XG4gKiAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAqICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gKiAgIH0pO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFeGFtcGxlIHVzaW5nIG9wdGlvbnMucHJlcGFyZVJlcXVlc3QgdG8gcHJvdmlkZSBhdXRoZW50aWNhdGlvbiBkZXRhaWxzIGZvciBhIHJlbW90ZWx5IHNlY3VyZSBVUkxcbiAqXG4gKiBQYXRoTG9hZGVyXG4gKiAgIC5sb2FkKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3doaXRsb2NramMvcGF0aC1sb2FkZXInLCB7XG4gKiAgICAgcHJlcGFyZVJlcXVlc3Q6IGZ1bmN0aW9uIChyZXEsIGNhbGxiYWNrKSB7XG4gKiAgICAgICByZXEuYXV0aCgnbXktdXNlcm5hbWUnLCAnbXktcGFzc3dvcmQnKTtcbiAqICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgcmVxKTtcbiAqICAgICB9XG4gKiAgIH0pXG4gKiAgIC50aGVuKEpTT04ucGFyc2UpXG4gKiAgIC50aGVuKGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICogICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmZ1bGxfbmFtZSArICc6ICcgKyBkb2N1bWVudC5kZXNjcmlwdGlvbik7XG4gKiAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAqICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gKiAgIH0pO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFeGFtcGxlIGxvYWRpbmcgYSBZQU1MIGZpbGVcbiAqXG4gKiBQYXRoTG9hZGVyXG4gKiAgIC5sb2FkKCcvVXNlcnMvbm90LXlvdS9wcm9qZWN0cy9wYXRoLWxvYWRlci8udHJhdmlzLnltbCcpXG4gKiAgIC50aGVuKFlBTUwuc2FmZUxvYWQpXG4gKiAgIC50aGVuKGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICogICAgIGNvbnNvbGUubG9nKCdwYXRoLWxvYWRlciB1c2VzIHRoZScsIGRvY3VtZW50Lmxhbmd1YWdlLCAnbGFuZ3VhZ2UuJyk7XG4gKiAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAqICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gKiAgIH0pO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFeGFtcGxlIGxvYWRpbmcgYSBZQU1MIGZpbGUgd2l0aCBvcHRpb25zLnByb2Nlc3NDb250ZW50IChVc2VmdWwgaWYgeW91IG5lZWQgaW5mb3JtYXRpb24gaW4gdGhlIHJhdyByZXNwb25zZSlcbiAqXG4gKiBQYXRoTG9hZGVyXG4gKiAgIC5sb2FkKCcvVXNlcnMvbm90LXlvdS9wcm9qZWN0cy9wYXRoLWxvYWRlci8udHJhdmlzLnltbCcsIHtcbiAqICAgICBwcm9jZXNzQ29udGVudDogZnVuY3Rpb24gKHJlcywgY2FsbGJhY2spIHtcbiAqICAgICAgIGNhbGxiYWNrKFlBTUwuc2FmZUxvYWQocmVzLnRleHQpKTtcbiAqICAgICB9XG4gKiAgIH0pXG4gKiAgIC50aGVuKGZ1bmN0aW9uIChkb2N1bWVudCkge1xuICogICAgIGNvbnNvbGUubG9nKCdwYXRoLWxvYWRlciB1c2VzIHRoZScsIGRvY3VtZW50Lmxhbmd1YWdlLCAnbGFuZ3VhZ2UuJyk7XG4gKiAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAqICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gKiAgIH0pO1xuICovXG5tb2R1bGUuZXhwb3J0cy5sb2FkID0gZnVuY3Rpb24gKGxvY2F0aW9uLCBvcHRpb25zKSB7XG4gIHZhciBhbGxUYXNrcyA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gIC8vIERlZmF1bHQgb3B0aW9ucyB0byBlbXB0eSBvYmplY3RcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGFyZ3VtZW50c1xuICBhbGxUYXNrcyA9IGFsbFRhc2tzLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdsb2NhdGlvbiBpcyByZXF1aXJlZCcpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbG9jYXRpb24gbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5wcm9jZXNzQ29udGVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG9wdGlvbnMucHJvY2Vzc0NvbnRlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucy5wcm9jZXNzQ29udGVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIExvYWQgdGhlIGRvY3VtZW50IGZyb20gdGhlIHByb3ZpZGVkIGxvY2F0aW9uIGFuZCBwcm9jZXNzIGl0XG4gIGFsbFRhc2tzID0gYWxsVGFza3NcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgbG9hZGVyID0gZ2V0TG9hZGVyKGxvY2F0aW9uKTtcblxuICAgICAgICBsb2FkZXIubG9hZChsb2NhdGlvbiwgb3B0aW9ucyB8fCB7fSwgZnVuY3Rpb24gKGVyciwgZG9jdW1lbnQpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShkb2N1bWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgaWYgKG9wdGlvbnMucHJvY2Vzc0NvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAvLyBGb3IgY29uc2lzdGVuY3kgYmV0d2VlbiBmaWxlIGFuZCBodHRwLCBhbHdheXMgc2VuZCBhbiBvYmplY3Qgd2l0aCBhICd0ZXh0JyBwcm9wZXJ0eSBjb250YWluaW5nIHRoZSByYXdcbiAgICAgICAgICAvLyBzdHJpbmcgdmFsdWUgYmVpbmcgcHJvY2Vzc2VkLlxuICAgICAgICAgIGlmICh0eXBlb2YgcmVzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmVzID0ge3RleHQ6IHJlc307XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUGFzcyB0aGUgcGF0aCBiZWluZyBsb2FkZWRcbiAgICAgICAgICByZXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgICAgICAgIG9wdGlvbnMucHJvY2Vzc0NvbnRlbnQocmVzLCBmdW5jdGlvbiAoZXJyLCBwcm9jZXNzZWQpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHByb2Nlc3NlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgd2FzIG5vIGNvbnRlbnQgcHJvY2Vzc29yLCB3ZSB3aWxsIGFzc3VtZSB0aGF0IGZvciBhbGwgb2JqZWN0cyB0aGF0IGl0IGlzIGEgU3VwZXJhZ2VudCByZXNwb25zZVxuICAgICAgICAvLyBhbmQgd2lsbCByZXR1cm4gaXRzIGB0ZXh0YCBwcm9wZXJ0eSB2YWx1ZS4gIE90aGVyd2lzZSwgd2Ugd2lsbCByZXR1cm4gdGhlIHJhdyByZXNwb25zZS5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiByZXMgPT09ICdvYmplY3QnID8gcmVzLnRleHQgOiByZXM7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgcmV0dXJuIGFsbFRhc2tzO1xufTtcbiIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgSmVyZW15IFdoaXRsb2NrXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1bnN1cHBvcnRlZEVycm9yID0gbmV3IFR5cGVFcnJvcignVGhlIFxcJ2ZpbGVcXCcgc2NoZW1lIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXInKTtcblxuLyoqXG4gKiBUaGUgZmlsZSBsb2FkZXIgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAdGhyb3dzIHtlcnJvcn0gdGhlIGZpbGUgbG9hZGVyIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXJcbiAqL1xubW9kdWxlLmV4cG9ydHMuZ2V0QmFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhyb3cgdW5zdXBwb3J0ZWRFcnJvcjtcbn07XG5cbi8qKlxuICogVGhlIGZpbGUgbG9hZGVyIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXIuXG4gKi9cbm1vZHVsZS5leHBvcnRzLmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmbiA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG5cbiAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuKHVuc3VwcG9ydGVkRXJyb3IpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IHVuc3VwcG9ydGVkRXJyb3I7XG4gIH1cbn07XG4iLCIvKiBlc2xpbnQtZW52IG5vZGUsIGJyb3dzZXIgKi9cblxuLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBKZXJlbXkgV2hpdGxvY2tcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHJlcXVlc3QgPSByZXF1aXJlKCdzdXBlcmFnZW50Jyk7XG5cbnZhciBzdXBwb3J0ZWRIdHRwTWV0aG9kcyA9IFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3BhdGNoJywgJ3Bvc3QnLCAncHV0J107XG5cbi8qKlxuICogTG9hZHMgYSBmaWxlIGZyb20gYW4gaHR0cCBvciBodHRwcyBVUkwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIC0gVGhlIGRvY3VtZW50IFVSTCAoSWYgcmVsYXRpdmUsIGxvY2F0aW9uIGlzIHJlbGF0aXZlIHRvIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgbG9hZGVyIG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5tZXRob2Q9Z2V0XSAtIFRoZSBIVFRQIG1ldGhvZCB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcGFyYW0ge21vZHVsZTpQYXRoTG9hZGVyflByZXBhcmVSZXF1ZXN0Q2FsbGJhY2t9IFtvcHRpb25zLnByZXBhcmVSZXF1ZXN0XSAtIFRoZSBjYWxsYmFjayB1c2VkIHRvIHByZXBhcmUgYSByZXF1ZXN0XG4gKiBAcGFyYW0ge21vZHVsZTpQYXRoTG9hZGVyflByb2Nlc3NSZXNwb25zZUNhbGxiYWNrfSBbb3B0aW9ucy5wcm9jZXNzQ29udGVudF0gLSBUaGUgY2FsbGJhY2sgdXNlZCB0byBwcm9jZXNzIHRoZVxuICogcmVzcG9uc2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGVycm9yLWZpcnN0IGNhbGxiYWNrXG4gKi9cbm1vZHVsZS5leHBvcnRzLmxvYWQgPSBmdW5jdGlvbiAobG9jYXRpb24sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciByZWFsTWV0aG9kID0gb3B0aW9ucy5tZXRob2QgPyBvcHRpb25zLm1ldGhvZC50b0xvd2VyQ2FzZSgpIDogJ2dldCc7XG4gIHZhciBlcnI7XG4gIHZhciByZWFsUmVxdWVzdDtcblxuICBmdW5jdGlvbiBtYWtlUmVxdWVzdCAoZXJyLCByZXEpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBidWZmZXIoKSBpcyBvbmx5IGF2YWlsYWJsZSBpbiBOb2RlLmpzXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyA/IHByb2Nlc3MgOiAwKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nICYmXG4gICAgICAgICAgdHlwZW9mIHJlcS5idWZmZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVxLmJ1ZmZlcih0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmVxXG4gICAgICAgIC5lbmQoZnVuY3Rpb24gKGVycjIsIHJlcykge1xuICAgICAgICAgIGlmIChlcnIyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCByZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLm1ldGhvZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubWV0aG9kICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyID0gbmV3IFR5cGVFcnJvcignb3B0aW9ucy5tZXRob2QgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIH0gZWxzZSBpZiAoc3VwcG9ydGVkSHR0cE1ldGhvZHMuaW5kZXhPZihvcHRpb25zLm1ldGhvZCkgPT09IC0xKSB7XG4gICAgICBlcnIgPSBuZXcgVHlwZUVycm9yKCdvcHRpb25zLm1ldGhvZCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiAnICtcbiAgICAgICAgc3VwcG9ydGVkSHR0cE1ldGhvZHMuc2xpY2UoMCwgc3VwcG9ydGVkSHR0cE1ldGhvZHMubGVuZ3RoIC0gMSkuam9pbignLCAnKSArICcgb3IgJyArXG4gICAgICAgIHN1cHBvcnRlZEh0dHBNZXRob2RzW3N1cHBvcnRlZEh0dHBNZXRob2RzLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMucHJlcGFyZVJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvcHRpb25zLnByZXBhcmVSZXF1ZXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgZXJyID0gbmV3IFR5cGVFcnJvcignb3B0aW9ucy5wcmVwYXJlUmVxdWVzdCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICghZXJyKSB7XG4gICAgcmVhbFJlcXVlc3QgPSByZXF1ZXN0W3JlYWxNZXRob2QgPT09ICdkZWxldGUnID8gJ2RlbCcgOiByZWFsTWV0aG9kXShsb2NhdGlvbik7XG5cbiAgICBpZiAob3B0aW9ucy5wcmVwYXJlUmVxdWVzdCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgb3B0aW9ucy5wcmVwYXJlUmVxdWVzdChyZWFsUmVxdWVzdCwgbWFrZVJlcXVlc3QpO1xuICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICBjYWxsYmFjayhlcnIyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWFrZVJlcXVlc3QodW5kZWZpbmVkLCByZWFsUmVxdWVzdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKGVycik7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuc3RyaW5naWZ5LmRlZmF1bHQgPSBzdHJpbmdpZnlcbnN0cmluZ2lmeS5zdGFibGUgPSBkZXRlcm1pbmlzdGljU3RyaW5naWZ5XG5zdHJpbmdpZnkuc3RhYmxlU3RyaW5naWZ5ID0gZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeVxuXG52YXIgYXJyID0gW11cbnZhciByZXBsYWNlclN0YWNrID0gW11cblxuLy8gUmVndWxhciBzdHJpbmdpZnlcbmZ1bmN0aW9uIHN0cmluZ2lmeSAob2JqLCByZXBsYWNlciwgc3BhY2VyKSB7XG4gIGRlY2lyYyhvYmosICcnLCBbXSwgdW5kZWZpbmVkKVxuICB2YXIgcmVzXG4gIGlmIChyZXBsYWNlclN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5KG9iaiwgcmVwbGFjZXIsIHNwYWNlcilcbiAgfSBlbHNlIHtcbiAgICByZXMgPSBKU09OLnN0cmluZ2lmeShvYmosIHJlcGxhY2VHZXR0ZXJWYWx1ZXMocmVwbGFjZXIpLCBzcGFjZXIpXG4gIH1cbiAgd2hpbGUgKGFyci5sZW5ndGggIT09IDApIHtcbiAgICB2YXIgcGFydCA9IGFyci5wb3AoKVxuICAgIGlmIChwYXJ0Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBhcnRbMF0sIHBhcnRbMV0sIHBhcnRbM10pXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRbMF1bcGFydFsxXV0gPSBwYXJ0WzJdXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cbmZ1bmN0aW9uIGRlY2lyYyAodmFsLCBrLCBzdGFjaywgcGFyZW50KSB7XG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdGFja1tpXSA9PT0gdmFsKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHBhcmVudCwgaylcbiAgICAgICAgaWYgKHByb3BlcnR5RGVzY3JpcHRvci5nZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eURlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocGFyZW50LCBrLCB7IHZhbHVlOiAnW0NpcmN1bGFyXScgfSlcbiAgICAgICAgICAgIGFyci5wdXNoKFtwYXJlbnQsIGssIHZhbCwgcHJvcGVydHlEZXNjcmlwdG9yXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVwbGFjZXJTdGFjay5wdXNoKFt2YWwsIGtdKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRba10gPSAnW0NpcmN1bGFyXSdcbiAgICAgICAgICBhcnIucHVzaChbcGFyZW50LCBrLCB2YWxdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBzdGFjay5wdXNoKHZhbClcbiAgICAvLyBPcHRpbWl6ZSBmb3IgQXJyYXlzLiBCaWcgYXJyYXlzIGNvdWxkIGtpbGwgdGhlIHBlcmZvcm1hbmNlIG90aGVyd2lzZSFcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRlY2lyYyh2YWxbaV0sIGksIHN0YWNrLCB2YWwpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsKVxuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgICAgZGVjaXJjKHZhbFtrZXldLCBrZXksIHN0YWNrLCB2YWwpXG4gICAgICB9XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpXG4gIH1cbn1cblxuLy8gU3RhYmxlLXN0cmluZ2lmeVxuZnVuY3Rpb24gY29tcGFyZUZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxXG4gIH1cbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeSAob2JqLCByZXBsYWNlciwgc3BhY2VyKSB7XG4gIHZhciB0bXAgPSBkZXRlcm1pbmlzdGljRGVjaXJjKG9iaiwgJycsIFtdLCB1bmRlZmluZWQpIHx8IG9ialxuICB2YXIgcmVzXG4gIGlmIChyZXBsYWNlclN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHJlcyA9IEpTT04uc3RyaW5naWZ5KHRtcCwgcmVwbGFjZXIsIHNwYWNlcilcbiAgfSBlbHNlIHtcbiAgICByZXMgPSBKU09OLnN0cmluZ2lmeSh0bXAsIHJlcGxhY2VHZXR0ZXJWYWx1ZXMocmVwbGFjZXIpLCBzcGFjZXIpXG4gIH1cbiAgd2hpbGUgKGFyci5sZW5ndGggIT09IDApIHtcbiAgICB2YXIgcGFydCA9IGFyci5wb3AoKVxuICAgIGlmIChwYXJ0Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHBhcnRbMF0sIHBhcnRbMV0sIHBhcnRbM10pXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRbMF1bcGFydFsxXV0gPSBwYXJ0WzJdXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5pc3RpY0RlY2lyYyAodmFsLCBrLCBzdGFjaywgcGFyZW50KSB7XG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdGFja1tpXSA9PT0gdmFsKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHBhcmVudCwgaylcbiAgICAgICAgaWYgKHByb3BlcnR5RGVzY3JpcHRvci5nZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChwcm9wZXJ0eURlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocGFyZW50LCBrLCB7IHZhbHVlOiAnW0NpcmN1bGFyXScgfSlcbiAgICAgICAgICAgIGFyci5wdXNoKFtwYXJlbnQsIGssIHZhbCwgcHJvcGVydHlEZXNjcmlwdG9yXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVwbGFjZXJTdGFjay5wdXNoKFt2YWwsIGtdKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRba10gPSAnW0NpcmN1bGFyXSdcbiAgICAgICAgICBhcnIucHVzaChbcGFyZW50LCBrLCB2YWxdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzdGFjay5wdXNoKHZhbClcbiAgICAvLyBPcHRpbWl6ZSBmb3IgQXJyYXlzLiBCaWcgYXJyYXlzIGNvdWxkIGtpbGwgdGhlIHBlcmZvcm1hbmNlIG90aGVyd2lzZSFcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRldGVybWluaXN0aWNEZWNpcmModmFsW2ldLCBpLCBzdGFjaywgdmFsKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDcmVhdGUgYSB0ZW1wb3Jhcnkgb2JqZWN0IGluIHRoZSByZXF1aXJlZCB3YXlcbiAgICAgIHZhciB0bXAgPSB7fVxuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKVxuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgICAgZGV0ZXJtaW5pc3RpY0RlY2lyYyh2YWxba2V5XSwga2V5LCBzdGFjaywgdmFsKVxuICAgICAgICB0bXBba2V5XSA9IHZhbFtrZXldXG4gICAgICB9XG4gICAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXJyLnB1c2goW3BhcmVudCwgaywgdmFsXSlcbiAgICAgICAgcGFyZW50W2tdID0gdG1wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG1wXG4gICAgICB9XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpXG4gIH1cbn1cblxuLy8gd3JhcHMgcmVwbGFjZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHZhbHVlcyB3ZSBjb3VsZG4ndCByZXBsYWNlXG4vLyBhbmQgbWFyayB0aGVtIGFzIFtDaXJjdWxhcl1cbmZ1bmN0aW9uIHJlcGxhY2VHZXR0ZXJWYWx1ZXMgKHJlcGxhY2VyKSB7XG4gIHJlcGxhY2VyID0gcmVwbGFjZXIgIT09IHVuZGVmaW5lZCA/IHJlcGxhY2VyIDogZnVuY3Rpb24gKGssIHYpIHsgcmV0dXJuIHYgfVxuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgaWYgKHJlcGxhY2VyU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXBsYWNlclN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gcmVwbGFjZXJTdGFja1tpXVxuICAgICAgICBpZiAocGFydFsxXSA9PT0ga2V5ICYmIHBhcnRbMF0gPT09IHZhbCkge1xuICAgICAgICAgIHZhbCA9ICdbQ2lyY3VsYXJdJ1xuICAgICAgICAgIHJlcGxhY2VyU3RhY2suc3BsaWNlKGksIDEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbClcbiAgfVxufVxuIiwiLyohIE5hdGl2ZSBQcm9taXNlIE9ubHlcbiAgICB2MC44LjEgKGMpIEt5bGUgU2ltcHNvblxuICAgIE1JVCBMaWNlbnNlOiBodHRwOi8vZ2V0aWZ5Lm1pdC1saWNlbnNlLm9yZ1xuKi9cblxuKGZ1bmN0aW9uIFVNRChuYW1lLGNvbnRleHQsZGVmaW5pdGlvbil7XG5cdC8vIHNwZWNpYWwgZm9ybSBvZiBVTUQgZm9yIHBvbHlmaWxsaW5nIGFjcm9zcyBldmlyb25tZW50c1xuXHRjb250ZXh0W25hbWVdID0gY29udGV4dFtuYW1lXSB8fCBkZWZpbml0aW9uKCk7XG5cdGlmICh0eXBlb2YgbW9kdWxlICE9IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHsgbW9kdWxlLmV4cG9ydHMgPSBjb250ZXh0W25hbWVdOyB9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHsgZGVmaW5lKGZ1bmN0aW9uICRBTUQkKCl7IHJldHVybiBjb250ZXh0W25hbWVdOyB9KTsgfVxufSkoXCJQcm9taXNlXCIsdHlwZW9mIGdsb2JhbCAhPSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyxmdW5jdGlvbiBERUYoKXtcblx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIGJ1aWx0SW5Qcm9wLCBjeWNsZSwgc2NoZWR1bGluZ19xdWV1ZSxcblx0XHRUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG5cdFx0dGltZXIgPSAodHlwZW9mIHNldEltbWVkaWF0ZSAhPSBcInVuZGVmaW5lZFwiKSA/XG5cdFx0XHRmdW5jdGlvbiB0aW1lcihmbikgeyByZXR1cm4gc2V0SW1tZWRpYXRlKGZuKTsgfSA6XG5cdFx0XHRzZXRUaW1lb3V0XG5cdDtcblxuXHQvLyBkYW1taXQsIElFOC5cblx0dHJ5IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJ4XCIse30pO1xuXHRcdGJ1aWx0SW5Qcm9wID0gZnVuY3Rpb24gYnVpbHRJblByb3Aob2JqLG5hbWUsdmFsLGNvbmZpZykge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosbmFtZSx7XG5cdFx0XHRcdHZhbHVlOiB2YWwsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IGNvbmZpZyAhPT0gZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH07XG5cdH1cblx0Y2F0Y2ggKGVycikge1xuXHRcdGJ1aWx0SW5Qcm9wID0gZnVuY3Rpb24gYnVpbHRJblByb3Aob2JqLG5hbWUsdmFsKSB7XG5cdFx0XHRvYmpbbmFtZV0gPSB2YWw7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH07XG5cdH1cblxuXHQvLyBOb3RlOiB1c2luZyBhIHF1ZXVlIGluc3RlYWQgb2YgYXJyYXkgZm9yIGVmZmljaWVuY3lcblx0c2NoZWR1bGluZ19xdWV1ZSA9IChmdW5jdGlvbiBRdWV1ZSgpIHtcblx0XHR2YXIgZmlyc3QsIGxhc3QsIGl0ZW07XG5cblx0XHRmdW5jdGlvbiBJdGVtKGZuLHNlbGYpIHtcblx0XHRcdHRoaXMuZm4gPSBmbjtcblx0XHRcdHRoaXMuc2VsZiA9IHNlbGY7XG5cdFx0XHR0aGlzLm5leHQgPSB2b2lkIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFkZDogZnVuY3Rpb24gYWRkKGZuLHNlbGYpIHtcblx0XHRcdFx0aXRlbSA9IG5ldyBJdGVtKGZuLHNlbGYpO1xuXHRcdFx0XHRpZiAobGFzdCkge1xuXHRcdFx0XHRcdGxhc3QubmV4dCA9IGl0ZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Zmlyc3QgPSBpdGVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxhc3QgPSBpdGVtO1xuXHRcdFx0XHRpdGVtID0gdm9pZCAwO1xuXHRcdFx0fSxcblx0XHRcdGRyYWluOiBmdW5jdGlvbiBkcmFpbigpIHtcblx0XHRcdFx0dmFyIGYgPSBmaXJzdDtcblx0XHRcdFx0Zmlyc3QgPSBsYXN0ID0gY3ljbGUgPSB2b2lkIDA7XG5cblx0XHRcdFx0d2hpbGUgKGYpIHtcblx0XHRcdFx0XHRmLmZuLmNhbGwoZi5zZWxmKTtcblx0XHRcdFx0XHRmID0gZi5uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fSkoKTtcblxuXHRmdW5jdGlvbiBzY2hlZHVsZShmbixzZWxmKSB7XG5cdFx0c2NoZWR1bGluZ19xdWV1ZS5hZGQoZm4sc2VsZik7XG5cdFx0aWYgKCFjeWNsZSkge1xuXHRcdFx0Y3ljbGUgPSB0aW1lcihzY2hlZHVsaW5nX3F1ZXVlLmRyYWluKTtcblx0XHR9XG5cdH1cblxuXHQvLyBwcm9taXNlIGR1Y2sgdHlwaW5nXG5cdGZ1bmN0aW9uIGlzVGhlbmFibGUobykge1xuXHRcdHZhciBfdGhlbiwgb190eXBlID0gdHlwZW9mIG87XG5cblx0XHRpZiAobyAhPSBudWxsICYmXG5cdFx0XHQoXG5cdFx0XHRcdG9fdHlwZSA9PSBcIm9iamVjdFwiIHx8IG9fdHlwZSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdF90aGVuID0gby50aGVuO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZW9mIF90aGVuID09IFwiZnVuY3Rpb25cIiA/IF90aGVuIDogZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBub3RpZnkoKSB7XG5cdFx0Zm9yICh2YXIgaT0wOyBpPHRoaXMuY2hhaW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdG5vdGlmeUlzb2xhdGVkKFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0XHQodGhpcy5zdGF0ZSA9PT0gMSkgPyB0aGlzLmNoYWluW2ldLnN1Y2Nlc3MgOiB0aGlzLmNoYWluW2ldLmZhaWx1cmUsXG5cdFx0XHRcdHRoaXMuY2hhaW5baV1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHRoaXMuY2hhaW4ubGVuZ3RoID0gMDtcblx0fVxuXG5cdC8vIE5PVEU6IFRoaXMgaXMgYSBzZXBhcmF0ZSBmdW5jdGlvbiB0byBpc29sYXRlXG5cdC8vIHRoZSBgdHJ5Li5jYXRjaGAgc28gdGhhdCBvdGhlciBjb2RlIGNhbiBiZVxuXHQvLyBvcHRpbWl6ZWQgYmV0dGVyXG5cdGZ1bmN0aW9uIG5vdGlmeUlzb2xhdGVkKHNlbGYsY2IsY2hhaW4pIHtcblx0XHR2YXIgcmV0LCBfdGhlbjtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGNiID09PSBmYWxzZSkge1xuXHRcdFx0XHRjaGFpbi5yZWplY3Qoc2VsZi5tc2cpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChjYiA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHJldCA9IHNlbGYubXNnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHJldCA9IGNiLmNhbGwodm9pZCAwLHNlbGYubXNnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXQgPT09IGNoYWluLnByb21pc2UpIHtcblx0XHRcdFx0XHRjaGFpbi5yZWplY3QoVHlwZUVycm9yKFwiUHJvbWlzZS1jaGFpbiBjeWNsZVwiKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoX3RoZW4gPSBpc1RoZW5hYmxlKHJldCkpIHtcblx0XHRcdFx0XHRfdGhlbi5jYWxsKHJldCxjaGFpbi5yZXNvbHZlLGNoYWluLnJlamVjdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Y2hhaW4ucmVzb2x2ZShyZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChlcnIpIHtcblx0XHRcdGNoYWluLnJlamVjdChlcnIpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlc29sdmUobXNnKSB7XG5cdFx0dmFyIF90aGVuLCBzZWxmID0gdGhpcztcblxuXHRcdC8vIGFscmVhZHkgdHJpZ2dlcmVkP1xuXHRcdGlmIChzZWxmLnRyaWdnZXJlZCkgeyByZXR1cm47IH1cblxuXHRcdHNlbGYudHJpZ2dlcmVkID0gdHJ1ZTtcblxuXHRcdC8vIHVud3JhcFxuXHRcdGlmIChzZWxmLmRlZikge1xuXHRcdFx0c2VsZiA9IHNlbGYuZGVmO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoX3RoZW4gPSBpc1RoZW5hYmxlKG1zZykpIHtcblx0XHRcdFx0c2NoZWR1bGUoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2YXIgZGVmX3dyYXBwZXIgPSBuZXcgTWFrZURlZldyYXBwZXIoc2VsZik7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdF90aGVuLmNhbGwobXNnLFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAkcmVzb2x2ZSQoKXsgcmVzb2x2ZS5hcHBseShkZWZfd3JhcHBlcixhcmd1bWVudHMpOyB9LFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAkcmVqZWN0JCgpeyByZWplY3QuYXBwbHkoZGVmX3dyYXBwZXIsYXJndW1lbnRzKTsgfVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0cmVqZWN0LmNhbGwoZGVmX3dyYXBwZXIsZXJyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c2VsZi5tc2cgPSBtc2c7XG5cdFx0XHRcdHNlbGYuc3RhdGUgPSAxO1xuXHRcdFx0XHRpZiAoc2VsZi5jaGFpbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2NoZWR1bGUobm90aWZ5LHNlbGYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChlcnIpIHtcblx0XHRcdHJlamVjdC5jYWxsKG5ldyBNYWtlRGVmV3JhcHBlcihzZWxmKSxlcnIpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlamVjdChtc2cpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBhbHJlYWR5IHRyaWdnZXJlZD9cblx0XHRpZiAoc2VsZi50cmlnZ2VyZWQpIHsgcmV0dXJuOyB9XG5cblx0XHRzZWxmLnRyaWdnZXJlZCA9IHRydWU7XG5cblx0XHQvLyB1bndyYXBcblx0XHRpZiAoc2VsZi5kZWYpIHtcblx0XHRcdHNlbGYgPSBzZWxmLmRlZjtcblx0XHR9XG5cblx0XHRzZWxmLm1zZyA9IG1zZztcblx0XHRzZWxmLnN0YXRlID0gMjtcblx0XHRpZiAoc2VsZi5jaGFpbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRzY2hlZHVsZShub3RpZnksc2VsZik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaXRlcmF0ZVByb21pc2VzKENvbnN0cnVjdG9yLGFycixyZXNvbHZlcixyZWplY3Rlcikge1xuXHRcdGZvciAodmFyIGlkeD0wOyBpZHg8YXJyLmxlbmd0aDsgaWR4KyspIHtcblx0XHRcdChmdW5jdGlvbiBJSUZFKGlkeCl7XG5cdFx0XHRcdENvbnN0cnVjdG9yLnJlc29sdmUoYXJyW2lkeF0pXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICRyZXNvbHZlciQobXNnKXtcblx0XHRcdFx0XHRcdHJlc29sdmVyKGlkeCxtc2cpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVqZWN0ZXJcblx0XHRcdFx0KTtcblx0XHRcdH0pKGlkeCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gTWFrZURlZldyYXBwZXIoc2VsZikge1xuXHRcdHRoaXMuZGVmID0gc2VsZjtcblx0XHR0aGlzLnRyaWdnZXJlZCA9IGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gTWFrZURlZihzZWxmKSB7XG5cdFx0dGhpcy5wcm9taXNlID0gc2VsZjtcblx0XHR0aGlzLnN0YXRlID0gMDtcblx0XHR0aGlzLnRyaWdnZXJlZCA9IGZhbHNlO1xuXHRcdHRoaXMuY2hhaW4gPSBbXTtcblx0XHR0aGlzLm1zZyA9IHZvaWQgMDtcblx0fVxuXG5cdGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcblx0XHRpZiAodHlwZW9mIGV4ZWN1dG9yICE9IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX19OUE9fXyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgVHlwZUVycm9yKFwiTm90IGEgcHJvbWlzZVwiKTtcblx0XHR9XG5cblx0XHQvLyBpbnN0YW5jZSBzaGFkb3dpbmcgdGhlIGluaGVyaXRlZCBcImJyYW5kXCJcblx0XHQvLyB0byBzaWduYWwgYW4gYWxyZWFkeSBcImluaXRpYWxpemVkXCIgcHJvbWlzZVxuXHRcdHRoaXMuX19OUE9fXyA9IDE7XG5cblx0XHR2YXIgZGVmID0gbmV3IE1ha2VEZWYodGhpcyk7XG5cblx0XHR0aGlzW1widGhlblwiXSA9IGZ1bmN0aW9uIHRoZW4oc3VjY2VzcyxmYWlsdXJlKSB7XG5cdFx0XHR2YXIgbyA9IHtcblx0XHRcdFx0c3VjY2VzczogdHlwZW9mIHN1Y2Nlc3MgPT0gXCJmdW5jdGlvblwiID8gc3VjY2VzcyA6IHRydWUsXG5cdFx0XHRcdGZhaWx1cmU6IHR5cGVvZiBmYWlsdXJlID09IFwiZnVuY3Rpb25cIiA/IGZhaWx1cmUgOiBmYWxzZVxuXHRcdFx0fTtcblx0XHRcdC8vIE5vdGU6IGB0aGVuKC4uKWAgaXRzZWxmIGNhbiBiZSBib3Jyb3dlZCB0byBiZSB1c2VkIGFnYWluc3Rcblx0XHRcdC8vIGEgZGlmZmVyZW50IHByb21pc2UgY29uc3RydWN0b3IgZm9yIG1ha2luZyB0aGUgY2hhaW5lZCBwcm9taXNlLFxuXHRcdFx0Ly8gYnkgc3Vic3RpdHV0aW5nIGEgZGlmZmVyZW50IGB0aGlzYCBiaW5kaW5nLlxuXHRcdFx0by5wcm9taXNlID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZnVuY3Rpb24gZXh0cmFjdENoYWluKHJlc29sdmUscmVqZWN0KSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzb2x2ZSAhPSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJlamVjdCAhPSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHR0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG8ucmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRcdG8ucmVqZWN0ID0gcmVqZWN0O1xuXHRcdFx0fSk7XG5cdFx0XHRkZWYuY2hhaW4ucHVzaChvKTtcblxuXHRcdFx0aWYgKGRlZi5zdGF0ZSAhPT0gMCkge1xuXHRcdFx0XHRzY2hlZHVsZShub3RpZnksZGVmKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG8ucHJvbWlzZTtcblx0XHR9O1xuXHRcdHRoaXNbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uICRjYXRjaCQoZmFpbHVyZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGhlbih2b2lkIDAsZmFpbHVyZSk7XG5cdFx0fTtcblxuXHRcdHRyeSB7XG5cdFx0XHRleGVjdXRvci5jYWxsKFxuXHRcdFx0XHR2b2lkIDAsXG5cdFx0XHRcdGZ1bmN0aW9uIHB1YmxpY1Jlc29sdmUobXNnKXtcblx0XHRcdFx0XHRyZXNvbHZlLmNhbGwoZGVmLG1zZyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZ1bmN0aW9uIHB1YmxpY1JlamVjdChtc2cpIHtcblx0XHRcdFx0XHRyZWplY3QuY2FsbChkZWYsbXNnKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y2F0Y2ggKGVycikge1xuXHRcdFx0cmVqZWN0LmNhbGwoZGVmLGVycik7XG5cdFx0fVxuXHR9XG5cblx0dmFyIFByb21pc2VQcm90b3R5cGUgPSBidWlsdEluUHJvcCh7fSxcImNvbnN0cnVjdG9yXCIsUHJvbWlzZSxcblx0XHQvKmNvbmZpZ3VyYWJsZT0qL2ZhbHNlXG5cdCk7XG5cblx0Ly8gTm90ZTogQW5kcm9pZCA0IGNhbm5vdCB1c2UgYE9iamVjdC5kZWZpbmVQcm9wZXJ0eSguLilgIGhlcmVcblx0UHJvbWlzZS5wcm90b3R5cGUgPSBQcm9taXNlUHJvdG90eXBlO1xuXG5cdC8vIGJ1aWx0LWluIFwiYnJhbmRcIiB0byBzaWduYWwgYW4gXCJ1bmluaXRpYWxpemVkXCIgcHJvbWlzZVxuXHRidWlsdEluUHJvcChQcm9taXNlUHJvdG90eXBlLFwiX19OUE9fX1wiLDAsXG5cdFx0Lypjb25maWd1cmFibGU9Ki9mYWxzZVxuXHQpO1xuXG5cdGJ1aWx0SW5Qcm9wKFByb21pc2UsXCJyZXNvbHZlXCIsZnVuY3Rpb24gUHJvbWlzZSRyZXNvbHZlKG1zZykge1xuXHRcdHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cblx0XHQvLyBzcGVjIG1hbmRhdGVkIGNoZWNrc1xuXHRcdC8vIG5vdGU6IGJlc3QgXCJpc1Byb21pc2VcIiBjaGVjayB0aGF0J3MgcHJhY3RpY2FsIGZvciBub3dcblx0XHRpZiAobXNnICYmIHR5cGVvZiBtc2cgPT0gXCJvYmplY3RcIiAmJiBtc2cuX19OUE9fXyA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIG1zZztcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUscmVqZWN0KXtcblx0XHRcdGlmICh0eXBlb2YgcmVzb2x2ZSAhPSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJlamVjdCAhPSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7XG5cdFx0XHR9XG5cblx0XHRcdHJlc29sdmUobXNnKTtcblx0XHR9KTtcblx0fSk7XG5cblx0YnVpbHRJblByb3AoUHJvbWlzZSxcInJlamVjdFwiLGZ1bmN0aW9uIFByb21pc2UkcmVqZWN0KG1zZykge1xuXHRcdHJldHVybiBuZXcgdGhpcyhmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLHJlamVjdCl7XG5cdFx0XHRpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWplY3QobXNnKTtcblx0XHR9KTtcblx0fSk7XG5cblx0YnVpbHRJblByb3AoUHJvbWlzZSxcImFsbFwiLGZ1bmN0aW9uIFByb21pc2UkYWxsKGFycikge1xuXHRcdHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cblx0XHQvLyBzcGVjIG1hbmRhdGVkIGNoZWNrc1xuXHRcdGlmIChUb1N0cmluZy5jYWxsKGFycikgIT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG5cdFx0XHRyZXR1cm4gQ29uc3RydWN0b3IucmVqZWN0KFR5cGVFcnJvcihcIk5vdCBhbiBhcnJheVwiKSk7XG5cdFx0fVxuXHRcdGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gQ29uc3RydWN0b3IucmVzb2x2ZShbXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLHJlamVjdCl7XG5cdFx0XHRpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuID0gYXJyLmxlbmd0aCwgbXNncyA9IEFycmF5KGxlbiksIGNvdW50ID0gMDtcblxuXHRcdFx0aXRlcmF0ZVByb21pc2VzKENvbnN0cnVjdG9yLGFycixmdW5jdGlvbiByZXNvbHZlcihpZHgsbXNnKSB7XG5cdFx0XHRcdG1zZ3NbaWR4XSA9IG1zZztcblx0XHRcdFx0aWYgKCsrY291bnQgPT09IGxlbikge1xuXHRcdFx0XHRcdHJlc29sdmUobXNncyk7XG5cdFx0XHRcdH1cblx0XHRcdH0scmVqZWN0KTtcblx0XHR9KTtcblx0fSk7XG5cblx0YnVpbHRJblByb3AoUHJvbWlzZSxcInJhY2VcIixmdW5jdGlvbiBQcm9taXNlJHJhY2UoYXJyKSB7XG5cdFx0dmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuXHRcdC8vIHNwZWMgbWFuZGF0ZWQgY2hlY2tzXG5cdFx0aWYgKFRvU3RyaW5nLmNhbGwoYXJyKSAhPSBcIltvYmplY3QgQXJyYXldXCIpIHtcblx0XHRcdHJldHVybiBDb25zdHJ1Y3Rvci5yZWplY3QoVHlwZUVycm9yKFwiTm90IGFuIGFycmF5XCIpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUscmVqZWN0KXtcblx0XHRcdGlmICh0eXBlb2YgcmVzb2x2ZSAhPSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJlamVjdCAhPSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7XG5cdFx0XHR9XG5cblx0XHRcdGl0ZXJhdGVQcm9taXNlcyhDb25zdHJ1Y3RvcixhcnIsZnVuY3Rpb24gcmVzb2x2ZXIoaWR4LG1zZyl7XG5cdFx0XHRcdHJlc29sdmUobXNnKTtcblx0XHRcdH0scmVqZWN0KTtcblx0XHR9KTtcblx0fSk7XG5cblx0cmV0dXJuIFByb21pc2U7XG59KTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJmdW5jdGlvbiBBZ2VudCgpIHtcbiAgdGhpcy5fZGVmYXVsdHMgPSBbXTtcbn1cblxuW1xuICAndXNlJyxcbiAgJ29uJyxcbiAgJ29uY2UnLFxuICAnc2V0JyxcbiAgJ3F1ZXJ5JyxcbiAgJ3R5cGUnLFxuICAnYWNjZXB0JyxcbiAgJ2F1dGgnLFxuICAnd2l0aENyZWRlbnRpYWxzJyxcbiAgJ3NvcnRRdWVyeScsXG4gICdyZXRyeScsXG4gICdvaycsXG4gICdyZWRpcmVjdHMnLFxuICAndGltZW91dCcsXG4gICdidWZmZXInLFxuICAnc2VyaWFsaXplJyxcbiAgJ3BhcnNlJyxcbiAgJ2NhJyxcbiAgJ2tleScsXG4gICdwZngnLFxuICAnY2VydCcsXG4gICdkaXNhYmxlVExTQ2VydHMnXG5dLmZvckVhY2goZm4gPT4ge1xuICAvLyBEZWZhdWx0IHNldHRpbmcgZm9yIGFsbCByZXF1ZXN0cyBmcm9tIHRoaXMgYWdlbnRcbiAgQWdlbnQucHJvdG90eXBlW2ZuXSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICB0aGlzLl9kZWZhdWx0cy5wdXNoKHsgZm4sIGFyZ3MgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59KTtcblxuQWdlbnQucHJvdG90eXBlLl9zZXREZWZhdWx0cyA9IGZ1bmN0aW9uKHJlcSkge1xuICB0aGlzLl9kZWZhdWx0cy5mb3JFYWNoKGRlZiA9PiB7XG4gICAgcmVxW2RlZi5mbl0oLi4uZGVmLmFyZ3MpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWdlbnQ7XG4iLCIvKipcbiAqIFJvb3QgcmVmZXJlbmNlIGZvciBpZnJhbWVzLlxuICovXG5cbmxldCByb290O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIEJyb3dzZXIgd2luZG93XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJykge1xuICAvLyBPdGhlciBlbnZpcm9ubWVudHNcbiAgY29uc29sZS53YXJuKFxuICAgICdVc2luZyBicm93c2VyLW9ubHkgdmVyc2lvbiBvZiBzdXBlcmFnZW50IGluIG5vbi1icm93c2VyIGVudmlyb25tZW50J1xuICApO1xuICByb290ID0gdGhpcztcbn0gZWxzZSB7XG4gIC8vIFdlYiBXb3JrZXJcbiAgcm9vdCA9IHNlbGY7XG59XG5cbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xuY29uc3Qgc2FmZVN0cmluZ2lmeSA9IHJlcXVpcmUoJ2Zhc3Qtc2FmZS1zdHJpbmdpZnknKTtcbmNvbnN0IFJlcXVlc3RCYXNlID0gcmVxdWlyZSgnLi9yZXF1ZXN0LWJhc2UnKTtcbmNvbnN0IGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pcy1vYmplY3QnKTtcbmNvbnN0IFJlc3BvbnNlQmFzZSA9IHJlcXVpcmUoJy4vcmVzcG9uc2UtYmFzZScpO1xuY29uc3QgQWdlbnQgPSByZXF1aXJlKCcuL2FnZW50LWJhc2UnKTtcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIEV4cG9zZSBgcmVxdWVzdGAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXRob2QsIHVybCkge1xuICAvLyBjYWxsYmFja1xuICBpZiAodHlwZW9mIHVybCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBuZXcgZXhwb3J0cy5SZXF1ZXN0KCdHRVQnLCBtZXRob2QpLmVuZCh1cmwpO1xuICB9XG5cbiAgLy8gdXJsIGZpcnN0XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QoJ0dFVCcsIG1ldGhvZCk7XG4gIH1cblxuICByZXR1cm4gbmV3IGV4cG9ydHMuUmVxdWVzdChtZXRob2QsIHVybCk7XG59O1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cbmNvbnN0IHJlcXVlc3QgPSBleHBvcnRzO1xuXG5leHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG4vKipcbiAqIERldGVybWluZSBYSFIuXG4gKi9cblxucmVxdWVzdC5nZXRYSFIgPSAoKSA9PiB7XG4gIGlmIChcbiAgICByb290LlhNTEh0dHBSZXF1ZXN0ICYmXG4gICAgKCFyb290LmxvY2F0aW9uIHx8XG4gICAgICByb290LmxvY2F0aW9uLnByb3RvY29sICE9PSAnZmlsZTonIHx8XG4gICAgICAhcm9vdC5BY3RpdmVYT2JqZWN0KVxuICApIHtcbiAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgfSBjYXRjaCB7fVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTtcbiAgfSBjYXRjaCB7fVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC4zLjAnKTtcbiAgfSBjYXRjaCB7fVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUCcpO1xuICB9IGNhdGNoIHt9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdCcm93c2VyLW9ubHkgdmVyc2lvbiBvZiBzdXBlcmFnZW50IGNvdWxkIG5vdCBmaW5kIFhIUicpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGFkZGVkIHRvIHN1cHBvcnQgSUUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmNvbnN0IHRyaW0gPSAnJy50cmltID8gcyA9PiBzLnRyaW0oKSA6IHMgPT4gcy5yZXBsYWNlKC8oXlxccyp8XFxzKiQpL2csICcnKTtcblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGdpdmVuIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICBjb25zdCBwYWlycyA9IFtdO1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSlcbiAgICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXksIG9ialtrZXldKTtcbiAgfVxuXG4gIHJldHVybiBwYWlycy5qb2luKCcmJyk7XG59XG5cbi8qKlxuICogSGVscHMgJ3NlcmlhbGl6ZScgd2l0aCBzZXJpYWxpemluZyBhcnJheXMuXG4gKiBNdXRhdGVzIHRoZSBwYWlycyBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlyc1xuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKi9cblxuZnVuY3Rpb24gcHVzaEVuY29kZWRLZXlWYWx1ZVBhaXIocGFpcnMsIGtleSwgdmFsKSB7XG4gIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgcGFpcnMucHVzaChlbmNvZGVVUkkoa2V5KSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHZhbC5mb3JFYWNoKHYgPT4ge1xuICAgICAgcHVzaEVuY29kZWRLZXlWYWx1ZVBhaXIocGFpcnMsIGtleSwgdik7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIGZvciAoY29uc3Qgc3Via2V5IGluIHZhbCkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIHN1YmtleSkpXG4gICAgICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBgJHtrZXl9WyR7c3Via2V5fV1gLCB2YWxbc3Via2V5XSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhaXJzLnB1c2goZW5jb2RlVVJJKGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxucmVxdWVzdC5zZXJpYWxpemVPYmplY3QgPSBzZXJpYWxpemU7XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVN0cmluZyhzdHIpIHtcbiAgY29uc3Qgb2JqID0ge307XG4gIGNvbnN0IHBhaXJzID0gc3RyLnNwbGl0KCcmJyk7XG4gIGxldCBwYWlyO1xuICBsZXQgcG9zO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwYWlycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHBhaXIgPSBwYWlyc1tpXTtcbiAgICBwb3MgPSBwYWlyLmluZGV4T2YoJz0nKTtcbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYWlyKV0gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYWlyLnNsaWNlKDAsIHBvcykpXSA9IGRlY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgcGFpci5zbGljZShwb3MgKyAxKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4cG9zZSBwYXJzZXIuXG4gKi9cblxucmVxdWVzdC5wYXJzZVN0cmluZyA9IHBhcnNlU3RyaW5nO1xuXG4vKipcbiAqIERlZmF1bHQgTUlNRSB0eXBlIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKi9cblxucmVxdWVzdC50eXBlcyA9IHtcbiAgaHRtbDogJ3RleHQvaHRtbCcsXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgeG1sOiAndGV4dC94bWwnLFxuICB1cmxlbmNvZGVkOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgZm9ybTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtLWRhdGEnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbnJlcXVlc3Quc2VyaWFsaXplID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAnYXBwbGljYXRpb24vanNvbic6IHNhZmVTdHJpbmdpZnlcbn07XG5cbi8qKlxuICogRGVmYXVsdCBwYXJzZXJzLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnBhcnNlWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKHN0cil7XG4gKiAgICAgICByZXR1cm4geyBvYmplY3QgcGFyc2VkIGZyb20gc3RyIH07XG4gKiAgICAgfTtcbiAqXG4gKi9cblxucmVxdWVzdC5wYXJzZSA9IHtcbiAgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc6IHBhcnNlU3RyaW5nLFxuICAnYXBwbGljYXRpb24vanNvbic6IEpTT04ucGFyc2Vcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGhlYWRlciBgc3RyYCBpbnRvXG4gKiBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgbWFwcGVkIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcihzdHIpIHtcbiAgY29uc3QgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgY29uc3QgZmllbGRzID0ge307XG4gIGxldCBpbmRleDtcbiAgbGV0IGxpbmU7XG4gIGxldCBmaWVsZDtcbiAgbGV0IHZhbDtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAvLyBjb3VsZCBiZSBlbXB0eSBsaW5lLCBqdXN0IHNraXAgaXRcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGZpZWxkID0gbGluZS5zbGljZSgwLCBpbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB0cmltKGxpbmUuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgZmllbGRzW2ZpZWxkXSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG1pbWVgIGlzIGpzb24gb3IgaGFzICtqc29uIHN0cnVjdHVyZWQgc3ludGF4IHN1ZmZpeC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWltZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzSlNPTihtaW1lKSB7XG4gIC8vIHNob3VsZCBtYXRjaCAvanNvbiBvciAranNvblxuICAvLyBidXQgbm90IC9qc29uLXNlcVxuICByZXR1cm4gL1svK11qc29uKCR8W14tXFx3XSkvLnRlc3QobWltZSk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIGB4aHJgLlxuICpcbiAqICAtIHNldCBmbGFncyAoLm9rLCAuZXJyb3IsIGV0YylcbiAqICAtIHBhcnNlIGhlYWRlclxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBBbGlhc2luZyBgc3VwZXJhZ2VudGAgYXMgYHJlcXVlc3RgIGlzIG5pY2U6XG4gKlxuICogICAgICByZXF1ZXN0ID0gc3VwZXJhZ2VudDtcbiAqXG4gKiAgV2UgY2FuIHVzZSB0aGUgcHJvbWlzZS1saWtlIEFQSSwgb3IgcGFzcyBjYWxsYmFja3M6XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnLycpLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICogICAgICByZXF1ZXN0LmdldCgnLycsIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIFNlbmRpbmcgZGF0YSBjYW4gYmUgY2hhaW5lZDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAuc2VuZCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5wb3N0KClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBPciBmdXJ0aGVyIHJlZHVjZWQgdG8gYSBzaW5nbGUgY2FsbCBmb3Igc2ltcGxlIGNhc2VzOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIEBwYXJhbSB7WE1MSFRUUFJlcXVlc3R9IHhoclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSkge1xuICB0aGlzLnJlcSA9IHJlcTtcbiAgdGhpcy54aHIgPSB0aGlzLnJlcS54aHI7XG4gIC8vIHJlc3BvbnNlVGV4dCBpcyBhY2Nlc3NpYmxlIG9ubHkgaWYgcmVzcG9uc2VUeXBlIGlzICcnIG9yICd0ZXh0JyBhbmQgb24gb2xkZXIgYnJvd3NlcnNcbiAgdGhpcy50ZXh0ID1cbiAgICAodGhpcy5yZXEubWV0aG9kICE9PSAnSEVBRCcgJiZcbiAgICAgICh0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICcnIHx8IHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnKSkgfHxcbiAgICB0eXBlb2YgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB0aGlzLnhoci5yZXNwb25zZVRleHRcbiAgICAgIDogbnVsbDtcbiAgdGhpcy5zdGF0dXNUZXh0ID0gdGhpcy5yZXEueGhyLnN0YXR1c1RleHQ7XG4gIGxldCB7IHN0YXR1cyB9ID0gdGhpcy54aHI7XG4gIC8vIGhhbmRsZSBJRTkgYnVnOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwMDQ2OTcyL21zaWUtcmV0dXJucy1zdGF0dXMtY29kZS1vZi0xMjIzLWZvci1hamF4LXJlcXVlc3RcbiAgaWYgKHN0YXR1cyA9PT0gMTIyMykge1xuICAgIHN0YXR1cyA9IDIwNDtcbiAgfVxuXG4gIHRoaXMuX3NldFN0YXR1c1Byb3BlcnRpZXMoc3RhdHVzKTtcbiAgdGhpcy5oZWFkZXJzID0gcGFyc2VIZWFkZXIodGhpcy54aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycztcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuX3NldEhlYWRlclByb3BlcnRpZXModGhpcy5oZWFkZXIpO1xuXG4gIGlmICh0aGlzLnRleHQgPT09IG51bGwgJiYgcmVxLl9yZXNwb25zZVR5cGUpIHtcbiAgICB0aGlzLmJvZHkgPSB0aGlzLnhoci5yZXNwb25zZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmJvZHkgPVxuICAgICAgdGhpcy5yZXEubWV0aG9kID09PSAnSEVBRCdcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogdGhpcy5fcGFyc2VCb2R5KHRoaXMudGV4dCA/IHRoaXMudGV4dCA6IHRoaXMueGhyLnJlc3BvbnNlKTtcbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcFxuUmVzcG9uc2VCYXNlKFJlc3BvbnNlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGJvZHkgYHN0cmAuXG4gKlxuICogVXNlZCBmb3IgYXV0by1wYXJzaW5nIG9mIGJvZGllcy4gUGFyc2Vyc1xuICogYXJlIGRlZmluZWQgb24gdGhlIGBzdXBlcmFnZW50LnBhcnNlYCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuX3BhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cikge1xuICBsZXQgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG4gIGlmICh0aGlzLnJlcS5fcGFyc2VyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxLl9wYXJzZXIodGhpcywgc3RyKTtcbiAgfVxuXG4gIGlmICghcGFyc2UgJiYgaXNKU09OKHRoaXMudHlwZSkpIHtcbiAgICBwYXJzZSA9IHJlcXVlc3QucGFyc2VbJ2FwcGxpY2F0aW9uL2pzb24nXTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZSAmJiBzdHIgJiYgKHN0ci5sZW5ndGggPiAwIHx8IHN0ciBpbnN0YW5jZW9mIE9iamVjdClcbiAgICA/IHBhcnNlKHN0cilcbiAgICA6IG51bGw7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBgRXJyb3JgIHJlcHJlc2VudGF0aXZlIG9mIHRoaXMgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybiB7RXJyb3J9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS50b0Vycm9yID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgcmVxIH0gPSB0aGlzO1xuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuICBjb25zdCB7IHVybCB9ID0gcmVxO1xuXG4gIGNvbnN0IG1zZyA9IGBjYW5ub3QgJHttZXRob2R9ICR7dXJsfSAoJHt0aGlzLnN0YXR1c30pYDtcbiAgY29uc3QgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IG1ldGhvZDtcbiAgZXJyLnVybCA9IHVybDtcblxuICByZXR1cm4gZXJyO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5yZXF1ZXN0LlJlc3BvbnNlID0gUmVzcG9uc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsIHVybCkge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeSB8fCBbXTtcbiAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmhlYWRlciA9IHt9OyAvLyBwcmVzZXJ2ZXMgaGVhZGVyIG5hbWUgY2FzZVxuICB0aGlzLl9oZWFkZXIgPSB7fTsgLy8gY29lcmNlcyBoZWFkZXIgbmFtZXMgdG8gbG93ZXJjYXNlXG4gIHRoaXMub24oJ2VuZCcsICgpID0+IHtcbiAgICBsZXQgZXJyID0gbnVsbDtcbiAgICBsZXQgcmVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXMgPSBuZXcgUmVzcG9uc2Uoc2VsZik7XG4gICAgfSBjYXRjaCAoZXJyXykge1xuICAgICAgZXJyID0gbmV3IEVycm9yKCdQYXJzZXIgaXMgdW5hYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZScpO1xuICAgICAgZXJyLnBhcnNlID0gdHJ1ZTtcbiAgICAgIGVyci5vcmlnaW5hbCA9IGVycl87XG4gICAgICAvLyBpc3N1ZSAjNjc1OiByZXR1cm4gdGhlIHJhdyByZXNwb25zZSBpZiB0aGUgcmVzcG9uc2UgcGFyc2luZyBmYWlsc1xuICAgICAgaWYgKHNlbGYueGhyKSB7XG4gICAgICAgIC8vIGllOSBkb2Vzbid0IGhhdmUgJ3Jlc3BvbnNlJyBwcm9wZXJ0eVxuICAgICAgICBlcnIucmF3UmVzcG9uc2UgPVxuICAgICAgICAgIHR5cGVvZiBzZWxmLnhoci5yZXNwb25zZVR5cGUgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IHNlbGYueGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICAgICAgOiBzZWxmLnhoci5yZXNwb25zZTtcbiAgICAgICAgLy8gaXNzdWUgIzg3NjogcmV0dXJuIHRoZSBodHRwIHN0YXR1cyBjb2RlIGlmIHRoZSByZXNwb25zZSBwYXJzaW5nIGZhaWxzXG4gICAgICAgIGVyci5zdGF0dXMgPSBzZWxmLnhoci5zdGF0dXMgPyBzZWxmLnhoci5zdGF0dXMgOiBudWxsO1xuICAgICAgICBlcnIuc3RhdHVzQ29kZSA9IGVyci5zdGF0dXM7IC8vIGJhY2t3YXJkcy1jb21wYXQgb25seVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyLnJhd1Jlc3BvbnNlID0gbnVsbDtcbiAgICAgICAgZXJyLnN0YXR1cyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVycik7XG4gICAgfVxuXG4gICAgc2VsZi5lbWl0KCdyZXNwb25zZScsIHJlcyk7XG5cbiAgICBsZXQgbmV3X2VycjtcbiAgICB0cnkge1xuICAgICAgaWYgKCFzZWxmLl9pc1Jlc3BvbnNlT0socmVzKSkge1xuICAgICAgICBuZXdfZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgIHJlcy5zdGF0dXNUZXh0IHx8IHJlcy50ZXh0IHx8ICdVbnN1Y2Nlc3NmdWwgSFRUUCByZXNwb25zZSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJfKSB7XG4gICAgICBuZXdfZXJyID0gZXJyXzsgLy8gb2soKSBjYWxsYmFjayBjYW4gdGhyb3dcbiAgICB9XG5cbiAgICAvLyAjMTAwMCBkb24ndCBjYXRjaCBlcnJvcnMgZnJvbSB0aGUgY2FsbGJhY2sgdG8gYXZvaWQgZG91YmxlIGNhbGxpbmcgaXRcbiAgICBpZiAobmV3X2Vycikge1xuICAgICAgbmV3X2Vyci5vcmlnaW5hbCA9IGVycjtcbiAgICAgIG5ld19lcnIucmVzcG9uc2UgPSByZXM7XG4gICAgICBuZXdfZXJyLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG4gICAgICBzZWxmLmNhbGxiYWNrKG5ld19lcnIsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIE1peGluIGBFbWl0dGVyYCBhbmQgYFJlcXVlc3RCYXNlYC5cbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcFxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcFxuUmVxdWVzdEJhc2UoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFNldCBDb250ZW50LVR5cGUgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCd4bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ2FwcGxpY2F0aW9uL3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdGhpcy5zZXQoJ0NvbnRlbnQtVHlwZScsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgQWNjZXB0IHRvIGB0eXBlYCwgbWFwcGluZyB2YWx1ZXMgZnJvbSBgcmVxdWVzdC50eXBlc2AuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICBzdXBlcmFnZW50LnR5cGVzLmpzb24gPSAnYXBwbGljYXRpb24vanNvbic7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdqc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhY2NlcHRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hY2NlcHQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHRoaXMuc2V0KCdBY2NlcHQnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEF1dGhvcml6YXRpb24gZmllbGQgdmFsdWUgd2l0aCBgdXNlcmAgYW5kIGBwYXNzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IFtwYXNzXSBvcHRpb25hbCBpbiBjYXNlIG9mIHVzaW5nICdiZWFyZXInIGFzIHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIHdpdGggJ3R5cGUnIHByb3BlcnR5ICdhdXRvJywgJ2Jhc2ljJyBvciAnYmVhcmVyJyAoZGVmYXVsdCAnYmFzaWMnKVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF1dGggPSBmdW5jdGlvbih1c2VyLCBwYXNzLCBvcHRpb25zKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSBwYXNzID0gJyc7XG4gIGlmICh0eXBlb2YgcGFzcyA9PT0gJ29iamVjdCcgJiYgcGFzcyAhPT0gbnVsbCkge1xuICAgIC8vIHBhc3MgaXMgb3B0aW9uYWwgYW5kIGNhbiBiZSByZXBsYWNlZCB3aXRoIG9wdGlvbnNcbiAgICBvcHRpb25zID0gcGFzcztcbiAgICBwYXNzID0gJyc7XG4gIH1cblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgdHlwZTogdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicgPyAnYmFzaWMnIDogJ2F1dG8nXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGVuY29kZXIgPSBzdHJpbmcgPT4ge1xuICAgIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGJ0b2Eoc3RyaW5nKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgYmFzaWMgYXV0aCwgYnRvYSBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9O1xuXG4gIHJldHVybiB0aGlzLl9hdXRoKHVzZXIsIHBhc3MsIG9wdGlvbnMsIGVuY29kZXIpO1xufTtcblxuLyoqXG4gKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgcmVxdWVzdC5nZXQoJy9zaG9lcycpXG4gKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiAqICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCkge1xuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHZhbCA9IHNlcmlhbGl6ZSh2YWwpO1xuICBpZiAodmFsKSB0aGlzLl9xdWVyeS5wdXNoKHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBRdWV1ZSB0aGUgZ2l2ZW4gYGZpbGVgIGFzIGFuIGF0dGFjaG1lbnQgdG8gdGhlIHNwZWNpZmllZCBgZmllbGRgLFxuICogd2l0aCBvcHRpb25hbCBgb3B0aW9uc2AgKG9yIGZpbGVuYW1lKS5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2goJ2NvbnRlbnQnLCBuZXcgQmxvYihbJzxhIGlkPVwiYVwiPjxiIGlkPVwiYlwiPmhleSE8L2I+PC9hPiddLCB7IHR5cGU6IFwidGV4dC9odG1sXCJ9KSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEBwYXJhbSB7QmxvYnxGaWxlfSBmaWxlXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbihmaWVsZCwgZmlsZSwgb3B0aW9ucykge1xuICBpZiAoZmlsZSkge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdXBlcmFnZW50IGNhbid0IG1peCAuc2VuZCgpIGFuZCAuYXR0YWNoKClcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0Rm9ybURhdGEoKS5hcHBlbmQoZmllbGQsIGZpbGUsIG9wdGlvbnMgfHwgZmlsZS5uYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX2dldEZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5fZm9ybURhdGEpIHtcbiAgICB0aGlzLl9mb3JtRGF0YSA9IG5ldyByb290LkZvcm1EYXRhKCk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fZm9ybURhdGE7XG59O1xuXG4vKipcbiAqIEludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCBgZXJyYCBhbmQgYHJlc2BcbiAqIGFuZCBoYW5kbGUgYXJpdHkgY2hlY2suXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNhbGxiYWNrID0gZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgaWYgKHRoaXMuX3Nob3VsZFJldHJ5KGVyciwgcmVzKSkge1xuICAgIHJldHVybiB0aGlzLl9yZXRyeSgpO1xuICB9XG5cbiAgY29uc3QgZm4gPSB0aGlzLl9jYWxsYmFjaztcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcblxuICBpZiAoZXJyKSB7XG4gICAgaWYgKHRoaXMuX21heFJldHJpZXMpIGVyci5yZXRyaWVzID0gdGhpcy5fcmV0cmllcyAtIDE7XG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cblxuICBmbihlcnIsIHJlcyk7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHgtZG9tYWluIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZXJyID0gbmV3IEVycm9yKFxuICAgICdSZXF1ZXN0IGhhcyBiZWVuIHRlcm1pbmF0ZWRcXG5Qb3NzaWJsZSBjYXVzZXM6IHRoZSBuZXR3b3JrIGlzIG9mZmxpbmUsIE9yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4sIHRoZSBwYWdlIGlzIGJlaW5nIHVubG9hZGVkLCBldGMuJ1xuICApO1xuICBlcnIuY3Jvc3NEb21haW4gPSB0cnVlO1xuXG4gIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9IHRoaXMubWV0aG9kO1xuICBlcnIudXJsID0gdGhpcy51cmw7XG5cbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTtcblxuLy8gVGhpcyBvbmx5IHdhcm5zLCBiZWNhdXNlIHRoZSByZXF1ZXN0IGlzIHN0aWxsIGxpa2VseSB0byB3b3JrXG5SZXF1ZXN0LnByb3RvdHlwZS5hZ2VudCA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLndhcm4oJ1RoaXMgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyIHZlcnNpb24gb2Ygc3VwZXJhZ2VudCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLmNhID0gUmVxdWVzdC5wcm90b3R5cGUuYWdlbnQ7XG5SZXF1ZXN0LnByb3RvdHlwZS5idWZmZXIgPSBSZXF1ZXN0LnByb3RvdHlwZS5jYTtcblxuLy8gVGhpcyB0aHJvd3MsIGJlY2F1c2UgaXQgY2FuJ3Qgc2VuZC9yZWNlaXZlIGRhdGEgYXMgZXhwZWN0ZWRcblJlcXVlc3QucHJvdG90eXBlLndyaXRlID0gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ1N0cmVhbWluZyBpcyBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXIgdmVyc2lvbiBvZiBzdXBlcmFnZW50J1xuICApO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUucGlwZSA9IFJlcXVlc3QucHJvdG90eXBlLndyaXRlO1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgaG9zdCBvYmplY3QsXG4gKiB3ZSBkb24ndCB3YW50IHRvIHNlcmlhbGl6ZSB0aGVzZSA6KVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogaG9zdCBvYmplY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IGlzIGEgaG9zdCBvYmplY3RcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5SZXF1ZXN0LnByb3RvdHlwZS5faXNIb3N0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIC8vIE5hdGl2ZSBvYmplY3RzIHN0cmluZ2lmeSB0byBbb2JqZWN0IEZpbGVdLCBbb2JqZWN0IEJsb2JdLCBbb2JqZWN0IEZvcm1EYXRhXSwgZXRjLlxuICByZXR1cm4gKFxuICAgIG9iaiAmJlxuICAgIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgIUFycmF5LmlzQXJyYXkob2JqKSAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJ1xuICApO1xufTtcblxuLyoqXG4gKiBJbml0aWF0ZSByZXF1ZXN0LCBpbnZva2luZyBjYWxsYmFjayBgZm4ocmVzKWBcbiAqIHdpdGggYW4gaW5zdGFuY2VvZiBgUmVzcG9uc2VgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oZm4pIHtcbiAgaWYgKHRoaXMuX2VuZENhbGxlZCkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdXYXJuaW5nOiAuZW5kKCkgd2FzIGNhbGxlZCB0d2ljZS4gVGhpcyBpcyBub3Qgc3VwcG9ydGVkIGluIHN1cGVyYWdlbnQnXG4gICAgKTtcbiAgfVxuXG4gIHRoaXMuX2VuZENhbGxlZCA9IHRydWU7XG5cbiAgLy8gc3RvcmUgY2FsbGJhY2tcbiAgdGhpcy5fY2FsbGJhY2sgPSBmbiB8fCBub29wO1xuXG4gIC8vIHF1ZXJ5c3RyaW5nXG4gIHRoaXMuX2ZpbmFsaXplUXVlcnlTdHJpbmcoKTtcblxuICB0aGlzLl9lbmQoKTtcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLl9zZXRVcGxvYWRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIC8vIHVwbG9hZCB0aW1lb3V0IGl0J3Mgd29rcnMgb25seSBpZiBkZWFkbGluZSB0aW1lb3V0IGlzIG9mZlxuICBpZiAodGhpcy5fdXBsb2FkVGltZW91dCAmJiAhdGhpcy5fdXBsb2FkVGltZW91dFRpbWVyKSB7XG4gICAgdGhpcy5fdXBsb2FkVGltZW91dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZWxmLl90aW1lb3V0RXJyb3IoXG4gICAgICAgICdVcGxvYWQgdGltZW91dCBvZiAnLFxuICAgICAgICBzZWxmLl91cGxvYWRUaW1lb3V0LFxuICAgICAgICAnRVRJTUVET1VUJ1xuICAgICAgKTtcbiAgICB9LCB0aGlzLl91cGxvYWRUaW1lb3V0KTtcbiAgfVxufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcblJlcXVlc3QucHJvdG90eXBlLl9lbmQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX2Fib3J0ZWQpXG4gICAgcmV0dXJuIHRoaXMuY2FsbGJhY2soXG4gICAgICBuZXcgRXJyb3IoJ1RoZSByZXF1ZXN0IGhhcyBiZWVuIGFib3J0ZWQgZXZlbiBiZWZvcmUgLmVuZCgpIHdhcyBjYWxsZWQnKVxuICAgICk7XG5cbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIHRoaXMueGhyID0gcmVxdWVzdC5nZXRYSFIoKTtcbiAgY29uc3QgeyB4aHIgfSA9IHRoaXM7XG4gIGxldCBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICB0aGlzLl9zZXRUaW1lb3V0cygpO1xuXG4gIC8vIHN0YXRlIGNoYW5nZVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSB9ID0geGhyO1xuICAgIGlmIChyZWFkeVN0YXRlID49IDIgJiYgc2VsZi5fcmVzcG9uc2VUaW1lb3V0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChzZWxmLl9yZXNwb25zZVRpbWVvdXRUaW1lcik7XG4gICAgfVxuXG4gICAgaWYgKHJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbiBJRTksIHJlYWRzIHRvIGFueSBwcm9wZXJ0eSAoZS5nLiBzdGF0dXMpIG9mZiBvZiBhbiBhYm9ydGVkIFhIUiB3aWxsXG4gICAgLy8gcmVzdWx0IGluIHRoZSBlcnJvciBcIkNvdWxkIG5vdCBjb21wbGV0ZSB0aGUgb3BlcmF0aW9uIGR1ZSB0byBlcnJvciBjMDBjMDIzZlwiXG4gICAgbGV0IHN0YXR1cztcbiAgICB0cnkge1xuICAgICAgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICB9IGNhdGNoIHtcbiAgICAgIHN0YXR1cyA9IDA7XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgIGlmIChzZWxmLnRpbWVkb3V0IHx8IHNlbGYuX2Fib3J0ZWQpIHJldHVybjtcbiAgICAgIHJldHVybiBzZWxmLmNyb3NzRG9tYWluRXJyb3IoKTtcbiAgICB9XG5cbiAgICBzZWxmLmVtaXQoJ2VuZCcpO1xuICB9O1xuXG4gIC8vIHByb2dyZXNzXG4gIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gKGRpcmVjdGlvbiwgZSkgPT4ge1xuICAgIGlmIChlLnRvdGFsID4gMCkge1xuICAgICAgZS5wZXJjZW50ID0gKGUubG9hZGVkIC8gZS50b3RhbCkgKiAxMDA7XG5cbiAgICAgIGlmIChlLnBlcmNlbnQgPT09IDEwMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5fdXBsb2FkVGltZW91dFRpbWVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICBzZWxmLmVtaXQoJ3Byb2dyZXNzJywgZSk7XG4gIH07XG5cbiAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XG4gICAgdHJ5IHtcbiAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGhhbmRsZVByb2dyZXNzLmJpbmQobnVsbCwgJ2Rvd25sb2FkJykpO1xuICAgICAgaWYgKHhoci51cGxvYWQpIHtcbiAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICdwcm9ncmVzcycsXG4gICAgICAgICAgaGFuZGxlUHJvZ3Jlc3MuYmluZChudWxsLCAndXBsb2FkJylcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEFjY2Vzc2luZyB4aHIudXBsb2FkIGZhaWxzIGluIElFIGZyb20gYSB3ZWIgd29ya2VyLCBzbyBqdXN0IHByZXRlbmQgaXQgZG9lc24ndCBleGlzdC5cbiAgICAgIC8vIFJlcG9ydGVkIGhlcmU6XG4gICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzgzNzI0NS94bWxodHRwcmVxdWVzdC11cGxvYWQtdGhyb3dzLWludmFsaWQtYXJndW1lbnQtd2hlbi11c2VkLWZyb20td2ViLXdvcmtlci1jb250ZXh0XG4gICAgfVxuICB9XG5cbiAgaWYgKHhoci51cGxvYWQpIHtcbiAgICB0aGlzLl9zZXRVcGxvYWRUaW1lb3V0KCk7XG4gIH1cblxuICAvLyBpbml0aWF0ZSByZXF1ZXN0XG4gIHRyeSB7XG4gICAgaWYgKHRoaXMudXNlcm5hbWUgJiYgdGhpcy5wYXNzd29yZCkge1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlLCB0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIHNlZSAjMTE0OVxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKGVycik7XG4gIH1cblxuICAvLyBDT1JTXG4gIGlmICh0aGlzLl93aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gIC8vIGJvZHlcbiAgaWYgKFxuICAgICF0aGlzLl9mb3JtRGF0YSAmJlxuICAgIHRoaXMubWV0aG9kICE9PSAnR0VUJyAmJlxuICAgIHRoaXMubWV0aG9kICE9PSAnSEVBRCcgJiZcbiAgICB0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycgJiZcbiAgICAhdGhpcy5faXNIb3N0KGRhdGEpXG4gICkge1xuICAgIC8vIHNlcmlhbGl6ZSBzdHVmZlxuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gdGhpcy5faGVhZGVyWydjb250ZW50LXR5cGUnXTtcbiAgICBsZXQgc2VyaWFsaXplID1cbiAgICAgIHRoaXMuX3NlcmlhbGl6ZXIgfHxcbiAgICAgIHJlcXVlc3Quc2VyaWFsaXplW2NvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKVswXSA6ICcnXTtcbiAgICBpZiAoIXNlcmlhbGl6ZSAmJiBpc0pTT04oY29udGVudFR5cGUpKSB7XG4gICAgICBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24vanNvbiddO1xuICAgIH1cblxuICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICBmb3IgKGNvbnN0IGZpZWxkIGluIHRoaXMuaGVhZGVyKSB7XG4gICAgaWYgKHRoaXMuaGVhZGVyW2ZpZWxkXSA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuaGVhZGVyLCBmaWVsZCkpXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihmaWVsZCwgdGhpcy5oZWFkZXJbZmllbGRdKTtcbiAgfVxuXG4gIGlmICh0aGlzLl9yZXNwb25zZVR5cGUpIHtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gdGhpcy5fcmVzcG9uc2VUeXBlO1xuICB9XG5cbiAgLy8gc2VuZCBzdHVmZlxuICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB0aGlzKTtcblxuICAvLyBJRTExIHhoci5zZW5kKHVuZGVmaW5lZCkgc2VuZHMgJ3VuZGVmaW5lZCcgc3RyaW5nIGFzIFBPU1QgcGF5bG9hZCAoaW5zdGVhZCBvZiBub3RoaW5nKVxuICAvLyBXZSBuZWVkIG51bGwgaGVyZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICB4aHIuc2VuZCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogZGF0YSk7XG59O1xuXG5yZXF1ZXN0LmFnZW50ID0gKCkgPT4gbmV3IEFnZW50KCk7XG5cblsnR0VUJywgJ1BPU1QnLCAnT1BUSU9OUycsICdQQVRDSCcsICdQVVQnLCAnREVMRVRFJ10uZm9yRWFjaChtZXRob2QgPT4ge1xuICBBZ2VudC5wcm90b3R5cGVbbWV0aG9kLnRvTG93ZXJDYXNlKCldID0gZnVuY3Rpb24odXJsLCBmbikge1xuICAgIGNvbnN0IHJlcSA9IG5ldyByZXF1ZXN0LlJlcXVlc3QobWV0aG9kLCB1cmwpO1xuICAgIHRoaXMuX3NldERlZmF1bHRzKHJlcSk7XG4gICAgaWYgKGZuKSB7XG4gICAgICByZXEuZW5kKGZuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxO1xuICB9O1xufSk7XG5cbkFnZW50LnByb3RvdHlwZS5kZWwgPSBBZ2VudC5wcm90b3R5cGUuZGVsZXRlO1xuXG4vKipcbiAqIEdFVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZ2V0ID0gKHVybCwgZGF0YSwgZm4pID0+IHtcbiAgY29uc3QgcmVxID0gcmVxdWVzdCgnR0VUJywgdXJsKTtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm4gPSBkYXRhO1xuICAgIGRhdGEgPSBudWxsO1xuICB9XG5cbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogSEVBRCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuaGVhZCA9ICh1cmwsIGRhdGEsIGZuKSA9PiB7XG4gIGNvbnN0IHJlcSA9IHJlcXVlc3QoJ0hFQUQnLCB1cmwpO1xuICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmbiA9IGRhdGE7XG4gICAgZGF0YSA9IG51bGw7XG4gIH1cblxuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBPUFRJT05TIHF1ZXJ5IHRvIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5vcHRpb25zID0gKHVybCwgZGF0YSwgZm4pID0+IHtcbiAgY29uc3QgcmVxID0gcmVxdWVzdCgnT1BUSU9OUycsIHVybCk7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gbnVsbDtcbiAgfVxuXG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gW2RhdGFdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkZWwodXJsLCBkYXRhLCBmbikge1xuICBjb25zdCByZXEgPSByZXF1ZXN0KCdERUxFVEUnLCB1cmwpO1xuICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmbiA9IGRhdGE7XG4gICAgZGF0YSA9IG51bGw7XG4gIH1cblxuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59XG5cbnJlcXVlc3QuZGVsID0gZGVsO1xucmVxdWVzdC5kZWxldGUgPSBkZWw7XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBbZGF0YV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucGF0Y2ggPSAodXJsLCBkYXRhLCBmbikgPT4ge1xuICBjb25zdCByZXEgPSByZXF1ZXN0KCdQQVRDSCcsIHVybCk7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gbnVsbDtcbiAgfVxuXG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUE9TVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IFtkYXRhXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wb3N0ID0gKHVybCwgZGF0YSwgZm4pID0+IHtcbiAgY29uc3QgcmVxID0gcmVxdWVzdCgnUE9TVCcsIHVybCk7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gbnVsbDtcbiAgfVxuXG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUFVUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gW2RhdGFdIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9ICh1cmwsIGRhdGEsIGZuKSA9PiB7XG4gIGNvbnN0IHJlcSA9IHJlcXVlc3QoJ1BVVCcsIHVybCk7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gbnVsbDtcbiAgfVxuXG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG4iLCIvKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIE1vZHVsZSBvZiBtaXhlZC1pbiBmdW5jdGlvbnMgc2hhcmVkIGJldHdlZW4gbm9kZSBhbmQgY2xpZW50IGNvZGVcbiAqL1xuY29uc3QgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzLW9iamVjdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdEJhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gUmVxdWVzdEJhc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdEJhc2VgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdEJhc2Uob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufVxuXG4vKipcbiAqIE1peGluIHRoZSBwcm90b3R5cGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gUmVxdWVzdEJhc2UucHJvdG90eXBlKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChSZXF1ZXN0QmFzZS5wcm90b3R5cGUsIGtleSkpXG4gICAgICBvYmpba2V5XSA9IFJlcXVlc3RCYXNlLnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBDbGVhciBwcmV2aW91cyB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIGNsZWFyVGltZW91dCh0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lcik7XG4gIGNsZWFyVGltZW91dCh0aGlzLl91cGxvYWRUaW1lb3V0VGltZXIpO1xuICBkZWxldGUgdGhpcy5fdGltZXI7XG4gIGRlbGV0ZSB0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lcjtcbiAgZGVsZXRlIHRoaXMuX3VwbG9hZFRpbWVvdXRUaW1lcjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE92ZXJyaWRlIGRlZmF1bHQgcmVzcG9uc2UgYm9keSBwYXJzZXJcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHRvIGNvbnZlcnQgaW5jb21pbmcgZGF0YSBpbnRvIHJlcXVlc3QuYm9keVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIHRoaXMuX3BhcnNlciA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IGZvcm1hdCBvZiBiaW5hcnkgcmVzcG9uc2UgYm9keS5cbiAqIEluIGJyb3dzZXIgdmFsaWQgZm9ybWF0cyBhcmUgJ2Jsb2InIGFuZCAnYXJyYXlidWZmZXInLFxuICogd2hpY2ggcmV0dXJuIEJsb2IgYW5kIEFycmF5QnVmZmVyLCByZXNwZWN0aXZlbHkuXG4gKlxuICogSW4gTm9kZSBhbGwgdmFsdWVzIHJlc3VsdCBpbiBCdWZmZXIuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAucmVzcG9uc2VUeXBlKCdibG9iJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uKHZhbCkge1xuICB0aGlzLl9yZXNwb25zZVR5cGUgPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPdmVycmlkZSBkZWZhdWx0IHJlcXVlc3QgYm9keSBzZXJpYWxpemVyXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB0byBjb252ZXJ0IGRhdGEgc2V0IHZpYSAuc2VuZCBvciAuYXR0YWNoIGludG8gcGF5bG9hZCB0byBzZW5kXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uKGZuKSB7XG4gIHRoaXMuX3NlcmlhbGl6ZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aW1lb3V0cy5cbiAqXG4gKiAtIHJlc3BvbnNlIHRpbWVvdXQgaXMgdGltZSBiZXR3ZWVuIHNlbmRpbmcgcmVxdWVzdCBhbmQgcmVjZWl2aW5nIHRoZSBmaXJzdCBieXRlIG9mIHRoZSByZXNwb25zZS4gSW5jbHVkZXMgRE5TIGFuZCBjb25uZWN0aW9uIHRpbWUuXG4gKiAtIGRlYWRsaW5lIGlzIHRoZSB0aW1lIGZyb20gc3RhcnQgb2YgdGhlIHJlcXVlc3QgdG8gcmVjZWl2aW5nIHJlc3BvbnNlIGJvZHkgaW4gZnVsbC4gSWYgdGhlIGRlYWRsaW5lIGlzIHRvbyBzaG9ydCBsYXJnZSBmaWxlcyBtYXkgbm90IGxvYWQgYXQgYWxsIG9uIHNsb3cgY29ubmVjdGlvbnMuXG4gKiAtIHVwbG9hZCBpcyB0aGUgdGltZSAgc2luY2UgbGFzdCBiaXQgb2YgZGF0YSB3YXMgc2VudCBvciByZWNlaXZlZC4gVGhpcyB0aW1lb3V0IHdvcmtzIG9ubHkgaWYgZGVhZGxpbmUgdGltZW91dCBpcyBvZmZcbiAqXG4gKiBWYWx1ZSBvZiAwIG9yIGZhbHNlIG1lYW5zIG5vIHRpbWVvdXQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSBtcyBvciB7cmVzcG9uc2UsIGRlYWRsaW5lfVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMgfHwgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhpcy5fdGltZW91dCA9IG9wdGlvbnM7XG4gICAgdGhpcy5fcmVzcG9uc2VUaW1lb3V0ID0gMDtcbiAgICB0aGlzLl91cGxvYWRUaW1lb3V0ID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZvciAoY29uc3Qgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIG9wdGlvbikpIHtcbiAgICAgIHN3aXRjaCAob3B0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2RlYWRsaW5lJzpcbiAgICAgICAgICB0aGlzLl90aW1lb3V0ID0gb3B0aW9ucy5kZWFkbGluZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgICAgIHRoaXMuX3Jlc3BvbnNlVGltZW91dCA9IG9wdGlvbnMucmVzcG9uc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VwbG9hZCc6XG4gICAgICAgICAgdGhpcy5fdXBsb2FkVGltZW91dCA9IG9wdGlvbnMudXBsb2FkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybignVW5rbm93biB0aW1lb3V0IG9wdGlvbicsIG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBudW1iZXIgb2YgcmV0cnkgYXR0ZW1wdHMgb24gZXJyb3IuXG4gKlxuICogRmFpbGVkIHJlcXVlc3RzIHdpbGwgYmUgcmV0cmllZCAnY291bnQnIHRpbWVzIGlmIHRpbWVvdXQgb3IgZXJyLmNvZGUgPj0gNTAwLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5yZXRyeSA9IGZ1bmN0aW9uKGNvdW50LCBmbikge1xuICAvLyBEZWZhdWx0IHRvIDEgaWYgbm8gY291bnQgcGFzc2VkIG9yIHRydWVcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfHwgY291bnQgPT09IHRydWUpIGNvdW50ID0gMTtcbiAgaWYgKGNvdW50IDw9IDApIGNvdW50ID0gMDtcbiAgdGhpcy5fbWF4UmV0cmllcyA9IGNvdW50O1xuICB0aGlzLl9yZXRyaWVzID0gMDtcbiAgdGhpcy5fcmV0cnlDYWxsYmFjayA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmNvbnN0IEVSUk9SX0NPREVTID0gWydFQ09OTlJFU0VUJywgJ0VUSU1FRE9VVCcsICdFQUREUklORk8nLCAnRVNPQ0tFVFRJTUVET1VUJ107XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgcmVxdWVzdCBzaG91bGQgYmUgcmV0cmllZC5cbiAqIChCb3Jyb3dlZCBmcm9tIHNlZ21lbnRpby9zdXBlcmFnZW50LXJldHJ5KVxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBhbiBlcnJvclxuICogQHBhcmFtIHtSZXNwb25zZX0gW3Jlc10gcmVzcG9uc2VcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpZiBzZWdtZW50IHNob3VsZCBiZSByZXRyaWVkXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fc2hvdWxkUmV0cnkgPSBmdW5jdGlvbihlcnIsIHJlcykge1xuICBpZiAoIXRoaXMuX21heFJldHJpZXMgfHwgdGhpcy5fcmV0cmllcysrID49IHRoaXMuX21heFJldHJpZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5fcmV0cnlDYWxsYmFjaykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBvdmVycmlkZSA9IHRoaXMuX3JldHJ5Q2FsbGJhY2soZXJyLCByZXMpO1xuICAgICAgaWYgKG92ZXJyaWRlID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChvdmVycmlkZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIHVuZGVmaW5lZCBmYWxscyBiYWNrIHRvIGRlZmF1bHRzXG4gICAgfSBjYXRjaCAoZXJyXykge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJfKTtcbiAgICB9XG4gIH1cblxuICBpZiAocmVzICYmIHJlcy5zdGF0dXMgJiYgcmVzLnN0YXR1cyA+PSA1MDAgJiYgcmVzLnN0YXR1cyAhPT0gNTAxKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKGVycikge1xuICAgIGlmIChlcnIuY29kZSAmJiBFUlJPUl9DT0RFUy5pbmNsdWRlcyhlcnIuY29kZSkpIHJldHVybiB0cnVlO1xuICAgIC8vIFN1cGVyYWdlbnQgdGltZW91dFxuICAgIGlmIChlcnIudGltZW91dCAmJiBlcnIuY29kZSA9PT0gJ0VDT05OQUJPUlRFRCcpIHJldHVybiB0cnVlO1xuICAgIGlmIChlcnIuY3Jvc3NEb21haW4pIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBSZXRyeSByZXF1ZXN0XG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3JldHJ5ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG5cbiAgLy8gbm9kZVxuICBpZiAodGhpcy5yZXEpIHtcbiAgICB0aGlzLnJlcSA9IG51bGw7XG4gICAgdGhpcy5yZXEgPSB0aGlzLnJlcXVlc3QoKTtcbiAgfVxuXG4gIHRoaXMuX2Fib3J0ZWQgPSBmYWxzZTtcbiAgdGhpcy50aW1lZG91dCA9IGZhbHNlO1xuICB0aGlzLnRpbWVkb3V0RXJyb3IgPSBudWxsO1xuXG4gIHJldHVybiB0aGlzLl9lbmQoKTtcbn07XG5cbi8qKlxuICogUHJvbWlzZSBzdXBwb3J0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3JlamVjdF1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgaWYgKCF0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9lbmRDYWxsZWQpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1dhcm5pbmc6IHN1cGVyYWdlbnQgcmVxdWVzdCB3YXMgc2VudCB0d2ljZSwgYmVjYXVzZSBib3RoIC5lbmQoKSBhbmQgLnRoZW4oKSB3ZXJlIGNhbGxlZC4gTmV2ZXIgY2FsbCAuZW5kKCkgaWYgeW91IHVzZSBwcm9taXNlcydcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5fZnVsbGZpbGxlZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZWxmLm9uKCdhYm9ydCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX21heFJldHJpZXMgJiYgdGhpcy5fbWF4UmV0cmllcyA+IHRoaXMuX3JldHJpZXMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50aW1lZG91dCAmJiB0aGlzLnRpbWVkb3V0RXJyb3IpIHtcbiAgICAgICAgICByZWplY3QodGhpcy50aW1lZG91dEVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0Fib3J0ZWQnKTtcbiAgICAgICAgZXJyLmNvZGUgPSAnQUJPUlRFRCc7XG4gICAgICAgIGVyci5zdGF0dXMgPSB0aGlzLnN0YXR1cztcbiAgICAgICAgZXJyLm1ldGhvZCA9IHRoaXMubWV0aG9kO1xuICAgICAgICBlcnIudXJsID0gdGhpcy51cmw7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgICBzZWxmLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XG4gICAgICAgIGVsc2UgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fZnVsbGZpbGxlZFByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xufTtcblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24oY2IpIHtcbiAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIGNiKTtcbn07XG5cbi8qKlxuICogQWxsb3cgZm9yIGV4dGVuc2lvblxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbihmbikge1xuICBmbih0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUub2sgPSBmdW5jdGlvbihjYikge1xuICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxiYWNrIHJlcXVpcmVkJyk7XG4gIHRoaXMuX29rQ2FsbGJhY2sgPSBjYjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2lzUmVzcG9uc2VPSyA9IGZ1bmN0aW9uKHJlcykge1xuICBpZiAoIXJlcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLl9va0NhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuX29rQ2FsbGJhY2socmVzKTtcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwO1xufTtcblxuLyoqXG4gKiBHZXQgcmVxdWVzdCBoZWFkZXIgYGZpZWxkYC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihmaWVsZCkge1xuICByZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqIFRoaXMgaXMgYSBkZXByZWNhdGVkIGludGVybmFsIEFQSS4gVXNlIGAuZ2V0KGZpZWxkKWAgaW5zdGVhZC5cbiAqXG4gKiAoZ2V0SGVhZGVyIGlzIG5vIGxvbmdlciB1c2VkIGludGVybmFsbHkgYnkgdGhlIHN1cGVyYWdlbnQgY29kZSBiYXNlKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKiBAZGVwcmVjYXRlZFxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXRIZWFkZXIgPSBSZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oZmllbGQsIHZhbCkge1xuICBpZiAoaXNPYmplY3QoZmllbGQpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGQpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZmllbGQsIGtleSkpXG4gICAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV0gPSB2YWw7XG4gIHRoaXMuaGVhZGVyW2ZpZWxkXSA9IHZhbDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBoZWFkZXIgYGZpZWxkYC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC51bnNldCgnVXNlci1BZ2VudCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkIGZpZWxkIG5hbWVcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgZGVsZXRlIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbiAgZGVsZXRlIHRoaXMuaGVhZGVyW2ZpZWxkXTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFdyaXRlIHRoZSBmaWVsZCBgbmFtZWAgYW5kIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0XG4gKiBmb3IgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgcmVxdWVzdCBib2RpZXMuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoJ2ZvbycsICdiYXInKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoeyBmb286ICdiYXInLCBiYXo6ICdxdXgnIH0pXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBuYW1lIG5hbWUgb2YgZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZXxCdWZmZXJ8ZnMuUmVhZFN0cmVhbX0gdmFsIHZhbHVlIG9mIGZpZWxkXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xuICAvLyBuYW1lIHNob3VsZCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LlxuICBpZiAobmFtZSA9PT0gbnVsbCB8fCB1bmRlZmluZWQgPT09IG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJy5maWVsZChuYW1lLCB2YWwpIG5hbWUgY2FuIG5vdCBiZSBlbXB0eScpO1xuICB9XG5cbiAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIi5maWVsZCgpIGNhbid0IGJlIHVzZWQgaWYgLnNlbmQoKSBpcyB1c2VkLiBQbGVhc2UgdXNlIG9ubHkgLnNlbmQoKSBvciBvbmx5IC5maWVsZCgpICYgLmF0dGFjaCgpXCJcbiAgICApO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmFtZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuYW1lLCBrZXkpKVxuICAgICAgICB0aGlzLmZpZWxkKGtleSwgbmFtZVtrZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICBmb3IgKGNvbnN0IGkgaW4gdmFsKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwgaSkpXG4gICAgICAgIHRoaXMuZmllbGQobmFtZSwgdmFsW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHZhbCBzaG91bGQgYmUgZGVmaW5lZCBub3dcbiAgaWYgKHZhbCA9PT0gbnVsbCB8fCB1bmRlZmluZWQgPT09IHZhbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignLmZpZWxkKG5hbWUsIHZhbCkgdmFsIGNhbiBub3QgYmUgZW1wdHknKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICB2YWwgPSBTdHJpbmcodmFsKTtcbiAgfVxuXG4gIHRoaXMuX2dldEZvcm1EYXRhKCkuYXBwZW5kKG5hbWUsIHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBYm9ydCB0aGUgcmVxdWVzdCwgYW5kIGNsZWFyIHBvdGVudGlhbCB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9IHJlcXVlc3RcbiAqIEBhcGkgcHVibGljXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fYWJvcnRlZCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGhpcy5fYWJvcnRlZCA9IHRydWU7XG4gIGlmICh0aGlzLnhocikgdGhpcy54aHIuYWJvcnQoKTsgLy8gYnJvd3NlclxuICBpZiAodGhpcy5yZXEpIHRoaXMucmVxLmFib3J0KCk7IC8vIG5vZGVcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgdGhpcy5lbWl0KCdhYm9ydCcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fYXV0aCA9IGZ1bmN0aW9uKHVzZXIsIHBhc3MsIG9wdGlvbnMsIGJhc2U2NEVuY29kZXIpIHtcbiAgc3dpdGNoIChvcHRpb25zLnR5cGUpIHtcbiAgICBjYXNlICdiYXNpYyc6XG4gICAgICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsIGBCYXNpYyAke2Jhc2U2NEVuY29kZXIoYCR7dXNlcn06JHtwYXNzfWApfWApO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdhdXRvJzpcbiAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VyO1xuICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2JlYXJlcic6IC8vIHVzYWdlIHdvdWxkIGJlIC5hdXRoKGFjY2Vzc1Rva2VuLCB7IHR5cGU6ICdiZWFyZXInIH0pXG4gICAgICB0aGlzLnNldCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHt1c2VyfWApO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbihvbikge1xuICAvLyBUaGlzIGlzIGJyb3dzZXItb25seSBmdW5jdGlvbmFsaXR5LiBOb2RlIHNpZGUgaXMgbm8tb3AuXG4gIGlmIChvbiA9PT0gdW5kZWZpbmVkKSBvbiA9IHRydWU7XG4gIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IG9uO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtYXggcmVkaXJlY3RzIHRvIGBuYC4gRG9lcyBub3RoaW5nIGluIGJyb3dzZXIgWEhSIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnJlZGlyZWN0cyA9IGZ1bmN0aW9uKG4pIHtcbiAgdGhpcy5fbWF4UmVkaXJlY3RzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE1heGltdW0gc2l6ZSBvZiBidWZmZXJlZCByZXNwb25zZSBib2R5LCBpbiBieXRlcy4gQ291bnRzIHVuY29tcHJlc3NlZCBzaXplLlxuICogRGVmYXVsdCAyMDBNQi5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbiBudW1iZXIgb2YgYnl0ZXNcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUubWF4UmVzcG9uc2VTaXplID0gZnVuY3Rpb24obikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhcmd1bWVudCcpO1xuICB9XG5cbiAgdGhpcy5fbWF4UmVzcG9uc2VTaXplID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgdG8gYSBwbGFpbiBqYXZhc2NyaXB0IG9iamVjdCAobm90IEpTT04gc3RyaW5nKSBvZiBzY2FsYXIgcHJvcGVydGllcy5cbiAqIE5vdGUgYXMgdGhpcyBtZXRob2QgaXMgZGVzaWduZWQgdG8gcmV0dXJuIGEgdXNlZnVsIG5vbi10aGlzIHZhbHVlLFxuICogaXQgY2Fubm90IGJlIGNoYWluZWQuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBkZXNjcmliaW5nIG1ldGhvZCwgdXJsLCBhbmQgZGF0YSBvZiB0aGlzIHJlcXVlc3RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIG1ldGhvZDogdGhpcy5tZXRob2QsXG4gICAgdXJsOiB0aGlzLnVybCxcbiAgICBkYXRhOiB0aGlzLl9kYXRhLFxuICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlclxuICB9O1xufTtcblxuLyoqXG4gKiBTZW5kIGBkYXRhYCBhcyB0aGUgcmVxdWVzdCBib2R5LCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIG1hbnVhbCBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2pzb24nKVxuICogICAgICAgICAuc2VuZCgne1wibmFtZVwiOlwidGpcIn0nKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKCduYW1lPXRvYmknKVxuICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGRhdGFcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIGNvbnN0IGlzT2JqID0gaXNPYmplY3QoZGF0YSk7XG4gIGxldCB0eXBlID0gdGhpcy5faGVhZGVyWydjb250ZW50LXR5cGUnXTtcblxuICBpZiAodGhpcy5fZm9ybURhdGEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIi5zZW5kKCkgY2FuJ3QgYmUgdXNlZCBpZiAuYXR0YWNoKCkgb3IgLmZpZWxkKCkgaXMgdXNlZC4gUGxlYXNlIHVzZSBvbmx5IC5zZW5kKCkgb3Igb25seSAuZmllbGQoKSAmIC5hdHRhY2goKVwiXG4gICAgKTtcbiAgfVxuXG4gIGlmIChpc09iaiAmJiAhdGhpcy5fZGF0YSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICB0aGlzLl9kYXRhID0gW107XG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNIb3N0KGRhdGEpKSB7XG4gICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgfVxuICB9IGVsc2UgaWYgKGRhdGEgJiYgdGhpcy5fZGF0YSAmJiB0aGlzLl9pc0hvc3QodGhpcy5fZGF0YSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBtZXJnZSB0aGVzZSBzZW5kIGNhbGxzXCIpO1xuICB9XG5cbiAgLy8gbWVyZ2VcbiAgaWYgKGlzT2JqICYmIGlzT2JqZWN0KHRoaXMuX2RhdGEpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpKVxuICAgICAgICB0aGlzLl9kYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIC8vIGRlZmF1bHQgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2Zvcm0nKTtcbiAgICB0eXBlID0gdGhpcy5faGVhZGVyWydjb250ZW50LXR5cGUnXTtcbiAgICBpZiAodHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhID8gYCR7dGhpcy5fZGF0YX0mJHtkYXRhfWAgOiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gKHRoaXMuX2RhdGEgfHwgJycpICsgZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoIWlzT2JqIHx8IHRoaXMuX2lzSG9zdChkYXRhKSkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZGVmYXVsdCB0byBqc29uXG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTb3J0IGBxdWVyeXN0cmluZ2AgYnkgdGhlIHNvcnQgZnVuY3Rpb25cbiAqXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICAgLy8gZGVmYXVsdCBvcmRlclxuICogICAgICAgcmVxdWVzdC5nZXQoJy91c2VyJylcbiAqICAgICAgICAgLnF1ZXJ5KCduYW1lPU5pY2snKVxuICogICAgICAgICAucXVlcnkoJ3NlYXJjaD1NYW5ueScpXG4gKiAgICAgICAgIC5zb3J0UXVlcnkoKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGN1c3RvbWl6ZWQgc29ydCBmdW5jdGlvblxuICogICAgICAgcmVxdWVzdC5nZXQoJy91c2VyJylcbiAqICAgICAgICAgLnF1ZXJ5KCduYW1lPU5pY2snKVxuICogICAgICAgICAucXVlcnkoJ3NlYXJjaD1NYW5ueScpXG4gKiAgICAgICAgIC5zb3J0UXVlcnkoZnVuY3Rpb24oYSwgYil7XG4gKiAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gKiAgICAgICAgIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNvcnRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc29ydFF1ZXJ5ID0gZnVuY3Rpb24oc29ydCkge1xuICAvLyBfc29ydCBkZWZhdWx0IHRvIHRydWUgYnV0IG90aGVyd2lzZSBjYW4gYmUgYSBmdW5jdGlvbiBvciBib29sZWFuXG4gIHRoaXMuX3NvcnQgPSB0eXBlb2Ygc29ydCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogc29ydDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENvbXBvc2UgcXVlcnlzdHJpbmcgdG8gYXBwZW5kIHRvIHJlcS51cmxcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9maW5hbGl6ZVF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICBpZiAocXVlcnkpIHtcbiAgICB0aGlzLnVybCArPSAodGhpcy51cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JykgKyBxdWVyeTtcbiAgfVxuXG4gIHRoaXMuX3F1ZXJ5Lmxlbmd0aCA9IDA7IC8vIE1ha2VzIHRoZSBjYWxsIGlkZW1wb3RlbnRcblxuICBpZiAodGhpcy5fc29ydCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy51cmwuaW5kZXhPZignPycpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBjb25zdCBxdWVyeUFyciA9IHRoaXMudXJsLnNsaWNlKGluZGV4ICsgMSkuc3BsaXQoJyYnKTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fc29ydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBxdWVyeUFyci5zb3J0KHRoaXMuX3NvcnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlcnlBcnIuc29ydCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVybCA9IHRoaXMudXJsLnNsaWNlKDAsIGluZGV4KSArICc/JyArIHF1ZXJ5QXJyLmpvaW4oJyYnKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0IG9ubHlcblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fYXBwZW5kUXVlcnlTdHJpbmcgPSAoKSA9PiB7XG4gIGNvbnNvbGUud2FybignVW5zdXBwb3J0ZWQnKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggdGltZW91dCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3RpbWVvdXRFcnJvciA9IGZ1bmN0aW9uKHJlYXNvbiwgdGltZW91dCwgZXJybm8pIHtcbiAgaWYgKHRoaXMuX2Fib3J0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYCR7cmVhc29uICsgdGltZW91dH1tcyBleGNlZWRlZGApO1xuICBlcnIudGltZW91dCA9IHRpbWVvdXQ7XG4gIGVyci5jb2RlID0gJ0VDT05OQUJPUlRFRCc7XG4gIGVyci5lcnJubyA9IGVycm5vO1xuICB0aGlzLnRpbWVkb3V0ID0gdHJ1ZTtcbiAgdGhpcy50aW1lZG91dEVycm9yID0gZXJyO1xuICB0aGlzLmFib3J0KCk7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fc2V0VGltZW91dHMgPSBmdW5jdGlvbigpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgLy8gZGVhZGxpbmVcbiAgaWYgKHRoaXMuX3RpbWVvdXQgJiYgIXRoaXMuX3RpbWVyKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNlbGYuX3RpbWVvdXRFcnJvcignVGltZW91dCBvZiAnLCBzZWxmLl90aW1lb3V0LCAnRVRJTUUnKTtcbiAgICB9LCB0aGlzLl90aW1lb3V0KTtcbiAgfVxuXG4gIC8vIHJlc3BvbnNlIHRpbWVvdXRcbiAgaWYgKHRoaXMuX3Jlc3BvbnNlVGltZW91dCAmJiAhdGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXIpIHtcbiAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2VsZi5fdGltZW91dEVycm9yKFxuICAgICAgICAnUmVzcG9uc2UgdGltZW91dCBvZiAnLFxuICAgICAgICBzZWxmLl9yZXNwb25zZVRpbWVvdXQsXG4gICAgICAgICdFVElNRURPVVQnXG4gICAgICApO1xuICAgIH0sIHRoaXMuX3Jlc3BvbnNlVGltZW91dCk7XG4gIH1cbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qKlxuICogRXhwb3NlIGBSZXNwb25zZUJhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gUmVzcG9uc2VCYXNlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlc3BvbnNlQmFzZWAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXNwb25zZUJhc2Uob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufVxuXG4vKipcbiAqIE1peGluIHRoZSBwcm90b3R5cGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gUmVzcG9uc2VCYXNlLnByb3RvdHlwZSkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoUmVzcG9uc2VCYXNlLnByb3RvdHlwZSwga2V5KSlcbiAgICAgIG9ialtrZXldID0gUmVzcG9uc2VCYXNlLnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZUJhc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gIHJldHVybiB0aGlzLmhlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciByZWxhdGVkIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGAudHlwZWAgdGhlIGNvbnRlbnQgdHlwZSB3aXRob3V0IHBhcmFtc1xuICpcbiAqIEEgcmVzcG9uc2Ugb2YgXCJDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIlxuICogd2lsbCBwcm92aWRlIHlvdSB3aXRoIGEgYC50eXBlYCBvZiBcInRleHQvcGxhaW5cIi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZUJhc2UucHJvdG90eXBlLl9zZXRIZWFkZXJQcm9wZXJ0aWVzID0gZnVuY3Rpb24oaGVhZGVyKSB7XG4gIC8vIFRPRE86IG1vYXIhXG4gIC8vIFRPRE86IG1ha2UgdGhpcyBhIHV0aWxcblxuICAvLyBjb250ZW50LXR5cGVcbiAgY29uc3QgY3QgPSBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICB0aGlzLnR5cGUgPSB1dGlscy50eXBlKGN0KTtcblxuICAvLyBwYXJhbXNcbiAgY29uc3QgcGFyYW1zID0gdXRpbHMucGFyYW1zKGN0KTtcbiAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJhbXMsIGtleSkpXG4gICAgICB0aGlzW2tleV0gPSBwYXJhbXNba2V5XTtcbiAgfVxuXG4gIHRoaXMubGlua3MgPSB7fTtcblxuICAvLyBsaW5rc1xuICB0cnkge1xuICAgIGlmIChoZWFkZXIubGluaykge1xuICAgICAgdGhpcy5saW5rcyA9IHV0aWxzLnBhcnNlTGlua3MoaGVhZGVyLmxpbmspO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgLy8gaWdub3JlXG4gIH1cbn07XG5cbi8qKlxuICogU2V0IGZsYWdzIHN1Y2ggYXMgYC5va2AgYmFzZWQgb24gYHN0YXR1c2AuXG4gKlxuICogRm9yIGV4YW1wbGUgYSAyeHggcmVzcG9uc2Ugd2lsbCBnaXZlIHlvdSBhIGAub2tgIG9mIF9fdHJ1ZV9fXG4gKiB3aGVyZWFzIDV4eCB3aWxsIGJlIF9fZmFsc2VfXyBhbmQgYC5lcnJvcmAgd2lsbCBiZSBfX3RydWVfXy4gVGhlXG4gKiBgLmNsaWVudEVycm9yYCBhbmQgYC5zZXJ2ZXJFcnJvcmAgYXJlIGFsc28gYXZhaWxhYmxlIHRvIGJlIG1vcmVcbiAqIHNwZWNpZmljLCBhbmQgYC5zdGF0dXNUeXBlYCBpcyB0aGUgY2xhc3Mgb2YgZXJyb3IgcmFuZ2luZyBmcm9tIDEuLjVcbiAqIHNvbWV0aW1lcyB1c2VmdWwgZm9yIG1hcHBpbmcgcmVzcG9uZCBjb2xvcnMgZXRjLlxuICpcbiAqIFwic3VnYXJcIiBwcm9wZXJ0aWVzIGFyZSBhbHNvIGRlZmluZWQgZm9yIGNvbW1vbiBjYXNlcy4gQ3VycmVudGx5IHByb3ZpZGluZzpcbiAqXG4gKiAgIC0gLm5vQ29udGVudFxuICogICAtIC5iYWRSZXF1ZXN0XG4gKiAgIC0gLnVuYXV0aG9yaXplZFxuICogICAtIC5ub3RBY2NlcHRhYmxlXG4gKiAgIC0gLm5vdEZvdW5kXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2VCYXNlLnByb3RvdHlwZS5fc2V0U3RhdHVzUHJvcGVydGllcyA9IGZ1bmN0aW9uKHN0YXR1cykge1xuICBjb25zdCB0eXBlID0gKHN0YXR1cyAvIDEwMCkgfCAwO1xuXG4gIC8vIHN0YXR1cyAvIGNsYXNzXG4gIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1cztcbiAgdGhpcy5zdGF0dXMgPSB0aGlzLnN0YXR1c0NvZGU7XG4gIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XG5cbiAgLy8gYmFzaWNzXG4gIHRoaXMuaW5mbyA9IHR5cGUgPT09IDE7XG4gIHRoaXMub2sgPSB0eXBlID09PSAyO1xuICB0aGlzLnJlZGlyZWN0ID0gdHlwZSA9PT0gMztcbiAgdGhpcy5jbGllbnRFcnJvciA9IHR5cGUgPT09IDQ7XG4gIHRoaXMuc2VydmVyRXJyb3IgPSB0eXBlID09PSA1O1xuICB0aGlzLmVycm9yID0gdHlwZSA9PT0gNCB8fCB0eXBlID09PSA1ID8gdGhpcy50b0Vycm9yKCkgOiBmYWxzZTtcblxuICAvLyBzdWdhclxuICB0aGlzLmNyZWF0ZWQgPSBzdGF0dXMgPT09IDIwMTtcbiAgdGhpcy5hY2NlcHRlZCA9IHN0YXR1cyA9PT0gMjAyO1xuICB0aGlzLm5vQ29udGVudCA9IHN0YXR1cyA9PT0gMjA0O1xuICB0aGlzLmJhZFJlcXVlc3QgPSBzdGF0dXMgPT09IDQwMDtcbiAgdGhpcy51bmF1dGhvcml6ZWQgPSBzdGF0dXMgPT09IDQwMTtcbiAgdGhpcy5ub3RBY2NlcHRhYmxlID0gc3RhdHVzID09PSA0MDY7XG4gIHRoaXMuZm9yYmlkZGVuID0gc3RhdHVzID09PSA0MDM7XG4gIHRoaXMubm90Rm91bmQgPSBzdGF0dXMgPT09IDQwNDtcbiAgdGhpcy51bnByb2Nlc3NhYmxlRW50aXR5ID0gc3RhdHVzID09PSA0MjI7XG59O1xuIiwiLyoqXG4gKiBSZXR1cm4gdGhlIG1pbWUgdHlwZSBmb3IgdGhlIGdpdmVuIGBzdHJgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMudHlwZSA9IHN0ciA9PiBzdHIuc3BsaXQoLyAqOyAqLykuc2hpZnQoKTtcblxuLyoqXG4gKiBSZXR1cm4gaGVhZGVyIGZpZWxkIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5wYXJhbXMgPSBzdHIgPT5cbiAgc3RyLnNwbGl0KC8gKjsgKi8pLnJlZHVjZSgob2JqLCBzdHIpID0+IHtcbiAgICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdCgvICo9ICovKTtcbiAgICBjb25zdCBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuICAgIGNvbnN0IHZhbCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoa2V5ICYmIHZhbCkgb2JqW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuXG4vKipcbiAqIFBhcnNlIExpbmsgaGVhZGVyIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnBhcnNlTGlua3MgPSBzdHIgPT5cbiAgc3RyLnNwbGl0KC8gKiwgKi8pLnJlZHVjZSgob2JqLCBzdHIpID0+IHtcbiAgICBjb25zdCBwYXJ0cyA9IHN0ci5zcGxpdCgvICo7ICovKTtcbiAgICBjb25zdCB1cmwgPSBwYXJ0c1swXS5zbGljZSgxLCAtMSk7XG4gICAgY29uc3QgcmVsID0gcGFydHNbMV0uc3BsaXQoLyAqPSAqLylbMV0uc2xpY2UoMSwgLTEpO1xuICAgIG9ialtyZWxdID0gdXJsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcblxuLyoqXG4gKiBTdHJpcCBjb250ZW50IHJlbGF0ZWQgZmllbGRzIGZyb20gYGhlYWRlcmAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQHJldHVybiB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuY2xlYW5IZWFkZXIgPSAoaGVhZGVyLCBjaGFuZ2VzT3JpZ2luKSA9PiB7XG4gIGRlbGV0ZSBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuICBkZWxldGUgaGVhZGVyWydjb250ZW50LWxlbmd0aCddO1xuICBkZWxldGUgaGVhZGVyWyd0cmFuc2Zlci1lbmNvZGluZyddO1xuICBkZWxldGUgaGVhZGVyLmhvc3Q7XG4gIC8vIHNlY3VpcnR5XG4gIGlmIChjaGFuZ2VzT3JpZ2luKSB7XG4gICAgZGVsZXRlIGhlYWRlci5hdXRob3JpemF0aW9uO1xuICAgIGRlbGV0ZSBoZWFkZXIuY29va2llO1xuICB9XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn07XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBldmVudCBzcGVjaWZpYyBhcnJheXMgZm9yIGV2ZW50IHR5cGVzIHRoYXQgbm9cclxuICAvLyBvbmUgaXMgc3Vic2NyaWJlZCBmb3IgdG8gYXZvaWQgbWVtb3J5IGxlYWsuXHJcbiAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPT09IDApIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpXHJcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcblxyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcclxuICB9XHJcblxyXG4gIGlmIChjYWxsYmFja3MpIHtcclxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbn07XHJcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==