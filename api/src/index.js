import app from './config/server.js';

let server = app.listen(app['config'].get('app:port'), () => {
	console.log('Servidor online');
});