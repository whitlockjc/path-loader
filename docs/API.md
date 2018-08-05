## Functions

<dl>
<dt><a href="#load">load(location)</a> ⇒ <code>Promise</code></dt>
<dd><p>Loads a document at the provided location and returns a JavaScript object representation.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#LoadOptions">LoadOptions</a> : <code>object</code></dt>
<dd><p>Options used when loading a path.</p>
</dd>
<dt><a href="#PrepareRequestCallback">PrepareRequestCallback</a> : <code>function</code></dt>
<dd><p>Callback used to provide access to altering a remote request prior to the request being made.</p>
</dd>
<dt><a href="#ProcessResponseCallback">ProcessResponseCallback</a> ⇒ <code>*</code></dt>
<dd><p>Callback used to provide access to processing the raw response of the request being made. <em>(HTTP loader only)</em></p>
</dd>
</dl>

<a name="load"></a>

## load(location) ⇒ <code>Promise</code>
Loads a document at the provided location and returns a JavaScript object representation.

**Kind**: global function  
**Returns**: <code>Promise</code> - Always returns a promise even if there is a callback provided  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>[LoadOptions](#LoadOptions)</code> | The location to the document |

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
    prepareRequest: function (req, callback) {
      req.auth('my-username', 'my-password');
      callback(undefined, req);
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
**Example**  
```js
// Example loading a YAML file with options.processContent (Useful if you need information in the raw response)

PathLoader
  .load('/Users/not-you/projects/path-loader/.travis.yml', {
    processContent: function (res, callback) {
      callback(YAML.safeLoad(res.text));
    }
  })
  .then(function (document) {
    console.log('path-loader uses the', document.language, 'language.');
  }, function (err) {
    console.error(err.stack);
  });
```
<a name="LoadOptions"></a>

## LoadOptions : <code>object</code>
Options used when loading a path.

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| encoding | <code>string</code> | <code>&quot;&#x27;utf-8&#x27;&quot;</code> | The encoding to use when loading the file *(File loader only)* |
| method | <code>string</code> | <code>&quot;get&quot;</code> | The HTTP method to use for the request *(HTTP loader only)* |
| prepareRequest | <code>[PrepareRequestCallback](#PrepareRequestCallback)</code> |  | The callback used to prepare the request *(HTTP loader only)* |
| processContent | <code>[ProcessResponseCallback](#ProcessResponseCallback)</code> |  | The callback used to process the response |

<a name="PrepareRequestCallback"></a>

## PrepareRequestCallback : <code>function</code>
Callback used to provide access to altering a remote request prior to the request being made.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | The Superagent request object |
| location | <code>string</code> | The location being retrieved |
| callback | <code>function</code> | First callback |

<a name="ProcessResponseCallback"></a>

## ProcessResponseCallback ⇒ <code>\*</code>
Callback used to provide access to processing the raw response of the request being made. *(HTTP loader only)*

**Kind**: global typedef  
**Returns**: <code>\*</code> - the result of processing the responsexs  

| Param | Type | Description |
| --- | --- | --- |
| res | <code>object</code> | The Superagent response object *(For non-HTTP loaders, this object will be like the Superagent object in that it will have a `text` property whose value is the raw string value being processed.  This was done for consistency.)* |
| callback | <code>function</code> | Error-first callback |

