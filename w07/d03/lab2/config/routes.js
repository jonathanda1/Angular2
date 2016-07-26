var express = require('express')
var router = express.Router()
var MugController = require('../controllers/mug')

router.route('/')
      .get(MugController.index)
      .post(MugController.new)

module.exports = router
