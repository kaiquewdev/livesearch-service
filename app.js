// file: app.js - created at 2015-01-13, 10:43
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var routes = require('./routes');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/livesearch', routes.livesearch);

if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err);
  });
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
