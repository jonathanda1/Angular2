var User = require('../models/user')
var request = require('request')


// GET
function index(request, response) {
  console.log('getting all')
  // console.log(request)
  User.find(function(error, users) {
    if(error) response.json({message: 'Could not find user'});

    response.json(users);
  }).select('-__v');
}

// post
function create(request, response) {
  // logs message in terminal
  console.log('in POST');
  console.log('body:',request.body);

  var user = new User(request.body);

  user.save(function(error) {
    if(error) response.json({messsage: 'Could not create user b/c:' + error});

    response.json(user);
  });
}



// delete
function remove(request, response) {
  var id = request.params.id;

  User.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete user b/c:' + error});

    response.json({message: 'User successfully deleted'});
  }).select('-__v');
}

module.exports = {
  index: index,
  remove: remove,
  create: create
}
