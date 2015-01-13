// file: middlewares/suggestion.js - created at 2015-01-13, 10:56
function suggestionHandler(req, res, next) {
  var data = require('../data/mock.json').suggestions;
  var rQuery = new RegExp(req.query.q + '+', 'gi');
  var Iconv = require('iconv').Iconv;
  var iconv = new Iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE');

  res.locals.out = [];

  req.query.q = iconv.convert(req.query.q);

  function dataFilterHandler(item) {
    if (item.indexOf(req.query.q) > -1) {
      return item;
    }
  }
  res.locals.out = data.filter(dataFilterHandler);

  next();
}
module.exports = exports = suggestionHandler;
