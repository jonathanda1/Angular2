var mongoose = require('mongoose')

var addressSchema = new mongoose.Schema ({
  street: String,
  city: String,
  state: String,
  zip: Number
})

// must do embedded schema first so itll be readable later
var userSchema = new mongoose.Schema ({
  name: String,
  addresses: [addressSchema]
})


// create and export the model
var User = mongoose.model("User", userSchema)
module.exports = User
