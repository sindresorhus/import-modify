'use strict';
var assert = require('assert');
var requireModify = require('./');

it('should modify the source of the required module', function () {
	var fixture = requireModify('./fixture', function (src) {
		return src + 'module.exports = \'unicorns\';';
	});

	assert.equal(fixture, 'unicorns');
});
