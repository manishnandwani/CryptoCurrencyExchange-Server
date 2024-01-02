var express = require('express');
var router = express.Router();
var currencyCtrl = require('../controllers/currencyController')

router.get('/data',currencyCtrl.getCryptoCurrencyData)
router.get('/currency/data',currencyCtrl.getCurrencyData)
router.post('/exchange',currencyCtrl.exchangeAmount)

module.exports = router