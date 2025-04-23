const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Route to get all users
router.get("/", userController.getAllUsers);
// Route to add a new user
router.post("/add-user", userController.addUser);

module.exports = router;

