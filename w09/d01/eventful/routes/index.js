var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// var keyword = req.body
// var uri = "http://api.eventful.com/json/events/search?app_key=9F27GJj3gTfVk33X&...&keywords=" + keyword + "&location=Los+Angeles"

module.exports = router;
