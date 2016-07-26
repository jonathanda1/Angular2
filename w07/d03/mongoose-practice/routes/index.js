var express = require('express');
var router = express.Router();

// 1. Require mongoose
var mongoose = require('mongoose');

// 2. Require the model file
var User = require('../models/user');

var Restaurant = require('../models/restaurant');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', (req, res, next) => {
// 3. Create a new instance of the model
  var gerry = new User ({
    first_name: 'gerry',
    email: 'gerry@ga.co',
    meta: {
      age: 27
    }
  })
    gerry.save(err => {
      if (err) console.log(err);
      res.send('User created!');
    })
});




router.get('/restaurant', (req, res, next) => {
  var chickFilA = new Restaurant ({
    name: 'Chick-Fil-A',
    address: 'Iono',
    reviews: 5
  })
chickFilA.save(err => {
  if (err) console.log(err);
  res.send('Restaurant created!');
  })
});




router.get('/read', (req, res, next) => {
  User.find({}, (err, data) => {
  res.send('User found')
  console.log("Find:", data)
  })
  User.find({first_name: 'gerry'}, (err, data) => {
    console.log("Find first name: ", data)
  })
  User.findOne({first_name: 'gerry'}, (err, data) => {
    console.log("Find one:", data)
  })
});




router.get('/update', (req, res, next) => {
  User.findOneAndUpdate({ first_name: 'gerry'},
    {meta: {age:26}}, err => {
    if (err) console.log(err)
    res.send('user updated')
  })
});




router.get('/remove', (req, res, next) => {
  User.findOneAndRemove({first_name: 'gerry'}, err => {
    if (err) console.log(err)
      res.send('user deleted')
  })
});

module.exports = router;
