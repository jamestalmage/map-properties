# map-properties [![Build Status](https://travis-ci.org/jamestalmage/map-properties.svg?branch=master)](https://travis-ci.org/jamestalmage/map-properties)

> array.map equivalent that also works on Objects and Strings

## Install

```
$ npm install --save map-properties
```

## Usage

```js
var map = require('map-properties');

var mapFn = function(val) {
  return val + val.toUpperCase();
};

map(['a', 'b'], mapFn);
// => ['aA', 'bB']

map({a: 'b', c: 'd'}, mapFn);
// => {a: 'bB', c: 'dD'}

map('ab', mapFn);
// => 'aAbB'
```

## API

### mapProperties(source, mapFn[, context[, destination]])

##### source

*required*

Type: `string|object|array`

The source from which to map properties. 

##### mapFn

*required*

Type: `callback(propertyValue, propertyName, source, destination)`  

A callback that maps the properties to their new values. It is called with the following arguments:

  * `propertyValue` - the value of the property on the source object.
  * `propertyName` - the name (or index) of the property
  * `source` - the source object/array/string from which the properties are being mapped.
  * `destination` - the destination object on to which the properties are being mapped.

##### context

*optional*

If provided, will be the `this` value during execution of `mapFn`.

##### destination

*optional*

Explicitly provide the destination object, otherwise it will be created automatically.

```js
var destination = {};
map(source, mapFn, null, destination);
```
#### returns:

  `destination`

## License

MIT © [James Talmage](http://github.com/jamestalmage)
