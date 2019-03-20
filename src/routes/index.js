const express = require('express');
const app = express();
const Provider = require('./provider');

app.use('/provider', Provider);

module.exports = app;