# require-modify [![Build Status](https://travis-ci.org/sindresorhus/require-modify.png?branch=master)](http://travis-ci.org/sindresorhus/require-modify)

> Modify the source of a required module


## Install

Install with [npm](https://npmjs.org/package/require-modify)

```
npm install --save require-modify
```


## Example

Replace some text.

```js
// greet.js
module.exports = function () {
	console.log('hello');
};
```

```js
var requireModify = require('require-modify');

var greet = requireModify('./greet', function (source) {
	return source.replace('hello', 'yo');
});

greet();
//=> yo
```

## Example 2

Expose a local variable.

```js
// greet.js
var greet = function () {
	console.log('hello');
};
```

```js
var requireModify = require('require-modify');

var greet = requireModify('./greet', function (source) {
	return source + ';module.exports = greet;';
	// the leading semicolon is in case the user have
	// forgotten a semicolon on the last statement
});

greet();
//=> hello
```


## API

### requireModify(moduleId, callback)

#### moduleId

*Required*  
Type: `String`

Same as you would use in `require()`.

#### callback(source)

Type: `Function`

Callback where you can modify the source and return the new one.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
