const express = require("express");
const router  = express.Router();
const {createOrders , getOrdersByCustomerId} = require("../controllers/order.controller");

router.post("/create-orders" , createOrders);
router.get("/:id" , getOrdersByCustomerId);

module.exports = router;