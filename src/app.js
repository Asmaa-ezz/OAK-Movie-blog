const express = require('express');
const app = express();
const router = require('./controllers/index');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'..','public')));
app.use(router);

module.exports = app;

const path = require('path');
const expressHandlebars = require('express-handlebars');
const helpers = require('./views/helpers/index');
const controllers = require('./controllers/index');

app.set('views',path.join(__dirname,'views'));

app.set('view engine', 'hbs');

app.engine(
    "hbs",
    expressHandlebars({
        extname: "hbs",
        layoutsDir: path.join(__dirname, "views", "layouts"),
        partialsDir: path.join(__dirname, "views", "partials"),
        defaultLayout: "main"
    })
);
app.use(controllers);

module.exports = app;