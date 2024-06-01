// backend/routes/index.js

const express = require('express');
const router = express.Router();
const { home } = require('../controllers/homeController');
const {
  createUserHandler,
  getUserHandler,
  updateUserHandler,
  deleteUserHandler,
  listUsersHandler
} = require('../controllers/userController');

router.get('/', home);
router.post('/users', createUserHandler);
router.get('/users/:id', getUserHandler);
router.put('/users/:id', updateUserHandler);
router.delete('/users/:id', deleteUserHandler);
router.get('/users', listUsersHandler);

module.exports = router;
