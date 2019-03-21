const express = require('express');
const app = express();
const Providers = require('./providers');

// Creating routes
app.use('/providers', Providers);

module.exports = app;