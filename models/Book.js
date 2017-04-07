var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
  name: String,
  writers: String,
  language: String,
  isbn: String,
  isread: Boolean,
  genre: String,
  tags: String,
});

module.exports = mongoose.model('Book', BookSchema);