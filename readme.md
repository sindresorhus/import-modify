# import-modify

> Modify the source of an imported module


## Install

```
$ npm install --save import-modify
```


## Usage

### Replace some text

```js
// greet.js
module.exports = () => {
	console.log('hello');
};
```

```js
const importModify = require('import-modify');

const greet = importModify('./greet', source => {
	return source.replace('hello', 'yo');
});

greet();
//=> 'yo'
```

### Expose a local variable

```js
// greet.js
const greet = () => {
	console.log('hello');
};
```

```js
const importModify = require('import-modify');

const greet = importModify('./greet', source => {
	return `${source}\nmodule.exports = greet;`;
});

greet();
//=> 'hello'
```


## API

### importModify(moduleId, modify)

#### moduleId

Type: `string`

Same as you would use in `require()`.

#### modify(source)

Type: `function`

Function where you modify the source and return the new one.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
