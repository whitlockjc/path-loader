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

// Regular stringify
function stringify(obj, replacer, spacer) {
  decirc(obj, '', [], undefined);
  var res = JSON.stringify(obj, replacer, spacer);
  while (arr.length !== 0) {
    var part = arr.pop();
    part[0][part[1]] = part[2];
  }
  return res;
}
function decirc(val, k, stack, parent) {
  var i;
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        parent[k] = '[Circular]';
        arr.push([parent, k, val]);
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
  var res = JSON.stringify(tmp, replacer, spacer);
  while (arr.length !== 0) {
    var part = arr.pop();
    part[0][part[1]] = part[2];
  }
  return res;
}

function deterministicDecirc(val, k, stack, parent) {
  var i;
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        parent[k] = '[Circular]';
        arr.push([parent, k, val]);
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
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }
}

function Agent() {
  this._defaults = [];
}

['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert'].forEach(function (fn) {
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
  } catch (err) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.6.0');
  } catch (err) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.3.0');
  } catch (err) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP');
  } catch (err) {}

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
    pairs.push(encodeURIComponent(key));
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
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
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
    } catch (err2) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = err2; // issue #675: return the raw response if the response parsing fails

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
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch (err2) {
      new_err = err2; // ok() callback can throw
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

Request.prototype.buffer = Request.prototype.ca;
Request.prototype.ca = Request.prototype.agent; // This throws, because it can't send/receive data as expected

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
    } catch (err) {
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
    } catch (err) {// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
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
    } catch (err2) {
      console.error(err2);
    }
  }

  if (res && res.status && res.status >= 500 && res.status !== 501) return true;

  if (err) {
    if (err.code && ERROR_CODES.indexOf(err.code) !== -1) return true; // Superagent timeout

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
}; // eslint-disable-next-line valid-jsdoc

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
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }

  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');

    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');

      if (typeof this._sort === 'function') {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }

      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
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
  } catch (err) {// ignore
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QYXRoTG9hZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbGliL2xvYWRlcnMvZmlsZS1icm93c2VyLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9saWIvbG9hZGVycy9odHRwLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9ub2RlX21vZHVsZXMvZmFzdC1zYWZlLXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbm9kZV9tb2R1bGVzL25hdGl2ZS1wcm9taXNlLW9ubHkvbGliL25wby5zcmMuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9ub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9saWIvYWdlbnQtYmFzZS5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL3JlcXVlc3QtYmFzZS5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL3Jlc3BvbnNlLWJhc2UuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJzdXBwb3J0ZWRMb2FkZXJzIiwiZmlsZSIsInJlcXVpcmUiLCJodHRwIiwiaHR0cHMiLCJkZWZhdWx0TG9hZGVyIiwid2luZG93IiwiaW1wb3J0U2NyaXB0cyIsIlByb21pc2UiLCJnZXRTY2hlbWUiLCJsb2NhdGlvbiIsImluZGV4T2YiLCJzcGxpdCIsImdldExvYWRlciIsInNjaGVtZSIsImxvYWRlciIsIkVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImxvYWQiLCJvcHRpb25zIiwiYWxsVGFza3MiLCJyZXNvbHZlIiwidGhlbiIsIlR5cGVFcnJvciIsInByb2Nlc3NDb250ZW50IiwicmVqZWN0IiwiZXJyIiwiZG9jdW1lbnQiLCJyZXMiLCJ0ZXh0IiwicHJvY2Vzc2VkIiwidW5zdXBwb3J0ZWRFcnJvciIsImdldEJhc2UiLCJmbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInJlcXVlc3QiLCJzdXBwb3J0ZWRIdHRwTWV0aG9kcyIsImNhbGxiYWNrIiwicmVhbE1ldGhvZCIsIm1ldGhvZCIsInRvTG93ZXJDYXNlIiwicmVhbFJlcXVlc3QiLCJtYWtlUmVxdWVzdCIsInJlcSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInByb2Nlc3MiLCJidWZmZXIiLCJlbmQiLCJlcnIyIiwidW5kZWZpbmVkIiwic2xpY2UiLCJqb2luIiwicHJlcGFyZVJlcXVlc3QiLCJzdHJpbmdpZnkiLCJkZWZhdWx0Iiwic3RhYmxlIiwiZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeSIsInN0YWJsZVN0cmluZ2lmeSIsImFyciIsIm9iaiIsInJlcGxhY2VyIiwic3BhY2VyIiwiZGVjaXJjIiwiSlNPTiIsInBhcnQiLCJwb3AiLCJ2YWwiLCJrIiwic3RhY2siLCJwYXJlbnQiLCJpIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsImtleXMiLCJrZXkiLCJjb21wYXJlRnVuY3Rpb24iLCJhIiwiYiIsInRtcCIsImRldGVybWluaXN0aWNEZWNpcmMiLCJ0b0pTT04iLCJzb3J0IiwiVU1EIiwibmFtZSIsImNvbnRleHQiLCJkZWZpbml0aW9uIiwiZGVmaW5lIiwiJEFNRCQiLCJnbG9iYWwiLCJERUYiLCJidWlsdEluUHJvcCIsImN5Y2xlIiwic2NoZWR1bGluZ19xdWV1ZSIsIlRvU3RyaW5nIiwidGltZXIiLCJzZXRJbW1lZGlhdGUiLCJzZXRUaW1lb3V0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWciLCJ2YWx1ZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiUXVldWUiLCJmaXJzdCIsImxhc3QiLCJpdGVtIiwiSXRlbSIsInNlbGYiLCJuZXh0IiwiYWRkIiwiZHJhaW4iLCJmIiwic2NoZWR1bGUiLCJpc1RoZW5hYmxlIiwibyIsIl90aGVuIiwib190eXBlIiwibm90aWZ5IiwiY2hhaW4iLCJub3RpZnlJc29sYXRlZCIsInN0YXRlIiwic3VjY2VzcyIsImZhaWx1cmUiLCJjYiIsInJldCIsIm1zZyIsInByb21pc2UiLCJ0cmlnZ2VyZWQiLCJkZWYiLCJkZWZfd3JhcHBlciIsIk1ha2VEZWZXcmFwcGVyIiwiJHJlc29sdmUkIiwiYXBwbHkiLCIkcmVqZWN0JCIsIml0ZXJhdGVQcm9taXNlcyIsIkNvbnN0cnVjdG9yIiwicmVzb2x2ZXIiLCJyZWplY3RlciIsImlkeCIsIklJRkUiLCIkcmVzb2x2ZXIkIiwiTWFrZURlZiIsImV4ZWN1dG9yIiwiX19OUE9fXyIsImNvbnN0cnVjdG9yIiwiZXh0cmFjdENoYWluIiwiJGNhdGNoJCIsInB1YmxpY1Jlc29sdmUiLCJwdWJsaWNSZWplY3QiLCJQcm9taXNlUHJvdG90eXBlIiwiUHJvbWlzZSRyZXNvbHZlIiwiUHJvbWlzZSRyZWplY3QiLCJQcm9taXNlJGFsbCIsImxlbiIsIm1zZ3MiLCJjb3VudCIsIlByb21pc2UkcmFjZSIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsImUiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJjb25jYXQiLCJkcmFpblF1ZXVlIiwidGltZW91dCIsInJ1biIsIm5leHRUaWNrIiwiYXJncyIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiZG9jIiwicmVnaXN0ZXJJbW1lZGlhdGUiLCJGdW5jdGlvbiIsInRhc2siLCJjbGVhckltbWVkaWF0ZSIsImhhbmRsZSIsInJ1bklmUHJlc2VudCIsImluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uIiwiY2FuVXNlUG9zdE1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJNYXRoIiwicmFuZG9tIiwib25HbG9iYWxNZXNzYWdlIiwiZXZlbnQiLCJzb3VyY2UiLCJkYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24iLCJjaGFubmVsIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsInBvcnQyIiwiaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbiIsImh0bWwiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24iLCJhdHRhY2hUbyIsImdldFByb3RvdHlwZU9mIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsImZyb20iLCJhcnIyIiwiQWdlbnQiLCJfZGVmYXVsdHMiLCJmb3JFYWNoIiwiX2xlbiIsIl9rZXkiLCJfc2V0RGVmYXVsdHMiLCJfdHlwZW9mIiwicm9vdCIsImNvbnNvbGUiLCJ3YXJuIiwiRW1pdHRlciIsInNhZmVTdHJpbmdpZnkiLCJSZXF1ZXN0QmFzZSIsImlzT2JqZWN0IiwiUmVzcG9uc2VCYXNlIiwidXJsIiwiUmVxdWVzdCIsImdldFhIUiIsIlhNTEh0dHBSZXF1ZXN0IiwicHJvdG9jb2wiLCJBY3RpdmVYT2JqZWN0IiwidHJpbSIsInMiLCJyZXBsYWNlIiwic2VyaWFsaXplIiwicGFpcnMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsInN1YmtleSIsInNlcmlhbGl6ZU9iamVjdCIsInBhcnNlU3RyaW5nIiwic3RyIiwicGFpciIsInBvcyIsImRlY29kZVVSSUNvbXBvbmVudCIsInR5cGVzIiwianNvbiIsInhtbCIsInVybGVuY29kZWQiLCJmb3JtIiwicGFyc2UiLCJwYXJzZUhlYWRlciIsImxpbmVzIiwiZmllbGRzIiwiaW5kZXgiLCJsaW5lIiwiZmllbGQiLCJpc0pTT04iLCJtaW1lIiwidGVzdCIsIlJlc3BvbnNlIiwieGhyIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsInN0YXR1cyIsIl9zZXRTdGF0dXNQcm9wZXJ0aWVzIiwiaGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImhlYWRlciIsImdldFJlc3BvbnNlSGVhZGVyIiwiX3NldEhlYWRlclByb3BlcnRpZXMiLCJfcmVzcG9uc2VUeXBlIiwiYm9keSIsInJlc3BvbnNlIiwiX3BhcnNlQm9keSIsInR5cGUiLCJfcGFyc2VyIiwidG9FcnJvciIsIl9xdWVyeSIsIl9oZWFkZXIiLCJvcmlnaW5hbCIsInJhd1Jlc3BvbnNlIiwic3RhdHVzQ29kZSIsIm5ld19lcnIiLCJfaXNSZXNwb25zZU9LIiwic2V0IiwiYWNjZXB0IiwiYXV0aCIsInVzZXIiLCJwYXNzIiwiYnRvYSIsImVuY29kZXIiLCJzdHJpbmciLCJfYXV0aCIsInF1ZXJ5IiwiYXR0YWNoIiwiX2RhdGEiLCJfZ2V0Rm9ybURhdGEiLCJhcHBlbmQiLCJfZm9ybURhdGEiLCJGb3JtRGF0YSIsIl9zaG91bGRSZXRyeSIsIl9yZXRyeSIsIl9jYWxsYmFjayIsIl9tYXhSZXRyaWVzIiwicmV0cmllcyIsIl9yZXRyaWVzIiwiY3Jvc3NEb21haW5FcnJvciIsImNyb3NzRG9tYWluIiwiYWdlbnQiLCJjYSIsIndyaXRlIiwicGlwZSIsIl9pc0hvc3QiLCJfZW5kQ2FsbGVkIiwiX2ZpbmFsaXplUXVlcnlTdHJpbmciLCJfZW5kIiwiX3NldFVwbG9hZFRpbWVvdXQiLCJfdXBsb2FkVGltZW91dCIsIl91cGxvYWRUaW1lb3V0VGltZXIiLCJfdGltZW91dEVycm9yIiwiX2Fib3J0ZWQiLCJfc2V0VGltZW91dHMiLCJyZWFkeVN0YXRlIiwiX3Jlc3BvbnNlVGltZW91dFRpbWVyIiwidGltZWRvdXQiLCJoYW5kbGVQcm9ncmVzcyIsImRpcmVjdGlvbiIsInRvdGFsIiwicGVyY2VudCIsImxvYWRlZCIsImhhc0xpc3RlbmVycyIsImJpbmQiLCJ1cGxvYWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwib3BlbiIsIl93aXRoQ3JlZGVudGlhbHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb250ZW50VHlwZSIsIl9zZXJpYWxpemUiLCJfc2VyaWFsaXplciIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiZGVsIiwiZGVsZXRlIiwiZ2V0IiwiaGVhZCIsInBhdGNoIiwicG9zdCIsInB1dCIsIm1peGluIiwiX3RpbWVyIiwiX3RpbWVvdXQiLCJfcmVzcG9uc2VUaW1lb3V0Iiwib3B0aW9uIiwiZGVhZGxpbmUiLCJyZXRyeSIsIl9yZXRyeUNhbGxiYWNrIiwiRVJST1JfQ09ERVMiLCJvdmVycmlkZSIsImVycm9yIiwiY29kZSIsIl90aGlzIiwiX2Z1bGxmaWxsZWRQcm9taXNlIiwiY2F0Y2giLCJ1c2UiLCJvayIsIl9va0NhbGxiYWNrIiwiZ2V0SGVhZGVyIiwidW5zZXQiLCJTdHJpbmciLCJhYm9ydCIsImJhc2U2NEVuY29kZXIiLCJyZWRpcmVjdHMiLCJuIiwiX21heFJlZGlyZWN0cyIsIm1heFJlc3BvbnNlU2l6ZSIsIl9tYXhSZXNwb25zZVNpemUiLCJpc09iaiIsInNvcnRRdWVyeSIsIl9zb3J0IiwicXVlcnlBcnIiLCJzdWJzdHJpbmciLCJfYXBwZW5kUXVlcnlTdHJpbmciLCJyZWFzb24iLCJlcnJubyIsInV0aWxzIiwiY3QiLCJwYXJhbXMiLCJsaW5rcyIsImxpbmsiLCJwYXJzZUxpbmtzIiwic3RhdHVzVHlwZSIsImluZm8iLCJyZWRpcmVjdCIsImNsaWVudEVycm9yIiwic2VydmVyRXJyb3IiLCJjcmVhdGVkIiwiYWNjZXB0ZWQiLCJub0NvbnRlbnQiLCJiYWRSZXF1ZXN0IiwidW5hdXRob3JpemVkIiwibm90QWNjZXB0YWJsZSIsImZvcmJpZGRlbiIsIm5vdEZvdW5kIiwidW5wcm9jZXNzYWJsZUVudGl0eSIsInNoaWZ0IiwicmVkdWNlIiwicGFydHMiLCJyZWwiLCJjbGVhbkhlYWRlciIsImNoYW5nZXNPcmlnaW4iLCJob3N0IiwiYXV0aG9yaXphdGlvbiIsImNvb2tpZSIsIl9jYWxsYmFja3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwic3BsaWNlIiwic2NvcGUiLCJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJpZCIsImNsZWFyRm4iLCJfaWQiLCJfY2xlYXJGbiIsInVucmVmIiwicmVmIiwiZW5yb2xsIiwibXNlY3MiLCJfaWRsZVRpbWVvdXRJZCIsIl9pZGxlVGltZW91dCIsInVuZW5yb2xsIiwiX3VucmVmQWN0aXZlIiwiYWN0aXZlIiwib25UaW1lb3V0IiwiX29uVGltZW91dCIsImciXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFrQixRQUF0QixFQUFnQ3FlLElBQUlyZSxNQUFKO0FBQ2hDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQVcsT0FBT0MsT0FBUCxHQUFpQnlkLENBQWpCLEMiLCJmaWxlIjoicGF0aC1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLypcclxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNSBKZXJlbXkgV2hpdGxvY2tcclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuICogVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBzdXBwb3J0ZWRMb2FkZXJzID0ge1xyXG4gIGZpbGU6IHJlcXVpcmUoJy4vbGliL2xvYWRlcnMvZmlsZScpLFxyXG4gIGh0dHA6IHJlcXVpcmUoJy4vbGliL2xvYWRlcnMvaHR0cCcpLFxyXG4gIGh0dHBzOiByZXF1aXJlKCcuL2xpYi9sb2FkZXJzL2h0dHAnKVxyXG59O1xyXG52YXIgZGVmYXVsdExvYWRlciA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBpbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nID9cclxuICAgICAgc3VwcG9ydGVkTG9hZGVycy5odHRwIDpcclxuICAgICAgc3VwcG9ydGVkTG9hZGVycy5maWxlO1xyXG5cclxuLy8gTG9hZCBwcm9taXNlcyBwb2x5ZmlsbCBpZiBuZWNlc3NhcnlcclxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbmlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICByZXF1aXJlKCduYXRpdmUtcHJvbWlzZS1vbmx5Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNjaGVtZSAobG9jYXRpb24pIHtcclxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbi5pbmRleE9mKCc6Ly8nKSA9PT0gLTEgPyAnJyA6IGxvY2F0aW9uLnNwbGl0KCc6Ly8nKVswXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBsb2NhdGlvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgdGhhdCBwcm92aWRlcyBhIHNpbmdsZSBBUEkgZm9yIGxvYWRpbmcgdGhlIGNvbnRlbnQgb2YgYSBwYXRoL1VSTC5cclxuICpcclxuICogQG1vZHVsZSBwYXRoLWxvYWRlclxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGdldExvYWRlciAobG9jYXRpb24pIHtcclxuICB2YXIgc2NoZW1lID0gZ2V0U2NoZW1lKGxvY2F0aW9uKTtcclxuICB2YXIgbG9hZGVyID0gc3VwcG9ydGVkTG9hZGVyc1tzY2hlbWVdO1xyXG5cclxuICBpZiAodHlwZW9mIGxvYWRlciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGlmIChzY2hlbWUgPT09ICcnKSB7XHJcbiAgICAgIGxvYWRlciA9IGRlZmF1bHRMb2FkZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHNjaGVtZTogJyArIHNjaGVtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbG9hZGVyO1xyXG59XHJcblxyXG4vKipcclxuICogTG9hZHMgYSBkb2N1bWVudCBhdCB0aGUgcHJvdmlkZWQgbG9jYXRpb24gYW5kIHJldHVybnMgYSBKYXZhU2NyaXB0IG9iamVjdCByZXByZXNlbnRhdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIC0gVGhlIGxvY2F0aW9uIHRvIHRoZSBkb2N1bWVudFxyXG4gKiBAcGFyYW0ge21vZHVsZTpwYXRoLWxvYWRlci5Mb2FkT3B0aW9uc30gW29wdGlvbnNdIC0gVGhlIGxvYWRlciBvcHRpb25zXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPCo+fSBBbHdheXMgcmV0dXJucyBhIHByb21pc2UgZXZlbiBpZiB0aGVyZSBpcyBhIGNhbGxiYWNrIHByb3ZpZGVkXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEV4YW1wbGUgdXNpbmcgUHJvbWlzZXNcclxuICpcclxuICogUGF0aExvYWRlclxyXG4gKiAgIC5sb2FkKCcuL3BhY2thZ2UuanNvbicpXHJcbiAqICAgLnRoZW4oSlNPTi5wYXJzZSlcclxuICogICAudGhlbihmdW5jdGlvbiAoZG9jdW1lbnQpIHtcclxuICogICAgIGNvbnNvbGUubG9nKGRvY3VtZW50Lm5hbWUgKyAnICgnICsgZG9jdW1lbnQudmVyc2lvbiArICcpOiAnICsgZG9jdW1lbnQuZGVzY3JpcHRpb24pO1xyXG4gKiAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcclxuICogICB9KTtcclxuICpcclxuICogQGV4YW1wbGVcclxuICogLy8gRXhhbXBsZSB1c2luZyBvcHRpb25zLnByZXBhcmVSZXF1ZXN0IHRvIHByb3ZpZGUgYXV0aGVudGljYXRpb24gZGV0YWlscyBmb3IgYSByZW1vdGVseSBzZWN1cmUgVVJMXHJcbiAqXHJcbiAqIFBhdGhMb2FkZXJcclxuICogICAubG9hZCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy93aGl0bG9ja2pjL3BhdGgtbG9hZGVyJywge1xyXG4gKiAgICAgcHJlcGFyZVJlcXVlc3Q6IGZ1bmN0aW9uIChyZXEsIGNhbGxiYWNrKSB7XHJcbiAqICAgICAgIHJlcS5hdXRoKCdteS11c2VybmFtZScsICdteS1wYXNzd29yZCcpO1xyXG4gKiAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIHJlcSk7XHJcbiAqICAgICB9XHJcbiAqICAgfSlcclxuICogICAudGhlbihKU09OLnBhcnNlKVxyXG4gKiAgIC50aGVuKGZ1bmN0aW9uIChkb2N1bWVudCkge1xyXG4gKiAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZnVsbF9uYW1lICsgJzogJyArIGRvY3VtZW50LmRlc2NyaXB0aW9uKTtcclxuICogICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAqICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XHJcbiAqICAgfSk7XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEV4YW1wbGUgbG9hZGluZyBhIFlBTUwgZmlsZVxyXG4gKlxyXG4gKiBQYXRoTG9hZGVyXHJcbiAqICAgLmxvYWQoJy9Vc2Vycy9ub3QteW91L3Byb2plY3RzL3BhdGgtbG9hZGVyLy50cmF2aXMueW1sJylcclxuICogICAudGhlbihZQU1MLnNhZmVMb2FkKVxyXG4gKiAgIC50aGVuKGZ1bmN0aW9uIChkb2N1bWVudCkge1xyXG4gKiAgICAgY29uc29sZS5sb2coJ3BhdGgtbG9hZGVyIHVzZXMgdGhlJywgZG9jdW1lbnQubGFuZ3VhZ2UsICdsYW5ndWFnZS4nKTtcclxuICogICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAqICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XHJcbiAqICAgfSk7XHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIEV4YW1wbGUgbG9hZGluZyBhIFlBTUwgZmlsZSB3aXRoIG9wdGlvbnMucHJvY2Vzc0NvbnRlbnQgKFVzZWZ1bCBpZiB5b3UgbmVlZCBpbmZvcm1hdGlvbiBpbiB0aGUgcmF3IHJlc3BvbnNlKVxyXG4gKlxyXG4gKiBQYXRoTG9hZGVyXHJcbiAqICAgLmxvYWQoJy9Vc2Vycy9ub3QteW91L3Byb2plY3RzL3BhdGgtbG9hZGVyLy50cmF2aXMueW1sJywge1xyXG4gKiAgICAgcHJvY2Vzc0NvbnRlbnQ6IGZ1bmN0aW9uIChyZXMsIGNhbGxiYWNrKSB7XHJcbiAqICAgICAgIGNhbGxiYWNrKFlBTUwuc2FmZUxvYWQocmVzLnRleHQpKTtcclxuICogICAgIH1cclxuICogICB9KVxyXG4gKiAgIC50aGVuKGZ1bmN0aW9uIChkb2N1bWVudCkge1xyXG4gKiAgICAgY29uc29sZS5sb2coJ3BhdGgtbG9hZGVyIHVzZXMgdGhlJywgZG9jdW1lbnQubGFuZ3VhZ2UsICdsYW5ndWFnZS4nKTtcclxuICogICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAqICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XHJcbiAqICAgfSk7XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cy5sb2FkID0gZnVuY3Rpb24gKGxvY2F0aW9uLCBvcHRpb25zKSB7XHJcbiAgdmFyIGFsbFRhc2tzID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcblxyXG4gIC8vIERlZmF1bHQgb3B0aW9ucyB0byBlbXB0eSBvYmplY3RcclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBvcHRpb25zID0ge307XHJcbiAgfVxyXG5cclxuICAvLyBWYWxpZGF0ZSBhcmd1bWVudHNcclxuICBhbGxUYXNrcyA9IGFsbFRhc2tzLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbG9jYXRpb24gaXMgcmVxdWlyZWQnKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAnc3RyaW5nJykge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdsb2NhdGlvbiBtdXN0IGJlIGEgc3RyaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLnByb2Nlc3NDb250ZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygb3B0aW9ucy5wcm9jZXNzQ29udGVudCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMucHJvY2Vzc0NvbnRlbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gTG9hZCB0aGUgZG9jdW1lbnQgZnJvbSB0aGUgcHJvdmlkZWQgbG9jYXRpb24gYW5kIHByb2Nlc3MgaXRcclxuICBhbGxUYXNrcyA9IGFsbFRhc2tzXHJcbiAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdmFyIGxvYWRlciA9IGdldExvYWRlcihsb2NhdGlvbik7XHJcblxyXG4gICAgICAgIGxvYWRlci5sb2FkKGxvY2F0aW9uLCBvcHRpb25zIHx8IHt9LCBmdW5jdGlvbiAoZXJyLCBkb2N1bWVudCkge1xyXG4gICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZG9jdW1lbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnByb2Nlc3NDb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgIC8vIEZvciBjb25zaXN0ZW5jeSBiZXR3ZWVuIGZpbGUgYW5kIGh0dHAsIGFsd2F5cyBzZW5kIGFuIG9iamVjdCB3aXRoIGEgJ3RleHQnIHByb3BlcnR5IGNvbnRhaW5pbmcgdGhlIHJhd1xyXG4gICAgICAgICAgLy8gc3RyaW5nIHZhbHVlIGJlaW5nIHByb2Nlc3NlZC5cclxuICAgICAgICAgIGlmICh0eXBlb2YgcmVzICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXMgPSB7dGV4dDogcmVzfTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBQYXNzIHRoZSBwYXRoIGJlaW5nIGxvYWRlZFxyXG4gICAgICAgICAgcmVzLmxvY2F0aW9uID0gbG9jYXRpb247XHJcblxyXG4gICAgICAgICAgb3B0aW9ucy5wcm9jZXNzQ29udGVudChyZXMsIGZ1bmN0aW9uIChlcnIsIHByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShwcm9jZXNzZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiB0aGVyZSB3YXMgbm8gY29udGVudCBwcm9jZXNzb3IsIHdlIHdpbGwgYXNzdW1lIHRoYXQgZm9yIGFsbCBvYmplY3RzIHRoYXQgaXQgaXMgYSBTdXBlcmFnZW50IHJlc3BvbnNlXHJcbiAgICAgICAgLy8gYW5kIHdpbGwgcmV0dXJuIGl0cyBgdGV4dGAgcHJvcGVydHkgdmFsdWUuICBPdGhlcndpc2UsIHdlIHdpbGwgcmV0dXJuIHRoZSByYXcgcmVzcG9uc2UuXHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiByZXMgPT09ICdvYmplY3QnID8gcmVzLnRleHQgOiByZXM7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4gYWxsVGFza3M7XHJcbn07XHJcbiIsIi8qXHJcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgSmVyZW15IFdoaXRsb2NrXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiAqIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdW5zdXBwb3J0ZWRFcnJvciA9IG5ldyBUeXBlRXJyb3IoJ1RoZSBcXCdmaWxlXFwnIHNjaGVtZSBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyJyk7XHJcblxyXG4vKipcclxuICogVGhlIGZpbGUgbG9hZGVyIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXIuXHJcbiAqXHJcbiAqIEB0aHJvd3Mge2Vycm9yfSB0aGUgZmlsZSBsb2FkZXIgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGUgYnJvd3NlclxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMuZ2V0QmFzZSA9IGZ1bmN0aW9uICgpIHtcclxuICB0aHJvdyB1bnN1cHBvcnRlZEVycm9yO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBmaWxlIGxvYWRlciBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgZm4gPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBmbih1bnN1cHBvcnRlZEVycm9yKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgdW5zdXBwb3J0ZWRFcnJvcjtcclxuICB9XHJcbn07XHJcbiIsIi8qIGVzbGludC1lbnYgbm9kZSwgYnJvd3NlciAqL1xyXG5cclxuLypcclxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNSBKZXJlbXkgV2hpdGxvY2tcclxuICpcclxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuICpcclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cclxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbiAqXHJcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuICogVEhFIFNPRlRXQVJFLlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciByZXF1ZXN0ID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpO1xyXG5cclxudmFyIHN1cHBvcnRlZEh0dHBNZXRob2RzID0gWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncGF0Y2gnLCAncG9zdCcsICdwdXQnXTtcclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBhIGZpbGUgZnJvbSBhbiBodHRwIG9yIGh0dHBzIFVSTC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIC0gVGhlIGRvY3VtZW50IFVSTCAoSWYgcmVsYXRpdmUsIGxvY2F0aW9uIGlzIHJlbGF0aXZlIHRvIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBsb2FkZXIgb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubWV0aG9kPWdldF0gLSBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxyXG4gKiBAcGFyYW0ge21vZHVsZTpQYXRoTG9hZGVyflByZXBhcmVSZXF1ZXN0Q2FsbGJhY2t9IFtvcHRpb25zLnByZXBhcmVSZXF1ZXN0XSAtIFRoZSBjYWxsYmFjayB1c2VkIHRvIHByZXBhcmUgYSByZXF1ZXN0XHJcbiAqIEBwYXJhbSB7bW9kdWxlOlBhdGhMb2FkZXJ+UHJvY2Vzc1Jlc3BvbnNlQ2FsbGJhY2t9IFtvcHRpb25zLnByb2Nlc3NDb250ZW50XSAtIFRoZSBjYWxsYmFjayB1c2VkIHRvIHByb2Nlc3MgdGhlXHJcbiAqIHJlc3BvbnNlXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGVycm9yLWZpcnN0IGNhbGxiYWNrXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cy5sb2FkID0gZnVuY3Rpb24gKGxvY2F0aW9uLCBvcHRpb25zLCBjYWxsYmFjaykge1xyXG4gIHZhciByZWFsTWV0aG9kID0gb3B0aW9ucy5tZXRob2QgPyBvcHRpb25zLm1ldGhvZC50b0xvd2VyQ2FzZSgpIDogJ2dldCc7XHJcbiAgdmFyIGVycjtcclxuICB2YXIgcmVhbFJlcXVlc3Q7XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0IChlcnIsIHJlcSkge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICBjYWxsYmFjayhlcnIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gYnVmZmVyKCkgaXMgb25seSBhdmFpbGFibGUgaW4gTm9kZS5qc1xyXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyA/IHByb2Nlc3MgOiAwKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nICYmXHJcbiAgICAgICAgICB0eXBlb2YgcmVxLmJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJlcS5idWZmZXIodHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlcVxyXG4gICAgICAgIC5lbmQoZnVuY3Rpb24gKGVycjIsIHJlcykge1xyXG4gICAgICAgICAgaWYgKGVycjIpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXJyMik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMubWV0aG9kICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm1ldGhvZCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgZXJyID0gbmV3IFR5cGVFcnJvcignb3B0aW9ucy5tZXRob2QgbXVzdCBiZSBhIHN0cmluZycpO1xyXG4gICAgfSBlbHNlIGlmIChzdXBwb3J0ZWRIdHRwTWV0aG9kcy5pbmRleE9mKG9wdGlvbnMubWV0aG9kKSA9PT0gLTEpIHtcclxuICAgICAgZXJyID0gbmV3IFR5cGVFcnJvcignb3B0aW9ucy5tZXRob2QgbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogJyArXHJcbiAgICAgICAgc3VwcG9ydGVkSHR0cE1ldGhvZHMuc2xpY2UoMCwgc3VwcG9ydGVkSHR0cE1ldGhvZHMubGVuZ3RoIC0gMSkuam9pbignLCAnKSArICcgb3IgJyArXHJcbiAgICAgICAgc3VwcG9ydGVkSHR0cE1ldGhvZHNbc3VwcG9ydGVkSHR0cE1ldGhvZHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMucHJlcGFyZVJlcXVlc3QgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvcHRpb25zLnByZXBhcmVSZXF1ZXN0ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBlcnIgPSBuZXcgVHlwZUVycm9yKCdvcHRpb25zLnByZXBhcmVSZXF1ZXN0IG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFlcnIpIHtcclxuICAgIHJlYWxSZXF1ZXN0ID0gcmVxdWVzdFtyZWFsTWV0aG9kID09PSAnZGVsZXRlJyA/ICdkZWwnIDogcmVhbE1ldGhvZF0obG9jYXRpb24pO1xyXG5cclxuICAgIGlmIChvcHRpb25zLnByZXBhcmVSZXF1ZXN0KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgb3B0aW9ucy5wcmVwYXJlUmVxdWVzdChyZWFsUmVxdWVzdCwgbWFrZVJlcXVlc3QpO1xyXG4gICAgICB9IGNhdGNoIChlcnIyKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZXJyMik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1ha2VSZXF1ZXN0KHVuZGVmaW5lZCwgcmVhbFJlcXVlc3QpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjYWxsYmFjayhlcnIpO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcbnN0cmluZ2lmeS5kZWZhdWx0ID0gc3RyaW5naWZ5XG5zdHJpbmdpZnkuc3RhYmxlID0gZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeVxuc3RyaW5naWZ5LnN0YWJsZVN0cmluZ2lmeSA9IGRldGVybWluaXN0aWNTdHJpbmdpZnlcblxudmFyIGFyciA9IFtdXG5cbi8vIFJlZ3VsYXIgc3RyaW5naWZ5XG5mdW5jdGlvbiBzdHJpbmdpZnkgKG9iaiwgcmVwbGFjZXIsIHNwYWNlcikge1xuICBkZWNpcmMob2JqLCAnJywgW10sIHVuZGVmaW5lZClcbiAgdmFyIHJlcyA9IEpTT04uc3RyaW5naWZ5KG9iaiwgcmVwbGFjZXIsIHNwYWNlcilcbiAgd2hpbGUgKGFyci5sZW5ndGggIT09IDApIHtcbiAgICB2YXIgcGFydCA9IGFyci5wb3AoKVxuICAgIHBhcnRbMF1bcGFydFsxXV0gPSBwYXJ0WzJdXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuZnVuY3Rpb24gZGVjaXJjICh2YWwsIGssIHN0YWNrLCBwYXJlbnQpIHtcbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0YWNrW2ldID09PSB2YWwpIHtcbiAgICAgICAgcGFyZW50W2tdID0gJ1tDaXJjdWxhcl0nXG4gICAgICAgIGFyci5wdXNoKFtwYXJlbnQsIGssIHZhbF0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBzdGFjay5wdXNoKHZhbClcbiAgICAvLyBPcHRpbWl6ZSBmb3IgQXJyYXlzLiBCaWcgYXJyYXlzIGNvdWxkIGtpbGwgdGhlIHBlcmZvcm1hbmNlIG90aGVyd2lzZSFcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRlY2lyYyh2YWxbaV0sIGksIHN0YWNrLCB2YWwpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsKVxuICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV1cbiAgICAgICAgZGVjaXJjKHZhbFtrZXldLCBrZXksIHN0YWNrLCB2YWwpXG4gICAgICB9XG4gICAgfVxuICAgIHN0YWNrLnBvcCgpXG4gIH1cbn1cblxuLy8gU3RhYmxlLXN0cmluZ2lmeVxuZnVuY3Rpb24gY29tcGFyZUZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxXG4gIH1cbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5pc3RpY1N0cmluZ2lmeSAob2JqLCByZXBsYWNlciwgc3BhY2VyKSB7XG4gIHZhciB0bXAgPSBkZXRlcm1pbmlzdGljRGVjaXJjKG9iaiwgJycsIFtdLCB1bmRlZmluZWQpIHx8IG9ialxuICB2YXIgcmVzID0gSlNPTi5zdHJpbmdpZnkodG1wLCByZXBsYWNlciwgc3BhY2VyKVxuICB3aGlsZSAoYXJyLmxlbmd0aCAhPT0gMCkge1xuICAgIHZhciBwYXJ0ID0gYXJyLnBvcCgpXG4gICAgcGFydFswXVtwYXJ0WzFdXSA9IHBhcnRbMl1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGRldGVybWluaXN0aWNEZWNpcmMgKHZhbCwgaywgc3RhY2ssIHBhcmVudCkge1xuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RhY2tbaV0gPT09IHZhbCkge1xuICAgICAgICBwYXJlbnRba10gPSAnW0NpcmN1bGFyXSdcbiAgICAgICAgYXJyLnB1c2goW3BhcmVudCwgaywgdmFsXSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHN0YWNrLnB1c2godmFsKVxuICAgIC8vIE9wdGltaXplIGZvciBBcnJheXMuIEJpZyBhcnJheXMgY291bGQga2lsbCB0aGUgcGVyZm9ybWFuY2Ugb3RoZXJ3aXNlIVxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGV0ZXJtaW5pc3RpY0RlY2lyYyh2YWxbaV0sIGksIHN0YWNrLCB2YWwpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENyZWF0ZSBhIHRlbXBvcmFyeSBvYmplY3QgaW4gdGhlIHJlcXVpcmVkIHdheVxuICAgICAgdmFyIHRtcCA9IHt9XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbCkuc29ydChjb21wYXJlRnVuY3Rpb24pXG4gICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXVxuICAgICAgICBkZXRlcm1pbmlzdGljRGVjaXJjKHZhbFtrZXldLCBrZXksIHN0YWNrLCB2YWwpXG4gICAgICAgIHRtcFtrZXldID0gdmFsW2tleV1cbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhcnIucHVzaChbcGFyZW50LCBrLCB2YWxdKVxuICAgICAgICBwYXJlbnRba10gPSB0bXBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0bXBcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhY2sucG9wKClcbiAgfVxufVxuIiwiLyohIE5hdGl2ZSBQcm9taXNlIE9ubHlcbiAgICB2MC44LjEgKGMpIEt5bGUgU2ltcHNvblxuICAgIE1JVCBMaWNlbnNlOiBodHRwOi8vZ2V0aWZ5Lm1pdC1saWNlbnNlLm9yZ1xuKi9cblxuKGZ1bmN0aW9uIFVNRChuYW1lLGNvbnRleHQsZGVmaW5pdGlvbil7XG5cdC8vIHNwZWNpYWwgZm9ybSBvZiBVTUQgZm9yIHBvbHlmaWxsaW5nIGFjcm9zcyBldmlyb25tZW50c1xuXHRjb250ZXh0W25hbWVdID0gY29udGV4dFtuYW1lXSB8fCBkZWZpbml0aW9uKCk7XG5cdGlmICh0eXBlb2YgbW9kdWxlICE9IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHsgbW9kdWxlLmV4cG9ydHMgPSBjb250ZXh0W25hbWVdOyB9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHsgZGVmaW5lKGZ1bmN0aW9uICRBTUQkKCl7IHJldHVybiBjb250ZXh0W25hbWVdOyB9KTsgfVxufSkoXCJQcm9taXNlXCIsdHlwZW9mIGdsb2JhbCAhPSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyxmdW5jdGlvbiBERUYoKXtcblx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIGJ1aWx0SW5Qcm9wLCBjeWNsZSwgc2NoZWR1bGluZ19xdWV1ZSxcblx0XHRUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG5cdFx0dGltZXIgPSAodHlwZW9mIHNldEltbWVkaWF0ZSAhPSBcInVuZGVmaW5lZFwiKSA/XG5cdFx0XHRmdW5jdGlvbiB0aW1lcihmbikgeyByZXR1cm4gc2V0SW1tZWRpYXRlKGZuKTsgfSA6XG5cdFx0XHRzZXRUaW1lb3V0XG5cdDtcblxuXHQvLyBkYW1taXQsIElFOC5cblx0dHJ5IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJ4XCIse30pO1xuXHRcdGJ1aWx0SW5Qcm9wID0gZnVuY3Rpb24gYnVpbHRJblByb3Aob2JqLG5hbWUsdmFsLGNvbmZpZykge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosbmFtZSx7XG5cdFx0XHRcdHZhbHVlOiB2YWwsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IGNvbmZpZyAhPT0gZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH07XG5cdH1cblx0Y2F0Y2ggKGVycikge1xuXHRcdGJ1aWx0SW5Qcm9wID0gZnVuY3Rpb24gYnVpbHRJblByb3Aob2JqLG5hbWUsdmFsKSB7XG5cdFx0XHRvYmpbbmFtZV0gPSB2YWw7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH07XG5cdH1cblxuXHQvLyBOb3RlOiB1c2luZyBhIHF1ZXVlIGluc3RlYWQgb2YgYXJyYXkgZm9yIGVmZmljaWVuY3lcblx0c2NoZWR1bGluZ19xdWV1ZSA9IChmdW5jdGlvbiBRdWV1ZSgpIHtcblx0XHR2YXIgZmlyc3QsIGxhc3QsIGl0ZW07XG5cblx0XHRmdW5jdGlvbiBJdGVtKGZuLHNlbGYpIHtcblx0XHRcdHRoaXMuZm4gPSBmbjtcblx0XHRcdHRoaXMuc2VsZiA9IHNlbGY7XG5cdFx0XHR0aGlzLm5leHQgPSB2b2lkIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFkZDogZnVuY3Rpb24gYWRkKGZuLHNlbGYpIHtcblx0XHRcdFx0aXRlbSA9IG5ldyBJdGVtKGZuLHNlbGYpO1xuXHRcdFx0XHRpZiAobGFzdCkge1xuXHRcdFx0XHRcdGxhc3QubmV4dCA9IGl0ZW07XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Zmlyc3QgPSBpdGVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxhc3QgPSBpdGVtO1xuXHRcdFx0XHRpdGVtID0gdm9pZCAwO1xuXHRcdFx0fSxcblx0XHRcdGRyYWluOiBmdW5jdGlvbiBkcmFpbigpIHtcblx0XHRcdFx0dmFyIGYgPSBmaXJzdDtcblx0XHRcdFx0Zmlyc3QgPSBsYXN0ID0gY3ljbGUgPSB2b2lkIDA7XG5cblx0XHRcdFx0d2hpbGUgKGYpIHtcblx0XHRcdFx0XHRmLmZuLmNhbGwoZi5zZWxmKTtcblx0XHRcdFx0XHRmID0gZi5uZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fSkoKTtcblxuXHRmdW5jdGlvbiBzY2hlZHVsZShmbixzZWxmKSB7XG5cdFx0c2NoZWR1bGluZ19xdWV1ZS5hZGQoZm4sc2VsZik7XG5cdFx0aWYgKCFjeWNsZSkge1xuXHRcdFx0Y3ljbGUgPSB0aW1lcihzY2hlZHVsaW5nX3F1ZXVlLmRyYWluKTtcblx0XHR9XG5cdH1cblxuXHQvLyBwcm9taXNlIGR1Y2sgdHlwaW5nXG5cdGZ1bmN0aW9uIGlzVGhlbmFibGUobykge1xuXHRcdHZhciBfdGhlbiwgb190eXBlID0gdHlwZW9mIG87XG5cblx0XHRpZiAobyAhPSBudWxsICYmXG5cdFx0XHQoXG5cdFx0XHRcdG9fdHlwZSA9PSBcIm9iamVjdFwiIHx8IG9fdHlwZSA9PSBcImZ1bmN0aW9uXCJcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdF90aGVuID0gby50aGVuO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZW9mIF90aGVuID09IFwiZnVuY3Rpb25cIiA/IF90aGVuIDogZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBub3RpZnkoKSB7XG5cdFx0Zm9yICh2YXIgaT0wOyBpPHRoaXMuY2hhaW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdG5vdGlmeUlzb2xhdGVkKFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0XHQodGhpcy5zdGF0ZSA9PT0gMSkgPyB0aGlzLmNoYWluW2ldLnN1Y2Nlc3MgOiB0aGlzLmNoYWluW2ldLmZhaWx1cmUsXG5cdFx0XHRcdHRoaXMuY2hhaW5baV1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHRoaXMuY2hhaW4ubGVuZ3RoID0gMDtcblx0fVxuXG5cdC8vIE5PVEU6IFRoaXMgaXMgYSBzZXBhcmF0ZSBmdW5jdGlvbiB0byBpc29sYXRlXG5cdC8vIHRoZSBgdHJ5Li5jYXRjaGAgc28gdGhhdCBvdGhlciBjb2RlIGNhbiBiZVxuXHQvLyBvcHRpbWl6ZWQgYmV0dGVyXG5cdGZ1bmN0aW9uIG5vdGlmeUlzb2xhdGVkKHNlbGYsY2IsY2hhaW4pIHtcblx0XHR2YXIgcmV0LCBfdGhlbjtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGNiID09PSBmYWxzZSkge1xuXHRcdFx0XHRjaGFpbi5yZWplY3Qoc2VsZi5tc2cpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChjYiA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHJldCA9IHNlbGYubXNnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHJldCA9IGNiLmNhbGwodm9pZCAwLHNlbGYubXNnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXQgPT09IGNoYWluLnByb21pc2UpIHtcblx0XHRcdFx0XHRjaGFpbi5yZWplY3QoVHlwZUVycm9yKFwiUHJvbWlzZS1jaGFpbiBjeWNsZVwiKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoX3RoZW4gPSBpc1RoZW5hYmxlKHJldCkpIHtcblx0XHRcdFx0XHRfdGhlbi5jYWxsKHJldCxjaGFpbi5yZXNvbHZlLGNoYWluLnJlamVjdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Y2hhaW4ucmVzb2x2ZShyZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChlcnIpIHtcblx0XHRcdGNoYWluLnJlamVjdChlcnIpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlc29sdmUobXNnKSB7XG5cdFx0dmFyIF90aGVuLCBzZWxmID0gdGhpcztcblxuXHRcdC8vIGFscmVhZHkgdHJpZ2dlcmVkP1xuXHRcdGlmIChzZWxmLnRyaWdnZXJlZCkgeyByZXR1cm47IH1cblxuXHRcdHNlbGYudHJpZ2dlcmVkID0gdHJ1ZTtcblxuXHRcdC8vIHVud3JhcFxuXHRcdGlmIChzZWxmLmRlZikge1xuXHRcdFx0c2VsZiA9IHNlbGYuZGVmO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoX3RoZW4gPSBpc1RoZW5hYmxlKG1zZykpIHtcblx0XHRcdFx0c2NoZWR1bGUoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR2YXIgZGVmX3dyYXBwZXIgPSBuZXcgTWFrZURlZldyYXBwZXIoc2VsZik7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdF90aGVuLmNhbGwobXNnLFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAkcmVzb2x2ZSQoKXsgcmVzb2x2ZS5hcHBseShkZWZfd3JhcHBlcixhcmd1bWVudHMpOyB9LFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAkcmVqZWN0JCgpeyByZWplY3QuYXBwbHkoZGVmX3dyYXBwZXIsYXJndW1lbnRzKTsgfVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0cmVqZWN0LmNhbGwoZGVmX3dyYXBwZXIsZXJyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c2VsZi5tc2cgPSBtc2c7XG5cdFx0XHRcdHNlbGYuc3RhdGUgPSAxO1xuXHRcdFx0XHRpZiAoc2VsZi5jaGFpbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2NoZWR1bGUobm90aWZ5LHNlbGYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhdGNoIChlcnIpIHtcblx0XHRcdHJlamVjdC5jYWxsKG5ldyBNYWtlRGVmV3JhcHBlcihzZWxmKSxlcnIpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlamVjdChtc2cpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBhbHJlYWR5IHRyaWdnZXJlZD9cblx0XHRpZiAoc2VsZi50cmlnZ2VyZWQpIHsgcmV0dXJuOyB9XG5cblx0XHRzZWxmLnRyaWdnZXJlZCA9IHRydWU7XG5cblx0XHQvLyB1bndyYXBcblx0XHRpZiAoc2VsZi5kZWYpIHtcblx0XHRcdHNlbGYgPSBzZWxmLmRlZjtcblx0XHR9XG5cblx0XHRzZWxmLm1zZyA9IG1zZztcblx0XHRzZWxmLnN0YXRlID0gMjtcblx0XHRpZiAoc2VsZi5jaGFpbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRzY2hlZHVsZShub3RpZnksc2VsZik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaXRlcmF0ZVByb21pc2VzKENvbnN0cnVjdG9yLGFycixyZXNvbHZlcixyZWplY3Rlcikge1xuXHRcdGZvciAodmFyIGlkeD0wOyBpZHg8YXJyLmxlbmd0aDsgaWR4KyspIHtcblx0XHRcdChmdW5jdGlvbiBJSUZFKGlkeCl7XG5cdFx0XHRcdENvbnN0cnVjdG9yLnJlc29sdmUoYXJyW2lkeF0pXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICRyZXNvbHZlciQobXNnKXtcblx0XHRcdFx0XHRcdHJlc29sdmVyKGlkeCxtc2cpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVqZWN0ZXJcblx0XHRcdFx0KTtcblx0XHRcdH0pKGlkeCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gTWFrZURlZldyYXBwZXIoc2VsZikge1xuXHRcdHRoaXMuZGVmID0gc2VsZjtcblx0XHR0aGlzLnRyaWdnZXJlZCA9IGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gTWFrZURlZihzZWxmKSB7XG5cdFx0dGhpcy5wcm9taXNlID0gc2VsZjtcblx0XHR0aGlzLnN0YXRlID0gMDtcblx0XHR0aGlzLnRyaWdnZXJlZCA9IGZhbHNlO1xuXHRcdHRoaXMuY2hhaW4gPSBbXTtcblx0XHR0aGlzLm1zZyA9IHZvaWQgMDtcblx0fVxuXG5cdGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcblx0XHRpZiAodHlwZW9mIGV4ZWN1dG9yICE9IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX19OUE9fXyAhPT0gMCkge1xuXHRcdFx0dGhyb3cgVHlwZUVycm9yKFwiTm90IGEgcHJvbWlzZVwiKTtcblx0XHR9XG5cblx0XHQvLyBpbnN0YW5jZSBzaGFkb3dpbmcgdGhlIGluaGVyaXRlZCBcImJyYW5kXCJcblx0XHQvLyB0byBzaWduYWwgYW4gYWxyZWFkeSBcImluaXRpYWxpemVkXCIgcHJvbWlzZVxuXHRcdHRoaXMuX19OUE9fXyA9IDE7XG5cblx0XHR2YXIgZGVmID0gbmV3IE1ha2VEZWYodGhpcyk7XG5cblx0XHR0aGlzW1widGhlblwiXSA9IGZ1bmN0aW9uIHRoZW4oc3VjY2VzcyxmYWlsdXJlKSB7XG5cdFx0XHR2YXIgbyA9IHtcblx0XHRcdFx0c3VjY2VzczogdHlwZW9mIHN1Y2Nlc3MgPT0gXCJmdW5jdGlvblwiID8gc3VjY2VzcyA6IHRydWUsXG5cdFx0XHRcdGZhaWx1cmU6IHR5cGVvZiBmYWlsdXJlID09IFwiZnVuY3Rpb25cIiA/IGZhaWx1cmUgOiBmYWxzZVxuXHRcdFx0fTtcblx0XHRcdC8vIE5vdGU6IGB0aGVuKC4uKWAgaXRzZWxmIGNhbiBiZSBib3Jyb3dlZCB0byBiZSB1c2VkIGFnYWluc3Rcblx0XHRcdC8vIGEgZGlmZmVyZW50IHByb21pc2UgY29uc3RydWN0b3IgZm9yIG1ha2luZyB0aGUgY2hhaW5lZCBwcm9taXNlLFxuXHRcdFx0Ly8gYnkgc3Vic3RpdHV0aW5nIGEgZGlmZmVyZW50IGB0aGlzYCBiaW5kaW5nLlxuXHRcdFx0by5wcm9taXNlID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZnVuY3Rpb24gZXh0cmFjdENoYWluKHJlc29sdmUscmVqZWN0KSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgcmVzb2x2ZSAhPSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJlamVjdCAhPSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHR0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG8ucmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRcdG8ucmVqZWN0ID0gcmVqZWN0O1xuXHRcdFx0fSk7XG5cdFx0XHRkZWYuY2hhaW4ucHVzaChvKTtcblxuXHRcdFx0aWYgKGRlZi5zdGF0ZSAhPT0gMCkge1xuXHRcdFx0XHRzY2hlZHVsZShub3RpZnksZGVmKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG8ucHJvbWlzZTtcblx0XHR9O1xuXHRcdHRoaXNbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uICRjYXRjaCQoZmFpbHVyZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGhlbih2b2lkIDAsZmFpbHVyZSk7XG5cdFx0fTtcblxuXHRcdHRyeSB7XG5cdFx0XHRleGVjdXRvci5jYWxsKFxuXHRcdFx0XHR2b2lkIDAsXG5cdFx0XHRcdGZ1bmN0aW9uIHB1YmxpY1Jlc29sdmUobXNnKXtcblx0XHRcdFx0XHRyZXNvbHZlLmNhbGwoZGVmLG1zZyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZ1bmN0aW9uIHB1YmxpY1JlamVjdChtc2cpIHtcblx0XHRcdFx0XHRyZWplY3QuY2FsbChkZWYsbXNnKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y2F0Y2ggKGVycikge1xuXHRcdFx0cmVqZWN0LmNhbGwoZGVmLGVycik7XG5cdFx0fVxuXHR9XG5cblx0dmFyIFByb21pc2VQcm90b3R5cGUgPSBidWlsdEluUHJvcCh7fSxcImNvbnN0cnVjdG9yXCIsUHJvbWlzZSxcblx0XHQvKmNvbmZpZ3VyYWJsZT0qL2ZhbHNlXG5cdCk7XG5cblx0Ly8gTm90ZTogQW5kcm9pZCA0IGNhbm5vdCB1c2UgYE9iamVjdC5kZWZpbmVQcm9wZXJ0eSguLilgIGhlcmVcblx0UHJvbWlzZS5wcm90b3R5cGUgPSBQcm9taXNlUHJvdG90eXBlO1xuXG5cdC8vIGJ1aWx0LWluIFwiYnJhbmRcIiB0byBzaWduYWwgYW4gXCJ1bmluaXRpYWxpemVkXCIgcHJvbWlzZVxuXHRidWlsdEluUHJvcChQcm9taXNlUHJvdG90eXBlLFwiX19OUE9fX1wiLDAsXG5cdFx0Lypjb25maWd1cmFibGU9Ki9mYWxzZVxuXHQpO1xuXG5cdGJ1aWx0SW5Qcm9wKFByb21pc2UsXCJyZXNvbHZlXCIsZnVuY3Rpb24gUHJvbWlzZSRyZXNvbHZlKG1zZykge1xuXHRcdHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cblx0XHQvLyBzcGVjIG1hbmRhdGVkIGNoZWNrc1xuXHRcdC8vIG5vdGU6IGJlc3QgXCJpc1Byb21pc2VcIiBjaGVjayB0aGF0J3MgcHJhY3RpY2FsIGZvciBub3dcblx0XHRpZiAobXNnICYmIHR5cGVvZiBtc2cgPT0gXCJvYmplY3RcIiAmJiBtc2cuX19OUE9fXyA9PT0gMSkge1xuXHRcdFx0cmV0dXJuIG1zZztcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUscmVqZWN0KXtcblx0XHRcdGlmICh0eXBlb2YgcmVzb2x2ZSAhPSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJlamVjdCAhPSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7XG5cdFx0XHR9XG5cblx0XHRcdHJlc29sdmUobXNnKTtcblx0XHR9KTtcblx0fSk7XG5cblx0YnVpbHRJblByb3AoUHJvbWlzZSxcInJlamVjdFwiLGZ1bmN0aW9uIFByb21pc2UkcmVqZWN0KG1zZykge1xuXHRcdHJldHVybiBuZXcgdGhpcyhmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLHJlamVjdCl7XG5cdFx0XHRpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZWplY3QobXNnKTtcblx0XHR9KTtcblx0fSk7XG5cblx0YnVpbHRJblByb3AoUHJvbWlzZSxcImFsbFwiLGZ1bmN0aW9uIFByb21pc2UkYWxsKGFycikge1xuXHRcdHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cblx0XHQvLyBzcGVjIG1hbmRhdGVkIGNoZWNrc1xuXHRcdGlmIChUb1N0cmluZy5jYWxsKGFycikgIT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG5cdFx0XHRyZXR1cm4gQ29uc3RydWN0b3IucmVqZWN0KFR5cGVFcnJvcihcIk5vdCBhbiBhcnJheVwiKSk7XG5cdFx0fVxuXHRcdGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gQ29uc3RydWN0b3IucmVzb2x2ZShbXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLHJlamVjdCl7XG5cdFx0XHRpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGVuID0gYXJyLmxlbmd0aCwgbXNncyA9IEFycmF5KGxlbiksIGNvdW50ID0gMDtcblxuXHRcdFx0aXRlcmF0ZVByb21pc2VzKENvbnN0cnVjdG9yLGFycixmdW5jdGlvbiByZXNvbHZlcihpZHgsbXNnKSB7XG5cdFx0XHRcdG1zZ3NbaWR4XSA9IG1zZztcblx0XHRcdFx0aWYgKCsrY291bnQgPT09IGxlbikge1xuXHRcdFx0XHRcdHJlc29sdmUobXNncyk7XG5cdFx0XHRcdH1cblx0XHRcdH0scmVqZWN0KTtcblx0XHR9KTtcblx0fSk7XG5cblx0YnVpbHRJblByb3AoUHJvbWlzZSxcInJhY2VcIixmdW5jdGlvbiBQcm9taXNlJHJhY2UoYXJyKSB7XG5cdFx0dmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuXHRcdC8vIHNwZWMgbWFuZGF0ZWQgY2hlY2tzXG5cdFx0aWYgKFRvU3RyaW5nLmNhbGwoYXJyKSAhPSBcIltvYmplY3QgQXJyYXldXCIpIHtcblx0XHRcdHJldHVybiBDb25zdHJ1Y3Rvci5yZWplY3QoVHlwZUVycm9yKFwiTm90IGFuIGFycmF5XCIpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUscmVqZWN0KXtcblx0XHRcdGlmICh0eXBlb2YgcmVzb2x2ZSAhPSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJlamVjdCAhPSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7XG5cdFx0XHR9XG5cblx0XHRcdGl0ZXJhdGVQcm9taXNlcyhDb25zdHJ1Y3RvcixhcnIsZnVuY3Rpb24gcmVzb2x2ZXIoaWR4LG1zZyl7XG5cdFx0XHRcdHJlc29sdmUobXNnKTtcblx0XHRcdH0scmVqZWN0KTtcblx0XHR9KTtcblx0fSk7XG5cblx0cmV0dXJuIFByb21pc2U7XG59KTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuZnVuY3Rpb24gQWdlbnQoKSB7XG4gIHRoaXMuX2RlZmF1bHRzID0gW107XG59XG5cblsndXNlJywgJ29uJywgJ29uY2UnLCAnc2V0JywgJ3F1ZXJ5JywgJ3R5cGUnLCAnYWNjZXB0JywgJ2F1dGgnLCAnd2l0aENyZWRlbnRpYWxzJywgJ3NvcnRRdWVyeScsICdyZXRyeScsICdvaycsICdyZWRpcmVjdHMnLCAndGltZW91dCcsICdidWZmZXInLCAnc2VyaWFsaXplJywgJ3BhcnNlJywgJ2NhJywgJ2tleScsICdwZngnLCAnY2VydCddLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gIC8vIERlZmF1bHQgc2V0dGluZyBmb3IgYWxsIHJlcXVlc3RzIGZyb20gdGhpcyBhZ2VudFxuICBBZ2VudC5wcm90b3R5cGVbZm5dID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB0aGlzLl9kZWZhdWx0cy5wdXNoKHtcbiAgICAgIGZuOiBmbixcbiAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xufSk7XG5cbkFnZW50LnByb3RvdHlwZS5fc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAocmVxKSB7XG4gIHRoaXMuX2RlZmF1bHRzLmZvckVhY2goZnVuY3Rpb24gKGRlZikge1xuICAgIHJlcVtkZWYuZm5dLmFwcGx5KHJlcSwgX3RvQ29uc3VtYWJsZUFycmF5KGRlZi5hcmdzKSk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZ2VudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyoqXG4gKiBSb290IHJlZmVyZW5jZSBmb3IgaWZyYW1lcy5cbiAqL1xudmFyIHJvb3Q7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAvLyBCcm93c2VyIHdpbmRvd1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gT3RoZXIgZW52aXJvbm1lbnRzXG4gIGNvbnNvbGUud2FybignVXNpbmcgYnJvd3Nlci1vbmx5IHZlcnNpb24gb2Ygc3VwZXJhZ2VudCBpbiBub24tYnJvd3NlciBlbnZpcm9ubWVudCcpO1xuICByb290ID0gdm9pZCAwO1xufSBlbHNlIHtcbiAgLy8gV2ViIFdvcmtlclxuICByb290ID0gc2VsZjtcbn1cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xuXG52YXIgc2FmZVN0cmluZ2lmeSA9IHJlcXVpcmUoJ2Zhc3Qtc2FmZS1zdHJpbmdpZnknKTtcblxudmFyIFJlcXVlc3RCYXNlID0gcmVxdWlyZSgnLi9yZXF1ZXN0LWJhc2UnKTtcblxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pcy1vYmplY3QnKTtcblxudmFyIFJlc3BvbnNlQmFzZSA9IHJlcXVpcmUoJy4vcmVzcG9uc2UtYmFzZScpO1xuXG52YXIgQWdlbnQgPSByZXF1aXJlKCcuL2FnZW50LWJhc2UnKTtcbi8qKlxuICogTm9vcC5cbiAqL1xuXG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuLyoqXG4gKiBFeHBvc2UgYHJlcXVlc3RgLlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgLy8gY2FsbGJhY2tcbiAgaWYgKHR5cGVvZiB1cmwgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbmV3IGV4cG9ydHMuUmVxdWVzdCgnR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfSAvLyB1cmwgZmlyc3RcblxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QoJ0dFVCcsIG1ldGhvZCk7XG4gIH1cblxuICByZXR1cm4gbmV3IGV4cG9ydHMuUmVxdWVzdChtZXRob2QsIHVybCk7XG59O1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG52YXIgcmVxdWVzdCA9IGV4cG9ydHM7XG5leHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuLyoqXG4gKiBEZXRlcm1pbmUgWEhSLlxuICovXG5cbnJlcXVlc3QuZ2V0WEhSID0gZnVuY3Rpb24gKCkge1xuICBpZiAocm9vdC5YTUxIdHRwUmVxdWVzdCAmJiAoIXJvb3QubG9jYXRpb24gfHwgcm9vdC5sb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2ZpbGU6JyB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjYuMCcpO1xuICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjMuMCcpO1xuICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7XG4gIH0gY2F0Y2ggKGVycikge31cblxuICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb3dzZXItb25seSB2ZXJzaW9uIG9mIHN1cGVyYWdlbnQgY291bGQgbm90IGZpbmQgWEhSJyk7XG59O1xuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGFkZGVkIHRvIHN1cHBvcnQgSUUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblxudmFyIHRyaW0gPSAnJy50cmltID8gZnVuY3Rpb24gKHMpIHtcbiAgcmV0dXJuIHMudHJpbSgpO1xufSA6IGZ1bmN0aW9uIChzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoLyheXFxzKnxcXHMqJCkvZywgJycpO1xufTtcbi8qKlxuICogU2VyaWFsaXplIHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgdmFyIHBhaXJzID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCBvYmpba2V5XSk7XG4gIH1cblxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuLyoqXG4gKiBIZWxwcyAnc2VyaWFsaXplJyB3aXRoIHNlcmlhbGl6aW5nIGFycmF5cy5cbiAqIE11dGF0ZXMgdGhlIHBhaXJzIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXJzXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqL1xuXG5cbmZ1bmN0aW9uIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXksIHZhbCkge1xuICBpZiAodmFsID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHZhbC5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCB2KTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgZm9yICh2YXIgc3Via2V5IGluIHZhbCkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIHN1YmtleSkpIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBcIlwiLmNvbmNhdChrZXksIFwiW1wiKS5jb25jYXQoc3Via2V5LCBcIl1cIiksIHZhbFtzdWJrZXldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpKTtcbiAgfVxufVxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxuXG5yZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdCA9IHNlcmlhbGl6ZTtcbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVN0cmluZyhzdHIpIHtcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQoJyYnKTtcbiAgdmFyIHBhaXI7XG4gIHZhciBwb3M7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhaXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcGFpciA9IHBhaXJzW2ldO1xuICAgIHBvcyA9IHBhaXIuaW5kZXhPZignPScpO1xuXG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFpcildID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFpci5zbGljZSgwLCBwb3MpKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpci5zbGljZShwb3MgKyAxKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cbi8qKlxuICogRXhwb3NlIHBhcnNlci5cbiAqL1xuXG5cbnJlcXVlc3QucGFyc2VTdHJpbmcgPSBwYXJzZVN0cmluZztcbi8qKlxuICogRGVmYXVsdCBNSU1FIHR5cGUgbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnR5cGVzLnhtbCA9ICdhcHBsaWNhdGlvbi94bWwnO1xuICpcbiAqL1xuXG5yZXF1ZXN0LnR5cGVzID0ge1xuICBodG1sOiAndGV4dC9odG1sJyxcbiAganNvbjogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB4bWw6ICd0ZXh0L3htbCcsXG4gIHVybGVuY29kZWQ6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICBmb3JtOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0tZGF0YSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbnJlcXVlc3Quc2VyaWFsaXplID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAnYXBwbGljYXRpb24vanNvbic6IHNhZmVTdHJpbmdpZnlcbn07XG4vKipcbiAqIERlZmF1bHQgcGFyc2Vycy5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihzdHIpe1xuICogICAgICAgcmV0dXJuIHsgb2JqZWN0IHBhcnNlZCBmcm9tIHN0ciB9O1xuICogICAgIH07XG4gKlxuICovXG5cbnJlcXVlc3QucGFyc2UgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBwYXJzZVN0cmluZyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnBhcnNlXG59O1xuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaGVhZGVyIGBzdHJgIGludG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtYXBwZWQgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHN0cikge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsaW5lO1xuICB2YXIgZmllbGQ7XG4gIHZhciB2YWw7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgbGluZSA9IGxpbmVzW2ldO1xuICAgIGluZGV4ID0gbGluZS5pbmRleE9mKCc6Jyk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAvLyBjb3VsZCBiZSBlbXB0eSBsaW5lLCBqdXN0IHNraXAgaXRcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGZpZWxkID0gbGluZS5zbGljZSgwLCBpbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB0cmltKGxpbmUuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgZmllbGRzW2ZpZWxkXSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59XG4vKipcbiAqIENoZWNrIGlmIGBtaW1lYCBpcyBqc29uIG9yIGhhcyAranNvbiBzdHJ1Y3R1cmVkIHN5bnRheCBzdWZmaXguXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1pbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzSlNPTihtaW1lKSB7XG4gIC8vIHNob3VsZCBtYXRjaCAvanNvbiBvciAranNvblxuICAvLyBidXQgbm90IC9qc29uLXNlcVxuICByZXR1cm4gL1svK11qc29uKCR8W14tXFx3XSkvLnRlc3QobWltZSk7XG59XG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlc3BvbnNlYCB3aXRoIHRoZSBnaXZlbiBgeGhyYC5cbiAqXG4gKiAgLSBzZXQgZmxhZ3MgKC5vaywgLmVycm9yLCBldGMpXG4gKiAgLSBwYXJzZSBoZWFkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgQWxpYXNpbmcgYHN1cGVyYWdlbnRgIGFzIGByZXF1ZXN0YCBpcyBuaWNlOlxuICpcbiAqICAgICAgcmVxdWVzdCA9IHN1cGVyYWdlbnQ7XG4gKlxuICogIFdlIGNhbiB1c2UgdGhlIHByb21pc2UtbGlrZSBBUEksIG9yIHBhc3MgY2FsbGJhY2tzOlxuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nKS5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqICAgICAgcmVxdWVzdC5nZXQoJy8nLCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBTZW5kaW5nIGRhdGEgY2FuIGJlIGNoYWluZWQ6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnNlbmQoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJylcbiAqICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAucG9zdCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogT3IgZnVydGhlciByZWR1Y2VkIHRvIGEgc2luZ2xlIGNhbGwgZm9yIHNpbXBsZSBjYXNlczpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInLCB7IG5hbWU6ICd0aicgfSwgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBAcGFyYW0ge1hNTEhUVFBSZXF1ZXN0fSB4aHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSkge1xuICB0aGlzLnJlcSA9IHJlcTtcbiAgdGhpcy54aHIgPSB0aGlzLnJlcS54aHI7IC8vIHJlc3BvbnNlVGV4dCBpcyBhY2Nlc3NpYmxlIG9ubHkgaWYgcmVzcG9uc2VUeXBlIGlzICcnIG9yICd0ZXh0JyBhbmQgb24gb2xkZXIgYnJvd3NlcnNcblxuICB0aGlzLnRleHQgPSB0aGlzLnJlcS5tZXRob2QgIT09ICdIRUFEJyAmJiAodGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAnJyB8fCB0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JykgfHwgdHlwZW9mIHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnhoci5yZXNwb25zZVRleHQgOiBudWxsO1xuICB0aGlzLnN0YXR1c1RleHQgPSB0aGlzLnJlcS54aHIuc3RhdHVzVGV4dDtcbiAgdmFyIHN0YXR1cyA9IHRoaXMueGhyLnN0YXR1czsgLy8gaGFuZGxlIElFOSBidWc6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTAwNDY5NzIvbXNpZS1yZXR1cm5zLXN0YXR1cy1jb2RlLW9mLTEyMjMtZm9yLWFqYXgtcmVxdWVzdFxuXG4gIGlmIChzdGF0dXMgPT09IDEyMjMpIHtcbiAgICBzdGF0dXMgPSAyMDQ7XG4gIH1cblxuICB0aGlzLl9zZXRTdGF0dXNQcm9wZXJ0aWVzKHN0YXR1cyk7XG5cbiAgdGhpcy5oZWFkZXJzID0gcGFyc2VIZWFkZXIodGhpcy54aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVyczsgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuXG4gIHRoaXMuaGVhZGVyWydjb250ZW50LXR5cGUnXSA9IHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKTtcblxuICB0aGlzLl9zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKTtcblxuICBpZiAodGhpcy50ZXh0ID09PSBudWxsICYmIHJlcS5fcmVzcG9uc2VUeXBlKSB7XG4gICAgdGhpcy5ib2R5ID0gdGhpcy54aHIucmVzcG9uc2U7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5ib2R5ID0gdGhpcy5yZXEubWV0aG9kID09PSAnSEVBRCcgPyBudWxsIDogdGhpcy5fcGFyc2VCb2R5KHRoaXMudGV4dCA/IHRoaXMudGV4dCA6IHRoaXMueGhyLnJlc3BvbnNlKTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcFxuXG5cblJlc3BvbnNlQmFzZShSZXNwb25zZS5wcm90b3R5cGUpO1xuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYm9keSBgc3RyYC5cbiAqXG4gKiBVc2VkIGZvciBhdXRvLXBhcnNpbmcgb2YgYm9kaWVzLiBQYXJzZXJzXG4gKiBhcmUgZGVmaW5lZCBvbiB0aGUgYHN1cGVyYWdlbnQucGFyc2VgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5fcGFyc2VCb2R5ID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG5cbiAgaWYgKHRoaXMucmVxLl9wYXJzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXEuX3BhcnNlcih0aGlzLCBzdHIpO1xuICB9XG5cbiAgaWYgKCFwYXJzZSAmJiBpc0pTT04odGhpcy50eXBlKSkge1xuICAgIHBhcnNlID0gcmVxdWVzdC5wYXJzZVsnYXBwbGljYXRpb24vanNvbiddO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiAoc3RyLmxlbmd0aCA+IDAgfHwgc3RyIGluc3RhbmNlb2YgT2JqZWN0KSA/IHBhcnNlKHN0cikgOiBudWxsO1xufTtcbi8qKlxuICogUmV0dXJuIGFuIGBFcnJvcmAgcmVwcmVzZW50YXRpdmUgb2YgdGhpcyByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJuIHtFcnJvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlcSA9IHRoaXMucmVxO1xuICB2YXIgbWV0aG9kID0gcmVxLm1ldGhvZDtcbiAgdmFyIHVybCA9IHJlcS51cmw7XG4gIHZhciBtc2cgPSBcImNhbm5vdCBcIi5jb25jYXQobWV0aG9kLCBcIiBcIikuY29uY2F0KHVybCwgXCIgKFwiKS5jb25jYXQodGhpcy5zdGF0dXMsIFwiKVwiKTtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICBlcnIuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSBtZXRob2Q7XG4gIGVyci51cmwgPSB1cmw7XG4gIHJldHVybiBlcnI7XG59O1xuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlYC5cbiAqL1xuXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdGAgd2l0aCB0aGUgZ2l2ZW4gYG1ldGhvZGAgYW5kIGB1cmxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdChtZXRob2QsIHVybCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX3F1ZXJ5ID0gdGhpcy5fcXVlcnkgfHwgW107XG4gIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB0aGlzLnVybCA9IHVybDtcbiAgdGhpcy5oZWFkZXIgPSB7fTsgLy8gcHJlc2VydmVzIGhlYWRlciBuYW1lIGNhc2VcblxuICB0aGlzLl9oZWFkZXIgPSB7fTsgLy8gY29lcmNlcyBoZWFkZXIgbmFtZXMgdG8gbG93ZXJjYXNlXG5cbiAgdGhpcy5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBlcnIgPSBudWxsO1xuICAgIHZhciByZXMgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IG5ldyBSZXNwb25zZShzZWxmKTtcbiAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ1BhcnNlciBpcyB1bmFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlJyk7XG4gICAgICBlcnIucGFyc2UgPSB0cnVlO1xuICAgICAgZXJyLm9yaWdpbmFsID0gZXJyMjsgLy8gaXNzdWUgIzY3NTogcmV0dXJuIHRoZSByYXcgcmVzcG9uc2UgaWYgdGhlIHJlc3BvbnNlIHBhcnNpbmcgZmFpbHNcblxuICAgICAgaWYgKHNlbGYueGhyKSB7XG4gICAgICAgIC8vIGllOSBkb2Vzbid0IGhhdmUgJ3Jlc3BvbnNlJyBwcm9wZXJ0eVxuICAgICAgICBlcnIucmF3UmVzcG9uc2UgPSB0eXBlb2Ygc2VsZi54aHIucmVzcG9uc2VUeXBlID09PSAndW5kZWZpbmVkJyA/IHNlbGYueGhyLnJlc3BvbnNlVGV4dCA6IHNlbGYueGhyLnJlc3BvbnNlOyAvLyBpc3N1ZSAjODc2OiByZXR1cm4gdGhlIGh0dHAgc3RhdHVzIGNvZGUgaWYgdGhlIHJlc3BvbnNlIHBhcnNpbmcgZmFpbHNcblxuICAgICAgICBlcnIuc3RhdHVzID0gc2VsZi54aHIuc3RhdHVzID8gc2VsZi54aHIuc3RhdHVzIDogbnVsbDtcbiAgICAgICAgZXJyLnN0YXR1c0NvZGUgPSBlcnIuc3RhdHVzOyAvLyBiYWNrd2FyZHMtY29tcGF0IG9ubHlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVyci5yYXdSZXNwb25zZSA9IG51bGw7XG4gICAgICAgIGVyci5zdGF0dXMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZi5jYWxsYmFjayhlcnIpO1xuICAgIH1cblxuICAgIHNlbGYuZW1pdCgncmVzcG9uc2UnLCByZXMpO1xuICAgIHZhciBuZXdfZXJyO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICghc2VsZi5faXNSZXNwb25zZU9LKHJlcykpIHtcbiAgICAgICAgbmV3X2VyciA9IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCB8fCAnVW5zdWNjZXNzZnVsIEhUVFAgcmVzcG9uc2UnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICBuZXdfZXJyID0gZXJyMjsgLy8gb2soKSBjYWxsYmFjayBjYW4gdGhyb3dcbiAgICB9IC8vICMxMDAwIGRvbid0IGNhdGNoIGVycm9ycyBmcm9tIHRoZSBjYWxsYmFjayB0byBhdm9pZCBkb3VibGUgY2FsbGluZyBpdFxuXG5cbiAgICBpZiAobmV3X2Vycikge1xuICAgICAgbmV3X2Vyci5vcmlnaW5hbCA9IGVycjtcbiAgICAgIG5ld19lcnIucmVzcG9uc2UgPSByZXM7XG4gICAgICBuZXdfZXJyLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG4gICAgICBzZWxmLmNhbGxiYWNrKG5ld19lcnIsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuY2FsbGJhY2sobnVsbCwgcmVzKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBNaXhpbiBgRW1pdHRlcmAgYW5kIGBSZXF1ZXN0QmFzZWAuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwXG5cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXctY2FwXG5cblJlcXVlc3RCYXNlKFJlcXVlc3QucHJvdG90eXBlKTtcbi8qKlxuICogU2V0IENvbnRlbnQtVHlwZSB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24veG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgdGhpcy5zZXQoJ0NvbnRlbnQtVHlwZScsIHJlcXVlc3QudHlwZXNbdHlwZV0gfHwgdHlwZSk7XG4gIHJldHVybiB0aGlzO1xufTtcbi8qKlxuICogU2V0IEFjY2VwdCB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy5qc29uID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXB0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5SZXF1ZXN0LnByb3RvdHlwZS5hY2NlcHQgPSBmdW5jdGlvbiAodHlwZSkge1xuICB0aGlzLnNldCgnQWNjZXB0JywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuLyoqXG4gKiBTZXQgQXV0aG9yaXphdGlvbiBmaWVsZCB2YWx1ZSB3aXRoIGB1c2VyYCBhbmQgYHBhc3NgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gW3Bhc3NdIG9wdGlvbmFsIGluIGNhc2Ugb2YgdXNpbmcgJ2JlYXJlcicgYXMgdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgd2l0aCAndHlwZScgcHJvcGVydHkgJ2F1dG8nLCAnYmFzaWMnIG9yICdiZWFyZXInIChkZWZhdWx0ICdiYXNpYycpXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24gKHVzZXIsIHBhc3MsIG9wdGlvbnMpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHBhc3MgPSAnJztcblxuICBpZiAoX3R5cGVvZihwYXNzKSA9PT0gJ29iamVjdCcgJiYgcGFzcyAhPT0gbnVsbCkge1xuICAgIC8vIHBhc3MgaXMgb3B0aW9uYWwgYW5kIGNhbiBiZSByZXBsYWNlZCB3aXRoIG9wdGlvbnNcbiAgICBvcHRpb25zID0gcGFzcztcbiAgICBwYXNzID0gJyc7XG4gIH1cblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgdHlwZTogdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicgPyAnYmFzaWMnIDogJ2F1dG8nXG4gICAgfTtcbiAgfVxuXG4gIHZhciBlbmNvZGVyID0gZnVuY3Rpb24gZW5jb2RlcihzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBidG9hKHN0cmluZyk7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdXNlIGJhc2ljIGF1dGgsIGJ0b2EgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfTtcblxuICByZXR1cm4gdGhpcy5fYXV0aCh1c2VyLCBwYXNzLCBvcHRpb25zLCBlbmNvZGVyKTtcbn07XG4vKipcbiAqIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICByZXF1ZXN0LmdldCgnL3Nob2VzJylcbiAqICAgICAucXVlcnkoJ3NpemU9MTAnKVxuICogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuUmVxdWVzdC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykgdmFsID0gc2VyaWFsaXplKHZhbCk7XG4gIGlmICh2YWwpIHRoaXMuX3F1ZXJ5LnB1c2godmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuLyoqXG4gKiBRdWV1ZSB0aGUgZ2l2ZW4gYGZpbGVgIGFzIGFuIGF0dGFjaG1lbnQgdG8gdGhlIHNwZWNpZmllZCBgZmllbGRgLFxuICogd2l0aCBvcHRpb25hbCBgb3B0aW9uc2AgKG9yIGZpbGVuYW1lKS5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2goJ2NvbnRlbnQnLCBuZXcgQmxvYihbJzxhIGlkPVwiYVwiPjxiIGlkPVwiYlwiPmhleSE8L2I+PC9hPiddLCB7IHR5cGU6IFwidGV4dC9odG1sXCJ9KSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEBwYXJhbSB7QmxvYnxGaWxlfSBmaWxlXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cblJlcXVlc3QucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChmaWVsZCwgZmlsZSwgb3B0aW9ucykge1xuICBpZiAoZmlsZSkge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdXBlcmFnZW50IGNhbid0IG1peCAuc2VuZCgpIGFuZCAuYXR0YWNoKClcIik7XG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0Rm9ybURhdGEoKS5hcHBlbmQoZmllbGQsIGZpbGUsIG9wdGlvbnMgfHwgZmlsZS5uYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX2dldEZvcm1EYXRhID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB7XG4gICAgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuX2Zvcm1EYXRhO1xufTtcbi8qKlxuICogSW52b2tlIHRoZSBjYWxsYmFjayB3aXRoIGBlcnJgIGFuZCBgcmVzYFxuICogYW5kIGhhbmRsZSBhcml0eSBjaGVjay5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5SZXF1ZXN0LnByb3RvdHlwZS5jYWxsYmFjayA9IGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICBpZiAodGhpcy5fc2hvdWxkUmV0cnkoZXJyLCByZXMpKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHJ5KCk7XG4gIH1cblxuICB2YXIgZm4gPSB0aGlzLl9jYWxsYmFjaztcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcblxuICBpZiAoZXJyKSB7XG4gICAgaWYgKHRoaXMuX21heFJldHJpZXMpIGVyci5yZXRyaWVzID0gdGhpcy5fcmV0cmllcyAtIDE7XG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cblxuICBmbihlcnIsIHJlcyk7XG59O1xuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB4LWRvbWFpbiBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cblJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1JlcXVlc3QgaGFzIGJlZW4gdGVybWluYXRlZFxcblBvc3NpYmxlIGNhdXNlczogdGhlIG5ldHdvcmsgaXMgb2ZmbGluZSwgT3JpZ2luIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbiwgdGhlIHBhZ2UgaXMgYmVpbmcgdW5sb2FkZWQsIGV0Yy4nKTtcbiAgZXJyLmNyb3NzRG9tYWluID0gdHJ1ZTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gdGhpcy5tZXRob2Q7XG4gIGVyci51cmwgPSB0aGlzLnVybDtcbiAgdGhpcy5jYWxsYmFjayhlcnIpO1xufTsgLy8gVGhpcyBvbmx5IHdhcm5zLCBiZWNhdXNlIHRoZSByZXF1ZXN0IGlzIHN0aWxsIGxpa2VseSB0byB3b3JrXG5cblxuUmVxdWVzdC5wcm90b3R5cGUuYWdlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUud2FybignVGhpcyBpcyBub3Qgc3VwcG9ydGVkIGluIGJyb3dzZXIgdmVyc2lvbiBvZiBzdXBlcmFnZW50Jyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuYnVmZmVyID0gUmVxdWVzdC5wcm90b3R5cGUuY2E7XG5SZXF1ZXN0LnByb3RvdHlwZS5jYSA9IFJlcXVlc3QucHJvdG90eXBlLmFnZW50OyAvLyBUaGlzIHRocm93cywgYmVjYXVzZSBpdCBjYW4ndCBzZW5kL3JlY2VpdmUgZGF0YSBhcyBleHBlY3RlZFxuXG5SZXF1ZXN0LnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdTdHJlYW1pbmcgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyIHZlcnNpb24gb2Ygc3VwZXJhZ2VudCcpO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUucGlwZSA9IFJlcXVlc3QucHJvdG90eXBlLndyaXRlO1xuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIGhvc3Qgb2JqZWN0LFxuICogd2UgZG9uJ3Qgd2FudCB0byBzZXJpYWxpemUgdGhlc2UgOilcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIGhvc3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSBpcyBhIGhvc3Qgb2JqZWN0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5faXNIb3N0ID0gZnVuY3Rpb24gKG9iaikge1xuICAvLyBOYXRpdmUgb2JqZWN0cyBzdHJpbmdpZnkgdG8gW29iamVjdCBGaWxlXSwgW29iamVjdCBCbG9iXSwgW29iamVjdCBGb3JtRGF0YV0sIGV0Yy5cbiAgcmV0dXJuIG9iaiAmJiBfdHlwZW9mKG9iaikgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KG9iaikgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nO1xufTtcbi8qKlxuICogSW5pdGlhdGUgcmVxdWVzdCwgaW52b2tpbmcgY2FsbGJhY2sgYGZuKHJlcylgXG4gKiB3aXRoIGFuIGluc3RhbmNlb2YgYFJlc3BvbnNlYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuUmVxdWVzdC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGZuKSB7XG4gIGlmICh0aGlzLl9lbmRDYWxsZWQpIHtcbiAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IC5lbmQoKSB3YXMgY2FsbGVkIHR3aWNlLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gc3VwZXJhZ2VudCcpO1xuICB9XG5cbiAgdGhpcy5fZW5kQ2FsbGVkID0gdHJ1ZTsgLy8gc3RvcmUgY2FsbGJhY2tcblxuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7IC8vIHF1ZXJ5c3RyaW5nXG5cbiAgdGhpcy5fZmluYWxpemVRdWVyeVN0cmluZygpO1xuXG4gIHRoaXMuX2VuZCgpO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX3NldFVwbG9hZFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpczsgLy8gdXBsb2FkIHRpbWVvdXQgaXQncyB3b2tycyBvbmx5IGlmIGRlYWRsaW5lIHRpbWVvdXQgaXMgb2ZmXG5cbiAgaWYgKHRoaXMuX3VwbG9hZFRpbWVvdXQgJiYgIXRoaXMuX3VwbG9hZFRpbWVvdXRUaW1lcikge1xuICAgIHRoaXMuX3VwbG9hZFRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fdGltZW91dEVycm9yKCdVcGxvYWQgdGltZW91dCBvZiAnLCBzZWxmLl91cGxvYWRUaW1lb3V0LCAnRVRJTUVET1VUJyk7XG4gICAgfSwgdGhpcy5fdXBsb2FkVGltZW91dCk7XG4gIH1cbn07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5cblxuUmVxdWVzdC5wcm90b3R5cGUuX2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2Fib3J0ZWQpIHJldHVybiB0aGlzLmNhbGxiYWNrKG5ldyBFcnJvcignVGhlIHJlcXVlc3QgaGFzIGJlZW4gYWJvcnRlZCBldmVuIGJlZm9yZSAuZW5kKCkgd2FzIGNhbGxlZCcpKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnhociA9IHJlcXVlc3QuZ2V0WEhSKCk7XG4gIHZhciB4aHIgPSB0aGlzLnhocjtcbiAgdmFyIGRhdGEgPSB0aGlzLl9mb3JtRGF0YSB8fCB0aGlzLl9kYXRhO1xuXG4gIHRoaXMuX3NldFRpbWVvdXRzKCk7IC8vIHN0YXRlIGNoYW5nZVxuXG5cbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVhZHlTdGF0ZSA9IHhoci5yZWFkeVN0YXRlO1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPj0gMiAmJiBzZWxmLl9yZXNwb25zZVRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3Jlc3BvbnNlVGltZW91dFRpbWVyKTtcbiAgICB9XG5cbiAgICBpZiAocmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSW4gSUU5LCByZWFkcyB0byBhbnkgcHJvcGVydHkgKGUuZy4gc3RhdHVzKSBvZmYgb2YgYW4gYWJvcnRlZCBYSFIgd2lsbFxuICAgIC8vIHJlc3VsdCBpbiB0aGUgZXJyb3IgXCJDb3VsZCBub3QgY29tcGxldGUgdGhlIG9wZXJhdGlvbiBkdWUgdG8gZXJyb3IgYzAwYzAyM2ZcIlxuXG5cbiAgICB2YXIgc3RhdHVzO1xuXG4gICAgdHJ5IHtcbiAgICAgIHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzdGF0dXMgPSAwO1xuICAgIH1cblxuICAgIGlmICghc3RhdHVzKSB7XG4gICAgICBpZiAoc2VsZi50aW1lZG91dCB8fCBzZWxmLl9hYm9ydGVkKSByZXR1cm47XG4gICAgICByZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCk7XG4gICAgfVxuXG4gICAgc2VsZi5lbWl0KCdlbmQnKTtcbiAgfTsgLy8gcHJvZ3Jlc3NcblxuXG4gIHZhciBoYW5kbGVQcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKGRpcmVjdGlvbiwgZSkge1xuICAgIGlmIChlLnRvdGFsID4gMCkge1xuICAgICAgZS5wZXJjZW50ID0gZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwO1xuXG4gICAgICBpZiAoZS5wZXJjZW50ID09PSAxMDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3VwbG9hZFRpbWVvdXRUaW1lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgc2VsZi5lbWl0KCdwcm9ncmVzcycsIGUpO1xuICB9O1xuXG4gIGlmICh0aGlzLmhhc0xpc3RlbmVycygncHJvZ3Jlc3MnKSkge1xuICAgIHRyeSB7XG4gICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBoYW5kbGVQcm9ncmVzcy5iaW5kKG51bGwsICdkb3dubG9hZCcpKTtcblxuICAgICAgaWYgKHhoci51cGxvYWQpIHtcbiAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGhhbmRsZVByb2dyZXNzLmJpbmQobnVsbCwgJ3VwbG9hZCcpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHsvLyBBY2Nlc3NpbmcgeGhyLnVwbG9hZCBmYWlscyBpbiBJRSBmcm9tIGEgd2ViIHdvcmtlciwgc28ganVzdCBwcmV0ZW5kIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgICAvLyBSZXBvcnRlZCBoZXJlOlxuICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy84MzcyNDUveG1saHR0cHJlcXVlc3QtdXBsb2FkLXRocm93cy1pbnZhbGlkLWFyZ3VtZW50LXdoZW4tdXNlZC1mcm9tLXdlYi13b3JrZXItY29udGV4dFxuICAgIH1cbiAgfVxuXG4gIGlmICh4aHIudXBsb2FkKSB7XG4gICAgdGhpcy5fc2V0VXBsb2FkVGltZW91dCgpO1xuICB9IC8vIGluaXRpYXRlIHJlcXVlc3RcblxuXG4gIHRyeSB7XG4gICAgaWYgKHRoaXMudXNlcm5hbWUgJiYgdGhpcy5wYXNzd29yZCkge1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlLCB0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIHNlZSAjMTE0OVxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKGVycik7XG4gIH0gLy8gQ09SU1xuXG5cbiAgaWYgKHRoaXMuX3dpdGhDcmVkZW50aWFscykgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7IC8vIGJvZHlcblxuICBpZiAoIXRoaXMuX2Zvcm1EYXRhICYmIHRoaXMubWV0aG9kICE9PSAnR0VUJyAmJiB0aGlzLm1ldGhvZCAhPT0gJ0hFQUQnICYmIHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJyAmJiAhdGhpcy5faXNIb3N0KGRhdGEpKSB7XG4gICAgLy8gc2VyaWFsaXplIHN0dWZmXG4gICAgdmFyIGNvbnRlbnRUeXBlID0gdGhpcy5faGVhZGVyWydjb250ZW50LXR5cGUnXTtcblxuICAgIHZhciBfc2VyaWFsaXplID0gdGhpcy5fc2VyaWFsaXplciB8fCByZXF1ZXN0LnNlcmlhbGl6ZVtjb250ZW50VHlwZSA/IGNvbnRlbnRUeXBlLnNwbGl0KCc7JylbMF0gOiAnJ107XG5cbiAgICBpZiAoIV9zZXJpYWxpemUgJiYgaXNKU09OKGNvbnRlbnRUeXBlKSkge1xuICAgICAgX3NlcmlhbGl6ZSA9IHJlcXVlc3Quc2VyaWFsaXplWydhcHBsaWNhdGlvbi9qc29uJ107XG4gICAgfVxuXG4gICAgaWYgKF9zZXJpYWxpemUpIGRhdGEgPSBfc2VyaWFsaXplKGRhdGEpO1xuICB9IC8vIHNldCBoZWFkZXIgZmllbGRzXG5cblxuICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmICh0aGlzLmhlYWRlcltmaWVsZF0gPT09IG51bGwpIGNvbnRpbnVlO1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5oZWFkZXIsIGZpZWxkKSkgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gIH1cblxuICBpZiAodGhpcy5fcmVzcG9uc2VUeXBlKSB7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMuX3Jlc3BvbnNlVHlwZTtcbiAgfSAvLyBzZW5kIHN0dWZmXG5cblxuICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB0aGlzKTsgLy8gSUUxMSB4aHIuc2VuZCh1bmRlZmluZWQpIHNlbmRzICd1bmRlZmluZWQnIHN0cmluZyBhcyBQT1NUIHBheWxvYWQgKGluc3RlYWQgb2Ygbm90aGluZylcbiAgLy8gV2UgbmVlZCBudWxsIGhlcmUgaWYgZGF0YSBpcyB1bmRlZmluZWRcblxuICB4aHIuc2VuZCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogZGF0YSk7XG59O1xuXG5yZXF1ZXN0LmFnZW50ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IEFnZW50KCk7XG59O1xuXG5bJ0dFVCcsICdQT1NUJywgJ09QVElPTlMnLCAnUEFUQ0gnLCAnUFVUJywgJ0RFTEVURSddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBBZ2VudC5wcm90b3R5cGVbbWV0aG9kLnRvTG93ZXJDYXNlKCldID0gZnVuY3Rpb24gKHVybCwgZm4pIHtcbiAgICB2YXIgcmVxID0gbmV3IHJlcXVlc3QuUmVxdWVzdChtZXRob2QsIHVybCk7XG5cbiAgICB0aGlzLl9zZXREZWZhdWx0cyhyZXEpO1xuXG4gICAgaWYgKGZuKSB7XG4gICAgICByZXEuZW5kKGZuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVxO1xuICB9O1xufSk7XG5BZ2VudC5wcm90b3R5cGUuZGVsID0gQWdlbnQucHJvdG90eXBlLmRlbGV0ZTtcbi8qKlxuICogR0VUIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5nZXQgPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBmbikge1xuICB2YXIgcmVxID0gcmVxdWVzdCgnR0VUJywgdXJsKTtcblxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmbiA9IGRhdGE7XG4gICAgZGF0YSA9IG51bGw7XG4gIH1cblxuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcbi8qKlxuICogSEVBRCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgZm4pIHtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ0hFQUQnLCB1cmwpO1xuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gbnVsbDtcbiAgfVxuXG4gIGlmIChkYXRhKSByZXEucXVlcnkoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuLyoqXG4gKiBPUFRJT05TIHF1ZXJ5IHRvIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5yZXF1ZXN0Lm9wdGlvbnMgPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBmbikge1xuICB2YXIgcmVxID0gcmVxdWVzdCgnT1BUSU9OUycsIHVybCk7XG5cbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm4gPSBkYXRhO1xuICAgIGRhdGEgPSBudWxsO1xuICB9XG5cbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gW2RhdGFdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbmZ1bmN0aW9uIGRlbCh1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdERUxFVEUnLCB1cmwpO1xuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gbnVsbDtcbiAgfVxuXG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn1cblxucmVxdWVzdC5kZWwgPSBkZWw7XG5yZXF1ZXN0LmRlbGV0ZSA9IGRlbDtcbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBbZGF0YV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucGF0Y2ggPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBmbikge1xuICB2YXIgcmVxID0gcmVxdWVzdCgnUEFUQ0gnLCB1cmwpO1xuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gbnVsbDtcbiAgfVxuXG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG4vKipcbiAqIFBPU1QgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBbZGF0YV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxucmVxdWVzdC5wb3N0ID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgZm4pIHtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BPU1QnLCB1cmwpO1xuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gbnVsbDtcbiAgfVxuXG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG4vKipcbiAqIFBVVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQVVQnLCB1cmwpO1xuXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZuID0gZGF0YTtcbiAgICBkYXRhID0gbnVsbDtcbiAgfVxuXG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgX3R5cGVvZihvYmopID09PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyoqXG4gKiBNb2R1bGUgb2YgbWl4ZWQtaW4gZnVuY3Rpb25zIHNoYXJlZCBiZXR3ZWVuIG5vZGUgYW5kIGNsaWVudCBjb2RlXG4gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXMtb2JqZWN0Jyk7XG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdEJhc2VgLlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0QmFzZTtcbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdEJhc2VgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdEJhc2Uob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufVxuLyoqXG4gKiBNaXhpbiB0aGUgcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIFJlcXVlc3RCYXNlLnByb3RvdHlwZSkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoUmVxdWVzdEJhc2UucHJvdG90eXBlLCBrZXkpKSBvYmpba2V5XSA9IFJlcXVlc3RCYXNlLnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cbi8qKlxuICogQ2xlYXIgcHJldmlvdXMgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICBjbGVhclRpbWVvdXQodGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXIpO1xuICBjbGVhclRpbWVvdXQodGhpcy5fdXBsb2FkVGltZW91dFRpbWVyKTtcbiAgZGVsZXRlIHRoaXMuX3RpbWVyO1xuICBkZWxldGUgdGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXI7XG4gIGRlbGV0ZSB0aGlzLl91cGxvYWRUaW1lb3V0VGltZXI7XG4gIHJldHVybiB0aGlzO1xufTtcbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCByZXNwb25zZSBib2R5IHBhcnNlclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gY29udmVydCBpbmNvbWluZyBkYXRhIGludG8gcmVxdWVzdC5ib2R5XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdGhpcy5fcGFyc2VyID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcbi8qKlxuICogU2V0IGZvcm1hdCBvZiBiaW5hcnkgcmVzcG9uc2UgYm9keS5cbiAqIEluIGJyb3dzZXIgdmFsaWQgZm9ybWF0cyBhcmUgJ2Jsb2InIGFuZCAnYXJyYXlidWZmZXInLFxuICogd2hpY2ggcmV0dXJuIEJsb2IgYW5kIEFycmF5QnVmZmVyLCByZXNwZWN0aXZlbHkuXG4gKlxuICogSW4gTm9kZSBhbGwgdmFsdWVzIHJlc3VsdCBpbiBCdWZmZXIuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAucmVzcG9uc2VUeXBlKCdibG9iJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUucmVzcG9uc2VUeXBlID0gZnVuY3Rpb24gKHZhbCkge1xuICB0aGlzLl9yZXNwb25zZVR5cGUgPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCByZXF1ZXN0IGJvZHkgc2VyaWFsaXplclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gY29udmVydCBkYXRhIHNldCB2aWEgLnNlbmQgb3IgLmF0dGFjaCBpbnRvIHBheWxvYWQgdG8gc2VuZFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uIChmbikge1xuICB0aGlzLl9zZXJpYWxpemVyID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcbi8qKlxuICogU2V0IHRpbWVvdXRzLlxuICpcbiAqIC0gcmVzcG9uc2UgdGltZW91dCBpcyB0aW1lIGJldHdlZW4gc2VuZGluZyByZXF1ZXN0IGFuZCByZWNlaXZpbmcgdGhlIGZpcnN0IGJ5dGUgb2YgdGhlIHJlc3BvbnNlLiBJbmNsdWRlcyBETlMgYW5kIGNvbm5lY3Rpb24gdGltZS5cbiAqIC0gZGVhZGxpbmUgaXMgdGhlIHRpbWUgZnJvbSBzdGFydCBvZiB0aGUgcmVxdWVzdCB0byByZWNlaXZpbmcgcmVzcG9uc2UgYm9keSBpbiBmdWxsLiBJZiB0aGUgZGVhZGxpbmUgaXMgdG9vIHNob3J0IGxhcmdlIGZpbGVzIG1heSBub3QgbG9hZCBhdCBhbGwgb24gc2xvdyBjb25uZWN0aW9ucy5cbiAqIC0gdXBsb2FkIGlzIHRoZSB0aW1lICBzaW5jZSBsYXN0IGJpdCBvZiBkYXRhIHdhcyBzZW50IG9yIHJlY2VpdmVkLiBUaGlzIHRpbWVvdXQgd29ya3Mgb25seSBpZiBkZWFkbGluZSB0aW1lb3V0IGlzIG9mZlxuICpcbiAqIFZhbHVlIG9mIDAgb3IgZmFsc2UgbWVhbnMgbm8gdGltZW91dC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IG1zIG9yIHtyZXNwb25zZSwgZGVhZGxpbmV9XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucyB8fCBfdHlwZW9mKG9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgIHRoaXMuX3RpbWVvdXQgPSBvcHRpb25zO1xuICAgIHRoaXMuX3Jlc3BvbnNlVGltZW91dCA9IDA7XG4gICAgdGhpcy5fdXBsb2FkVGltZW91dCA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmb3IgKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgb3B0aW9uKSkge1xuICAgICAgc3dpdGNoIChvcHRpb24pIHtcbiAgICAgICAgY2FzZSAnZGVhZGxpbmUnOlxuICAgICAgICAgIHRoaXMuX3RpbWVvdXQgPSBvcHRpb25zLmRlYWRsaW5lO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgICAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXQgPSBvcHRpb25zLnJlc3BvbnNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3VwbG9hZCc6XG4gICAgICAgICAgdGhpcy5fdXBsb2FkVGltZW91dCA9IG9wdGlvbnMudXBsb2FkO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS53YXJuKCdVbmtub3duIHRpbWVvdXQgb3B0aW9uJywgb3B0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG4vKipcbiAqIFNldCBudW1iZXIgb2YgcmV0cnkgYXR0ZW1wdHMgb24gZXJyb3IuXG4gKlxuICogRmFpbGVkIHJlcXVlc3RzIHdpbGwgYmUgcmV0cmllZCAnY291bnQnIHRpbWVzIGlmIHRpbWVvdXQgb3IgZXJyLmNvZGUgPj0gNTAwLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnJldHJ5ID0gZnVuY3Rpb24gKGNvdW50LCBmbikge1xuICAvLyBEZWZhdWx0IHRvIDEgaWYgbm8gY291bnQgcGFzc2VkIG9yIHRydWVcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfHwgY291bnQgPT09IHRydWUpIGNvdW50ID0gMTtcbiAgaWYgKGNvdW50IDw9IDApIGNvdW50ID0gMDtcbiAgdGhpcy5fbWF4UmV0cmllcyA9IGNvdW50O1xuICB0aGlzLl9yZXRyaWVzID0gMDtcbiAgdGhpcy5fcmV0cnlDYWxsYmFjayA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbnZhciBFUlJPUl9DT0RFUyA9IFsnRUNPTk5SRVNFVCcsICdFVElNRURPVVQnLCAnRUFERFJJTkZPJywgJ0VTT0NLRVRUSU1FRE9VVCddO1xuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSByZXF1ZXN0IHNob3VsZCBiZSByZXRyaWVkLlxuICogKEJvcnJvd2VkIGZyb20gc2VnbWVudGlvL3N1cGVyYWdlbnQtcmV0cnkpXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyIGFuIGVycm9yXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSBbcmVzXSByZXNwb25zZVxuICogQHJldHVybnMge0Jvb2xlYW59IGlmIHNlZ21lbnQgc2hvdWxkIGJlIHJldHJpZWRcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3Nob3VsZFJldHJ5ID0gZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gIGlmICghdGhpcy5fbWF4UmV0cmllcyB8fCB0aGlzLl9yZXRyaWVzKysgPj0gdGhpcy5fbWF4UmV0cmllcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLl9yZXRyeUNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvdmVycmlkZSA9IHRoaXMuX3JldHJ5Q2FsbGJhY2soZXJyLCByZXMpO1xuXG4gICAgICBpZiAob3ZlcnJpZGUgPT09IHRydWUpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKG92ZXJyaWRlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlOyAvLyB1bmRlZmluZWQgZmFsbHMgYmFjayB0byBkZWZhdWx0c1xuICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyMik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlcyAmJiByZXMuc3RhdHVzICYmIHJlcy5zdGF0dXMgPj0gNTAwICYmIHJlcy5zdGF0dXMgIT09IDUwMSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGVycikge1xuICAgIGlmIChlcnIuY29kZSAmJiBFUlJPUl9DT0RFUy5pbmRleE9mKGVyci5jb2RlKSAhPT0gLTEpIHJldHVybiB0cnVlOyAvLyBTdXBlcmFnZW50IHRpbWVvdXRcblxuICAgIGlmIChlcnIudGltZW91dCAmJiBlcnIuY29kZSA9PT0gJ0VDT05OQUJPUlRFRCcpIHJldHVybiB0cnVlO1xuICAgIGlmIChlcnIuY3Jvc3NEb21haW4pIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8qKlxuICogUmV0cnkgcmVxdWVzdFxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3JldHJ5ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsZWFyVGltZW91dCgpOyAvLyBub2RlXG5cbiAgaWYgKHRoaXMucmVxKSB7XG4gICAgdGhpcy5yZXEgPSBudWxsO1xuICAgIHRoaXMucmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gIH1cblxuICB0aGlzLl9hYm9ydGVkID0gZmFsc2U7XG4gIHRoaXMudGltZWRvdXQgPSBmYWxzZTtcbiAgcmV0dXJuIHRoaXMuX2VuZCgpO1xufTtcbi8qKlxuICogUHJvbWlzZSBzdXBwb3J0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3JlamVjdF1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKi9cblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBpZiAoIXRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX2VuZENhbGxlZCkge1xuICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiBzdXBlcmFnZW50IHJlcXVlc3Qgd2FzIHNlbnQgdHdpY2UsIGJlY2F1c2UgYm90aCAuZW5kKCkgYW5kIC50aGVuKCkgd2VyZSBjYWxsZWQuIE5ldmVyIGNhbGwgLmVuZCgpIGlmIHlvdSB1c2UgcHJvbWlzZXMnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHNlbGYub24oJ2Fib3J0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdBYm9ydGVkJyk7XG4gICAgICAgIGVyci5jb2RlID0gJ0FCT1JURUQnO1xuICAgICAgICBlcnIuc3RhdHVzID0gX3RoaXMuc3RhdHVzO1xuICAgICAgICBlcnIubWV0aG9kID0gX3RoaXMubWV0aG9kO1xuICAgICAgICBlcnIudXJsID0gX3RoaXMudXJsO1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgICAgc2VsZi5lbmQoZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO2Vsc2UgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fZnVsbGZpbGxlZFByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xufTtcblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKGNiKSB7XG4gIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBjYik7XG59O1xuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIGZuKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5vayA9IGZ1bmN0aW9uIChjYikge1xuICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxiYWNrIHJlcXVpcmVkJyk7XG4gIHRoaXMuX29rQ2FsbGJhY2sgPSBjYjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2lzUmVzcG9uc2VPSyA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgaWYgKCFyZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5fb2tDYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLl9va0NhbGxiYWNrKHJlcyk7XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMDtcbn07XG4vKipcbiAqIEdldCByZXF1ZXN0IGhlYWRlciBgZmllbGRgLlxuICogQ2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGZpZWxkKSB7XG4gIHJldHVybiB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqIFRoaXMgaXMgYSBkZXByZWNhdGVkIGludGVybmFsIEFQSS4gVXNlIGAuZ2V0KGZpZWxkKWAgaW5zdGVhZC5cbiAqXG4gKiAoZ2V0SGVhZGVyIGlzIG5vIGxvbmdlciB1c2VkIGludGVybmFsbHkgYnkgdGhlIHN1cGVyYWdlbnQgY29kZSBiYXNlKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKiBAZGVwcmVjYXRlZFxuICovXG5cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLmdldEhlYWRlciA9IFJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXQ7XG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGZpZWxkLCB2YWwpIHtcbiAgaWYgKGlzT2JqZWN0KGZpZWxkKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBmaWVsZCkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmaWVsZCwga2V5KSkgdGhpcy5zZXQoa2V5LCBmaWVsZFtrZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2YWxpZC1qc2RvY1xuXG4vKipcbiAqIFJlbW92ZSBoZWFkZXIgYGZpZWxkYC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC51bnNldCgnVXNlci1BZ2VudCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkIGZpZWxkIG5hbWVcbiAqL1xuXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG4vKipcbiAqIFdyaXRlIHRoZSBmaWVsZCBgbmFtZWAgYW5kIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0XG4gKiBmb3IgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgcmVxdWVzdCBib2RpZXMuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoJ2ZvbycsICdiYXInKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoeyBmb286ICdiYXInLCBiYXo6ICdxdXgnIH0pXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBuYW1lIG5hbWUgb2YgZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZXxCdWZmZXJ8ZnMuUmVhZFN0cmVhbX0gdmFsIHZhbHVlIG9mIGZpZWxkXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbiAobmFtZSwgdmFsKSB7XG4gIC8vIG5hbWUgc2hvdWxkIGJlIGVpdGhlciBhIHN0cmluZyBvciBhbiBvYmplY3QuXG4gIGlmIChuYW1lID09PSBudWxsIHx8IHVuZGVmaW5lZCA9PT0gbmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignLmZpZWxkKG5hbWUsIHZhbCkgbmFtZSBjYW4gbm90IGJlIGVtcHR5Jyk7XG4gIH1cblxuICBpZiAodGhpcy5fZGF0YSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIi5maWVsZCgpIGNhbid0IGJlIHVzZWQgaWYgLnNlbmQoKSBpcyB1c2VkLiBQbGVhc2UgdXNlIG9ubHkgLnNlbmQoKSBvciBvbmx5IC5maWVsZCgpICYgLmF0dGFjaCgpXCIpO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG5hbWUpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmFtZSwga2V5KSkgdGhpcy5maWVsZChrZXksIG5hbWVba2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgZm9yICh2YXIgaSBpbiB2YWwpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsLCBpKSkgdGhpcy5maWVsZChuYW1lLCB2YWxbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIHZhbCBzaG91bGQgYmUgZGVmaW5lZCBub3dcblxuXG4gIGlmICh2YWwgPT09IG51bGwgfHwgdW5kZWZpbmVkID09PSB2YWwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJy5maWVsZChuYW1lLCB2YWwpIHZhbCBjYW4gbm90IGJlIGVtcHR5Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgdmFsID0gU3RyaW5nKHZhbCk7XG4gIH1cblxuICB0aGlzLl9nZXRGb3JtRGF0YSgpLmFwcGVuZChuYW1lLCB2YWwpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcbi8qKlxuICogQWJvcnQgdGhlIHJlcXVlc3QsIGFuZCBjbGVhciBwb3RlbnRpYWwgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fYWJvcnRlZCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGhpcy5fYWJvcnRlZCA9IHRydWU7XG4gIGlmICh0aGlzLnhocikgdGhpcy54aHIuYWJvcnQoKTsgLy8gYnJvd3NlclxuXG4gIGlmICh0aGlzLnJlcSkgdGhpcy5yZXEuYWJvcnQoKTsgLy8gbm9kZVxuXG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2F1dGggPSBmdW5jdGlvbiAodXNlciwgcGFzcywgb3B0aW9ucywgYmFzZTY0RW5jb2Rlcikge1xuICBzd2l0Y2ggKG9wdGlvbnMudHlwZSkge1xuICAgIGNhc2UgJ2Jhc2ljJzpcbiAgICAgIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgXCJCYXNpYyBcIi5jb25jYXQoYmFzZTY0RW5jb2RlcihcIlwiLmNvbmNhdCh1c2VyLCBcIjpcIikuY29uY2F0KHBhc3MpKSkpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdhdXRvJzpcbiAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VyO1xuICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2JlYXJlcic6XG4gICAgICAvLyB1c2FnZSB3b3VsZCBiZSAuYXV0aChhY2Nlc3NUb2tlbiwgeyB0eXBlOiAnYmVhcmVyJyB9KVxuICAgICAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCBcIkJlYXJlciBcIi5jb25jYXQodXNlcikpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG4vKipcbiAqIEVuYWJsZSB0cmFuc21pc3Npb24gb2YgY29va2llcyB3aXRoIHgtZG9tYWluIHJlcXVlc3RzLlxuICpcbiAqIE5vdGUgdGhhdCBmb3IgdGhpcyB0byB3b3JrIHRoZSBvcmlnaW4gbXVzdCBub3QgYmVcbiAqIHVzaW5nIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIgd2l0aCBhIHdpbGRjYXJkLFxuICogYW5kIGFsc28gbXVzdCBzZXQgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiXG4gKiB0byBcInRydWVcIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uIChvbikge1xuICAvLyBUaGlzIGlzIGJyb3dzZXItb25seSBmdW5jdGlvbmFsaXR5LiBOb2RlIHNpZGUgaXMgbm8tb3AuXG4gIGlmIChvbiA9PT0gdW5kZWZpbmVkKSBvbiA9IHRydWU7XG4gIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IG9uO1xuICByZXR1cm4gdGhpcztcbn07XG4vKipcbiAqIFNldCB0aGUgbWF4IHJlZGlyZWN0cyB0byBgbmAuIERvZXMgbm90aGluZyBpbiBicm93c2VyIFhIUiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnJlZGlyZWN0cyA9IGZ1bmN0aW9uIChuKSB7XG4gIHRoaXMuX21heFJlZGlyZWN0cyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcbi8qKlxuICogTWF4aW11bSBzaXplIG9mIGJ1ZmZlcmVkIHJlc3BvbnNlIGJvZHksIGluIGJ5dGVzLiBDb3VudHMgdW5jb21wcmVzc2VkIHNpemUuXG4gKiBEZWZhdWx0IDIwME1CLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIG51bWJlciBvZiBieXRlc1xuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKi9cblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUubWF4UmVzcG9uc2VTaXplID0gZnVuY3Rpb24gKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQnKTtcbiAgfVxuXG4gIHRoaXMuX21heFJlc3BvbnNlU2l6ZSA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcbi8qKlxuICogQ29udmVydCB0byBhIHBsYWluIGphdmFzY3JpcHQgb2JqZWN0IChub3QgSlNPTiBzdHJpbmcpIG9mIHNjYWxhciBwcm9wZXJ0aWVzLlxuICogTm90ZSBhcyB0aGlzIG1ldGhvZCBpcyBkZXNpZ25lZCB0byByZXR1cm4gYSB1c2VmdWwgbm9uLXRoaXMgdmFsdWUsXG4gKiBpdCBjYW5ub3QgYmUgY2hhaW5lZC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlc2NyaWJpbmcgbWV0aG9kLCB1cmwsIGFuZCBkYXRhIG9mIHRoaXMgcmVxdWVzdFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICB1cmw6IHRoaXMudXJsLFxuICAgIGRhdGE6IHRoaXMuX2RhdGEsXG4gICAgaGVhZGVyczogdGhpcy5faGVhZGVyXG4gIH07XG59O1xuLyoqXG4gKiBTZW5kIGBkYXRhYCBhcyB0aGUgcmVxdWVzdCBib2R5LCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIG1hbnVhbCBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2pzb24nKVxuICogICAgICAgICAuc2VuZCgne1wibmFtZVwiOlwidGpcIn0nKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKCduYW1lPXRvYmknKVxuICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGRhdGFcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBpc09iaiA9IGlzT2JqZWN0KGRhdGEpO1xuICB2YXIgdHlwZSA9IHRoaXMuX2hlYWRlclsnY29udGVudC10eXBlJ107XG5cbiAgaWYgKHRoaXMuX2Zvcm1EYXRhKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiLnNlbmQoKSBjYW4ndCBiZSB1c2VkIGlmIC5hdHRhY2goKSBvciAuZmllbGQoKSBpcyB1c2VkLiBQbGVhc2UgdXNlIG9ubHkgLnNlbmQoKSBvciBvbmx5IC5maWVsZCgpICYgLmF0dGFjaCgpXCIpO1xuICB9XG5cbiAgaWYgKGlzT2JqICYmICF0aGlzLl9kYXRhKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc0hvc3QoZGF0YSkpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGF0YSAmJiB0aGlzLl9kYXRhICYmIHRoaXMuX2lzSG9zdCh0aGlzLl9kYXRhKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IG1lcmdlIHRoZXNlIHNlbmQgY2FsbHNcIik7XG4gIH0gLy8gbWVyZ2VcblxuXG4gIGlmIChpc09iaiAmJiBpc09iamVjdCh0aGlzLl9kYXRhKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkpIHRoaXMuX2RhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZGVmYXVsdCB0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAgICBpZiAoIXR5cGUpIHRoaXMudHlwZSgnZm9ybScpO1xuICAgIHR5cGUgPSB0aGlzLl9oZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuXG4gICAgaWYgKHR5cGUgPT09ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YSA/IFwiXCIuY29uY2F0KHRoaXMuX2RhdGEsIFwiJlwiKS5jb25jYXQoZGF0YSkgOiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gKHRoaXMuX2RhdGEgfHwgJycpICsgZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoIWlzT2JqIHx8IHRoaXMuX2lzSG9zdChkYXRhKSkge1xuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIGRlZmF1bHQgdG8ganNvblxuXG5cbiAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2pzb24nKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuLyoqXG4gKiBTb3J0IGBxdWVyeXN0cmluZ2AgYnkgdGhlIHNvcnQgZnVuY3Rpb25cbiAqXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICAgLy8gZGVmYXVsdCBvcmRlclxuICogICAgICAgcmVxdWVzdC5nZXQoJy91c2VyJylcbiAqICAgICAgICAgLnF1ZXJ5KCduYW1lPU5pY2snKVxuICogICAgICAgICAucXVlcnkoJ3NlYXJjaD1NYW5ueScpXG4gKiAgICAgICAgIC5zb3J0UXVlcnkoKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGN1c3RvbWl6ZWQgc29ydCBmdW5jdGlvblxuICogICAgICAgcmVxdWVzdC5nZXQoJy91c2VyJylcbiAqICAgICAgICAgLnF1ZXJ5KCduYW1lPU5pY2snKVxuICogICAgICAgICAucXVlcnkoJ3NlYXJjaD1NYW5ueScpXG4gKiAgICAgICAgIC5zb3J0UXVlcnkoZnVuY3Rpb24oYSwgYil7XG4gKiAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gKiAgICAgICAgIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNvcnRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5zb3J0UXVlcnkgPSBmdW5jdGlvbiAoc29ydCkge1xuICAvLyBfc29ydCBkZWZhdWx0IHRvIHRydWUgYnV0IG90aGVyd2lzZSBjYW4gYmUgYSBmdW5jdGlvbiBvciBib29sZWFuXG4gIHRoaXMuX3NvcnQgPSB0eXBlb2Ygc29ydCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogc29ydDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuLyoqXG4gKiBDb21wb3NlIHF1ZXJ5c3RyaW5nIHRvIGFwcGVuZCB0byByZXEudXJsXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2ZpbmFsaXplUXVlcnlTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBxdWVyeSA9IHRoaXMuX3F1ZXJ5LmpvaW4oJyYnKTtcblxuICBpZiAocXVlcnkpIHtcbiAgICB0aGlzLnVybCArPSAodGhpcy51cmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICsgcXVlcnk7XG4gIH1cblxuICB0aGlzLl9xdWVyeS5sZW5ndGggPSAwOyAvLyBNYWtlcyB0aGUgY2FsbCBpZGVtcG90ZW50XG5cbiAgaWYgKHRoaXMuX3NvcnQpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnVybC5pbmRleE9mKCc/Jyk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdmFyIHF1ZXJ5QXJyID0gdGhpcy51cmwuc3Vic3RyaW5nKGluZGV4ICsgMSkuc3BsaXQoJyYnKTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zb3J0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHF1ZXJ5QXJyLnNvcnQodGhpcy5fc29ydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWVyeUFyci5zb3J0KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXJsID0gdGhpcy51cmwuc3Vic3RyaW5nKDAsIGluZGV4KSArICc/JyArIHF1ZXJ5QXJyLmpvaW4oJyYnKTtcbiAgICB9XG4gIH1cbn07IC8vIEZvciBiYWNrd2FyZHMgY29tcGF0IG9ubHlcblxuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2FwcGVuZFF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLndhcm4oJ1Vuc3VwcG9ydGVkJyk7XG59O1xuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl90aW1lb3V0RXJyb3IgPSBmdW5jdGlvbiAocmVhc29uLCB0aW1lb3V0LCBlcnJubykge1xuICBpZiAodGhpcy5fYWJvcnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJcIi5jb25jYXQocmVhc29uICsgdGltZW91dCwgXCJtcyBleGNlZWRlZFwiKSk7XG4gIGVyci50aW1lb3V0ID0gdGltZW91dDtcbiAgZXJyLmNvZGUgPSAnRUNPTk5BQk9SVEVEJztcbiAgZXJyLmVycm5vID0gZXJybm87XG4gIHRoaXMudGltZWRvdXQgPSB0cnVlO1xuICB0aGlzLmFib3J0KCk7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fc2V0VGltZW91dHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpczsgLy8gZGVhZGxpbmVcblxuICBpZiAodGhpcy5fdGltZW91dCAmJiAhdGhpcy5fdGltZXIpIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fdGltZW91dEVycm9yKCdUaW1lb3V0IG9mICcsIHNlbGYuX3RpbWVvdXQsICdFVElNRScpO1xuICAgIH0sIHRoaXMuX3RpbWVvdXQpO1xuICB9IC8vIHJlc3BvbnNlIHRpbWVvdXRcblxuXG4gIGlmICh0aGlzLl9yZXNwb25zZVRpbWVvdXQgJiYgIXRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3RpbWVvdXRFcnJvcignUmVzcG9uc2UgdGltZW91dCBvZiAnLCBzZWxmLl9yZXNwb25zZVRpbWVvdXQsICdFVElNRURPVVQnKTtcbiAgICB9LCB0aGlzLl9yZXNwb25zZVRpbWVvdXQpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbi8qKlxuICogRXhwb3NlIGBSZXNwb25zZUJhc2VgLlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZXNwb25zZUJhc2U7XG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlc3BvbnNlQmFzZWAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXNwb25zZUJhc2Uob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufVxuLyoqXG4gKiBNaXhpbiB0aGUgcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIFJlc3BvbnNlQmFzZS5wcm90b3R5cGUpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFJlc3BvbnNlQmFzZS5wcm90b3R5cGUsIGtleSkpIG9ialtrZXldID0gUmVzcG9uc2VCYXNlLnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5SZXNwb25zZUJhc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChmaWVsZCkge1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuLyoqXG4gKiBTZXQgaGVhZGVyIHJlbGF0ZWQgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gYC50eXBlYCB0aGUgY29udGVudCB0eXBlIHdpdGhvdXQgcGFyYW1zXG4gKlxuICogQSByZXNwb25zZSBvZiBcIkNvbnRlbnQtVHlwZTogdGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiXG4gKiB3aWxsIHByb3ZpZGUgeW91IHdpdGggYSBgLnR5cGVgIG9mIFwidGV4dC9wbGFpblwiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblxuUmVzcG9uc2VCYXNlLnByb3RvdHlwZS5fc2V0SGVhZGVyUHJvcGVydGllcyA9IGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgLy8gVE9ETzogbW9hciFcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGEgdXRpbFxuICAvLyBjb250ZW50LXR5cGVcbiAgdmFyIGN0ID0gaGVhZGVyWydjb250ZW50LXR5cGUnXSB8fCAnJztcbiAgdGhpcy50eXBlID0gdXRpbHMudHlwZShjdCk7IC8vIHBhcmFtc1xuXG4gIHZhciBwYXJhbXMgPSB1dGlscy5wYXJhbXMoY3QpO1xuXG4gIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmFtcywga2V5KSkgdGhpc1trZXldID0gcGFyYW1zW2tleV07XG4gIH1cblxuICB0aGlzLmxpbmtzID0ge307IC8vIGxpbmtzXG5cbiAgdHJ5IHtcbiAgICBpZiAoaGVhZGVyLmxpbmspIHtcbiAgICAgIHRoaXMubGlua3MgPSB1dGlscy5wYXJzZUxpbmtzKGhlYWRlci5saW5rKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikgey8vIGlnbm9yZVxuICB9XG59O1xuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cblJlc3BvbnNlQmFzZS5wcm90b3R5cGUuX3NldFN0YXR1c1Byb3BlcnRpZXMgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gIHZhciB0eXBlID0gc3RhdHVzIC8gMTAwIHwgMDsgLy8gc3RhdHVzIC8gY2xhc3NcblxuICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXM7XG4gIHRoaXMuc3RhdHVzID0gdGhpcy5zdGF0dXNDb2RlO1xuICB0aGlzLnN0YXR1c1R5cGUgPSB0eXBlOyAvLyBiYXNpY3NcblxuICB0aGlzLmluZm8gPSB0eXBlID09PSAxO1xuICB0aGlzLm9rID0gdHlwZSA9PT0gMjtcbiAgdGhpcy5yZWRpcmVjdCA9IHR5cGUgPT09IDM7XG4gIHRoaXMuY2xpZW50RXJyb3IgPSB0eXBlID09PSA0O1xuICB0aGlzLnNlcnZlckVycm9yID0gdHlwZSA9PT0gNTtcbiAgdGhpcy5lcnJvciA9IHR5cGUgPT09IDQgfHwgdHlwZSA9PT0gNSA/IHRoaXMudG9FcnJvcigpIDogZmFsc2U7IC8vIHN1Z2FyXG5cbiAgdGhpcy5jcmVhdGVkID0gc3RhdHVzID09PSAyMDE7XG4gIHRoaXMuYWNjZXB0ZWQgPSBzdGF0dXMgPT09IDIwMjtcbiAgdGhpcy5ub0NvbnRlbnQgPSBzdGF0dXMgPT09IDIwNDtcbiAgdGhpcy5iYWRSZXF1ZXN0ID0gc3RhdHVzID09PSA0MDA7XG4gIHRoaXMudW5hdXRob3JpemVkID0gc3RhdHVzID09PSA0MDE7XG4gIHRoaXMubm90QWNjZXB0YWJsZSA9IHN0YXR1cyA9PT0gNDA2O1xuICB0aGlzLmZvcmJpZGRlbiA9IHN0YXR1cyA9PT0gNDAzO1xuICB0aGlzLm5vdEZvdW5kID0gc3RhdHVzID09PSA0MDQ7XG4gIHRoaXMudW5wcm9jZXNzYWJsZUVudGl0eSA9IHN0YXR1cyA9PT0gNDIyO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIG1pbWUgdHlwZSBmb3IgdGhlIGdpdmVuIGBzdHJgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5leHBvcnRzLnR5cGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqOyAqLykuc2hpZnQoKTtcbn07XG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmV4cG9ydHMucGFyYW1zID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnJlZHVjZShmdW5jdGlvbiAob2JqLCBzdHIpIHtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLyk7XG4gICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgdmFyIHZhbCA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgaWYgKGtleSAmJiB2YWwpIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG4vKipcbiAqIFBhcnNlIExpbmsgaGVhZGVyIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmV4cG9ydHMucGFyc2VMaW5rcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICosICovKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgc3RyKSB7XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KC8gKjsgKi8pO1xuICAgIHZhciB1cmwgPSBwYXJ0c1swXS5zbGljZSgxLCAtMSk7XG4gICAgdmFyIHJlbCA9IHBhcnRzWzFdLnNwbGl0KC8gKj0gKi8pWzFdLnNsaWNlKDEsIC0xKTtcbiAgICBvYmpbcmVsXSA9IHVybDtcbiAgICByZXR1cm4gb2JqO1xuICB9LCB7fSk7XG59O1xuLyoqXG4gKiBTdHJpcCBjb250ZW50IHJlbGF0ZWQgZmllbGRzIGZyb20gYGhlYWRlcmAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQHJldHVybiB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblxuZXhwb3J0cy5jbGVhbkhlYWRlciA9IGZ1bmN0aW9uIChoZWFkZXIsIGNoYW5nZXNPcmlnaW4pIHtcbiAgZGVsZXRlIGhlYWRlclsnY29udGVudC10eXBlJ107XG4gIGRlbGV0ZSBoZWFkZXJbJ2NvbnRlbnQtbGVuZ3RoJ107XG4gIGRlbGV0ZSBoZWFkZXJbJ3RyYW5zZmVyLWVuY29kaW5nJ107XG4gIGRlbGV0ZSBoZWFkZXIuaG9zdDsgLy8gc2VjdWlydHlcblxuICBpZiAoY2hhbmdlc09yaWdpbikge1xuICAgIGRlbGV0ZSBoZWFkZXIuYXV0aG9yaXphdGlvbjtcbiAgICBkZWxldGUgaGVhZGVyLmNvb2tpZTtcbiAgfVxuXG4gIHJldHVybiBoZWFkZXI7XG59OyIsIlxyXG4vKipcclxuICogRXhwb3NlIGBFbWl0dGVyYC5cclxuICovXHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cclxuICpcclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xyXG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcclxuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcclxuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cclxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcclxuICAgIC5wdXNoKGZuKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcclxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xyXG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIG9uLmZuID0gZm47XHJcbiAgdGhpcy5vbihldmVudCwgb24pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXHJcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgLy8gYWxsXHJcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHNwZWNpZmljIGV2ZW50XHJcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xyXG5cclxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXHJcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXHJcbiAgdmFyIGNiO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcclxuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gUmVtb3ZlIGV2ZW50IHNwZWNpZmljIGFycmF5cyBmb3IgZXZlbnQgdHlwZXMgdGhhdCBub1xyXG4gIC8vIG9uZSBpcyBzdWJzY3JpYmVkIGZvciB0byBhdm9pZCBtZW1vcnkgbGVhay5cclxuICBpZiAoY2FsbGJhY2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSlcclxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNhbGxiYWNrcykge1xyXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcclxufTtcclxuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9