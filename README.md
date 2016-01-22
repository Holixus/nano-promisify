[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

# nano-promisify

Promisify callback-based function(s)

## Usage

### Converting a function

```js
var promisify = require('nano-promisify');

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

Only callback functions will be wrapped.

```js
var promisify = require('nano-promisify');

var fs = promisify(fs);

fs.readFile('./indes.js', 'utf8')
  .then(function (text) {
    console.log(text);
  })
  .catch(function (e) {
    console.error(e);
  });
```

[gitter-image]: https://badges.gitter.im/Holixus/nano-promisify.svg
[gitter-url]: https://gitter.im/Holixus/nano-promisify

[npm-image]: https://img.shields.io/npm/v/nano-promisify.svg
[npm-url]: https://npmjs.org/package/nano-promisify

[github-tag]: http://img.shields.io/github/tag/Holixus/nano-promisify.svg
[github-url]: https://github.com/Holixus/nano-promisify/tags

[travis-image]: https://travis-ci.org/Holixus/nano-promisify.svg?branch=master
[travis-url]: https://travis-ci.org/Holixus/nano-promisify

[coveralls-image]: https://img.shields.io/coveralls/Holixus/nano-promisify.svg
[coveralls-url]: https://coveralls.io/r/Holixus/nano-promisify

[david-image]: http://img.shields.io/david/Holixus/nano-promisify.svg
[david-url]: https://david-dm.org/Holixus/nano-promisify

[license-image]: http://img.shields.io/npm/l/nano-promisify.svg
[license-url]: LICENSE

[downloads-image]: http://img.shields.io/npm/dm/nano-promisify.svg
[downloads-url]: https://npmjs.org/package/nano-promisify
