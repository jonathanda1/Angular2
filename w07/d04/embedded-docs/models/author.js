var mongoose = require('mongoose')

var bookSchema = new mongoose.Schema({
  title: String,
  year: Date
})

var authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  books: [bookSchema]
})

var Author = mongoose.model("Author", authorSchema)
module.exports = Author
