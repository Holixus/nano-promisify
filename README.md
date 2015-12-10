# nanopromisify

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Promisify callback-based function(s)

## Usage

### Converting a function

```js
var promisify = require('nanopromisify');

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
var promisify = require('nanopromisify');

var fs = promisify(fs);

fs.readFile('./indes.js', 'utf8')
  .then(function (text) {
    console.log(text);
  })
  .catch(function (e) {
    console.error(e);
  });
```

[gitter-image]: https://badges.gitter.im/Holixus/nanopromisify.png
[gitter-url]: https://gitter.im/Holixus/nanopromisify

[npm-image]: https://img.shields.io/npm/v/nanopromisify.svg?style=flat-square
[npm-url]: https://npmjs.org/package/nanopromisify

[github-tag]: http://img.shields.io/github/tag/Holixus/nanopromisify.svg?style=flat-square
[github-url]: https://github.com/Holixus/nanopromisify/tags

[travis-image]: https://travis-ci.org/Holixus/nanopromisify.svg?branch=master
[travis-url]: https://travis-ci.org/Holixus/nanopromisify

[coveralls-image]: https://img.shields.io/coveralls/Holixus/nanopromisify.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/Holixus/nanopromisify

[david-image]: http://img.shields.io/david/Holixus/nanopromisify.svg?style=flat-square
[david-url]: https://david-dm.org/Holixus/nanopromisify

[license-image]: http://img.shields.io/npm/l/nanopromisify.svg?style=flat-square
[license-url]: LICENSE

[downloads-image]: http://img.shields.io/npm/dm/nanopromisify.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/nanopromisify
