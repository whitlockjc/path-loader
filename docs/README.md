path-loader is a small library that exposes a consistent API for loading files locally and remotely over http/https
URLs.

## Installation

path-loader is available for both Node.js and the browser.  Installation instructions for each environment are below.

### Browser

path-loader binaries for the browser are available in the `dist/` directory:

* [path-loader.js](https://raw.github.com/whitlockjc/path-loader/master/dist/path-loader.js): _228kb_, full source  and source maps
* [path-loader-min.js](https://raw.github.com/whitlockjc/path-loader/master/dist/path-loader-min.js): _28kb_, minified, compressed and no sourcemap

### Node.js

Installation for Node.js applications can be done via [NPM][npm].

```
npm install path-loader --save
```

## API Documentation

The path-loader project's API documentation can be found here: https://github.com/whitlockjc/path-loader/blob/master/docs/API.md

## Dependencies

Below is the list of projects being used by path-loader and the purpose(s) they are used for:

* [native-promise-only][native-promise-only]: Used to shim in [Promises][promises] support
* [superagent][superagent]: AJAX for the browser and Node.js

[native-promise-only]: https://www.npmjs.com/package/native-promise-only
[npm]: https://www.npmjs.org/
[promises]: https://www.promisejs.org/
[superagent]: https://github.com/visionmedia/superagent
