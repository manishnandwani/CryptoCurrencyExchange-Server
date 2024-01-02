const axios = require('axios');

const headers =  {
    'X-CMC_PRO_API_KEY': process.env.API_KEY,
}

const API_DOMAIN = 'https://pro-api.coinmarketcap.com';

exports.getCryptoCurrencyData = (req, res) =>{
    return new Promise(async (resolve, reject) => {
        try{
            let response = await axios.get(`${API_DOMAIN}/v1/cryptocurrency/listings/latest?start=1&limit=100`, {
                headers
            });
            if (response) {
                const json = response.data;
                resolve(json.data);
            }else{
                resolve({statusCode : 404, result : null, error: 'Something went wrong'});
            }
        }catch(err) {
            resolve({statusCode : 404, result : null, error: err});
        }
    });
}

exports.getCurrencyData = (req, res) =>{
    return new Promise(async (resolve, reject) => {
        try{
            let response = await axios.get(`${API_DOMAIN}/v1/fiat/map`, {
                headers
            });
            if (response) {
                const json = response.data;
                resolve(json.data);
            }else{
                resolve({statusCode : 404, result : null, error: 'Something went wrong'});
            }
        }catch(err) {
            resolve({statusCode : 404, result : null, error: err});
        }
    });
}

exports.exchangeAmount = (req, res) =>{
    const {amount, currency, crypto} = req.body
    return new Promise(async (resolve, reject) => {
        try{
            let response = await axios.get(`${API_DOMAIN}/v2/tools/price-conversion?amount=${amount}&symbol=${crypto}&convert=${currency}`, {
                headers
            });
            if (response) {
                const json = response.data;
                resolve(json.data);
            }else{
                resolve({statusCode : 404, result : null, error: 'Something went wrong'});
            }
        }catch(err) {
            resolve({statusCode : 404, result : null, error: err});
        }
    });
}