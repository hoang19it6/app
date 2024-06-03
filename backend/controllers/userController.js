const mongooseHelper = require('../utils/mongooseHelper');

exports.createUser = async (req, res) => {
  try {
    const user = await mongooseHelper.createUser(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await mongooseHelper.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await mongooseHelper.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await mongooseHelper.updateUser(req.params.id, req.body);
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await mongooseHelper.deleteUser(req.params.id);
    res.status(200).json({ message: 'User deleted successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
