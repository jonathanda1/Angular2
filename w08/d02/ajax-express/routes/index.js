var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/chats/1', function (req, res, next) {
   res.json({ id:1, body: "Oh hello there!" })
})

router.get('/chats/2', function (req, res, next) {
    res.json({ id:2, body: "Top of the morning to ya!" })
})

module.exports = router;
