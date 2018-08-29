const express = require('express');
const app = express();
const router = require('./controllers/index');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'..','public')));
app.use(router);

module.exports = app;