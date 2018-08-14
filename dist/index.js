'use strict';

var _server = require('./config/server.js');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _server2.default.listen(process.env.PORT || 8080, function () {
	console.log('Servidor online');
});