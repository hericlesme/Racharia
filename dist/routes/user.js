'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (application) {
	application.get('/', function (req, res) {
		console.log(application);
	});
};