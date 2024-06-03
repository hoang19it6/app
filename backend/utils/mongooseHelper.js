const User = require('../models/userModel');

// Create a new user
async function createUser(data) {
  try {
    const user = new User(data);
    await user.save();
    return user;
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
}

// Get all users
async function getAllUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error('Error retrieving users: ' + error.message);
  }
}

// Get a user by ID
async function getUserById(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error retrieving user: ' + error.message);
  }
}

// Update a user by ID
async function updateUser(userId, data) {
  try {
    const user = await User.findByIdAndUpdate(userId, data, { new: true, runValidators: true });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error updating user: ' + error.message);
  }
}

// Delete a user by ID
async function deleteUser(userId) {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error deleting user: ' + error.message);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
