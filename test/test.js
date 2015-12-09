var assert = require('assert'),
    promisify = require('../index.js');

var timer = function (ms, v) {
	return new Promise(function (resolve, reject) {
		var to = setTimeout(function () {
				resolve(v);
			}, ms);
		return { cancel: function () {
			clearTimeout(to);
		}};
	});
}

suite('promisify', function () {

	test('(function) ok', function (done) {
		var val = 'ogogog',
		    fn = function proc(a, callback) {
		    	timer(5, val).then(function (v) {
		    		callback(null, val);
		    	}, function (e) {
		    		callback(e);
		    	});
		    };

		var pfn = promisify(fn);
		pfn(val).then(function (v) {
			assert.strictEqual(val, v);
			done();
		}, function (e) {
			done(e);
		})
		.catch(done);
	});

	test('(function) throw', function (done) {
		var val = 'ogogog',
		    fn = function proc(a, callback) {
		    	timer(5, val).then(function (v) {
		    		callback(val);
		    	}, function (e) {
		    		callback(e);
		    	});
		    };

		var pfn = promisify(fn);
		pfn(val).then(function (v) {
			done(Error('fail'));
		}, function (e) {
			assert.strictEqual(val, e);
			done();
		})
		.catch(done);
	});

	test('(object) ok', function (done) {
		var val = 'ogogog',
		    o = {
		    	fncb: function proc(a, callback) {
		    		timer(5, val).then(function (v) {
		    			callback(null, val);
		    		}, function (e) {
		    			callback(e);
		    		});
		    	},
		    	data: 'ooo',
		    	fn: function _sync(a,b) {
		    	}
		    };

		var po = promisify(o);
		assert.strictEqual(o.data, po.data);
		assert.strictEqual(o.fn, po.fn);
		assert.notStrictEqual(o.fncb, po.fncb);

		po.fncb(val).then(function (v) {
			assert.strictEqual(val, v);
			done();
		}, function (e) {
			done(e);
		})
		.catch(done);
	});

	test('(object) throw', function (done) {
		var val = 'ogogog',
		    o = {
		    	fncb: function proc(a, callback) {
		    		timer(5, val).then(function (v) {
		    			callback(val);
		    		}, function (e) {
		    			callback(e);
		    		});
		    	},
		    	data: 'ooo',
		    	fn: function sync(a,b) {
		    	}
		    };

		var po = promisify(o);
		assert.strictEqual(o.data, po.data);
		assert.strictEqual(o.fn, po.fn);
		assert.notStrictEqual(o.fncb, po.fncb);

		po.fncb(val).then(function (v) {
			done(Error('fail'));
		}, function (e) {
			assert.strictEqual(val, e);
			done();
		})
		.catch(done);
	});

	test('(non-object)', function (done) {
		try {
			var po = promisify('ololo');
		} catch (e) {
			return done();
		}
		done(Error('fail'));
	});
});
