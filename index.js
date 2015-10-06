'use strict';
var forEach = require('for-each');

module.exports = function (source, iterator, context, destination) {
	var isString = false;

	if (!destination) {
		isString = typeof source === 'string';
		destination = (isString || Array.isArray(source)) ? [] : {};
	}

	forEach(source, function (value, key, source) {
		destination[key] = iterator.call(this, value, key, source, destination);
	}, context);

	if (isString) {
		destination = destination.join('');
	}

	return destination;
};
