const express = require('express');
const app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.use(express.static('./app/style'));
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = function () {
    return app;
};