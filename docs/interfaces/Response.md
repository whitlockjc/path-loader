[path-loader](../README.md) / [Exports](../modules.md) / Response

# Interface: Response

## Hierarchy

- `Response`

  ↳ **`Response`**

## Table of contents

### Properties

- [accepted](Response.md#accepted)
- [badRequest](Response.md#badrequest)
- [body](Response.md#body)
- [charset](Response.md#charset)
- [clientError](Response.md#clienterror)
- [error](Response.md#error)
- [files](Response.md#files)
- [forbidden](Response.md#forbidden)
- [header](Response.md#header)
- [headers](Response.md#headers)
- [info](Response.md#info)
- [links](Response.md#links)
- [location](Response.md#location)
- [noContent](Response.md#nocontent)
- [notAcceptable](Response.md#notacceptable)
- [notFound](Response.md#notfound)
- [ok](Response.md#ok)
- [readable](Response.md#readable)
- [redirect](Response.md#redirect)
- [redirects](Response.md#redirects)
- [serverError](Response.md#servererror)
- [status](Response.md#status)
- [statusCode](Response.md#statuscode)
- [statusType](Response.md#statustype)
- [text](Response.md#text)
- [type](Response.md#type)
- [unauthorized](Response.md#unauthorized)
- [xhr](Response.md#xhr)

### Methods

- [[asyncIterator]](Response.md#[asynciterator])
- [addListener](Response.md#addlistener)
- [emit](Response.md#emit)
- [eventNames](Response.md#eventnames)
- [get](Response.md#get)
- [getMaxListeners](Response.md#getmaxlisteners)
- [isPaused](Response.md#ispaused)
- [listenerCount](Response.md#listenercount)
- [listeners](Response.md#listeners)
- [off](Response.md#off)
- [on](Response.md#on)
- [once](Response.md#once)
- [pause](Response.md#pause)
- [pipe](Response.md#pipe)
- [prependListener](Response.md#prependlistener)
- [prependOnceListener](Response.md#prependoncelistener)
- [rawListeners](Response.md#rawlisteners)
- [read](Response.md#read)
- [removeAllListeners](Response.md#removealllisteners)
- [removeListener](Response.md#removelistener)
- [resume](Response.md#resume)
- [setEncoding](Response.md#setencoding)
- [setMaxListeners](Response.md#setmaxlisteners)
- [unpipe](Response.md#unpipe)
- [unshift](Response.md#unshift)
- [wrap](Response.md#wrap)

## Properties

### accepted

• **accepted**: `boolean`

#### Inherited from

SuperAgentResponse.accepted

#### Defined in

node_modules/@types/superagent/index.d.ts:104

___

### badRequest

• **badRequest**: `boolean`

#### Inherited from

SuperAgentResponse.badRequest

#### Defined in

node_modules/@types/superagent/index.d.ts:105

___

### body

• **body**: `any`

#### Inherited from

SuperAgentResponse.body

#### Defined in

node_modules/@types/superagent/index.d.ts:106

___

### charset

• **charset**: `string`

#### Inherited from

SuperAgentResponse.charset

#### Defined in

node_modules/@types/superagent/index.d.ts:107

___

### clientError

• **clientError**: `boolean`

#### Inherited from

SuperAgentResponse.clientError

#### Defined in

node_modules/@types/superagent/index.d.ts:108

___

### error

• **error**: ``false`` \| `HTTPError`

#### Inherited from

SuperAgentResponse.error

#### Defined in

node_modules/@types/superagent/index.d.ts:109

___

### files

• **files**: `any`

#### Inherited from

SuperAgentResponse.files

#### Defined in

node_modules/@types/superagent/index.d.ts:110

___

### forbidden

• **forbidden**: `boolean`

#### Inherited from

SuperAgentResponse.forbidden

#### Defined in

node_modules/@types/superagent/index.d.ts:111

___

### header

• **header**: `any`

#### Inherited from

SuperAgentResponse.header

#### Defined in

node_modules/@types/superagent/index.d.ts:114

___

### headers

• **headers**: `any`

#### Inherited from

SuperAgentResponse.headers

#### Defined in

node_modules/@types/superagent/index.d.ts:115

___

### info

• **info**: `boolean`

#### Inherited from

SuperAgentResponse.info

#### Defined in

node_modules/@types/superagent/index.d.ts:116

___

### links

• **links**: `Record`<`string`, `string`\>

#### Inherited from

SuperAgentResponse.links

#### Defined in

node_modules/@types/superagent/index.d.ts:117

___

### location

• **location**: `string`

#### Defined in

[src/typedefs.ts:4](https://github.com/rkesters/path-loader/blob/621d5a0/src/typedefs.ts#L4)

___

### noContent

• **noContent**: `boolean`

#### Inherited from

SuperAgentResponse.noContent

#### Defined in

node_modules/@types/superagent/index.d.ts:118

___

### notAcceptable

• **notAcceptable**: `boolean`

#### Inherited from

SuperAgentResponse.notAcceptable

#### Defined in

node_modules/@types/superagent/index.d.ts:119

___

### notFound

• **notFound**: `boolean`

#### Inherited from

SuperAgentResponse.notFound

#### Defined in

node_modules/@types/superagent/index.d.ts:120

___

### ok

• **ok**: `boolean`

#### Inherited from

SuperAgentResponse.ok

#### Defined in

node_modules/@types/superagent/index.d.ts:121

___

### readable

• **readable**: `boolean`

#### Inherited from

SuperAgentResponse.readable

#### Defined in

node_modules/@types/node/globals.d.ts:201

___

### redirect

• **redirect**: `boolean`

#### Inherited from

SuperAgentResponse.redirect

#### Defined in

node_modules/@types/superagent/index.d.ts:122

___

### redirects

• **redirects**: `string`[]

#### Inherited from

SuperAgentResponse.redirects

#### Defined in

node_modules/@types/superagent/index.d.ts:131

___

### serverError

• **serverError**: `boolean`

#### Inherited from

SuperAgentResponse.serverError

#### Defined in

node_modules/@types/superagent/index.d.ts:123

___

### status

• **status**: `number`

#### Inherited from

SuperAgentResponse.status

#### Defined in

node_modules/@types/superagent/index.d.ts:124

___

### statusCode

• **statusCode**: `number`

#### Inherited from

SuperAgentResponse.statusCode

#### Defined in

node_modules/@types/superagent/index.d.ts:125

___

### statusType

• **statusType**: `number`

#### Inherited from

SuperAgentResponse.statusType

#### Defined in

node_modules/@types/superagent/index.d.ts:126

___

### text

• **text**: `string`

#### Inherited from

SuperAgentResponse.text

#### Defined in

node_modules/@types/superagent/index.d.ts:127

___

### type

• **type**: `string`

#### Inherited from

SuperAgentResponse.type

#### Defined in

node_modules/@types/superagent/index.d.ts:128

___

### unauthorized

• **unauthorized**: `boolean`

#### Inherited from

SuperAgentResponse.unauthorized

#### Defined in

node_modules/@types/superagent/index.d.ts:129

___

### xhr

• **xhr**: `any`

#### Inherited from

SuperAgentResponse.xhr

#### Defined in

node_modules/@types/superagent/index.d.ts:130

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`string` \| `Buffer`\>

#### Returns

`AsyncIterableIterator`<`string` \| `Buffer`\>

#### Inherited from

SuperAgentResponse.\_\_@asyncIterator@21271

#### Defined in

node_modules/@types/node/globals.d.ts:211

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Response`](Response.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.addListener

#### Defined in

node_modules/@types/node/events.d.ts:317

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

SuperAgentResponse.emit

#### Defined in

node_modules/@types/node/events.d.ts:573

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

SuperAgentResponse.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:632

___

### get

▸ **get**(`header`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |

#### Returns

`string`

#### Inherited from

SuperAgentResponse.get

#### Defined in

node_modules/@types/superagent/index.d.ts:112

▸ **get**(`header`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | ``"Set-Cookie"`` |

#### Returns

`string`[]

#### Inherited from

SuperAgentResponse.get

#### Defined in

node_modules/@types/superagent/index.d.ts:113

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

SuperAgentResponse.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:489

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SuperAgentResponse.isPaused

#### Defined in

node_modules/@types/node/globals.d.ts:206

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

SuperAgentResponse.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:579

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

SuperAgentResponse.listeners

#### Defined in

node_modules/@types/node/events.d.ts:502

___

### off

▸ **off**(`eventName`, `listener`): [`Response`](Response.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.off

#### Defined in

node_modules/@types/node/events.d.ts:462

___

### on

▸ **on**(`eventName`, `listener`): [`Response`](Response.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.on

#### Defined in

node_modules/@types/node/events.d.ts:348

___

### once

▸ **once**(`eventName`, `listener`): [`Response`](Response.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.once

#### Defined in

node_modules/@types/node/events.d.ts:377

___

### pause

▸ **pause**(): [`Response`](Response.md)

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.pause

#### Defined in

node_modules/@types/node/globals.d.ts:204

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `WritableStream`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

SuperAgentResponse.pipe

#### Defined in

node_modules/@types/node/globals.d.ts:207

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Response`](Response.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:597

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Response`](Response.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:613

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

SuperAgentResponse.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:532

___

### read

▸ **read**(`size?`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |

#### Returns

`string` \| `Buffer`

#### Inherited from

SuperAgentResponse.read

#### Defined in

node_modules/@types/node/globals.d.ts:202

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Response`](Response.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:473

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Response`](Response.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:457

___

### resume

▸ **resume**(): [`Response`](Response.md)

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.resume

#### Defined in

node_modules/@types/node/globals.d.ts:205

___

### setEncoding

▸ **setEncoding**(`encoding`): [`Response`](Response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.setEncoding

#### Defined in

node_modules/@types/node/globals.d.ts:203

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Response`](Response.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### unpipe

▸ **unpipe**(`destination?`): [`Response`](Response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | `WritableStream` |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.unpipe

#### Defined in

node_modules/@types/node/globals.d.ts:208

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `string` \| `Uint8Array` |
| `encoding?` | `BufferEncoding` |

#### Returns

`void`

#### Inherited from

SuperAgentResponse.unshift

#### Defined in

node_modules/@types/node/globals.d.ts:209

___

### wrap

▸ **wrap**(`oldStream`): [`Response`](Response.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | `ReadableStream` |

#### Returns

[`Response`](Response.md)

#### Inherited from

SuperAgentResponse.wrap

#### Defined in

node_modules/@types/node/globals.d.ts:210
