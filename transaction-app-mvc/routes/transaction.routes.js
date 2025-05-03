const express = require('express');
const router = express.Router();
const { tranferMoney } = require('../controllers/transaction.controller');

// create a new transaction

router.post('/transfer-money', tranferMoney);

module.exports = router;