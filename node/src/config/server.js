import express from 'express';
import consign from 'consign';
import bodyparser from 'body-parser';
import validator from 'express-validator';
import morgan from 'morgan';
import { v1 as neo4j } from 'neo4j-driver';

let app = express();

const driver = new neo4j.driver(
	process.env.NEO4J_URI || 'bolt://localhost:7687',
	neo4j.auth.basic(
		process.env.NEO4J_USER || 'root',
		process.env.NEO4J_PASSWORD || 'root'));
const session = driver.session();
app['session'] = session;

app.use(bodyparser.urlencoded({ extended: true }));

app.use(morgan('tiny'));
app.use(validator());
consign()
	.include('dist/routes')
	.then('dist/models')
	.into(app);

export default app;
