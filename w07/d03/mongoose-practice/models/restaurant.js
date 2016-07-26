var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema ({
  name: String,
  address: String,
  reviews: Number,
  created_at: Date,
  created_by: Date
});

restaurantSchema.methods.addReview = function() {
  // this.reviews += 1
  console.log(reviews + 1)
};


var Restaurant = mongoose.model("Restaurant", restaurantSchema);


module.exports = Restaurant
