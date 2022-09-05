[path-loader](../README.md) / [Exports](../modules.md) / LoadOptions

# Interface: LoadOptions<T\>

Options used when loading a path.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Table of contents

### Properties

- [encoding](LoadOptions.md#encoding)
- [method](LoadOptions.md#method)
- [prepareRequest](LoadOptions.md#preparerequest)
- [processContent](LoadOptions.md#processcontent)

## Properties

### encoding

• `Optional` **encoding**: `BufferEncoding`

The encoding to use when loading the file *(File loader only)*

#### Defined in

[src/typedefs.ts:24](https://github.com/rkesters/path-loader/blob/82c302a/src/typedefs.ts#L24)

___

### method

• `Optional` **method**: `string`

The HTTP method to use for the request *(HTTP loader only)*

#### Defined in

[src/typedefs.ts:28](https://github.com/rkesters/path-loader/blob/82c302a/src/typedefs.ts#L28)

___

### prepareRequest

• `Optional` **prepareRequest**: [`PrepareRequestCallback`](PrepareRequestCallback.md)

The callback used to prepare the request *(HTTP loader only)*

#### Defined in

[src/typedefs.ts:32](https://github.com/rkesters/path-loader/blob/82c302a/src/typedefs.ts#L32)

___

### processContent

• `Optional` **processContent**: [`ProcessResponseCallback`](../modules.md#processresponsecallback)<`T`\>

The callback used to process the response

#### Defined in

[src/typedefs.ts:36](https://github.com/rkesters/path-loader/blob/82c302a/src/typedefs.ts#L36)
