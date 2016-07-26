// 1. Require mongoose
var mongoose = require('mongoose')

// 2. Define a schema for the model
var userSchema = new mongoose.Schema({
  first_name: String,
  last_name : String,
  email     : {type:String, required:true, unique:true},

  meta: {
      age    : Number,
      website: String,
      address: String,
      country: String,
  },
  created_at: Date,
  updated_at: Date
});

// 3. Add methods to the schema -- optional
userSchema.methods.sayHello = function() {
  console.log("Hi" + this.first_name);
};

// 4. Create the model from the schema
// The "User" string creates a collection users in the database
var User = mongoose.model("User", userSchema);

// 5. Export the model
module.exports = User;


// Often 4 and 5 are combined
// module.exports = mongoose.model("User", userSchema);
