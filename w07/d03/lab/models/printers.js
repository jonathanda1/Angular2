var mongoose = require('mongoose');

var printerSchema = new mongoose.Schema ({
  black: Boolean,
  date_purchased: Date,
info: {
  ink_type: String,
  model_number: String,
  scanner: Boolean,
  photo_printing: Boolean
  },
  lifespan: String,
  life: String
})

var Printer = mongoose.model('Printer', printerSchema);


module.exports = Printer;
