// file: middlewares/highlight.js - created at 2015-01-13, 11:20
function highlightHandler(req, res, next) {
  var data = require('../data/mock.json').highlights;
  var charMap = require('../modules/char-map');

  res.locals.out = [];

  function queryMapHandler(c) {
    if (charMap(c) !== undefined) {
      return charMap(c);
    } else {
      return c;
    } 
  }
  req.query.q = req.query.q.split('').map(queryMapHandler).join('');

  function itemMapHandler(item) {
    var self = this;

    if (item.indexOf(req.query.q) > -1) {
      res.locals.out.push(self.content);
    }
  }

  function dataFilterHandler(item, idx) {
    var isTail = (idx === data.length - 1);
    item.queries.map(itemMapHandler.bind({ content: item, isTail: isTail }));  
  }
  data.map(dataFilterHandler);

  next();
}
module.exports = exports = highlightHandler;
