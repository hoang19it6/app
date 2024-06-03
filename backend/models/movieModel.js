// Import mongoose
const mongoose = require('mongoose');

// Định nghĩa schema cho movie
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: [String],
    required: true
  },
  episodes: {
    type: String,
    required: true
  },
  comments: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: true
  }
});

// Tạo model từ schema
const Movie = mongoose.model('Movie', movieSchema);

// Export model
module.exports = Movie;
