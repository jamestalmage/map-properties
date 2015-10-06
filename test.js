'use strict';
var assert = require('assert');
var map = require('./');

it('should map properties', function () {
	var input = {
		bar: '-bar',
		baz: '-baz'
	};
	var ctx = {};
	var result = map(input, function (value, key, source) {
		assert.strictEqual(value, '-' + key, 'should be passed value and key');
		assert.strictEqual(this, ctx, 'this === ctx');
		assert.strictEqual(source, input, 'source === input');
		return 'foo' + value;
	}, ctx);

	assert.deepEqual(result, {
		bar: 'foo-bar',
		baz: 'foo-baz'
	});
});

it('can provide custom destination', function () {
	var input = {
		foo: 'bar',
		baz: 'quz'
	};

	var destination = {
		abc: 'def'
	};

	var result = map(input, function (value, key, source, dest) {
		assert.strictEqual(source, input, 'source === input');
		assert.strictEqual(dest, destination, 'dest === destination');
		return value.toUpperCase();
	}, null, destination);

	assert.strictEqual(result, destination);

	assert.deepEqual(destination, {
		foo: 'BAR',
		baz: 'QUZ',
		abc: 'def'
	});
});

it('handles array input', function () {
	var input = ['a', 'b', 'c'];

	function toUpper(val) {
		return val.toUpperCase();
	}

	var result = map(input, toUpper);

	assert(Array.isArray(result), 'is an array');

	assert.deepEqual(result, input.map(toUpper), 'behaves just like array.proto.map');
});

it('handles string inputs', function () {
	var input = 'abc';

	function toUpper(val) {
		return val + val.toUpperCase();
	}

	var result = map(input, toUpper);

	assert.strictEqual(result, 'aAbBcC');
});
