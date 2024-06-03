// userModel.js
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // Add other fields as needed
});

// Create the userModel based on the schema
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
