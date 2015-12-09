# nanopromisify

Promisify callback-based function(s)

## Usage

### Converting a function

```js
var promisify = require('nanopromise');

var readFile = promisify(fs.readFile);

readFile('./indes.js', 'utf8')
	.then(function (text) {
		console.log(text);
	})
	.catch(function (e) {
		console.error(e);
	});
```

### Converting a library

```js
var promisify = require('nanopromise');

var fs = promisify(fs);

fs.readFile('./indes.js', 'utf8')
	.then(function (text) {
		console.log(text);
	})
	.catch(function (e) {
		console.error(e);
	});
```
