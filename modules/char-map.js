// file: modules/char-map.js - created at 2015-01-13, 11:09
function charMapHandler(input) {
  var out = null;
  var keys = [
    'ç',
    'õ',
    'í',
    'é',
    'ã',
    '&',
  ];
  var values = [
    '&ccedil;',
    '&otilde;',
    '&iacute;',
    '&eacute;',
    '&atilde;',
    '&amp;',
  ];

  out = values[keys.indexOf(input)];

  return out;
}
module.exports = exports = charMapHandler;
