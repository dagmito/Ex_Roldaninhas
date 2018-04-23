var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.use(express.static('./app/views/style'));
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign({
    cwd: 'app',
    locale: 'pt-br',
    extensions: [ '.js', '.json', '.node' ],
    verbose: false
})
  .include('infra')
  .then('routes')
  .into(app);

module.exports = function () {
    return app;
};