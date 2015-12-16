<a name="module_PathLoader"></a>
## PathLoader
Utility that provides a single API for loading the content of a path/URL.


* [PathLoader](#module_PathLoader)
    * _static_
        * [.load(location, [options], [done])](#module_PathLoader.load) ⇒ <code>Promise</code>
    * _inner_
        * [~ResultCallback](#module_PathLoader..ResultCallback) : <code>function</code>
        * [~PrepareRequestCallback](#module_PathLoader..PrepareRequestCallback) : <code>function</code>
        * [~ProcessResponseCallback](#module_PathLoader..ProcessResponseCallback) ⇒ <code>\*</code>

<a name="module_PathLoader.load"></a>
### PathLoader.load(location, [options], [done]) ⇒ <code>Promise</code>
Loads a document at the provided location and returns a JavaScript object representation.

**Kind**: static method of <code>[PathLoader](#module_PathLoader)</code>  
**Returns**: <code>Promise</code> - Always returns a promise even if there is a callback provided  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| location | <code>object</code> |  | The location to the document |
| [options] | <code>object</code> |  | The options |
| [options.method] | <code>string</code> | <code>&quot;get&quot;</code> | The HTTP method to use for the request *(HTTP loader only)* |
| [options.prepareRequest] | <code>[PrepareRequestCallback](#module_PathLoader..PrepareRequestCallback)</code> |  | The callback used to prepare the request *(HTTP loader only)* |
| [options.processContent] | <code>[ProcessResponseCallback](#module_PathLoader..ProcessResponseCallback)</code> |  | The callback used to process the response *(HTTP locaer only)* |
| [done] | <code>[ResultCallback](#module_PathLoader..ResultCallback)</code> |  | The result callback |

**Example**  
```js
// Example using callbacks

PathLoader
  .load('./package.json', function (err, document) {
    if (err) {
      console.error(err.stack);
    } else {
      try {
        document = JSON.parse(document)
        console.log(document.name + ' (' + document.version + '): ' + document.description);
      } catch (err2) {
        callback(err2);
      }
    });
```
**Example**  
```js
// Example using Promises

PathLoader
  .load('./package.json')
  .then(JSON.parse)
  .then(function (document) {
    console.log(document.name + ' (' + document.version + '): ' + document.description);
  }, function (err) {
    console.error(err.stack);
  });
```
**Example**  
```js
// Example using options.prepareRequest to provide authentication details for a remotely secure URL

PathLoader
  .load('https://api.github.com/repos/whitlockjc/path-loader', {
    prepareRequest: function (req) {
      req.auth('my-username', 'my-password')
    }
  })
  .then(JSON.parse)
  .then(function (document) {
    console.log(document.full_name + ': ' + document.description);
  }, function (err) {
    console.error(err.stack);
  });
```
**Example**  
```js
// Example loading a YAML file

PathLoader
  .load('/Users/not-you/projects/path-loader/.travis.yml')
  .then(YAML.safeLoad)
  .then(function (document) {
    console.log('path-loader uses the', document.language, 'language.');
  }, function (err) {
    console.error(err.stack);
  });
```
<a name="module_PathLoader..ResultCallback"></a>
### PathLoader~ResultCallback : <code>function</code>
Error-first callback.

**Kind**: inner typedef of <code>[PathLoader](#module_PathLoader)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [err] | <code>error</code> | The error if there is a problem |
| [result] | <code>string</code> | The result of the function |

<a name="module_PathLoader..PrepareRequestCallback"></a>
### PathLoader~PrepareRequestCallback : <code>function</code>
Callback used to provide access to altering a remote request prior to the request being made.

**Kind**: inner typedef of <code>[PathLoader](#module_PathLoader)</code>  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | The Superagent request object |
| location | <code>string</code> | The location being retrieved |

<a name="module_PathLoader..ProcessResponseCallback"></a>
### PathLoader~ProcessResponseCallback ⇒ <code>\*</code>
Callback used to provide access to processing the raw response of the request being made. *(HTTP loader only)*

**Kind**: inner typedef of <code>[PathLoader](#module_PathLoader)</code>  
**Returns**: <code>\*</code> - the result  

| Param | Type | Description |
| --- | --- | --- |
| res | <code>object</code> | The Superagent response object |
| callback | <code>function</code> | Error-first callback |

