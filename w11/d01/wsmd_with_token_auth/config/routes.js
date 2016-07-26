var express = require('express');
var router = express.Router();

var showsController = require('../controllers/shows');
var usersCtrl = require('../controllers/users');

// Require token authentication.
var token = require('../config/token_auth');


router.route('/api/shows')
  .get(showsController.index)
  .post(showsController.create);

router.route('/api/shows/:id')
  .get(showsController.show)
  .put(token.authenticate, showsController.update)
  .delete(showsController.destroy);

router.route('/api/users')
  .post(usersCtrl.create);

router.route('/api/users/me')
  .get(token.authenticate, usersCtrl.me);

router.route('/api/token')
  .post(token.create);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('public/index.html');
});

router.get('*', function(req, res, next) {
  res.redirect('/');
});


module.exports = router;
