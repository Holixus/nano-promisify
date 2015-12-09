"use strict";

function promisify(fn) {
	return function () {
		var self = this,
		    args = arguments;
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
		var f = something[id], arg;
		if (typeof f !== 'function' || !((arg = /^\s*function\s+(?:\w+\s*)?\(\s*(?:[a-z0-9_$]+,\s*)*([^)]*)\s*\)/.exec(f.toString())))) {
			o[id] = f;
			continue;
		}
		var last = arg[1];
		if (last === 'callback' || last === 'callback_' || last === 'cb' || last === 'done')
			o[id] = promisify(f);
		else
			o[id] = f;
	}
	return o;
};
