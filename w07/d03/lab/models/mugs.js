var mongoose = require('mongoose');

var mugSchema = new mongoose.Schema({
  color: String,
  material: String,
  volume: String,
  handle: Boolean,
  created_at: Date,
  updated_at: Date
})

var Mugs = mongoose.model("Mugs", mugSchema);

module.exports = Mugs;
