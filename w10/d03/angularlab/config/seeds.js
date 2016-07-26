var mongoose = require('./database');

var User = require('../models/user');

var users = [
  {name: "Noah", username: "noah", address: "Oldman Ln"},
  {name: "Trevor", username: "trev", address: "Bully Dr"},
  {name: "Dog", username: "dog", address: "roofruff"}
];

// Good practice, not necessary
User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
      mongoose.connection.close();
    }
    process.exit();
  });
});
