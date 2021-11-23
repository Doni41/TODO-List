import express from 'express';
import * as path from 'path';

import * as bodyParser from 'body-parser';

import { getIndexPage } from './routes/routes';
import { postIndexPage } from './routes/routes';
import { getErrorPage } from './routes/error';



const getIndexRoute = getIndexPage;
const postIndexRoute = postIndexPage;
const errorController = getErrorPage;
const router = require('./routes/routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, "public")));


app.use(router);
app.use('/', errorController);

app.listen(3000);