'use strict';
const SandboxedModule = require('sandboxed-module');

module.exports = (moduleId, modify) => SandboxedModule.require(moduleId, {
	sourceTransformers: {modify}
});
