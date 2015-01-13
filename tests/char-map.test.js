// file: tests/char-map.test.js - created at 2015-01-13, 11:09
var should = require('should');
var charMap = require('../modules/char-map');

describe('charMap', function () {
  it('should be map ccedil', function () {
    charMap('ç').should.be.eql('&ccedil;');
  });

  it('should be map otilde', function () {
    charMap('õ').should.be.eql('&otilde;');
  });

  it('should be map iacute', function () {
    charMap('í').should.be.eql('&iacute;');
  });

  it('should be map eacute', function () {
    charMap('é').should.be.eql('&eacute;');
  });
  
  it('should be map atilde', function () {
    charMap('ã').should.be.eql('&atilde;');
  });

  it('should be map amp', function () {
    charMap('&').should.be.eql('&amp;');
  });
});
