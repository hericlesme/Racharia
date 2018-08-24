import express from 'express';
import consign from 'consign';
import bodyparser from 'body-parser';
import validator from 'express-validator';
import morgan from 'morgan';
import { v1 as neo4j } from 'neo4j-driver';
import nconf from 'nconf';

let app = express();

nconf.argv().env();
const environment = nconf.get('NODE_ENV') || 'development';
nconf.file(environment, 'src/config/' + environment.toLowerCase() + '.json');
nconf.file('default', 'src/config/default.json');

app['config'] = nconf;

const driver = new neo4j.driver(
	nconf.get('db:host') + nconf.get('db:port'),
	neo4j.auth.basic(nconf.get('db:user'), nconf.get('db:password')));

app['session'] = driver.session();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(morgan('tiny'));
app.use(validator());
consign()
	.include('dist/routes')
	.then('dist/models')
	.into(app);

export default app;
