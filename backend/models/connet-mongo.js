const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb+srv://cluster0.yqxsze7.mongodb.net/%22%20--apiVersion%201%20--username%20hoang';

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => {
    console.log('MongoDB connected successfully');
  })
 .catch(err => {
    console.log('MongoDB connection failed', err);
  });

module.exports =  mongoose ;