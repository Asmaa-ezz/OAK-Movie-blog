const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookie = require('cookie-parser');
const handlebars = require('express-handlebars');

const { unlockCookie } = require('./middlewares');
const router = require('./controllers/index');

// Middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookie());
app.use((req, res, next) => {
    unlockCookie(req, res, next);
});

// handlebar options
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',

}));


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
