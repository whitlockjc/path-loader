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

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
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
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

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


function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function (fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function () /*varargs*/{
    this._defaults.push({ fn: fn, arguments: arguments });
    return this;
  };
});

Agent.prototype._setDefaults = function (req) {
  this._defaults.forEach(function (def) {
    req[def.fn].apply(req, def.arguments);
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


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') {
  // Browser window
  root = window;
} else if (typeof self !== 'undefined') {
  // Web Worker
  root = self;
} else {
  // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = undefined;
}

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");
var RequestBase = __webpack_require__(/*! ./request-base */ "./node_modules/superagent/lib/request-base.js");
var isObject = __webpack_require__(/*! ./is-object */ "./node_modules/superagent/lib/is-object.js");
var ResponseBase = __webpack_require__(/*! ./response-base */ "./node_modules/superagent/lib/response-base.js");
var Agent = __webpack_require__(/*! ./agent-base */ "./node_modules/superagent/lib/agent-base.js");

/**
 * Noop.
 */

function noop() {};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function (method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  } else {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
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
    pushEncodedKeyValuePair(pairs, key, obj[key]);
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
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function (v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for (var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
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
    if (pos == -1) {
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
  'form': 'application/x-www-form-urlencoded',
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
  'application/json': JSON.stringify
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
  return (/[\/+]json($|[^-\w])/.test(mime)
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
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD' ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
  }
}

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
  return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
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

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
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
    } catch (e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
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
    } catch (custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
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

Emitter(Request.prototype);
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
  if (1 === arguments.length) pass = '';
  if ((typeof pass === 'undefined' ? 'undefined' : _typeof(pass)) === 'object' && pass !== null) {
    // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto'
    };
  }

  var encoder = function encoder(string) {
    if ('function' === typeof btoa) {
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
  if ('string' != typeof val) val = serialize(val);
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
      throw Error("superagent can't mix .send() and .attach()");
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
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function () {
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function () {
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
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
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function () {
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try {
      status = xhr.status;
    } catch (e) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function handleProgress(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch (e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function () {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (method) {
  Agent.prototype[method.toLowerCase()] = function (url, fn) {
    var req = new request.Request(method, url);
    this._setDefaults(req);
    if (fn) {
      req.end(fn);
    }
    return req;
  };
});

Agent.prototype.del = Agent.prototype['delete'];

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
  if ('function' == typeof data) fn = data, data = null;
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
  if ('function' == typeof data) fn = data, data = null;
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
  if ('function' == typeof data) fn = data, data = null;
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
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;

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
  if ('function' == typeof data) fn = data, data = null;
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
  if ('function' == typeof data) fn = data, data = null;
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
  if ('function' == typeof data) fn = data, data = null;
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


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isObject(obj) {
  return null !== obj && 'object' === (typeof obj === 'undefined' ? 'undefined' : _typeof(obj));
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


/**
 * Module of mixed-in functions shared between node and client code
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout() {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
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

RequestBase.prototype.parse = function parse(fn) {
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

RequestBase.prototype.serialize = function serialize(fn) {
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options) {
  if (!options || 'object' !== (typeof options === 'undefined' ? 'undefined' : _typeof(options))) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for (var option in options) {
    switch (option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
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

RequestBase.prototype.retry = function retry(count, fn) {
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
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry = function (err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch (e) {
      console.error(e);
    }
  }
  if (res && res.status && res.status >= 500 && res.status != 501) return true;
  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
    // Superagent timeout
    if (err.timeout && err.code == 'ECONNABORTED') return true;
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

  this.clearTimeout();

  // node
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

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
      self.end(function (err, res) {
        if (err) innerReject(err);else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype['catch'] = function (cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
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
      this.set(key, field[key]);
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
 * @param {String} field
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
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function (name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
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
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
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
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function (n) {
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
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

RequestBase.prototype.send = function (data) {
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data ? this._data + '&' + data : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
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
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function () {
  console.trace("Unsupported");
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
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
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
    obj[key] = ResponseBase.prototype[key];
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
  this.type = utils.type(ct);

  // params
  var params = utils.params(ct);
  for (var key in params) {
    this[key] = params[key];
  }this.links = {};

  // links
  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (err) {
    // ignore
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
  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.redirect = 3 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = 4 == type || 5 == type ? this.toError() : false;

  // sugar
  this.created = 201 == status;
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.forbidden = 403 == status;
  this.notFound = 404 == status;
  this.unprocessableEntity = 422 == status;
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
  delete header['host'];
  // secuirty
  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }
  return header;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QYXRoTG9hZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbGliL2xvYWRlcnMvZmlsZS1icm93c2VyLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9saWIvbG9hZGVycy9odHRwLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uL25vZGVfbW9kdWxlcy9uYXRpdmUtcHJvbWlzZS1vbmx5L2xpYi9ucG8uc3JjLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly9QYXRoTG9hZGVyLy4vbm9kZV9tb2R1bGVzL3N1cGVyYWdlbnQvbGliL2FnZW50LWJhc2UuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9yZXF1ZXN0LWJhc2UuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uL25vZGVfbW9kdWxlcy9zdXBlcmFnZW50L2xpYi9yZXNwb25zZS1iYXNlLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvLi9ub2RlX21vZHVsZXMvc3VwZXJhZ2VudC9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vUGF0aExvYWRlci8uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovL1BhdGhMb2FkZXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbInN1cHBvcnRlZExvYWRlcnMiLCJmaWxlIiwicmVxdWlyZSIsImh0dHAiLCJodHRwcyIsImRlZmF1bHRMb2FkZXIiLCJ3aW5kb3ciLCJpbXBvcnRTY3JpcHRzIiwiUHJvbWlzZSIsImdldFNjaGVtZSIsImxvY2F0aW9uIiwiaW5kZXhPZiIsInNwbGl0IiwiZ2V0TG9hZGVyIiwic2NoZW1lIiwibG9hZGVyIiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwibG9hZCIsIm9wdGlvbnMiLCJhbGxUYXNrcyIsInJlc29sdmUiLCJ0aGVuIiwiVHlwZUVycm9yIiwicHJvY2Vzc0NvbnRlbnQiLCJyZWplY3QiLCJlcnIiLCJkb2N1bWVudCIsInJlcyIsInRleHQiLCJwcm9jZXNzZWQiLCJ1bnN1cHBvcnRlZEVycm9yIiwiZ2V0QmFzZSIsImZuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicmVxdWVzdCIsInN1cHBvcnRlZEh0dHBNZXRob2RzIiwiY2FsbGJhY2siLCJyZWFsTWV0aG9kIiwibWV0aG9kIiwidG9Mb3dlckNhc2UiLCJyZWFsUmVxdWVzdCIsIm1ha2VSZXF1ZXN0IiwicmVxIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwicHJvY2VzcyIsImJ1ZmZlciIsImVuZCIsImVycjIiLCJ1bmRlZmluZWQiLCJzbGljZSIsImpvaW4iLCJwcmVwYXJlUmVxdWVzdCIsIkVtaXR0ZXIiLCJvYmoiLCJtaXhpbiIsImtleSIsIm9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX2NhbGxiYWNrcyIsInB1c2giLCJvbmNlIiwib2ZmIiwiYXBwbHkiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjYWxsYmFja3MiLCJjYiIsImkiLCJzcGxpY2UiLCJlbWl0IiwiYXJncyIsImxlbiIsImxpc3RlbmVycyIsImhhc0xpc3RlbmVycyIsIlVNRCIsIm5hbWUiLCJjb250ZXh0IiwiZGVmaW5pdGlvbiIsImRlZmluZSIsIiRBTUQkIiwiZ2xvYmFsIiwiREVGIiwiYnVpbHRJblByb3AiLCJjeWNsZSIsInNjaGVkdWxpbmdfcXVldWUiLCJUb1N0cmluZyIsInRpbWVyIiwic2V0SW1tZWRpYXRlIiwic2V0VGltZW91dCIsImRlZmluZVByb3BlcnR5IiwidmFsIiwiY29uZmlnIiwidmFsdWUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsIlF1ZXVlIiwiZmlyc3QiLCJsYXN0IiwiaXRlbSIsIkl0ZW0iLCJzZWxmIiwibmV4dCIsImFkZCIsImRyYWluIiwiZiIsInNjaGVkdWxlIiwiaXNUaGVuYWJsZSIsIm8iLCJfdGhlbiIsIm9fdHlwZSIsIm5vdGlmeSIsImNoYWluIiwibm90aWZ5SXNvbGF0ZWQiLCJzdGF0ZSIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwicmV0IiwibXNnIiwicHJvbWlzZSIsInRyaWdnZXJlZCIsImRlZiIsImRlZl93cmFwcGVyIiwiTWFrZURlZldyYXBwZXIiLCIkcmVzb2x2ZSQiLCIkcmVqZWN0JCIsIml0ZXJhdGVQcm9taXNlcyIsIkNvbnN0cnVjdG9yIiwiYXJyIiwicmVzb2x2ZXIiLCJyZWplY3RlciIsImlkeCIsIklJRkUiLCIkcmVzb2x2ZXIkIiwiTWFrZURlZiIsImV4ZWN1dG9yIiwiX19OUE9fXyIsImNvbnN0cnVjdG9yIiwiZXh0cmFjdENoYWluIiwiJGNhdGNoJCIsInB1YmxpY1Jlc29sdmUiLCJwdWJsaWNSZWplY3QiLCJQcm9taXNlUHJvdG90eXBlIiwiUHJvbWlzZSRyZXNvbHZlIiwiUHJvbWlzZSRyZWplY3QiLCJQcm9taXNlJGFsbCIsIm1zZ3MiLCJBcnJheSIsImNvdW50IiwiUHJvbWlzZSRyYWNlIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwiZSIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJhcnJheSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwiYWRkTGlzdGVuZXIiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJuZXh0SGFuZGxlIiwidGFza3NCeUhhbmRsZSIsImN1cnJlbnRseVJ1bm5pbmdBVGFzayIsImRvYyIsInJlZ2lzdGVySW1tZWRpYXRlIiwiRnVuY3Rpb24iLCJ0YXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJoYW5kbGUiLCJydW5JZlByZXNlbnQiLCJpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbiIsImNhblVzZVBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzIiwib2xkT25NZXNzYWdlIiwib25tZXNzYWdlIiwiaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24iLCJtZXNzYWdlUHJlZml4IiwiTWF0aCIsInJhbmRvbSIsIm9uR2xvYmFsTWVzc2FnZSIsInNvdXJjZSIsImRhdGEiLCJhdHRhY2hFdmVudCIsImluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uIiwiY2hhbm5lbCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJwb3J0MiIsImluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24iLCJodG1sIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uIiwiYXR0YWNoVG8iLCJnZXRQcm90b3R5cGVPZiIsIkFnZW50IiwiX2RlZmF1bHRzIiwiZm9yRWFjaCIsIl9zZXREZWZhdWx0cyIsInJvb3QiLCJjb25zb2xlIiwid2FybiIsIlJlcXVlc3RCYXNlIiwiaXNPYmplY3QiLCJSZXNwb25zZUJhc2UiLCJ1cmwiLCJSZXF1ZXN0IiwiZ2V0WEhSIiwiWE1MSHR0cFJlcXVlc3QiLCJwcm90b2NvbCIsIkFjdGl2ZVhPYmplY3QiLCJ0cmltIiwicyIsInJlcGxhY2UiLCJzZXJpYWxpemUiLCJwYWlycyIsInB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyIiwiaXNBcnJheSIsInYiLCJzdWJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemVPYmplY3QiLCJwYXJzZVN0cmluZyIsInN0ciIsInBhaXIiLCJwb3MiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ0eXBlcyIsImpzb24iLCJ4bWwiLCJ1cmxlbmNvZGVkIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwicGFyc2VIZWFkZXIiLCJsaW5lcyIsImZpZWxkcyIsImluZGV4IiwibGluZSIsImZpZWxkIiwiaXNKU09OIiwibWltZSIsInRlc3QiLCJSZXNwb25zZSIsInhociIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJzdGF0dXMiLCJfc2V0U3RhdHVzUHJvcGVydGllcyIsImhlYWRlciIsImhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJnZXRSZXNwb25zZUhlYWRlciIsIl9zZXRIZWFkZXJQcm9wZXJ0aWVzIiwiX3Jlc3BvbnNlVHlwZSIsImJvZHkiLCJyZXNwb25zZSIsIl9wYXJzZUJvZHkiLCJ0eXBlIiwiX3BhcnNlciIsInRvRXJyb3IiLCJfcXVlcnkiLCJfaGVhZGVyIiwib3JpZ2luYWwiLCJyYXdSZXNwb25zZSIsInN0YXR1c0NvZGUiLCJuZXdfZXJyIiwiX2lzUmVzcG9uc2VPSyIsImN1c3RvbV9lcnIiLCJzZXQiLCJhY2NlcHQiLCJhdXRoIiwidXNlciIsInBhc3MiLCJidG9hIiwiZW5jb2RlciIsInN0cmluZyIsIl9hdXRoIiwicXVlcnkiLCJhdHRhY2giLCJfZGF0YSIsIl9nZXRGb3JtRGF0YSIsImFwcGVuZCIsIl9mb3JtRGF0YSIsIkZvcm1EYXRhIiwiX3Nob3VsZFJldHJ5IiwiX3JldHJ5IiwiX2NhbGxiYWNrIiwiX21heFJldHJpZXMiLCJyZXRyaWVzIiwiX3JldHJpZXMiLCJjcm9zc0RvbWFpbkVycm9yIiwiY3Jvc3NEb21haW4iLCJjYSIsImFnZW50IiwicGlwZSIsIndyaXRlIiwiX2lzSG9zdCIsIl9lbmRDYWxsZWQiLCJfZmluYWxpemVRdWVyeVN0cmluZyIsIl9lbmQiLCJfc2V0VGltZW91dHMiLCJyZWFkeVN0YXRlIiwiX3Jlc3BvbnNlVGltZW91dFRpbWVyIiwidGltZWRvdXQiLCJfYWJvcnRlZCIsImhhbmRsZVByb2dyZXNzIiwiZGlyZWN0aW9uIiwidG90YWwiLCJwZXJjZW50IiwibG9hZGVkIiwib25wcm9ncmVzcyIsImJpbmQiLCJ1cGxvYWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwib3BlbiIsIl93aXRoQ3JlZGVudGlhbHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb250ZW50VHlwZSIsIl9zZXJpYWxpemVyIiwiaGFzT3duUHJvcGVydHkiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImRlbCIsImdldCIsImhlYWQiLCJwYXRjaCIsInBvc3QiLCJwdXQiLCJfY2xlYXJUaW1lb3V0IiwiX3RpbWVyIiwiX3RpbWVvdXQiLCJfcmVzcG9uc2VUaW1lb3V0Iiwib3B0aW9uIiwiZGVhZGxpbmUiLCJyZXRyeSIsIl9yZXRyeUNhbGxiYWNrIiwiRVJST1JfQ09ERVMiLCJvdmVycmlkZSIsImVycm9yIiwiY29kZSIsIl9mdWxsZmlsbGVkUHJvbWlzZSIsImlubmVyUmVzb2x2ZSIsImlubmVyUmVqZWN0IiwidXNlIiwib2siLCJfb2tDYWxsYmFjayIsImdldEhlYWRlciIsInVuc2V0IiwiYWJvcnQiLCJiYXNlNjRFbmNvZGVyIiwicmVkaXJlY3RzIiwibiIsIl9tYXhSZWRpcmVjdHMiLCJtYXhSZXNwb25zZVNpemUiLCJfbWF4UmVzcG9uc2VTaXplIiwidG9KU09OIiwiaXNPYmoiLCJzb3J0UXVlcnkiLCJzb3J0IiwiX3NvcnQiLCJxdWVyeUFyciIsInN1YnN0cmluZyIsIl9hcHBlbmRRdWVyeVN0cmluZyIsInRyYWNlIiwiX3RpbWVvdXRFcnJvciIsInJlYXNvbiIsImVycm5vIiwidXRpbHMiLCJjdCIsInBhcmFtcyIsImxpbmtzIiwibGluayIsInBhcnNlTGlua3MiLCJzdGF0dXNUeXBlIiwiaW5mbyIsInJlZGlyZWN0IiwiY2xpZW50RXJyb3IiLCJzZXJ2ZXJFcnJvciIsImNyZWF0ZWQiLCJhY2NlcHRlZCIsIm5vQ29udGVudCIsImJhZFJlcXVlc3QiLCJ1bmF1dGhvcml6ZWQiLCJub3RBY2NlcHRhYmxlIiwiZm9yYmlkZGVuIiwibm90Rm91bmQiLCJ1bnByb2Nlc3NhYmxlRW50aXR5Iiwic2hpZnQiLCJyZWR1Y2UiLCJwYXJ0cyIsInJlbCIsImNsZWFuSGVhZGVyIiwiY2hhbmdlc09yaWdpbiIsInNjb3BlIiwiVGltZW91dCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsb3NlIiwiaWQiLCJjbGVhckZuIiwiX2lkIiwiX2NsZWFyRm4iLCJ1bnJlZiIsInJlZiIsImVucm9sbCIsIm1zZWNzIiwiX2lkbGVUaW1lb3V0SWQiLCJfaWRsZVRpbWVvdXQiLCJ1bmVucm9sbCIsIl91bnJlZkFjdGl2ZSIsImFjdGl2ZSIsIm9uVGltZW91dCIsIl9vblRpbWVvdXQiLCJnIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNB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S0FBSSxRQUFPM0osTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUF0QixFQUFnQ2djLElBQUloYyxNQUFKO0FBQ2hDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQVcsT0FBT0MsT0FBUCxHQUFpQm9iLENBQWpCLEMiLCJmaWxlIjoicGF0aC1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBKZXJlbXkgV2hpdGxvY2tcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBvcnRlZExvYWRlcnMgPSB7XG4gIGZpbGU6IHJlcXVpcmUoJy4vbGliL2xvYWRlcnMvZmlsZScpLFxuICBodHRwOiByZXF1aXJlKCcuL2xpYi9sb2FkZXJzL2h0dHAnKSxcbiAgaHR0cHM6IHJlcXVpcmUoJy4vbGliL2xvYWRlcnMvaHR0cCcpXG59O1xudmFyIGRlZmF1bHRMb2FkZXIgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICBzdXBwb3J0ZWRMb2FkZXJzLmh0dHAgOlxuICAgICAgc3VwcG9ydGVkTG9hZGVycy5maWxlO1xuXG4vLyBMb2FkIHByb21pc2VzIHBvbHlmaWxsIGlmIG5lY2Vzc2FyeVxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gIHJlcXVpcmUoJ25hdGl2ZS1wcm9taXNlLW9ubHknKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2NoZW1lIChsb2NhdGlvbikge1xuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb24uaW5kZXhPZignOi8vJykgPT09IC0xID8gJycgOiBsb2NhdGlvbi5zcGxpdCgnOi8vJylbMF07XG4gIH1cblxuICByZXR1cm4gbG9jYXRpb247XG59XG5cbi8qKlxuICogVXRpbGl0eSB0aGF0IHByb3ZpZGVzIGEgc2luZ2xlIEFQSSBmb3IgbG9hZGluZyB0aGUgY29udGVudCBvZiBhIHBhdGgvVVJMLlxuICpcbiAqIEBtb2R1bGUgcGF0aC1sb2FkZXJcbiAqL1xuXG5mdW5jdGlvbiBnZXRMb2FkZXIgKGxvY2F0aW9uKSB7XG4gIHZhciBzY2hlbWUgPSBnZXRTY2hlbWUobG9jYXRpb24pO1xuICB2YXIgbG9hZGVyID0gc3VwcG9ydGVkTG9hZGVyc1tzY2hlbWVdO1xuXG4gIGlmICh0eXBlb2YgbG9hZGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChzY2hlbWUgPT09ICcnKSB7XG4gICAgICBsb2FkZXIgPSBkZWZhdWx0TG9hZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkIHNjaGVtZTogJyArIHNjaGVtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvYWRlcjtcbn1cblxuLyoqXG4gKiBMb2FkcyBhIGRvY3VtZW50IGF0IHRoZSBwcm92aWRlZCBsb2NhdGlvbiBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHJlcHJlc2VudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiAtIFRoZSBsb2NhdGlvbiB0byB0aGUgZG9jdW1lbnRcbiAqIEBwYXJhbSB7bW9kdWxlOnBhdGgtbG9hZGVyLkxvYWRPcHRpb25zfSBbb3B0aW9uc10gLSBUaGUgbG9hZGVyIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqPn0gQWx3YXlzIHJldHVybnMgYSBwcm9taXNlIGV2ZW4gaWYgdGhlcmUgaXMgYSBjYWxsYmFjayBwcm92aWRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFeGFtcGxlIHVzaW5nIFByb21pc2VzXG4gKlxuICogUGF0aExvYWRlclxuICogICAubG9hZCgnLi9wYWNrYWdlLmpzb24nKVxuICogICAudGhlbihKU09OLnBhcnNlKVxuICogICAudGhlbihmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAqICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5uYW1lICsgJyAoJyArIGRvY3VtZW50LnZlcnNpb24gKyAnKTogJyArIGRvY3VtZW50LmRlc2NyaXB0aW9uKTtcbiAqICAgfSwgZnVuY3Rpb24gKGVycikge1xuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAqICAgfSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEV4YW1wbGUgdXNpbmcgb3B0aW9ucy5wcmVwYXJlUmVxdWVzdCB0byBwcm92aWRlIGF1dGhlbnRpY2F0aW9uIGRldGFpbHMgZm9yIGEgcmVtb3RlbHkgc2VjdXJlIFVSTFxuICpcbiAqIFBhdGhMb2FkZXJcbiAqICAgLmxvYWQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3Mvd2hpdGxvY2tqYy9wYXRoLWxvYWRlcicsIHtcbiAqICAgICBwcmVwYXJlUmVxdWVzdDogZnVuY3Rpb24gKHJlcSwgY2FsbGJhY2spIHtcbiAqICAgICAgIHJlcS5hdXRoKCdteS11c2VybmFtZScsICdteS1wYXNzd29yZCcpO1xuICogICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCByZXEpO1xuICogICAgIH1cbiAqICAgfSlcbiAqICAgLnRoZW4oSlNPTi5wYXJzZSlcbiAqICAgLnRoZW4oZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gKiAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZnVsbF9uYW1lICsgJzogJyArIGRvY3VtZW50LmRlc2NyaXB0aW9uKTtcbiAqICAgfSwgZnVuY3Rpb24gKGVycikge1xuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAqICAgfSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEV4YW1wbGUgbG9hZGluZyBhIFlBTUwgZmlsZVxuICpcbiAqIFBhdGhMb2FkZXJcbiAqICAgLmxvYWQoJy9Vc2Vycy9ub3QteW91L3Byb2plY3RzL3BhdGgtbG9hZGVyLy50cmF2aXMueW1sJylcbiAqICAgLnRoZW4oWUFNTC5zYWZlTG9hZClcbiAqICAgLnRoZW4oZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gKiAgICAgY29uc29sZS5sb2coJ3BhdGgtbG9hZGVyIHVzZXMgdGhlJywgZG9jdW1lbnQubGFuZ3VhZ2UsICdsYW5ndWFnZS4nKTtcbiAqICAgfSwgZnVuY3Rpb24gKGVycikge1xuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAqICAgfSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEV4YW1wbGUgbG9hZGluZyBhIFlBTUwgZmlsZSB3aXRoIG9wdGlvbnMucHJvY2Vzc0NvbnRlbnQgKFVzZWZ1bCBpZiB5b3UgbmVlZCBpbmZvcm1hdGlvbiBpbiB0aGUgcmF3IHJlc3BvbnNlKVxuICpcbiAqIFBhdGhMb2FkZXJcbiAqICAgLmxvYWQoJy9Vc2Vycy9ub3QteW91L3Byb2plY3RzL3BhdGgtbG9hZGVyLy50cmF2aXMueW1sJywge1xuICogICAgIHByb2Nlc3NDb250ZW50OiBmdW5jdGlvbiAocmVzLCBjYWxsYmFjaykge1xuICogICAgICAgY2FsbGJhY2soWUFNTC5zYWZlTG9hZChyZXMudGV4dCkpO1xuICogICAgIH1cbiAqICAgfSlcbiAqICAgLnRoZW4oZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gKiAgICAgY29uc29sZS5sb2coJ3BhdGgtbG9hZGVyIHVzZXMgdGhlJywgZG9jdW1lbnQubGFuZ3VhZ2UsICdsYW5ndWFnZS4nKTtcbiAqICAgfSwgZnVuY3Rpb24gKGVycikge1xuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAqICAgfSk7XG4gKi9cbm1vZHVsZS5leHBvcnRzLmxvYWQgPSBmdW5jdGlvbiAobG9jYXRpb24sIG9wdGlvbnMpIHtcbiAgdmFyIGFsbFRhc2tzID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgLy8gRGVmYXVsdCBvcHRpb25zIHRvIGVtcHR5IG9iamVjdFxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgLy8gVmFsaWRhdGUgYXJndW1lbnRzXG4gIGFsbFRhc2tzID0gYWxsVGFza3MudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2xvY2F0aW9uIGlzIHJlcXVpcmVkJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdsb2NhdGlvbiBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLnByb2Nlc3NDb250ZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygb3B0aW9ucy5wcm9jZXNzQ29udGVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zLnByb2Nlc3NDb250ZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gTG9hZCB0aGUgZG9jdW1lbnQgZnJvbSB0aGUgcHJvdmlkZWQgbG9jYXRpb24gYW5kIHByb2Nlc3MgaXRcbiAgYWxsVGFza3MgPSBhbGxUYXNrc1xuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBsb2FkZXIgPSBnZXRMb2FkZXIobG9jYXRpb24pO1xuXG4gICAgICAgIGxvYWRlci5sb2FkKGxvY2F0aW9uLCBvcHRpb25zIHx8IHt9LCBmdW5jdGlvbiAoZXJyLCBkb2N1bWVudCkge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKGRvY3VtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAob3B0aW9ucy5wcm9jZXNzQ29udGVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIC8vIEZvciBjb25zaXN0ZW5jeSBiZXR3ZWVuIGZpbGUgYW5kIGh0dHAsIGFsd2F5cyBzZW5kIGFuIG9iamVjdCB3aXRoIGEgJ3RleHQnIHByb3BlcnR5IGNvbnRhaW5pbmcgdGhlIHJhd1xuICAgICAgICAgIC8vIHN0cmluZyB2YWx1ZSBiZWluZyBwcm9jZXNzZWQuXG4gICAgICAgICAgaWYgKHR5cGVvZiByZXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXMgPSB7dGV4dDogcmVzfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBQYXNzIHRoZSBwYXRoIGJlaW5nIGxvYWRlZFxuICAgICAgICAgIHJlcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgICAgICAgb3B0aW9ucy5wcm9jZXNzQ29udGVudChyZXMsIGZ1bmN0aW9uIChlcnIsIHByb2Nlc3NlZCkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocHJvY2Vzc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGVyZSB3YXMgbm8gY29udGVudCBwcm9jZXNzb3IsIHdlIHdpbGwgYXNzdW1lIHRoYXQgZm9yIGFsbCBvYmplY3RzIHRoYXQgaXQgaXMgYSBTdXBlcmFnZW50IHJlc3BvbnNlXG4gICAgICAgIC8vIGFuZCB3aWxsIHJldHVybiBpdHMgYHRleHRgIHByb3BlcnR5IHZhbHVlLiAgT3RoZXJ3aXNlLCB3ZSB3aWxsIHJldHVybiB0aGUgcmF3IHJlc3BvbnNlLlxuICAgICAgICByZXR1cm4gdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgPyByZXMudGV4dCA6IHJlcztcbiAgICAgIH1cbiAgICB9KTtcblxuICByZXR1cm4gYWxsVGFza3M7XG59O1xuIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSBKZXJlbXkgV2hpdGxvY2tcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHVuc3VwcG9ydGVkRXJyb3IgPSBuZXcgVHlwZUVycm9yKCdUaGUgXFwnZmlsZVxcJyBzY2hlbWUgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGUgYnJvd3NlcicpO1xuXG4vKipcbiAqIFRoZSBmaWxlIGxvYWRlciBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLlxuICpcbiAqIEB0aHJvd3Mge2Vycm9yfSB0aGUgZmlsZSBsb2FkZXIgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGUgYnJvd3NlclxuICovXG5tb2R1bGUuZXhwb3J0cy5nZXRCYXNlID0gZnVuY3Rpb24gKCkge1xuICB0aHJvdyB1bnN1cHBvcnRlZEVycm9yO1xufTtcblxuLyoqXG4gKiBUaGUgZmlsZSBsb2FkZXIgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGUgYnJvd3Nlci5cbiAqL1xubW9kdWxlLmV4cG9ydHMubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZuID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcblxuICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm4odW5zdXBwb3J0ZWRFcnJvcik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgdW5zdXBwb3J0ZWRFcnJvcjtcbiAgfVxufTtcbiIsIi8qIGVzbGludC1lbnYgbm9kZSwgYnJvd3NlciAqL1xuXG4vKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE1IEplcmVteSBXaGl0bG9ja1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVxdWVzdCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcblxudmFyIHN1cHBvcnRlZEh0dHBNZXRob2RzID0gWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncGF0Y2gnLCAncG9zdCcsICdwdXQnXTtcblxuLyoqXG4gKiBMb2FkcyBhIGZpbGUgZnJvbSBhbiBodHRwIG9yIGh0dHBzIFVSTC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gLSBUaGUgZG9jdW1lbnQgVVJMIChJZiByZWxhdGl2ZSwgbG9jYXRpb24gaXMgcmVsYXRpdmUgdG8gd2luZG93LmxvY2F0aW9uLm9yaWdpbikuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBsb2FkZXIgb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm1ldGhvZD1nZXRdIC0gVGhlIEhUVFAgbWV0aG9kIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAqIEBwYXJhbSB7bW9kdWxlOlBhdGhMb2FkZXJ+UHJlcGFyZVJlcXVlc3RDYWxsYmFja30gW29wdGlvbnMucHJlcGFyZVJlcXVlc3RdIC0gVGhlIGNhbGxiYWNrIHVzZWQgdG8gcHJlcGFyZSBhIHJlcXVlc3RcbiAqIEBwYXJhbSB7bW9kdWxlOlBhdGhMb2FkZXJ+UHJvY2Vzc1Jlc3BvbnNlQ2FsbGJhY2t9IFtvcHRpb25zLnByb2Nlc3NDb250ZW50XSAtIFRoZSBjYWxsYmFjayB1c2VkIHRvIHByb2Nlc3MgdGhlXG4gKiByZXNwb25zZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgZXJyb3ItZmlyc3QgY2FsbGJhY2tcbiAqL1xubW9kdWxlLmV4cG9ydHMubG9hZCA9IGZ1bmN0aW9uIChsb2NhdGlvbiwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIHJlYWxNZXRob2QgPSBvcHRpb25zLm1ldGhvZCA/IG9wdGlvbnMubWV0aG9kLnRvTG93ZXJDYXNlKCkgOiAnZ2V0JztcbiAgdmFyIGVycjtcbiAgdmFyIHJlYWxSZXF1ZXN0O1xuXG4gIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0IChlcnIsIHJlcSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGJ1ZmZlcigpIGlzIG9ubHkgYXZhaWxhYmxlIGluIE5vZGUuanNcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnID8gcHJvY2VzcyA6IDApID09PSAnW29iamVjdCBwcm9jZXNzXScgJiZcbiAgICAgICAgICB0eXBlb2YgcmVxLmJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXEuYnVmZmVyKHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXFcbiAgICAgICAgLmVuZChmdW5jdGlvbiAoZXJyMiwgcmVzKSB7XG4gICAgICAgICAgaWYgKGVycjIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycjIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMubWV0aG9kICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5tZXRob2QgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnIgPSBuZXcgVHlwZUVycm9yKCdvcHRpb25zLm1ldGhvZCBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0ZWRIdHRwTWV0aG9kcy5pbmRleE9mKG9wdGlvbnMubWV0aG9kKSA9PT0gLTEpIHtcbiAgICAgIGVyciA9IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMubWV0aG9kIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6ICcgK1xuICAgICAgICBzdXBwb3J0ZWRIdHRwTWV0aG9kcy5zbGljZSgwLCBzdXBwb3J0ZWRIdHRwTWV0aG9kcy5sZW5ndGggLSAxKS5qb2luKCcsICcpICsgJyBvciAnICtcbiAgICAgICAgc3VwcG9ydGVkSHR0cE1ldGhvZHNbc3VwcG9ydGVkSHR0cE1ldGhvZHMubGVuZ3RoIC0gMV0pO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5wcmVwYXJlUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG9wdGlvbnMucHJlcGFyZVJlcXVlc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICBlcnIgPSBuZXcgVHlwZUVycm9yKCdvcHRpb25zLnByZXBhcmVSZXF1ZXN0IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKCFlcnIpIHtcbiAgICByZWFsUmVxdWVzdCA9IHJlcXVlc3RbcmVhbE1ldGhvZCA9PT0gJ2RlbGV0ZScgPyAnZGVsJyA6IHJlYWxNZXRob2RdKGxvY2F0aW9uKTtcblxuICAgIGlmIChvcHRpb25zLnByZXBhcmVSZXF1ZXN0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBvcHRpb25zLnByZXBhcmVSZXF1ZXN0KHJlYWxSZXF1ZXN0LCBtYWtlUmVxdWVzdCk7XG4gICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycjIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYWtlUmVxdWVzdCh1bmRlZmluZWQsIHJlYWxSZXF1ZXN0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soZXJyKTtcbiAgfVxufTtcbiIsIlxyXG4vKipcclxuICogRXhwb3NlIGBFbWl0dGVyYC5cclxuICovXHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cclxuICpcclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xyXG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcclxuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcclxuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cclxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcclxuICAgIC5wdXNoKGZuKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcclxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xyXG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIG9uLmZuID0gZm47XHJcbiAgdGhpcy5vbihldmVudCwgb24pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXHJcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgLy8gYWxsXHJcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHNwZWNpZmljIGV2ZW50XHJcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xyXG5cclxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXHJcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXHJcbiAgdmFyIGNiO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcclxuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXHJcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcblxyXG4gIGlmIChjYWxsYmFja3MpIHtcclxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbn07XHJcbiIsIi8qISBOYXRpdmUgUHJvbWlzZSBPbmx5XG4gICAgdjAuOC4xIChjKSBLeWxlIFNpbXBzb25cbiAgICBNSVQgTGljZW5zZTogaHR0cDovL2dldGlmeS5taXQtbGljZW5zZS5vcmdcbiovXG5cbihmdW5jdGlvbiBVTUQobmFtZSxjb250ZXh0LGRlZmluaXRpb24pe1xuXHQvLyBzcGVjaWFsIGZvcm0gb2YgVU1EIGZvciBwb2x5ZmlsbGluZyBhY3Jvc3MgZXZpcm9ubWVudHNcblx0Y29udGV4dFtuYW1lXSA9IGNvbnRleHRbbmFtZV0gfHwgZGVmaW5pdGlvbigpO1xuXHRpZiAodHlwZW9mIG1vZHVsZSAhPSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7IG1vZHVsZS5leHBvcnRzID0gY29udGV4dFtuYW1lXTsgfVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7IGRlZmluZShmdW5jdGlvbiAkQU1EJCgpeyByZXR1cm4gY29udGV4dFtuYW1lXTsgfSk7IH1cbn0pKFwiUHJvbWlzZVwiLHR5cGVvZiBnbG9iYWwgIT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHRoaXMsZnVuY3Rpb24gREVGKCl7XG5cdC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciBidWlsdEluUHJvcCwgY3ljbGUsIHNjaGVkdWxpbmdfcXVldWUsXG5cdFx0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuXHRcdHRpbWVyID0gKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT0gXCJ1bmRlZmluZWRcIikgP1xuXHRcdFx0ZnVuY3Rpb24gdGltZXIoZm4pIHsgcmV0dXJuIHNldEltbWVkaWF0ZShmbik7IH0gOlxuXHRcdFx0c2V0VGltZW91dFxuXHQ7XG5cblx0Ly8gZGFtbWl0LCBJRTguXG5cdHRyeSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwieFwiLHt9KTtcblx0XHRidWlsdEluUHJvcCA9IGZ1bmN0aW9uIGJ1aWx0SW5Qcm9wKG9iaixuYW1lLHZhbCxjb25maWcpIHtcblx0XHRcdHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLG5hbWUse1xuXHRcdFx0XHR2YWx1ZTogdmFsLFxuXHRcdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiBjb25maWcgIT09IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9XG5cdGNhdGNoIChlcnIpIHtcblx0XHRidWlsdEluUHJvcCA9IGZ1bmN0aW9uIGJ1aWx0SW5Qcm9wKG9iaixuYW1lLHZhbCkge1xuXHRcdFx0b2JqW25hbWVdID0gdmFsO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9O1xuXHR9XG5cblx0Ly8gTm90ZTogdXNpbmcgYSBxdWV1ZSBpbnN0ZWFkIG9mIGFycmF5IGZvciBlZmZpY2llbmN5XG5cdHNjaGVkdWxpbmdfcXVldWUgPSAoZnVuY3Rpb24gUXVldWUoKSB7XG5cdFx0dmFyIGZpcnN0LCBsYXN0LCBpdGVtO1xuXG5cdFx0ZnVuY3Rpb24gSXRlbShmbixzZWxmKSB7XG5cdFx0XHR0aGlzLmZuID0gZm47XG5cdFx0XHR0aGlzLnNlbGYgPSBzZWxmO1xuXHRcdFx0dGhpcy5uZXh0ID0gdm9pZCAwO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRhZGQ6IGZ1bmN0aW9uIGFkZChmbixzZWxmKSB7XG5cdFx0XHRcdGl0ZW0gPSBuZXcgSXRlbShmbixzZWxmKTtcblx0XHRcdFx0aWYgKGxhc3QpIHtcblx0XHRcdFx0XHRsYXN0Lm5leHQgPSBpdGVtO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGZpcnN0ID0gaXRlbTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsYXN0ID0gaXRlbTtcblx0XHRcdFx0aXRlbSA9IHZvaWQgMDtcblx0XHRcdH0sXG5cdFx0XHRkcmFpbjogZnVuY3Rpb24gZHJhaW4oKSB7XG5cdFx0XHRcdHZhciBmID0gZmlyc3Q7XG5cdFx0XHRcdGZpcnN0ID0gbGFzdCA9IGN5Y2xlID0gdm9pZCAwO1xuXG5cdFx0XHRcdHdoaWxlIChmKSB7XG5cdFx0XHRcdFx0Zi5mbi5jYWxsKGYuc2VsZik7XG5cdFx0XHRcdFx0ZiA9IGYubmV4dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH0pKCk7XG5cblx0ZnVuY3Rpb24gc2NoZWR1bGUoZm4sc2VsZikge1xuXHRcdHNjaGVkdWxpbmdfcXVldWUuYWRkKGZuLHNlbGYpO1xuXHRcdGlmICghY3ljbGUpIHtcblx0XHRcdGN5Y2xlID0gdGltZXIoc2NoZWR1bGluZ19xdWV1ZS5kcmFpbik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gcHJvbWlzZSBkdWNrIHR5cGluZ1xuXHRmdW5jdGlvbiBpc1RoZW5hYmxlKG8pIHtcblx0XHR2YXIgX3RoZW4sIG9fdHlwZSA9IHR5cGVvZiBvO1xuXG5cdFx0aWYgKG8gIT0gbnVsbCAmJlxuXHRcdFx0KFxuXHRcdFx0XHRvX3R5cGUgPT0gXCJvYmplY3RcIiB8fCBvX3R5cGUgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRfdGhlbiA9IG8udGhlbjtcblx0XHR9XG5cdFx0cmV0dXJuIHR5cGVvZiBfdGhlbiA9PSBcImZ1bmN0aW9uXCIgPyBfdGhlbiA6IGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gbm90aWZ5KCkge1xuXHRcdGZvciAodmFyIGk9MDsgaTx0aGlzLmNoYWluLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRub3RpZnlJc29sYXRlZChcblx0XHRcdFx0dGhpcyxcblx0XHRcdFx0KHRoaXMuc3RhdGUgPT09IDEpID8gdGhpcy5jaGFpbltpXS5zdWNjZXNzIDogdGhpcy5jaGFpbltpXS5mYWlsdXJlLFxuXHRcdFx0XHR0aGlzLmNoYWluW2ldXG5cdFx0XHQpO1xuXHRcdH1cblx0XHR0aGlzLmNoYWluLmxlbmd0aCA9IDA7XG5cdH1cblxuXHQvLyBOT1RFOiBUaGlzIGlzIGEgc2VwYXJhdGUgZnVuY3Rpb24gdG8gaXNvbGF0ZVxuXHQvLyB0aGUgYHRyeS4uY2F0Y2hgIHNvIHRoYXQgb3RoZXIgY29kZSBjYW4gYmVcblx0Ly8gb3B0aW1pemVkIGJldHRlclxuXHRmdW5jdGlvbiBub3RpZnlJc29sYXRlZChzZWxmLGNiLGNoYWluKSB7XG5cdFx0dmFyIHJldCwgX3RoZW47XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChjYiA9PT0gZmFsc2UpIHtcblx0XHRcdFx0Y2hhaW4ucmVqZWN0KHNlbGYubXNnKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAoY2IgPT09IHRydWUpIHtcblx0XHRcdFx0XHRyZXQgPSBzZWxmLm1zZztcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRyZXQgPSBjYi5jYWxsKHZvaWQgMCxzZWxmLm1zZyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmV0ID09PSBjaGFpbi5wcm9taXNlKSB7XG5cdFx0XHRcdFx0Y2hhaW4ucmVqZWN0KFR5cGVFcnJvcihcIlByb21pc2UtY2hhaW4gY3ljbGVcIikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKF90aGVuID0gaXNUaGVuYWJsZShyZXQpKSB7XG5cdFx0XHRcdFx0X3RoZW4uY2FsbChyZXQsY2hhaW4ucmVzb2x2ZSxjaGFpbi5yZWplY3QpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGNoYWluLnJlc29sdmUocmV0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAoZXJyKSB7XG5cdFx0XHRjaGFpbi5yZWplY3QoZXJyKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiByZXNvbHZlKG1zZykge1xuXHRcdHZhciBfdGhlbiwgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBhbHJlYWR5IHRyaWdnZXJlZD9cblx0XHRpZiAoc2VsZi50cmlnZ2VyZWQpIHsgcmV0dXJuOyB9XG5cblx0XHRzZWxmLnRyaWdnZXJlZCA9IHRydWU7XG5cblx0XHQvLyB1bndyYXBcblx0XHRpZiAoc2VsZi5kZWYpIHtcblx0XHRcdHNlbGYgPSBzZWxmLmRlZjtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKF90aGVuID0gaXNUaGVuYWJsZShtc2cpKSB7XG5cdFx0XHRcdHNjaGVkdWxlKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0dmFyIGRlZl93cmFwcGVyID0gbmV3IE1ha2VEZWZXcmFwcGVyKHNlbGYpO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRfdGhlbi5jYWxsKG1zZyxcblx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gJHJlc29sdmUkKCl7IHJlc29sdmUuYXBwbHkoZGVmX3dyYXBwZXIsYXJndW1lbnRzKTsgfSxcblx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gJHJlamVjdCQoKXsgcmVqZWN0LmFwcGx5KGRlZl93cmFwcGVyLGFyZ3VtZW50cyk7IH1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdHJlamVjdC5jYWxsKGRlZl93cmFwcGVyLGVycik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNlbGYubXNnID0gbXNnO1xuXHRcdFx0XHRzZWxmLnN0YXRlID0gMTtcblx0XHRcdFx0aWYgKHNlbGYuY2hhaW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNjaGVkdWxlKG5vdGlmeSxzZWxmKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXRjaCAoZXJyKSB7XG5cdFx0XHRyZWplY3QuY2FsbChuZXcgTWFrZURlZldyYXBwZXIoc2VsZiksZXJyKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiByZWplY3QobXNnKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gYWxyZWFkeSB0cmlnZ2VyZWQ/XG5cdFx0aWYgKHNlbGYudHJpZ2dlcmVkKSB7IHJldHVybjsgfVxuXG5cdFx0c2VsZi50cmlnZ2VyZWQgPSB0cnVlO1xuXG5cdFx0Ly8gdW53cmFwXG5cdFx0aWYgKHNlbGYuZGVmKSB7XG5cdFx0XHRzZWxmID0gc2VsZi5kZWY7XG5cdFx0fVxuXG5cdFx0c2VsZi5tc2cgPSBtc2c7XG5cdFx0c2VsZi5zdGF0ZSA9IDI7XG5cdFx0aWYgKHNlbGYuY2hhaW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0c2NoZWR1bGUobm90aWZ5LHNlbGYpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGl0ZXJhdGVQcm9taXNlcyhDb25zdHJ1Y3RvcixhcnIscmVzb2x2ZXIscmVqZWN0ZXIpIHtcblx0XHRmb3IgKHZhciBpZHg9MDsgaWR4PGFyci5sZW5ndGg7IGlkeCsrKSB7XG5cdFx0XHQoZnVuY3Rpb24gSUlGRShpZHgpe1xuXHRcdFx0XHRDb25zdHJ1Y3Rvci5yZXNvbHZlKGFycltpZHhdKVxuXHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbiAkcmVzb2x2ZXIkKG1zZyl7XG5cdFx0XHRcdFx0XHRyZXNvbHZlcihpZHgsbXNnKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlamVjdGVyXG5cdFx0XHRcdCk7XG5cdFx0XHR9KShpZHgpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIE1ha2VEZWZXcmFwcGVyKHNlbGYpIHtcblx0XHR0aGlzLmRlZiA9IHNlbGY7XG5cdFx0dGhpcy50cmlnZ2VyZWQgPSBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIE1ha2VEZWYoc2VsZikge1xuXHRcdHRoaXMucHJvbWlzZSA9IHNlbGY7XG5cdFx0dGhpcy5zdGF0ZSA9IDA7XG5cdFx0dGhpcy50cmlnZ2VyZWQgPSBmYWxzZTtcblx0XHR0aGlzLmNoYWluID0gW107XG5cdFx0dGhpcy5tc2cgPSB2b2lkIDA7XG5cdH1cblxuXHRmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBleGVjdXRvciAhPSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9fTlBPX18gIT09IDApIHtcblx0XHRcdHRocm93IFR5cGVFcnJvcihcIk5vdCBhIHByb21pc2VcIik7XG5cdFx0fVxuXG5cdFx0Ly8gaW5zdGFuY2Ugc2hhZG93aW5nIHRoZSBpbmhlcml0ZWQgXCJicmFuZFwiXG5cdFx0Ly8gdG8gc2lnbmFsIGFuIGFscmVhZHkgXCJpbml0aWFsaXplZFwiIHByb21pc2Vcblx0XHR0aGlzLl9fTlBPX18gPSAxO1xuXG5cdFx0dmFyIGRlZiA9IG5ldyBNYWtlRGVmKHRoaXMpO1xuXG5cdFx0dGhpc1tcInRoZW5cIl0gPSBmdW5jdGlvbiB0aGVuKHN1Y2Nlc3MsZmFpbHVyZSkge1xuXHRcdFx0dmFyIG8gPSB7XG5cdFx0XHRcdHN1Y2Nlc3M6IHR5cGVvZiBzdWNjZXNzID09IFwiZnVuY3Rpb25cIiA/IHN1Y2Nlc3MgOiB0cnVlLFxuXHRcdFx0XHRmYWlsdXJlOiB0eXBlb2YgZmFpbHVyZSA9PSBcImZ1bmN0aW9uXCIgPyBmYWlsdXJlIDogZmFsc2Vcblx0XHRcdH07XG5cdFx0XHQvLyBOb3RlOiBgdGhlbiguLilgIGl0c2VsZiBjYW4gYmUgYm9ycm93ZWQgdG8gYmUgdXNlZCBhZ2FpbnN0XG5cdFx0XHQvLyBhIGRpZmZlcmVudCBwcm9taXNlIGNvbnN0cnVjdG9yIGZvciBtYWtpbmcgdGhlIGNoYWluZWQgcHJvbWlzZSxcblx0XHRcdC8vIGJ5IHN1YnN0aXR1dGluZyBhIGRpZmZlcmVudCBgdGhpc2AgYmluZGluZy5cblx0XHRcdG8ucHJvbWlzZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGZ1bmN0aW9uIGV4dHJhY3RDaGFpbihyZXNvbHZlLHJlamVjdCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0dGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvLnJlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0XHRvLnJlamVjdCA9IHJlamVjdDtcblx0XHRcdH0pO1xuXHRcdFx0ZGVmLmNoYWluLnB1c2gobyk7XG5cblx0XHRcdGlmIChkZWYuc3RhdGUgIT09IDApIHtcblx0XHRcdFx0c2NoZWR1bGUobm90aWZ5LGRlZik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvLnByb21pc2U7XG5cdFx0fTtcblx0XHR0aGlzW1wiY2F0Y2hcIl0gPSBmdW5jdGlvbiAkY2F0Y2gkKGZhaWx1cmUpIHtcblx0XHRcdHJldHVybiB0aGlzLnRoZW4odm9pZCAwLGZhaWx1cmUpO1xuXHRcdH07XG5cblx0XHR0cnkge1xuXHRcdFx0ZXhlY3V0b3IuY2FsbChcblx0XHRcdFx0dm9pZCAwLFxuXHRcdFx0XHRmdW5jdGlvbiBwdWJsaWNSZXNvbHZlKG1zZyl7XG5cdFx0XHRcdFx0cmVzb2x2ZS5jYWxsKGRlZixtc2cpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmdW5jdGlvbiBwdWJsaWNSZWplY3QobXNnKSB7XG5cdFx0XHRcdFx0cmVqZWN0LmNhbGwoZGVmLG1zZyk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGNhdGNoIChlcnIpIHtcblx0XHRcdHJlamVjdC5jYWxsKGRlZixlcnIpO1xuXHRcdH1cblx0fVxuXG5cdHZhciBQcm9taXNlUHJvdG90eXBlID0gYnVpbHRJblByb3Aoe30sXCJjb25zdHJ1Y3RvclwiLFByb21pc2UsXG5cdFx0Lypjb25maWd1cmFibGU9Ki9mYWxzZVxuXHQpO1xuXG5cdC8vIE5vdGU6IEFuZHJvaWQgNCBjYW5ub3QgdXNlIGBPYmplY3QuZGVmaW5lUHJvcGVydHkoLi4pYCBoZXJlXG5cdFByb21pc2UucHJvdG90eXBlID0gUHJvbWlzZVByb3RvdHlwZTtcblxuXHQvLyBidWlsdC1pbiBcImJyYW5kXCIgdG8gc2lnbmFsIGFuIFwidW5pbml0aWFsaXplZFwiIHByb21pc2Vcblx0YnVpbHRJblByb3AoUHJvbWlzZVByb3RvdHlwZSxcIl9fTlBPX19cIiwwLFxuXHRcdC8qY29uZmlndXJhYmxlPSovZmFsc2Vcblx0KTtcblxuXHRidWlsdEluUHJvcChQcm9taXNlLFwicmVzb2x2ZVwiLGZ1bmN0aW9uIFByb21pc2UkcmVzb2x2ZShtc2cpIHtcblx0XHR2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG5cdFx0Ly8gc3BlYyBtYW5kYXRlZCBjaGVja3Ncblx0XHQvLyBub3RlOiBiZXN0IFwiaXNQcm9taXNlXCIgY2hlY2sgdGhhdCdzIHByYWN0aWNhbCBmb3Igbm93XG5cdFx0aWYgKG1zZyAmJiB0eXBlb2YgbXNnID09IFwib2JqZWN0XCIgJiYgbXNnLl9fTlBPX18gPT09IDEpIHtcblx0XHRcdHJldHVybiBtc2c7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLHJlamVjdCl7XG5cdFx0XHRpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNvbHZlKG1zZyk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGJ1aWx0SW5Qcm9wKFByb21pc2UsXCJyZWplY3RcIixmdW5jdGlvbiBQcm9taXNlJHJlamVjdChtc2cpIHtcblx0XHRyZXR1cm4gbmV3IHRoaXMoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSxyZWplY3Qpe1xuXHRcdFx0aWYgKHR5cGVvZiByZXNvbHZlICE9IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmVqZWN0ICE9IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcblx0XHRcdH1cblxuXHRcdFx0cmVqZWN0KG1zZyk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGJ1aWx0SW5Qcm9wKFByb21pc2UsXCJhbGxcIixmdW5jdGlvbiBQcm9taXNlJGFsbChhcnIpIHtcblx0XHR2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG5cdFx0Ly8gc3BlYyBtYW5kYXRlZCBjaGVja3Ncblx0XHRpZiAoVG9TdHJpbmcuY2FsbChhcnIpICE9IFwiW29iamVjdCBBcnJheV1cIikge1xuXHRcdFx0cmV0dXJuIENvbnN0cnVjdG9yLnJlamVjdChUeXBlRXJyb3IoXCJOb3QgYW4gYXJyYXlcIikpO1xuXHRcdH1cblx0XHRpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIENvbnN0cnVjdG9yLnJlc29sdmUoW10pO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSxyZWplY3Qpe1xuXHRcdFx0aWYgKHR5cGVvZiByZXNvbHZlICE9IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmVqZWN0ICE9IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGxlbiA9IGFyci5sZW5ndGgsIG1zZ3MgPSBBcnJheShsZW4pLCBjb3VudCA9IDA7XG5cblx0XHRcdGl0ZXJhdGVQcm9taXNlcyhDb25zdHJ1Y3RvcixhcnIsZnVuY3Rpb24gcmVzb2x2ZXIoaWR4LG1zZykge1xuXHRcdFx0XHRtc2dzW2lkeF0gPSBtc2c7XG5cdFx0XHRcdGlmICgrK2NvdW50ID09PSBsZW4pIHtcblx0XHRcdFx0XHRyZXNvbHZlKG1zZ3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LHJlamVjdCk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGJ1aWx0SW5Qcm9wKFByb21pc2UsXCJyYWNlXCIsZnVuY3Rpb24gUHJvbWlzZSRyYWNlKGFycikge1xuXHRcdHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cblx0XHQvLyBzcGVjIG1hbmRhdGVkIGNoZWNrc1xuXHRcdGlmIChUb1N0cmluZy5jYWxsKGFycikgIT0gXCJbb2JqZWN0IEFycmF5XVwiKSB7XG5cdFx0XHRyZXR1cm4gQ29uc3RydWN0b3IucmVqZWN0KFR5cGVFcnJvcihcIk5vdCBhbiBhcnJheVwiKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLHJlamVjdCl7XG5cdFx0XHRpZiAodHlwZW9mIHJlc29sdmUgIT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByZWplY3QgIT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpdGVyYXRlUHJvbWlzZXMoQ29uc3RydWN0b3IsYXJyLGZ1bmN0aW9uIHJlc29sdmVyKGlkeCxtc2cpe1xuXHRcdFx0XHRyZXNvbHZlKG1zZyk7XG5cdFx0XHR9LHJlamVjdCk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdHJldHVybiBQcm9taXNlO1xufSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwiZnVuY3Rpb24gQWdlbnQoKSB7XG4gIHRoaXMuX2RlZmF1bHRzID0gW107XG59XG5cbltcInVzZVwiLCBcIm9uXCIsIFwib25jZVwiLCBcInNldFwiLCBcInF1ZXJ5XCIsIFwidHlwZVwiLCBcImFjY2VwdFwiLCBcImF1dGhcIiwgXCJ3aXRoQ3JlZGVudGlhbHNcIiwgXCJzb3J0UXVlcnlcIiwgXCJyZXRyeVwiLCBcIm9rXCIsIFwicmVkaXJlY3RzXCIsXG4gXCJ0aW1lb3V0XCIsIFwiYnVmZmVyXCIsIFwic2VyaWFsaXplXCIsIFwicGFyc2VcIiwgXCJjYVwiLCBcImtleVwiLCBcInBmeFwiLCBcImNlcnRcIl0uZm9yRWFjaChmdW5jdGlvbihmbikge1xuICAvKiogRGVmYXVsdCBzZXR0aW5nIGZvciBhbGwgcmVxdWVzdHMgZnJvbSB0aGlzIGFnZW50ICovXG4gIEFnZW50LnByb3RvdHlwZVtmbl0gPSBmdW5jdGlvbigvKnZhcmFyZ3MqLykge1xuICAgIHRoaXMuX2RlZmF1bHRzLnB1c2goe2ZuOmZuLCBhcmd1bWVudHM6YXJndW1lbnRzfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn0pO1xuXG5BZ2VudC5wcm90b3R5cGUuX3NldERlZmF1bHRzID0gZnVuY3Rpb24ocmVxKSB7XG4gICAgdGhpcy5fZGVmYXVsdHMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgIHJlcVtkZWYuZm5dLmFwcGx5KHJlcSwgZGVmLmFyZ3VtZW50cyk7XG4gICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFnZW50O1xuIiwiLyoqXG4gKiBSb290IHJlZmVyZW5jZSBmb3IgaWZyYW1lcy5cbiAqL1xuXG52YXIgcm9vdDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyAvLyBCcm93c2VyIHdpbmRvd1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gV2ViIFdvcmtlclxuICByb290ID0gc2VsZjtcbn0gZWxzZSB7IC8vIE90aGVyIGVudmlyb25tZW50c1xuICBjb25zb2xlLndhcm4oXCJVc2luZyBicm93c2VyLW9ubHkgdmVyc2lvbiBvZiBzdXBlcmFnZW50IGluIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuICByb290ID0gdGhpcztcbn1cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIFJlcXVlc3RCYXNlID0gcmVxdWlyZSgnLi9yZXF1ZXN0LWJhc2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXMtb2JqZWN0Jyk7XG52YXIgUmVzcG9uc2VCYXNlID0gcmVxdWlyZSgnLi9yZXNwb25zZS1iYXNlJyk7XG52YXIgQWdlbnQgPSByZXF1aXJlKCcuL2FnZW50LWJhc2UnKTtcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKXt9O1xuXG4vKipcbiAqIEV4cG9zZSBgcmVxdWVzdGAuXG4gKi9cblxudmFyIHJlcXVlc3QgPSBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXRob2QsIHVybCkge1xuICAvLyBjYWxsYmFja1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QoJ0dFVCcsIG1ldGhvZCkuZW5kKHVybCk7XG4gIH1cblxuICAvLyB1cmwgZmlyc3RcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgZXhwb3J0cy5SZXF1ZXN0KCdHRVQnLCBtZXRob2QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QobWV0aG9kLCB1cmwpO1xufVxuXG5leHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG4vKipcbiAqIERldGVybWluZSBYSFIuXG4gKi9cblxucmVxdWVzdC5nZXRYSFIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChyb290LlhNTEh0dHBSZXF1ZXN0XG4gICAgICAmJiAoIXJvb3QubG9jYXRpb24gfHwgJ2ZpbGU6JyAhPSByb290LmxvY2F0aW9uLnByb3RvY29sXG4gICAgICAgICAgfHwgIXJvb3QuQWN0aXZlWE9iamVjdCkpIHtcbiAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0O1xuICB9IGVsc2Uge1xuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuNi4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjMuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gIH1cbiAgdGhyb3cgRXJyb3IoXCJCcm93c2VyLW9ubHkgdmVyc2lvbiBvZiBzdXBlcmFnZW50IGNvdWxkIG5vdCBmaW5kIFhIUlwiKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBhZGRlZCB0byBzdXBwb3J0IElFLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgdHJpbSA9ICcnLnRyaW1cbiAgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzLnRyaW0oKTsgfVxuICA6IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMucmVwbGFjZSgvKF5cXHMqfFxccyokKS9nLCAnJyk7IH07XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCBvYmpba2V5XSk7XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBIZWxwcyAnc2VyaWFsaXplJyB3aXRoIHNlcmlhbGl6aW5nIGFycmF5cy5cbiAqIE11dGF0ZXMgdGhlIHBhaXJzIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXJzXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqL1xuXG5mdW5jdGlvbiBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCB2YWwpIHtcbiAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFsLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgICAgICBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCB2KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgICAgZm9yKHZhciBzdWJrZXkgaW4gdmFsKSB7XG4gICAgICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXkgKyAnWycgKyBzdWJrZXkgKyAnXScsIHZhbFtzdWJrZXldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgICAgICArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodmFsID09PSBudWxsKSB7XG4gICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSk7XG4gIH1cbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxucmVxdWVzdC5zZXJpYWxpemVPYmplY3QgPSBzZXJpYWxpemU7XG5cbi8qKlxuICAqIFBhcnNlIHRoZSBnaXZlbiB4LXd3dy1mb3JtLXVybGVuY29kZWQgYHN0cmAuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICogQHJldHVybiB7T2JqZWN0fVxuICAqIEBhcGkgcHJpdmF0ZVxuICAqL1xuXG5mdW5jdGlvbiBwYXJzZVN0cmluZyhzdHIpIHtcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQoJyYnKTtcbiAgdmFyIHBhaXI7XG4gIHZhciBwb3M7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhaXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcGFpciA9IHBhaXJzW2ldO1xuICAgIHBvcyA9IHBhaXIuaW5kZXhPZignPScpO1xuICAgIGlmIChwb3MgPT0gLTEpIHtcbiAgICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFpcildID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFpci5zbGljZSgwLCBwb3MpKV0gPVxuICAgICAgICBkZWNvZGVVUklDb21wb25lbnQocGFpci5zbGljZShwb3MgKyAxKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHBvc2UgcGFyc2VyLlxuICovXG5cbnJlcXVlc3QucGFyc2VTdHJpbmcgPSBwYXJzZVN0cmluZztcblxuLyoqXG4gKiBEZWZhdWx0IE1JTUUgdHlwZSBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICovXG5cbnJlcXVlc3QudHlwZXMgPSB7XG4gIGh0bWw6ICd0ZXh0L2h0bWwnLFxuICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsXG4gIHhtbDogJ3RleHQveG1sJyxcbiAgdXJsZW5jb2RlZDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtLWRhdGEnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbnJlcXVlc3Quc2VyaWFsaXplID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAnYXBwbGljYXRpb24vanNvbic6IEpTT04uc3RyaW5naWZ5XG59O1xuXG4vKipcbiAgKiBEZWZhdWx0IHBhcnNlcnMuXG4gICpcbiAgKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihzdHIpe1xuICAqICAgICAgIHJldHVybiB7IG9iamVjdCBwYXJzZWQgZnJvbSBzdHIgfTtcbiAgKiAgICAgfTtcbiAgKlxuICAqL1xuXG5yZXF1ZXN0LnBhcnNlID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogcGFyc2VTdHJpbmcsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5wYXJzZVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaGVhZGVyIGBzdHJgIGludG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtYXBwZWQgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHN0cikge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsaW5lO1xuICB2YXIgZmllbGQ7XG4gIHZhciB2YWw7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgbGluZSA9IGxpbmVzW2ldO1xuICAgIGluZGV4ID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgeyAvLyBjb3VsZCBiZSBlbXB0eSBsaW5lLCBqdXN0IHNraXAgaXRcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmaWVsZCA9IGxpbmUuc2xpY2UoMCwgaW5kZXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdHJpbShsaW5lLnNsaWNlKGluZGV4ICsgMSkpO1xuICAgIGZpZWxkc1tmaWVsZF0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGBtaW1lYCBpcyBqc29uIG9yIGhhcyAranNvbiBzdHJ1Y3R1cmVkIHN5bnRheCBzdWZmaXguXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1pbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0pTT04obWltZSkge1xuICAvLyBzaG91bGQgbWF0Y2ggL2pzb24gb3IgK2pzb25cbiAgLy8gYnV0IG5vdCAvanNvbi1zZXFcbiAgcmV0dXJuIC9bXFwvK11qc29uKCR8W14tXFx3XSkvLnRlc3QobWltZSk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIGB4aHJgLlxuICpcbiAqICAtIHNldCBmbGFncyAoLm9rLCAuZXJyb3IsIGV0YylcbiAqICAtIHBhcnNlIGhlYWRlclxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBBbGlhc2luZyBgc3VwZXJhZ2VudGAgYXMgYHJlcXVlc3RgIGlzIG5pY2U6XG4gKlxuICogICAgICByZXF1ZXN0ID0gc3VwZXJhZ2VudDtcbiAqXG4gKiAgV2UgY2FuIHVzZSB0aGUgcHJvbWlzZS1saWtlIEFQSSwgb3IgcGFzcyBjYWxsYmFja3M6XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnLycpLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICogICAgICByZXF1ZXN0LmdldCgnLycsIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIFNlbmRpbmcgZGF0YSBjYW4gYmUgY2hhaW5lZDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAuc2VuZCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5wb3N0KClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBPciBmdXJ0aGVyIHJlZHVjZWQgdG8gYSBzaW5nbGUgY2FsbCBmb3Igc2ltcGxlIGNhc2VzOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIEBwYXJhbSB7WE1MSFRUUFJlcXVlc3R9IHhoclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSkge1xuICB0aGlzLnJlcSA9IHJlcTtcbiAgdGhpcy54aHIgPSB0aGlzLnJlcS54aHI7XG4gIC8vIHJlc3BvbnNlVGV4dCBpcyBhY2Nlc3NpYmxlIG9ubHkgaWYgcmVzcG9uc2VUeXBlIGlzICcnIG9yICd0ZXh0JyBhbmQgb24gb2xkZXIgYnJvd3NlcnNcbiAgdGhpcy50ZXh0ID0gKCh0aGlzLnJlcS5tZXRob2QgIT0nSEVBRCcgJiYgKHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJycgfHwgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndGV4dCcpKSB8fCB0eXBlb2YgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndW5kZWZpbmVkJylcbiAgICAgPyB0aGlzLnhoci5yZXNwb25zZVRleHRcbiAgICAgOiBudWxsO1xuICB0aGlzLnN0YXR1c1RleHQgPSB0aGlzLnJlcS54aHIuc3RhdHVzVGV4dDtcbiAgdmFyIHN0YXR1cyA9IHRoaXMueGhyLnN0YXR1cztcbiAgLy8gaGFuZGxlIElFOSBidWc6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTAwNDY5NzIvbXNpZS1yZXR1cm5zLXN0YXR1cy1jb2RlLW9mLTEyMjMtZm9yLWFqYXgtcmVxdWVzdFxuICBpZiAoc3RhdHVzID09PSAxMjIzKSB7XG4gICAgc3RhdHVzID0gMjA0O1xuICB9XG4gIHRoaXMuX3NldFN0YXR1c1Byb3BlcnRpZXMoc3RhdHVzKTtcbiAgdGhpcy5oZWFkZXIgPSB0aGlzLmhlYWRlcnMgPSBwYXJzZUhlYWRlcih0aGlzLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG4gIC8vIGdldEFsbFJlc3BvbnNlSGVhZGVycyBzb21ldGltZXMgZmFsc2VseSByZXR1cm5zIFwiXCIgZm9yIENPUlMgcmVxdWVzdHMsIGJ1dFxuICAvLyBnZXRSZXNwb25zZUhlYWRlciBzdGlsbCB3b3Jrcy4gc28gd2UgZ2V0IGNvbnRlbnQtdHlwZSBldmVuIGlmIGdldHRpbmdcbiAgLy8gb3RoZXIgaGVhZGVycyBmYWlscy5cbiAgdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpO1xuICB0aGlzLl9zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKTtcblxuICBpZiAobnVsbCA9PT0gdGhpcy50ZXh0ICYmIHJlcS5fcmVzcG9uc2VUeXBlKSB7XG4gICAgdGhpcy5ib2R5ID0gdGhpcy54aHIucmVzcG9uc2U7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5ib2R5ID0gdGhpcy5yZXEubWV0aG9kICE9ICdIRUFEJ1xuICAgICAgPyB0aGlzLl9wYXJzZUJvZHkodGhpcy50ZXh0ID8gdGhpcy50ZXh0IDogdGhpcy54aHIucmVzcG9uc2UpXG4gICAgICA6IG51bGw7XG4gIH1cbn1cblxuUmVzcG9uc2VCYXNlKFJlc3BvbnNlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGJvZHkgYHN0cmAuXG4gKlxuICogVXNlZCBmb3IgYXV0by1wYXJzaW5nIG9mIGJvZGllcy4gUGFyc2Vyc1xuICogYXJlIGRlZmluZWQgb24gdGhlIGBzdXBlcmFnZW50LnBhcnNlYCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuX3BhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cikge1xuICB2YXIgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG4gIGlmICh0aGlzLnJlcS5fcGFyc2VyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxLl9wYXJzZXIodGhpcywgc3RyKTtcbiAgfVxuICBpZiAoIXBhcnNlICYmIGlzSlNPTih0aGlzLnR5cGUpKSB7XG4gICAgcGFyc2UgPSByZXF1ZXN0LnBhcnNlWydhcHBsaWNhdGlvbi9qc29uJ107XG4gIH1cbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiAoc3RyLmxlbmd0aCB8fCBzdHIgaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgPyBwYXJzZShzdHIpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYEVycm9yYCByZXByZXNlbnRhdGl2ZSBvZiB0aGlzIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge0Vycm9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG1ldGhvZCA9IHJlcS5tZXRob2Q7XG4gIHZhciB1cmwgPSByZXEudXJsO1xuXG4gIHZhciBtc2cgPSAnY2Fubm90ICcgKyBtZXRob2QgKyAnICcgKyB1cmwgKyAnICgnICsgdGhpcy5zdGF0dXMgKyAnKSc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gbWV0aG9kO1xuICBlcnIudXJsID0gdXJsO1xuXG4gIHJldHVybiBlcnI7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0YCB3aXRoIHRoZSBnaXZlbiBgbWV0aG9kYCBhbmQgYHVybGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeSB8fCBbXTtcbiAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmhlYWRlciA9IHt9OyAvLyBwcmVzZXJ2ZXMgaGVhZGVyIG5hbWUgY2FzZVxuICB0aGlzLl9oZWFkZXIgPSB7fTsgLy8gY29lcmNlcyBoZWFkZXIgbmFtZXMgdG8gbG93ZXJjYXNlXG4gIHRoaXMub24oJ2VuZCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGVyciA9IG51bGw7XG4gICAgdmFyIHJlcyA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgcmVzID0gbmV3IFJlc3BvbnNlKHNlbGYpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgZXJyID0gbmV3IEVycm9yKCdQYXJzZXIgaXMgdW5hYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZScpO1xuICAgICAgZXJyLnBhcnNlID0gdHJ1ZTtcbiAgICAgIGVyci5vcmlnaW5hbCA9IGU7XG4gICAgICAvLyBpc3N1ZSAjNjc1OiByZXR1cm4gdGhlIHJhdyByZXNwb25zZSBpZiB0aGUgcmVzcG9uc2UgcGFyc2luZyBmYWlsc1xuICAgICAgaWYgKHNlbGYueGhyKSB7XG4gICAgICAgIC8vIGllOSBkb2Vzbid0IGhhdmUgJ3Jlc3BvbnNlJyBwcm9wZXJ0eVxuICAgICAgICBlcnIucmF3UmVzcG9uc2UgPSB0eXBlb2Ygc2VsZi54aHIucmVzcG9uc2VUeXBlID09ICd1bmRlZmluZWQnID8gc2VsZi54aHIucmVzcG9uc2VUZXh0IDogc2VsZi54aHIucmVzcG9uc2U7XG4gICAgICAgIC8vIGlzc3VlICM4NzY6IHJldHVybiB0aGUgaHR0cCBzdGF0dXMgY29kZSBpZiB0aGUgcmVzcG9uc2UgcGFyc2luZyBmYWlsc1xuICAgICAgICBlcnIuc3RhdHVzID0gc2VsZi54aHIuc3RhdHVzID8gc2VsZi54aHIuc3RhdHVzIDogbnVsbDtcbiAgICAgICAgZXJyLnN0YXR1c0NvZGUgPSBlcnIuc3RhdHVzOyAvLyBiYWNrd2FyZHMtY29tcGF0IG9ubHlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVyci5yYXdSZXNwb25zZSA9IG51bGw7XG4gICAgICAgIGVyci5zdGF0dXMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZi5jYWxsYmFjayhlcnIpO1xuICAgIH1cblxuICAgIHNlbGYuZW1pdCgncmVzcG9uc2UnLCByZXMpO1xuXG4gICAgdmFyIG5ld19lcnI7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghc2VsZi5faXNSZXNwb25zZU9LKHJlcykpIHtcbiAgICAgICAgbmV3X2VyciA9IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCB8fCAnVW5zdWNjZXNzZnVsIEhUVFAgcmVzcG9uc2UnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGN1c3RvbV9lcnIpIHtcbiAgICAgIG5ld19lcnIgPSBjdXN0b21fZXJyOyAvLyBvaygpIGNhbGxiYWNrIGNhbiB0aHJvd1xuICAgIH1cblxuICAgIC8vICMxMDAwIGRvbid0IGNhdGNoIGVycm9ycyBmcm9tIHRoZSBjYWxsYmFjayB0byBhdm9pZCBkb3VibGUgY2FsbGluZyBpdFxuICAgIGlmIChuZXdfZXJyKSB7XG4gICAgICBuZXdfZXJyLm9yaWdpbmFsID0gZXJyO1xuICAgICAgbmV3X2Vyci5yZXNwb25zZSA9IHJlcztcbiAgICAgIG5ld19lcnIuc3RhdHVzID0gcmVzLnN0YXR1cztcbiAgICAgIHNlbGYuY2FsbGJhY2sobmV3X2VyciwgcmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5jYWxsYmFjayhudWxsLCByZXMpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogTWl4aW4gYEVtaXR0ZXJgIGFuZCBgUmVxdWVzdEJhc2VgLlxuICovXG5cbkVtaXR0ZXIoUmVxdWVzdC5wcm90b3R5cGUpO1xuUmVxdWVzdEJhc2UoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFNldCBDb250ZW50LVR5cGUgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCd4bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ2FwcGxpY2F0aW9uL3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBY2NlcHQgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMuanNvbiA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFjY2VwdFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQWNjZXB0JywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBdXRob3JpemF0aW9uIGZpZWxkIHZhbHVlIHdpdGggYHVzZXJgIGFuZCBgcGFzc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcGFzc10gb3B0aW9uYWwgaW4gY2FzZSBvZiB1c2luZyAnYmVhcmVyJyBhcyB0eXBlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB3aXRoICd0eXBlJyBwcm9wZXJ0eSAnYXV0bycsICdiYXNpYycgb3IgJ2JlYXJlcicgKGRlZmF1bHQgJ2Jhc2ljJylcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcywgb3B0aW9ucyl7XG4gIGlmICgxID09PSBhcmd1bWVudHMubGVuZ3RoKSBwYXNzID0gJyc7XG4gIGlmICh0eXBlb2YgcGFzcyA9PT0gJ29iamVjdCcgJiYgcGFzcyAhPT0gbnVsbCkgeyAvLyBwYXNzIGlzIG9wdGlvbmFsIGFuZCBjYW4gYmUgcmVwbGFjZWQgd2l0aCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IHBhc3M7XG4gICAgcGFzcyA9ICcnO1xuICB9XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiAnZnVuY3Rpb24nID09PSB0eXBlb2YgYnRvYSA/ICdiYXNpYycgOiAnYXV0bycsXG4gICAgfTtcbiAgfVxuXG4gIHZhciBlbmNvZGVyID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBidG9hKSB7XG4gICAgICByZXR1cm4gYnRvYShzdHJpbmcpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgYmFzaWMgYXV0aCwgYnRvYSBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9O1xuXG4gIHJldHVybiB0aGlzLl9hdXRoKHVzZXIsIHBhc3MsIG9wdGlvbnMsIGVuY29kZXIpO1xufTtcblxuLyoqXG4gKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgcmVxdWVzdC5nZXQoJy9zaG9lcycpXG4gKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiAqICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYG9wdGlvbnNgIChvciBmaWxlbmFtZSkuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuYXR0YWNoKCdjb250ZW50JywgbmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIG9wdGlvbnMpe1xuICBpZiAoZmlsZSkge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aHJvdyBFcnJvcihcInN1cGVyYWdlbnQgY2FuJ3QgbWl4IC5zZW5kKCkgYW5kIC5hdHRhY2goKVwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9nZXRGb3JtRGF0YSgpLmFwcGVuZChmaWVsZCwgZmlsZSwgb3B0aW9ucyB8fCBmaWxlLm5hbWUpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX2dldEZvcm1EYXRhID0gZnVuY3Rpb24oKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkge1xuICAgIHRoaXMuX2Zvcm1EYXRhID0gbmV3IHJvb3QuRm9ybURhdGEoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5fZm9ybURhdGE7XG59O1xuXG4vKipcbiAqIEludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCBgZXJyYCBhbmQgYHJlc2BcbiAqIGFuZCBoYW5kbGUgYXJpdHkgY2hlY2suXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNhbGxiYWNrID0gZnVuY3Rpb24oZXJyLCByZXMpe1xuICBpZiAodGhpcy5fc2hvdWxkUmV0cnkoZXJyLCByZXMpKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHJ5KCk7XG4gIH1cblxuICB2YXIgZm4gPSB0aGlzLl9jYWxsYmFjaztcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcblxuICBpZiAoZXJyKSB7XG4gICAgaWYgKHRoaXMuX21heFJldHJpZXMpIGVyci5yZXRyaWVzID0gdGhpcy5fcmV0cmllcyAtIDE7XG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cblxuICBmbihlcnIsIHJlcyk7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHgtZG9tYWluIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCdSZXF1ZXN0IGhhcyBiZWVuIHRlcm1pbmF0ZWRcXG5Qb3NzaWJsZSBjYXVzZXM6IHRoZSBuZXR3b3JrIGlzIG9mZmxpbmUsIE9yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4sIHRoZSBwYWdlIGlzIGJlaW5nIHVubG9hZGVkLCBldGMuJyk7XG4gIGVyci5jcm9zc0RvbWFpbiA9IHRydWU7XG5cbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gdGhpcy5tZXRob2Q7XG4gIGVyci51cmwgPSB0aGlzLnVybDtcblxuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vLyBUaGlzIG9ubHkgd2FybnMsIGJlY2F1c2UgdGhlIHJlcXVlc3QgaXMgc3RpbGwgbGlrZWx5IHRvIHdvcmtcblJlcXVlc3QucHJvdG90eXBlLmJ1ZmZlciA9IFJlcXVlc3QucHJvdG90eXBlLmNhID0gUmVxdWVzdC5wcm90b3R5cGUuYWdlbnQgPSBmdW5jdGlvbigpe1xuICBjb25zb2xlLndhcm4oXCJUaGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYnJvd3NlciB2ZXJzaW9uIG9mIHN1cGVyYWdlbnRcIik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gVGhpcyB0aHJvd3MsIGJlY2F1c2UgaXQgY2FuJ3Qgc2VuZC9yZWNlaXZlIGRhdGEgYXMgZXhwZWN0ZWRcblJlcXVlc3QucHJvdG90eXBlLnBpcGUgPSBSZXF1ZXN0LnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKCl7XG4gIHRocm93IEVycm9yKFwiU3RyZWFtaW5nIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYnJvd3NlciB2ZXJzaW9uIG9mIHN1cGVyYWdlbnRcIik7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgaG9zdCBvYmplY3QsXG4gKiB3ZSBkb24ndCB3YW50IHRvIHNlcmlhbGl6ZSB0aGVzZSA6KVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuUmVxdWVzdC5wcm90b3R5cGUuX2lzSG9zdCA9IGZ1bmN0aW9uIF9pc0hvc3Qob2JqKSB7XG4gIC8vIE5hdGl2ZSBvYmplY3RzIHN0cmluZ2lmeSB0byBbb2JqZWN0IEZpbGVdLCBbb2JqZWN0IEJsb2JdLCBbb2JqZWN0IEZvcm1EYXRhXSwgZXRjLlxuICByZXR1cm4gb2JqICYmICdvYmplY3QnID09PSB0eXBlb2Ygb2JqICYmICFBcnJheS5pc0FycmF5KG9iaikgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG4vKipcbiAqIEluaXRpYXRlIHJlcXVlc3QsIGludm9raW5nIGNhbGxiYWNrIGBmbihyZXMpYFxuICogd2l0aCBhbiBpbnN0YW5jZW9mIGBSZXNwb25zZWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihmbil7XG4gIGlmICh0aGlzLl9lbmRDYWxsZWQpIHtcbiAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiAuZW5kKCkgd2FzIGNhbGxlZCB0d2ljZS4gVGhpcyBpcyBub3Qgc3VwcG9ydGVkIGluIHN1cGVyYWdlbnRcIik7XG4gIH1cbiAgdGhpcy5fZW5kQ2FsbGVkID0gdHJ1ZTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgLy8gcXVlcnlzdHJpbmdcbiAgdGhpcy5fZmluYWxpemVRdWVyeVN0cmluZygpO1xuXG4gIHJldHVybiB0aGlzLl9lbmQoKTtcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLl9lbmQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgeGhyID0gKHRoaXMueGhyID0gcmVxdWVzdC5nZXRYSFIoKSk7XG4gIHZhciBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICB0aGlzLl9zZXRUaW1lb3V0cygpO1xuXG4gIC8vIHN0YXRlIGNoYW5nZVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcmVhZHlTdGF0ZSA9IHhoci5yZWFkeVN0YXRlO1xuICAgIGlmIChyZWFkeVN0YXRlID49IDIgJiYgc2VsZi5fcmVzcG9uc2VUaW1lb3V0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChzZWxmLl9yZXNwb25zZVRpbWVvdXRUaW1lcik7XG4gICAgfVxuICAgIGlmICg0ICE9IHJlYWR5U3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbiBJRTksIHJlYWRzIHRvIGFueSBwcm9wZXJ0eSAoZS5nLiBzdGF0dXMpIG9mZiBvZiBhbiBhYm9ydGVkIFhIUiB3aWxsXG4gICAgLy8gcmVzdWx0IGluIHRoZSBlcnJvciBcIkNvdWxkIG5vdCBjb21wbGV0ZSB0aGUgb3BlcmF0aW9uIGR1ZSB0byBlcnJvciBjMDBjMDIzZlwiXG4gICAgdmFyIHN0YXR1cztcbiAgICB0cnkgeyBzdGF0dXMgPSB4aHIuc3RhdHVzIH0gY2F0Y2goZSkgeyBzdGF0dXMgPSAwOyB9XG5cbiAgICBpZiAoIXN0YXR1cykge1xuICAgICAgaWYgKHNlbGYudGltZWRvdXQgfHwgc2VsZi5fYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgcmV0dXJuIHNlbGYuY3Jvc3NEb21haW5FcnJvcigpO1xuICAgIH1cbiAgICBzZWxmLmVtaXQoJ2VuZCcpO1xuICB9O1xuXG4gIC8vIHByb2dyZXNzXG4gIHZhciBoYW5kbGVQcm9ncmVzcyA9IGZ1bmN0aW9uKGRpcmVjdGlvbiwgZSkge1xuICAgIGlmIChlLnRvdGFsID4gMCkge1xuICAgICAgZS5wZXJjZW50ID0gZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwO1xuICAgIH1cbiAgICBlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICBzZWxmLmVtaXQoJ3Byb2dyZXNzJywgZSk7XG4gIH07XG4gIGlmICh0aGlzLmhhc0xpc3RlbmVycygncHJvZ3Jlc3MnKSkge1xuICAgIHRyeSB7XG4gICAgICB4aHIub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzLmJpbmQobnVsbCwgJ2Rvd25sb2FkJyk7XG4gICAgICBpZiAoeGhyLnVwbG9hZCkge1xuICAgICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcy5iaW5kKG51bGwsICd1cGxvYWQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIC8vIEFjY2Vzc2luZyB4aHIudXBsb2FkIGZhaWxzIGluIElFIGZyb20gYSB3ZWIgd29ya2VyLCBzbyBqdXN0IHByZXRlbmQgaXQgZG9lc24ndCBleGlzdC5cbiAgICAgIC8vIFJlcG9ydGVkIGhlcmU6XG4gICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzgzNzI0NS94bWxodHRwcmVxdWVzdC11cGxvYWQtdGhyb3dzLWludmFsaWQtYXJndW1lbnQtd2hlbi11c2VkLWZyb20td2ViLXdvcmtlci1jb250ZXh0XG4gICAgfVxuICB9XG5cbiAgLy8gaW5pdGlhdGUgcmVxdWVzdFxuICB0cnkge1xuICAgIGlmICh0aGlzLnVzZXJuYW1lICYmIHRoaXMucGFzc3dvcmQpIHtcbiAgICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSwgdGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBzZWUgIzExNDlcbiAgICByZXR1cm4gdGhpcy5jYWxsYmFjayhlcnIpO1xuICB9XG5cbiAgLy8gQ09SU1xuICBpZiAodGhpcy5fd2l0aENyZWRlbnRpYWxzKSB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAvLyBib2R5XG4gIGlmICghdGhpcy5fZm9ybURhdGEgJiYgJ0dFVCcgIT0gdGhpcy5tZXRob2QgJiYgJ0hFQUQnICE9IHRoaXMubWV0aG9kICYmICdzdHJpbmcnICE9IHR5cGVvZiBkYXRhICYmICF0aGlzLl9pc0hvc3QoZGF0YSkpIHtcbiAgICAvLyBzZXJpYWxpemUgc3R1ZmZcbiAgICB2YXIgY29udGVudFR5cGUgPSB0aGlzLl9oZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuICAgIHZhciBzZXJpYWxpemUgPSB0aGlzLl9zZXJpYWxpemVyIHx8IHJlcXVlc3Quc2VyaWFsaXplW2NvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKVswXSA6ICcnXTtcbiAgICBpZiAoIXNlcmlhbGl6ZSAmJiBpc0pTT04oY29udGVudFR5cGUpKSB7XG4gICAgICBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24vanNvbiddO1xuICAgIH1cbiAgICBpZiAoc2VyaWFsaXplKSBkYXRhID0gc2VyaWFsaXplKGRhdGEpO1xuICB9XG5cbiAgLy8gc2V0IGhlYWRlciBmaWVsZHNcbiAgZm9yICh2YXIgZmllbGQgaW4gdGhpcy5oZWFkZXIpIHtcbiAgICBpZiAobnVsbCA9PSB0aGlzLmhlYWRlcltmaWVsZF0pIGNvbnRpbnVlO1xuXG4gICAgaWYgKHRoaXMuaGVhZGVyLmhhc093blByb3BlcnR5KGZpZWxkKSlcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGZpZWxkLCB0aGlzLmhlYWRlcltmaWVsZF0pO1xuICB9XG5cbiAgaWYgKHRoaXMuX3Jlc3BvbnNlVHlwZSkge1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSB0aGlzLl9yZXNwb25zZVR5cGU7XG4gIH1cblxuICAvLyBzZW5kIHN0dWZmXG4gIHRoaXMuZW1pdCgncmVxdWVzdCcsIHRoaXMpO1xuXG4gIC8vIElFMTEgeGhyLnNlbmQodW5kZWZpbmVkKSBzZW5kcyAndW5kZWZpbmVkJyBzdHJpbmcgYXMgUE9TVCBwYXlsb2FkIChpbnN0ZWFkIG9mIG5vdGhpbmcpXG4gIC8vIFdlIG5lZWQgbnVsbCBoZXJlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gIHhoci5zZW5kKHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJyA/IGRhdGEgOiBudWxsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5yZXF1ZXN0LmFnZW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgQWdlbnQoKTtcbn07XG5cbltcIkdFVFwiLCBcIlBPU1RcIiwgXCJPUFRJT05TXCIsIFwiUEFUQ0hcIiwgXCJQVVRcIiwgXCJERUxFVEVcIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgQWdlbnQucHJvdG90eXBlW21ldGhvZC50b0xvd2VyQ2FzZSgpXSA9IGZ1bmN0aW9uKHVybCwgZm4pIHtcbiAgICB2YXIgcmVxID0gbmV3IHJlcXVlc3QuUmVxdWVzdChtZXRob2QsIHVybCk7XG4gICAgdGhpcy5fc2V0RGVmYXVsdHMocmVxKTtcbiAgICBpZiAoZm4pIHtcbiAgICAgIHJlcS5lbmQoZm4pO1xuICAgIH1cbiAgICByZXR1cm4gcmVxO1xuICB9O1xufSk7XG5cbkFnZW50LnByb3RvdHlwZS5kZWwgPSBBZ2VudC5wcm90b3R5cGVbJ2RlbGV0ZSddO1xuXG4vKipcbiAqIEdFVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZ2V0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbikge1xuICB2YXIgcmVxID0gcmVxdWVzdCgnR0VUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIChmbiA9IGRhdGEpLCAoZGF0YSA9IG51bGwpO1xuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBIRUFEIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbikge1xuICB2YXIgcmVxID0gcmVxdWVzdCgnSEVBRCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSAoZm4gPSBkYXRhKSwgKGRhdGEgPSBudWxsKTtcbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogT1BUSU9OUyBxdWVyeSB0byBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3Qub3B0aW9ucyA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pIHtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ09QVElPTlMnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgKGZuID0gZGF0YSksIChkYXRhID0gbnVsbCk7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gW2RhdGFdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkZWwodXJsLCBkYXRhLCBmbikge1xuICB2YXIgcmVxID0gcmVxdWVzdCgnREVMRVRFJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIChmbiA9IGRhdGEpLCAoZGF0YSA9IG51bGwpO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59XG5cbnJlcXVlc3RbJ2RlbCddID0gZGVsO1xucmVxdWVzdFsnZGVsZXRlJ10gPSBkZWw7XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBbZGF0YV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucGF0Y2ggPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQQVRDSCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSAoZm4gPSBkYXRhKSwgKGRhdGEgPSBudWxsKTtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gW2RhdGFdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQT1NUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIChmbiA9IGRhdGEpLCAoZGF0YSA9IG51bGwpO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBVVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wdXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQVVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgKGZuID0gZGF0YSksIChkYXRhID0gbnVsbCk7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG51bGwgIT09IG9iaiAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgb2YgbWl4ZWQtaW4gZnVuY3Rpb25zIHNoYXJlZCBiZXR3ZWVuIG5vZGUgYW5kIGNsaWVudCBjb2RlXG4gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXMtb2JqZWN0Jyk7XG5cbi8qKlxuICogRXhwb3NlIGBSZXF1ZXN0QmFzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0QmFzZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0QmFzZWAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0QmFzZShvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59XG5cbi8qKlxuICogTWl4aW4gdGhlIHByb3RvdHlwZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gUmVxdWVzdEJhc2UucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBSZXF1ZXN0QmFzZS5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIENsZWFyIHByZXZpb3VzIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiBfY2xlYXJUaW1lb3V0KCl7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIGNsZWFyVGltZW91dCh0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lcik7XG4gIGRlbGV0ZSB0aGlzLl90aW1lcjtcbiAgZGVsZXRlIHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCByZXNwb25zZSBib2R5IHBhcnNlclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gY29udmVydCBpbmNvbWluZyBkYXRhIGludG8gcmVxdWVzdC5ib2R5XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gcGFyc2UoZm4pe1xuICB0aGlzLl9wYXJzZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBmb3JtYXQgb2YgYmluYXJ5IHJlc3BvbnNlIGJvZHkuXG4gKiBJbiBicm93c2VyIHZhbGlkIGZvcm1hdHMgYXJlICdibG9iJyBhbmQgJ2FycmF5YnVmZmVyJyxcbiAqIHdoaWNoIHJldHVybiBCbG9iIGFuZCBBcnJheUJ1ZmZlciwgcmVzcGVjdGl2ZWx5LlxuICpcbiAqIEluIE5vZGUgYWxsIHZhbHVlcyByZXN1bHQgaW4gQnVmZmVyLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnJlc3BvbnNlVHlwZSgnYmxvYicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5yZXNwb25zZVR5cGUgPSBmdW5jdGlvbih2YWwpe1xuICB0aGlzLl9yZXNwb25zZVR5cGUgPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPdmVycmlkZSBkZWZhdWx0IHJlcXVlc3QgYm9keSBzZXJpYWxpemVyXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB0byBjb252ZXJ0IGRhdGEgc2V0IHZpYSAuc2VuZCBvciAuYXR0YWNoIGludG8gcGF5bG9hZCB0byBzZW5kXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShmbil7XG4gIHRoaXMuX3NlcmlhbGl6ZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aW1lb3V0cy5cbiAqXG4gKiAtIHJlc3BvbnNlIHRpbWVvdXQgaXMgdGltZSBiZXR3ZWVuIHNlbmRpbmcgcmVxdWVzdCBhbmQgcmVjZWl2aW5nIHRoZSBmaXJzdCBieXRlIG9mIHRoZSByZXNwb25zZS4gSW5jbHVkZXMgRE5TIGFuZCBjb25uZWN0aW9uIHRpbWUuXG4gKiAtIGRlYWRsaW5lIGlzIHRoZSB0aW1lIGZyb20gc3RhcnQgb2YgdGhlIHJlcXVlc3QgdG8gcmVjZWl2aW5nIHJlc3BvbnNlIGJvZHkgaW4gZnVsbC4gSWYgdGhlIGRlYWRsaW5lIGlzIHRvbyBzaG9ydCBsYXJnZSBmaWxlcyBtYXkgbm90IGxvYWQgYXQgYWxsIG9uIHNsb3cgY29ubmVjdGlvbnMuXG4gKlxuICogVmFsdWUgb2YgMCBvciBmYWxzZSBtZWFucyBubyB0aW1lb3V0LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfE9iamVjdH0gbXMgb3Ige3Jlc3BvbnNlLCBkZWFkbGluZX1cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uIHRpbWVvdXQob3B0aW9ucyl7XG4gIGlmICghb3B0aW9ucyB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gb3B0aW9ucztcbiAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXQgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZm9yKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgIHN3aXRjaChvcHRpb24pIHtcbiAgICAgIGNhc2UgJ2RlYWRsaW5lJzpcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IG9wdGlvbnMuZGVhZGxpbmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXQgPSBvcHRpb25zLnJlc3BvbnNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVua25vd24gdGltZW91dCBvcHRpb25cIiwgb3B0aW9uKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBudW1iZXIgb2YgcmV0cnkgYXR0ZW1wdHMgb24gZXJyb3IuXG4gKlxuICogRmFpbGVkIHJlcXVlc3RzIHdpbGwgYmUgcmV0cmllZCAnY291bnQnIHRpbWVzIGlmIHRpbWVvdXQgb3IgZXJyLmNvZGUgPj0gNTAwLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5yZXRyeSA9IGZ1bmN0aW9uIHJldHJ5KGNvdW50LCBmbil7XG4gIC8vIERlZmF1bHQgdG8gMSBpZiBubyBjb3VudCBwYXNzZWQgb3IgdHJ1ZVxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCB8fCBjb3VudCA9PT0gdHJ1ZSkgY291bnQgPSAxO1xuICBpZiAoY291bnQgPD0gMCkgY291bnQgPSAwO1xuICB0aGlzLl9tYXhSZXRyaWVzID0gY291bnQ7XG4gIHRoaXMuX3JldHJpZXMgPSAwO1xuICB0aGlzLl9yZXRyeUNhbGxiYWNrID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxudmFyIEVSUk9SX0NPREVTID0gW1xuICAnRUNPTk5SRVNFVCcsXG4gICdFVElNRURPVVQnLFxuICAnRUFERFJJTkZPJyxcbiAgJ0VTT0NLRVRUSU1FRE9VVCdcbl07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgcmVxdWVzdCBzaG91bGQgYmUgcmV0cmllZC5cbiAqIChCb3Jyb3dlZCBmcm9tIHNlZ21lbnRpby9zdXBlcmFnZW50LXJldHJ5KVxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gW3Jlc11cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3Nob3VsZFJldHJ5ID0gZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgaWYgKCF0aGlzLl9tYXhSZXRyaWVzIHx8IHRoaXMuX3JldHJpZXMrKyA+PSB0aGlzLl9tYXhSZXRyaWVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0aGlzLl9yZXRyeUNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvdmVycmlkZSA9IHRoaXMuX3JldHJ5Q2FsbGJhY2soZXJyLCByZXMpO1xuICAgICAgaWYgKG92ZXJyaWRlID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChvdmVycmlkZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIHVuZGVmaW5lZCBmYWxscyBiYWNrIHRvIGRlZmF1bHRzXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAocmVzICYmIHJlcy5zdGF0dXMgJiYgcmVzLnN0YXR1cyA+PSA1MDAgJiYgcmVzLnN0YXR1cyAhPSA1MDEpIHJldHVybiB0cnVlO1xuICBpZiAoZXJyKSB7XG4gICAgaWYgKGVyci5jb2RlICYmIH5FUlJPUl9DT0RFUy5pbmRleE9mKGVyci5jb2RlKSkgcmV0dXJuIHRydWU7XG4gICAgLy8gU3VwZXJhZ2VudCB0aW1lb3V0XG4gICAgaWYgKGVyci50aW1lb3V0ICYmIGVyci5jb2RlID09ICdFQ09OTkFCT1JURUQnKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZXJyLmNyb3NzRG9tYWluKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJldHJ5IHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fcmV0cnkgPSBmdW5jdGlvbigpIHtcblxuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuXG4gIC8vIG5vZGVcbiAgaWYgKHRoaXMucmVxKSB7XG4gICAgdGhpcy5yZXEgPSBudWxsO1xuICAgIHRoaXMucmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gIH1cblxuICB0aGlzLl9hYm9ydGVkID0gZmFsc2U7XG4gIHRoaXMudGltZWRvdXQgPSBmYWxzZTtcblxuICByZXR1cm4gdGhpcy5fZW5kKCk7XG59O1xuXG4vKipcbiAqIFByb21pc2Ugc3VwcG9ydFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZWplY3RdXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gdGhlbihyZXNvbHZlLCByZWplY3QpIHtcbiAgaWYgKCF0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5fZW5kQ2FsbGVkKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiBzdXBlcmFnZW50IHJlcXVlc3Qgd2FzIHNlbnQgdHdpY2UsIGJlY2F1c2UgYm90aCAuZW5kKCkgYW5kIC50aGVuKCkgd2VyZSBjYWxsZWQuIE5ldmVyIGNhbGwgLmVuZCgpIGlmIHlvdSB1c2UgcHJvbWlzZXNcIik7XG4gICAgfVxuICAgIHRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24oaW5uZXJSZXNvbHZlLCBpbm5lclJlamVjdCkge1xuICAgICAgc2VsZi5lbmQoZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgICAgaWYgKGVycikgaW5uZXJSZWplY3QoZXJyKTtcbiAgICAgICAgZWxzZSBpbm5lclJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBmdW5jdGlvbihjYikge1xuICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgY2IpO1xufTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmbikge1xuICBmbih0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUub2sgPSBmdW5jdGlvbihjYikge1xuICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNiKSB0aHJvdyBFcnJvcihcIkNhbGxiYWNrIHJlcXVpcmVkXCIpO1xuICB0aGlzLl9va0NhbGxiYWNrID0gY2I7XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9pc1Jlc3BvbnNlT0sgPSBmdW5jdGlvbihyZXMpIHtcbiAgaWYgKCFyZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5fb2tDYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLl9va0NhbGxiYWNrKHJlcyk7XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMDtcbn07XG5cbi8qKlxuICogR2V0IHJlcXVlc3QgaGVhZGVyIGBmaWVsZGAuXG4gKiBDYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqIFRoaXMgaXMgYSBkZXByZWNhdGVkIGludGVybmFsIEFQSS4gVXNlIGAuZ2V0KGZpZWxkKWAgaW5zdGVhZC5cbiAqXG4gKiAoZ2V0SGVhZGVyIGlzIG5vIGxvbmdlciB1c2VkIGludGVybmFsbHkgYnkgdGhlIHN1cGVyYWdlbnQgY29kZSBiYXNlKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKiBAZGVwcmVjYXRlZFxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXRIZWFkZXIgPSBSZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oZmllbGQsIHZhbCl7XG4gIGlmIChpc09iamVjdChmaWVsZCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGhlYWRlciBgZmllbGRgLlxuICogQ2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnVuc2V0KCdVc2VyLUFnZW50JylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3RcbiAqIGZvciBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCh7IGZvbzogJ2JhcicsIGJhejogJ3F1eCcgfSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZXxCdWZmZXJ8ZnMuUmVhZFN0cmVhbX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xuICAvLyBuYW1lIHNob3VsZCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LlxuICBpZiAobnVsbCA9PT0gbmFtZSB8fCB1bmRlZmluZWQgPT09IG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJy5maWVsZChuYW1lLCB2YWwpIG5hbWUgY2FuIG5vdCBiZSBlbXB0eScpO1xuICB9XG5cbiAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiLmZpZWxkKCkgY2FuJ3QgYmUgdXNlZCBpZiAuc2VuZCgpIGlzIHVzZWQuIFBsZWFzZSB1c2Ugb25seSAuc2VuZCgpIG9yIG9ubHkgLmZpZWxkKCkgJiAuYXR0YWNoKClcIik7XG4gIH1cblxuICBpZiAoaXNPYmplY3QobmFtZSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbmFtZSkge1xuICAgICAgdGhpcy5maWVsZChrZXksIG5hbWVba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIGZvciAodmFyIGkgaW4gdmFsKSB7XG4gICAgICB0aGlzLmZpZWxkKG5hbWUsIHZhbFtpXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdmFsIHNob3VsZCBiZSBkZWZpbmVkIG5vd1xuICBpZiAobnVsbCA9PT0gdmFsIHx8IHVuZGVmaW5lZCA9PT0gdmFsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCcuZmllbGQobmFtZSwgdmFsKSB2YWwgY2FuIG5vdCBiZSBlbXB0eScpO1xuICB9XG4gIGlmICgnYm9vbGVhbicgPT09IHR5cGVvZiB2YWwpIHtcbiAgICB2YWwgPSAnJyArIHZhbDtcbiAgfVxuICB0aGlzLl9nZXRGb3JtRGF0YSgpLmFwcGVuZChuYW1lLCB2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWJvcnQgdGhlIHJlcXVlc3QsIGFuZCBjbGVhciBwb3RlbnRpYWwgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuX2Fib3J0ZWQpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLl9hYm9ydGVkID0gdHJ1ZTtcbiAgdGhpcy54aHIgJiYgdGhpcy54aHIuYWJvcnQoKTsgLy8gYnJvd3NlclxuICB0aGlzLnJlcSAmJiB0aGlzLnJlcS5hYm9ydCgpOyAvLyBub2RlXG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2F1dGggPSBmdW5jdGlvbih1c2VyLCBwYXNzLCBvcHRpb25zLCBiYXNlNjRFbmNvZGVyKSB7XG4gIHN3aXRjaCAob3B0aW9ucy50eXBlKSB7XG4gICAgY2FzZSAnYmFzaWMnOlxuICAgICAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIGJhc2U2NEVuY29kZXIodXNlciArICc6JyArIHBhc3MpKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYXV0byc6XG4gICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcjtcbiAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdiZWFyZXInOiAvLyB1c2FnZSB3b3VsZCBiZSAuYXV0aChhY2Nlc3NUb2tlbiwgeyB0eXBlOiAnYmVhcmVyJyB9KVxuICAgICAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB1c2VyKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbmFibGUgdHJhbnNtaXNzaW9uIG9mIGNvb2tpZXMgd2l0aCB4LWRvbWFpbiByZXF1ZXN0cy5cbiAqXG4gKiBOb3RlIHRoYXQgZm9yIHRoaXMgdG8gd29yayB0aGUgb3JpZ2luIG11c3Qgbm90IGJlXG4gKiB1c2luZyBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiIHdpdGggYSB3aWxkY2FyZCxcbiAqIGFuZCBhbHNvIG11c3Qgc2V0IFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIlxuICogdG8gXCJ0cnVlXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24ob24pIHtcbiAgLy8gVGhpcyBpcyBicm93c2VyLW9ubHkgZnVuY3Rpb25hbGl0eS4gTm9kZSBzaWRlIGlzIG5vLW9wLlxuICBpZiAob24gPT0gdW5kZWZpbmVkKSBvbiA9IHRydWU7XG4gIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IG9uO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtYXggcmVkaXJlY3RzIHRvIGBuYC4gRG9lcyBub3RpbmcgaW4gYnJvd3NlciBYSFIgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUucmVkaXJlY3RzID0gZnVuY3Rpb24obil7XG4gIHRoaXMuX21heFJlZGlyZWN0cyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBNYXhpbXVtIHNpemUgb2YgYnVmZmVyZWQgcmVzcG9uc2UgYm9keSwgaW4gYnl0ZXMuIENvdW50cyB1bmNvbXByZXNzZWQgc2l6ZS5cbiAqIERlZmF1bHQgMjAwTUIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUubWF4UmVzcG9uc2VTaXplID0gZnVuY3Rpb24obil7XG4gIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIG4pIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50XCIpO1xuICB9XG4gIHRoaXMuX21heFJlc3BvbnNlU2l6ZSA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHRvIGEgcGxhaW4gamF2YXNjcmlwdCBvYmplY3QgKG5vdCBKU09OIHN0cmluZykgb2Ygc2NhbGFyIHByb3BlcnRpZXMuXG4gKiBOb3RlIGFzIHRoaXMgbWV0aG9kIGlzIGRlc2lnbmVkIHRvIHJldHVybiBhIHVzZWZ1bCBub24tdGhpcyB2YWx1ZSxcbiAqIGl0IGNhbm5vdCBiZSBjaGFpbmVkLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gZGVzY3JpYmluZyBtZXRob2QsIHVybCwgYW5kIGRhdGEgb2YgdGhpcyByZXF1ZXN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6IHRoaXMubWV0aG9kLFxuICAgIHVybDogdGhpcy51cmwsXG4gICAgZGF0YTogdGhpcy5fZGF0YSxcbiAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXIsXG4gIH07XG59O1xuXG4vKipcbiAqIFNlbmQgYGRhdGFgIGFzIHRoZSByZXF1ZXN0IGJvZHksIGRlZmF1bHRpbmcgdGhlIGAudHlwZSgpYCB0byBcImpzb25cIiB3aGVuXG4gKiBhbiBvYmplY3QgaXMgZ2l2ZW4uXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICAgLy8gbWFudWFsIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnanNvbicpXG4gKiAgICAgICAgIC5zZW5kKCd7XCJuYW1lXCI6XCJ0alwifScpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoJ25hbWU9dGonKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBkZWZhdWx0cyB0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoJ25hbWU9dG9iaScpXG4gKiAgICAgICAgLnNlbmQoJ3NwZWNpZXM9ZmVycmV0JylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSl7XG4gIHZhciBpc09iaiA9IGlzT2JqZWN0KGRhdGEpO1xuICB2YXIgdHlwZSA9IHRoaXMuX2hlYWRlclsnY29udGVudC10eXBlJ107XG5cbiAgaWYgKHRoaXMuX2Zvcm1EYXRhKSB7XG4gICAgY29uc29sZS5lcnJvcihcIi5zZW5kKCkgY2FuJ3QgYmUgdXNlZCBpZiAuYXR0YWNoKCkgb3IgLmZpZWxkKCkgaXMgdXNlZC4gUGxlYXNlIHVzZSBvbmx5IC5zZW5kKCkgb3Igb25seSAuZmllbGQoKSAmIC5hdHRhY2goKVwiKTtcbiAgfVxuXG4gIGlmIChpc09iaiAmJiAhdGhpcy5fZGF0YSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICB0aGlzLl9kYXRhID0gW107XG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNIb3N0KGRhdGEpKSB7XG4gICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgfVxuICB9IGVsc2UgaWYgKGRhdGEgJiYgdGhpcy5fZGF0YSAmJiB0aGlzLl9pc0hvc3QodGhpcy5fZGF0YSkpIHtcbiAgICB0aHJvdyBFcnJvcihcIkNhbid0IG1lcmdlIHRoZXNlIHNlbmQgY2FsbHNcIik7XG4gIH1cblxuICAvLyBtZXJnZVxuICBpZiAoaXNPYmogJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIC8vIGRlZmF1bHQgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2Zvcm0nKTtcbiAgICB0eXBlID0gdGhpcy5faGVhZGVyWydjb250ZW50LXR5cGUnXTtcbiAgICBpZiAoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPT0gdHlwZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGFcbiAgICAgICAgPyB0aGlzLl9kYXRhICsgJyYnICsgZGF0YVxuICAgICAgICA6IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAodGhpcy5fZGF0YSB8fCAnJykgKyBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICghaXNPYmogfHwgdGhpcy5faXNIb3N0KGRhdGEpKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBkZWZhdWx0IHRvIGpzb25cbiAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2pzb24nKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNvcnQgYHF1ZXJ5c3RyaW5nYCBieSB0aGUgc29ydCBmdW5jdGlvblxuICpcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBkZWZhdWx0IG9yZGVyXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3VzZXInKVxuICogICAgICAgICAucXVlcnkoJ25hbWU9TmljaycpXG4gKiAgICAgICAgIC5xdWVyeSgnc2VhcmNoPU1hbm55JylcbiAqICAgICAgICAgLnNvcnRRdWVyeSgpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gY3VzdG9taXplZCBzb3J0IGZ1bmN0aW9uXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3VzZXInKVxuICogICAgICAgICAucXVlcnkoJ25hbWU9TmljaycpXG4gKiAgICAgICAgIC5xdWVyeSgnc2VhcmNoPU1hbm55JylcbiAqICAgICAgICAgLnNvcnRRdWVyeShmdW5jdGlvbihhLCBiKXtcbiAqICAgICAgICAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAqICAgICAgICAgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc29ydFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5zb3J0UXVlcnkgPSBmdW5jdGlvbihzb3J0KSB7XG4gIC8vIF9zb3J0IGRlZmF1bHQgdG8gdHJ1ZSBidXQgb3RoZXJ3aXNlIGNhbiBiZSBhIGZ1bmN0aW9uIG9yIGJvb2xlYW5cbiAgdGhpcy5fc29ydCA9IHR5cGVvZiBzb3J0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBzb3J0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ29tcG9zZSBxdWVyeXN0cmluZyB0byBhcHBlbmQgdG8gcmVxLnVybFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2ZpbmFsaXplUXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpe1xuICB2YXIgcXVlcnkgPSB0aGlzLl9xdWVyeS5qb2luKCcmJyk7XG4gIGlmIChxdWVyeSkge1xuICAgIHRoaXMudXJsICs9ICh0aGlzLnVybC5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JykgKyBxdWVyeTtcbiAgfVxuICB0aGlzLl9xdWVyeS5sZW5ndGggPSAwOyAvLyBNYWtlcyB0aGUgY2FsbCBpZGVtcG90ZW50XG5cbiAgaWYgKHRoaXMuX3NvcnQpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnVybC5pbmRleE9mKCc/Jyk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHZhciBxdWVyeUFyciA9IHRoaXMudXJsLnN1YnN0cmluZyhpbmRleCArIDEpLnNwbGl0KCcmJyk7XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXMuX3NvcnQpIHtcbiAgICAgICAgcXVlcnlBcnIuc29ydCh0aGlzLl9zb3J0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXJ5QXJyLnNvcnQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gdGhpcy51cmwuc3Vic3RyaW5nKDAsIGluZGV4KSArICc/JyArIHF1ZXJ5QXJyLmpvaW4oJyYnKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0IG9ubHlcblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fYXBwZW5kUXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpIHtjb25zb2xlLnRyYWNlKFwiVW5zdXBwb3J0ZWRcIik7fVxuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHRpbWVvdXQgZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl90aW1lb3V0RXJyb3IgPSBmdW5jdGlvbihyZWFzb24sIHRpbWVvdXQsIGVycm5vKXtcbiAgaWYgKHRoaXMuX2Fib3J0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGVyciA9IG5ldyBFcnJvcihyZWFzb24gKyB0aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyk7XG4gIGVyci50aW1lb3V0ID0gdGltZW91dDtcbiAgZXJyLmNvZGUgPSAnRUNPTk5BQk9SVEVEJztcbiAgZXJyLmVycm5vID0gZXJybm87XG4gIHRoaXMudGltZWRvdXQgPSB0cnVlO1xuICB0aGlzLmFib3J0KCk7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fc2V0VGltZW91dHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8vIGRlYWRsaW5lXG4gIGlmICh0aGlzLl90aW1lb3V0ICYmICF0aGlzLl90aW1lcikge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgc2VsZi5fdGltZW91dEVycm9yKCdUaW1lb3V0IG9mICcsIHNlbGYuX3RpbWVvdXQsICdFVElNRScpO1xuICAgIH0sIHRoaXMuX3RpbWVvdXQpO1xuICB9XG4gIC8vIHJlc3BvbnNlIHRpbWVvdXRcbiAgaWYgKHRoaXMuX3Jlc3BvbnNlVGltZW91dCAmJiAhdGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXIpIHtcbiAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYuX3RpbWVvdXRFcnJvcignUmVzcG9uc2UgdGltZW91dCBvZiAnLCBzZWxmLl9yZXNwb25zZVRpbWVvdXQsICdFVElNRURPVVQnKTtcbiAgICB9LCB0aGlzLl9yZXNwb25zZVRpbWVvdXQpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VCYXNlYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3BvbnNlQmFzZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXNwb25zZUJhc2VgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVzcG9uc2VCYXNlKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn1cblxuLyoqXG4gKiBNaXhpbiB0aGUgcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBSZXNwb25zZUJhc2UucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBSZXNwb25zZUJhc2UucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZUJhc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gIHJldHVybiB0aGlzLmhlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciByZWxhdGVkIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGAudHlwZWAgdGhlIGNvbnRlbnQgdHlwZSB3aXRob3V0IHBhcmFtc1xuICpcbiAqIEEgcmVzcG9uc2Ugb2YgXCJDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIlxuICogd2lsbCBwcm92aWRlIHlvdSB3aXRoIGEgYC50eXBlYCBvZiBcInRleHQvcGxhaW5cIi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZUJhc2UucHJvdG90eXBlLl9zZXRIZWFkZXJQcm9wZXJ0aWVzID0gZnVuY3Rpb24oaGVhZGVyKXtcbiAgICAvLyBUT0RPOiBtb2FyIVxuICAgIC8vIFRPRE86IG1ha2UgdGhpcyBhIHV0aWxcblxuICAgIC8vIGNvbnRlbnQtdHlwZVxuICAgIHZhciBjdCA9IGhlYWRlclsnY29udGVudC10eXBlJ10gfHwgJyc7XG4gICAgdGhpcy50eXBlID0gdXRpbHMudHlwZShjdCk7XG5cbiAgICAvLyBwYXJhbXNcbiAgICB2YXIgcGFyYW1zID0gdXRpbHMucGFyYW1zKGN0KTtcbiAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zKSB0aGlzW2tleV0gPSBwYXJhbXNba2V5XTtcblxuICAgIHRoaXMubGlua3MgPSB7fTtcblxuICAgIC8vIGxpbmtzXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGhlYWRlci5saW5rKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmtzID0gdXRpbHMucGFyc2VMaW5rcyhoZWFkZXIubGluayk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gaWdub3JlXG4gICAgfVxufTtcblxuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZUJhc2UucHJvdG90eXBlLl9zZXRTdGF0dXNQcm9wZXJ0aWVzID0gZnVuY3Rpb24oc3RhdHVzKXtcbiAgICB2YXIgdHlwZSA9IHN0YXR1cyAvIDEwMCB8IDA7XG5cbiAgICAvLyBzdGF0dXMgLyBjbGFzc1xuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzO1xuICAgIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XG5cbiAgICAvLyBiYXNpY3NcbiAgICB0aGlzLmluZm8gPSAxID09IHR5cGU7XG4gICAgdGhpcy5vayA9IDIgPT0gdHlwZTtcbiAgICB0aGlzLnJlZGlyZWN0ID0gMyA9PSB0eXBlO1xuICAgIHRoaXMuY2xpZW50RXJyb3IgPSA0ID09IHR5cGU7XG4gICAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcbiAgICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXG4gICAgICAgID8gdGhpcy50b0Vycm9yKClcbiAgICAgICAgOiBmYWxzZTtcblxuICAgIC8vIHN1Z2FyXG4gICAgdGhpcy5jcmVhdGVkID0gMjAxID09IHN0YXR1cztcbiAgICB0aGlzLmFjY2VwdGVkID0gMjAyID09IHN0YXR1cztcbiAgICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXM7XG4gICAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgICB0aGlzLnVuYXV0aG9yaXplZCA9IDQwMSA9PSBzdGF0dXM7XG4gICAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgICB0aGlzLmZvcmJpZGRlbiA9IDQwMyA9PSBzdGF0dXM7XG4gICAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG4gICAgdGhpcy51bnByb2Nlc3NhYmxlRW50aXR5ID0gNDIyID09IHN0YXR1cztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmV0dXJuIHRoZSBtaW1lIHR5cGUgZm9yIHRoZSBnaXZlbiBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnR5cGUgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnBhcmFtcyA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqOyAqLykucmVkdWNlKGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLyk7XG4gICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgdmFyIHZhbCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoa2V5ICYmIHZhbCkgb2JqW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBQYXJzZSBMaW5rIGhlYWRlciBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5wYXJzZUxpbmtzID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICosICovKS5yZWR1Y2UoZnVuY3Rpb24ob2JqLCBzdHIpe1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgvICo7ICovKTtcbiAgICB2YXIgdXJsID0gcGFydHNbMF0uc2xpY2UoMSwgLTEpO1xuICAgIHZhciByZWwgPSBwYXJ0c1sxXS5zcGxpdCgvICo9ICovKVsxXS5zbGljZSgxLCAtMSk7XG4gICAgb2JqW3JlbF0gPSB1cmw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBTdHJpcCBjb250ZW50IHJlbGF0ZWQgZmllbGRzIGZyb20gYGhlYWRlcmAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQHJldHVybiB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuY2xlYW5IZWFkZXIgPSBmdW5jdGlvbihoZWFkZXIsIGNoYW5nZXNPcmlnaW4pe1xuICBkZWxldGUgaGVhZGVyWydjb250ZW50LXR5cGUnXTtcbiAgZGVsZXRlIGhlYWRlclsnY29udGVudC1sZW5ndGgnXTtcbiAgZGVsZXRlIGhlYWRlclsndHJhbnNmZXItZW5jb2RpbmcnXTtcbiAgZGVsZXRlIGhlYWRlclsnaG9zdCddO1xuICAvLyBzZWN1aXJ0eVxuICBpZiAoY2hhbmdlc09yaWdpbikge1xuICAgIGRlbGV0ZSBoZWFkZXJbJ2F1dGhvcml6YXRpb24nXTtcbiAgICBkZWxldGUgaGVhZGVyWydjb29raWUnXTtcbiAgfVxuICByZXR1cm4gaGVhZGVyO1xufTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==