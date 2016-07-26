var express = require('express');
var router  = new express.Router();
var request = require('request');
require('dotenv').config();
var locus = require('locus')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST to search */
router.post('/search', function(req, res, next) {
  // Printing out the content of the request!
  console.log(req.body);
  console.log(req.body.search.place);
  console.log(req.body.search.query);
  // base uri codes to request near to foursquare api
  var baseURI = "https://api.foursquare.com/v2/venues/search?near="
  var uri = baseURI + req.body.search.place + "&client_id=" + process.env.CLIENT_ID + "&client_secret=" + process.env.CLIENT_SECRET + "&v=20160422&query=" + req.body.search.query
  request(uri, function(err, fourSquareResponse, body) {
    var body = JSON.parse(body)
    console.log(body)
    res.send(body.response.venues)
  })
});



module.exports = router;
