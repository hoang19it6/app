const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb+srv://hoang:240499@cluster0.yqxsze7.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.log('MongoDB connection failed', err);
  });


  
module.exports = mongoose;
