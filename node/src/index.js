import app from './config/server.js';

let server = app.listen(process.env.PORT || 8080, function(){
	console.log('Servidor online');
});