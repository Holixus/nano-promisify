"use strict";

var Promise = require('nano-promise');

function promisify(fn) {
	return function () {
		var self = this,
		    args = Array.prototype.concat.apply([], arguments);
		return new Promise(function (res, rej) {
			args[args.length++] = function (err, data) {
				if (err)
					rej(err)
				else
					res(data);
			};
			fn.apply(self, args);
		});
	};
}

var is_callback_fn = /^\s*function\s+(?:\w+\s*)?\(\s*(?:[a-z0-9_$]+,\s*)*(?:callback_?|cb|done)\s*\)/;

module.exports = function (something) {
	switch (typeof something) {
	case 'function':
		return promisify(something);
	default:
		throw TypeError('not a object');
	case 'object':
	}
	var o = {};
	for (var id in something) {
		var f = something[id];
		o[id] = typeof f === 'function' && is_callback_fn.test(f.toString()) ?
			promisify(f) : f;
	}
	return o;
};
