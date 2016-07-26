var mongoose = require('mongoose');

// uses database
mongoose.connect('mongodb://localhost/users-app');

module.exports = mongoose;
