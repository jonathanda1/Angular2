var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
  title: String,
  platform: String,
  type: String
});

var Game = mongoose.model('Game', gameSchema)

module.exports = Game;
