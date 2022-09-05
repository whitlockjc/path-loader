[path-loader](README.md) / Exports

# path-loader

## Table of contents

### Interfaces

- [LoadCallback](interfaces/LoadCallback.md)
- [LoadOptions](interfaces/LoadOptions.md)
- [Loader](interfaces/Loader.md)
- [PrepareRequestCallback](interfaces/PrepareRequestCallback.md)
- [RequestCallback](interfaces/RequestCallback.md)
- [Response](interfaces/Response.md)
- [ResponseCallback](interfaces/ResponseCallback.md)

### Type Aliases

- [ProcessResponseCallback](modules.md#processresponsecallback)

### Functions

- [load](modules.md#load)

## Type Aliases

### ProcessResponseCallback

Ƭ **ProcessResponseCallback**<`T`\>: (`res`: [`Response`](interfaces/Response.md), `callback`: [`ResponseCallback`](interfaces/ResponseCallback.md)<`T`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (`res`, `callback`): `void`

Callback used to provide access to processing the raw response of the request being made. *(HTTP loader only)*

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `res` | [`Response`](interfaces/Response.md) | The Superagent response object *(For non-HTTP loaders, this object will be like the Superagent        object in that it will have a `text` property whose value is the raw string value being processed.  This was done        for consistency.  There will also be a `location` property containing the location of the path being loaded.)* |
| `callback` | [`ResponseCallback`](interfaces/ResponseCallback.md)<`T`\> | Error-first callback |

##### Returns

`void`

the result of processing the responses

#### Defined in

[src/typedefs.ts:64](https://github.com/rkesters/path-loader/blob/82c302a/src/typedefs.ts#L64)

## Functions

### load

▸ **load**<`T`\>(`location`, `options?`): `Promise`<`LoaderReturn`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `string` |
| `options` | [`LoadOptions`](interfaces/LoadOptions.md)<`LoaderReturn`<`T`\>\> |

#### Returns

`Promise`<`LoaderReturn`<`T`\>\>

#### Defined in

[src/index.ts:158](https://github.com/rkesters/path-loader/blob/82c302a/src/index.ts#L158)
