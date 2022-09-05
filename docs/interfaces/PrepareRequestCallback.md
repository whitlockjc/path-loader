[path-loader](../README.md) / [Exports](../modules.md) / PrepareRequestCallback

# Interface: PrepareRequestCallback

## Callable

### PrepareRequestCallback

▸ **PrepareRequestCallback**(`req`, `callback`): `void`

Callback used to provide access to altering a remote request prior to the request being made.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `SuperAgentRequest` | The Superagent request object |
| `callback` | [`RequestCallback`](RequestCallback.md) | First callback |

#### Returns

`void`

#### Defined in

[src/typedefs.ts:46](https://github.com/rkesters/path-loader/blob/82c302a/src/typedefs.ts#L46)

### PrepareRequestCallback

▸ **PrepareRequestCallback**(`req`, `location`, `callback`): `void`

Callback used to provide access to altering a remote request prior to the request being made.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `SuperAgentRequest` | The Superagent request object |
| `location` | `string` | The location being retrieved |
| `callback` | [`RequestCallback`](RequestCallback.md) | First callback |

#### Returns

`void`

#### Defined in

[src/typedefs.ts:47](https://github.com/rkesters/path-loader/blob/82c302a/src/typedefs.ts#L47)

### PrepareRequestCallback

▸ **PrepareRequestCallback**(`req`, `location`, `callback?`): `void`

Callback used to provide access to altering a remote request prior to the request being made.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `SuperAgentRequest` | The Superagent request object |
| `location` | `string` \| [`RequestCallback`](RequestCallback.md) | The location being retrieved |
| `callback?` | [`RequestCallback`](RequestCallback.md) | First callback |

#### Returns

`void`

#### Defined in

[src/typedefs.ts:48](https://github.com/rkesters/path-loader/blob/82c302a/src/typedefs.ts#L48)
