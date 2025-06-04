const express = require("express");
const router = express.Router();
const { createCustomer , getCustomerbyOrderId} = require("../controllers/customer.controller");

router.post("/create-cust" , createCustomer);
router.get("/:id" , getCustomerbyOrderId);

module.exports = router;