var mongoose = require('mongoose');

// uses criminals-app database
mongoose.connect('mongodb://localhost:27017/criminals-app');

module.exports = mongoose;
