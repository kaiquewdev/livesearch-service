// file: tests/livesearch.test.js - created at 2015-01-13, 10:43
var should = require('should');
var superagent = require('superagent');
var app = require('../app');
var url = require('url');
var target = 'http://localhost:3000';

app.listen(3000);

describe('livesearch', function () {
  it('suggestion', function (done) {
    var expected = [
      "musica",
      "musicas",
      "musica inedita de raul",
    ];
    function endHandler(err, res) {
      should.not.exist(err);
      res.body.should.be.eql(expected);
      done();
    }
    superagent
      .get(url.resolve(target, '/api/livesearch/suggestion'))
      .query({ q: 'musica' })
      .end(endHandler);
  });

  it('highlight', function (done) {
    var expected = [
      /*{
         "title":"Pop &amp; Art",
         "url":"http://g1.globo.com/pop-arte/index.html",
         "logo":"http://s.glbimg.com/bu/i/fc/5fb2e18d-a47f-4bb8-9a7e-b66871cf53c0.png",
         "queries":[
            "musica",
            "pop",
            "art",
            "arte",
            "cultura",
            "shows"
         ]
      },*/
      {
         "title":"Pol&iacute;tica",
         "url":"http://g1.globo.com/politica/index.html",
         "logo":"http://s.glbimg.com/bu/i/fc/5fb2e18d-a47f-4bb8-9a7e-b66871cf53c0.png",
         "queries":[
            "elei&ccedil;&otilde;es",
            "pol&iacute;tica",
            "dilma",
            "a&eacute;cio",
            "apura&ccedil;&atilde;o"
         ]
      }
    ];
    function endHandler(err, res) {
      should.not.exist(err);
      res.body.should.be.eql(expected);
      done();
    }
    superagent
      .get(url.resolve(target, '/api/livesearch/highlight'))
      .query({ q: 'política' })
      .end(endHandler);
  });
});
