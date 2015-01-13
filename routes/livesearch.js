// file: routes/livesearch.js - created at 2015-01-13, 10:43
var express = require('express');
var router = express.Router();
var middlewares = require('../middlewares');
var controllers = require('../controllers');

router.get('/suggestion', middlewares.suggestion, controllers.suggestion);
router.get('/highlight', middlewares.highlight, controllers.highlight);

module.exports = router;
