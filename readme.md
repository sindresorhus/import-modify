# require-modify [![Build Status](https://travis-ci.org/sindresorhus/require-modify.svg?branch=master)](https://travis-ci.org/sindresorhus/require-modify)
> Modify the source of a required module


## Install

```
$ npm install --save require-modify
```


## Usage

Replace some text.

```js
// greet.js
module.exports = () => {
	console.log('hello');
};
```

```js
const requireModify = require('require-modify');

const greet = requireModify('./greet', source => {
	return source.replace('hello', 'yo');
});

greet();
//=> 'yo'
```

## Example 2

Expose a local variable.

```js
// greet.js
const greet = () => {
	console.log('hello');
};
```

```js
const requireModify = require('require-modify');

const greet = requireModify('./greet', source => {
	return source + ';module.exports = greet;';
	// the leading semicolon is in case the user has
	// forgotten a semicolon on the last statement
});

greet();
//=> 'hello'
```


## API

### requireModify(moduleId, [callback])

#### moduleId

Type: `string`

Same as you would use in `require()`.

#### callback(source)

Type: `function`

Callback where you can modify the source and return the new one.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
