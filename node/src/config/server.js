import express from 'express';
import consign from 'consign';
import bodyparser from 'body-parser';
import validator from 'express-validator';

let app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.use(validator());
consign()
    .include('dist/routes')
    .then('dist/models')
    .into(app);

export default app;
