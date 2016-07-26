var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String,
  username: String,
  address: String,
});

var User = mongoose.model('User', UserSchema);

module.exports = User
