const express = require('express');
const { createUser, getAllUsers } = require('../controllers/user.controller');
const router = express.Router();



// Create a new user
router.post('/create-user', createUser);

// Get all users
router.get('/get-all-users', getAllUsers);

module.exports = router;