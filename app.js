const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const cacheMiddleware = require('./shared/cache/middleware/cache-middleware');
const pharmaciesRouter = require('./pharmacies/controllers/pharmacies-controller');
const communesRouter = require('./communes/controllers/communes-controller');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cacheMiddleware);
app.use('/pharmacies', pharmaciesRouter);
app.use('/communes', communesRouter);

module.exports = app;
