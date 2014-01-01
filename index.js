'use strict';
var SandboxedModule = require('sandboxed-module');

module.exports = function (moduleId, cb) {
	return cb ? SandboxedModule.require(moduleId, {
		sourceTransformers: {
			modify: cb
		}
	}) : require(moduleId);
};
