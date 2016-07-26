var mongoose = require('mongoose')


var terminalSchema = new mongoose.Schema({
  name: String,
  flights: Array,
  capacity: Number
})

var airportSchema = new mongoose.Schema({
  name: String,
  country: String,
  terminals: [terminalSchema],
  opened: Date
})

var Airport = mongoose.model("Airport", airportSchema)
module.exports = Airport
