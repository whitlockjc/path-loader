[path-loader](README.md) / Exports

# path-loader

## Table of contents

### Functions

- [load](modules.md#load)

## Functions

### load

▸ **load**(`location`, `options?`): `Promise`<`string`\>

Loads a document at the provided location and returns a JavaScript object representation.

**`Example`**

```ts
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

**`Example`**

```ts
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

**`Example`**

```ts
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

**`Example`**

```ts
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | `string` | The location to the document |
| `options?` | `LoadOptions`<`string`\> | The loader options |

#### Returns

`Promise`<`string`\>

Always returns a promise even if there is a callback provided

#### Defined in

[index.ts:153](https://github.com/rkesters/path-loader/blob/51e33db/src/index.ts#L153)
