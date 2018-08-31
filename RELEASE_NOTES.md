## Release Notes

### v1.0.8 (2018-08-31)

* Another fix for TypeScript declarations

### v1.0.7 (2018-08-26)

* Another fix for TypeScript declarations

### v1.0.6 (2018-08-08)

* Fix TypeScript declarations

### v1.0.5 (2018-08-04)

* Fix issue when working with buffered output _(Issue #17)_
* Update `superagent` to remove the NSP security exemption _(Issue #16)_

### v1.0.4 (2017-10-09)

* Updated dependencies to fix a security vulnerability _(Issue #14)_

### v1.0.3 (UNPUBLISHED)

_(This version was unpublished from NPM and will not be installable.)_

### v1.0.2 (2017-04-13)

* Updated dependencies to fix a security vulnerability _(Issue #11)_

### v1.0.1 (2015-12-21)

* Make response object passed to options.processContent consistent

### v1.0.0 (2015-12-21)

* Removed callback support for `#load` so the API is Promise-based only
* Updated `options.prepareRequest` and `options.processContent` to now be async *(Takes a `callback` argument)*
* Updated `options.processContent` to work for all loaders, not just HTTP-based ones

### v0.3.1 (2015-12-15)

* Remove unused `path` module from the browser builds)

### v0.3.0 (2015-12-15)

* Updated `#load` to take an `encoding` option *(Used only in Node.js and when loading a file)*
* Updated `#load` to take a `processContent` option *(Used only when loading a file from http/https)*

### v0.2.1 (2015-12-04)

* Updated `#load` to create an `Error` whenever attempting to load a resource whose scheme is unsupported

### v0.2.0 (2015-09-18)

* Update to work within service and web workers *(Ensure the environment identification works properly)* *(Issue #4)*

### v0.1.1 (2015-07-31)

* Minor release for smaller binaries

### v0.1.0 (2015-07-20)

* Updated included dependencies to latest version

### v0.0.2 (2015-05-12)

* Fix issue with NPM packaging that breaks Browserify downstream

### v0.0.1 (2015-05-12)

* Initial release
