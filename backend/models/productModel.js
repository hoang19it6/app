// productModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
