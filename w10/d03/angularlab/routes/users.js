var express = require('express');
var router = express.Router();

var UsersController = require('../controllers/users');

router.route('/')
  .get(UsersController.index)
  .post(UsersController.create)

router.delete('/:id', UsersController.remove)

module.exports = router;
