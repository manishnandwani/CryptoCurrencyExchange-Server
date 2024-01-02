var currencyService = require('../services/currencyService');

exports.getCryptoCurrencyData = (req, res) =>{
    currencyService.getCryptoCurrencyData(req, res)
        .then(function(result){
            res.send(result)
        })
        .catch(function(err){
            res.status(500).send(err)
        })
}

exports.getCurrencyData = (req, res) =>{
    currencyService.getCurrencyData(req, res)
        .then(function(result){
            res.send(result)
        })
        .catch(function(err){
            res.status(500).send(err)
        })
}

exports.exchangeAmount = (req, res) =>{
    currencyService.exchangeAmount(req, res)
        .then(function(result){
            res.send(result)
        })
        .catch(function(err){
            res.status(500).send(err)
        })
}