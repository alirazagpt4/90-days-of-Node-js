const express = require("express");
const router = express.Router();
const { createUser , getUserById} = require("../controllers/user.controller");

router.post("/create" , createUser);
router.get("/:id" , getUserById);

module.exports = router;

