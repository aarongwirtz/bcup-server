let express = require('express');
let router = express.Router();

router.get('/test', function (req, res) {
    res.send('The test endpoint is working.')
})

router.get('/order/myorders', function (req, res) {
    res.send('My Orders endpoint is working.')
})

router.post('/order/create', function (req, res) {
    res.send('Order Create endpoint is working.')
})

router.put('/order/update', function (req, res) {
    res.send('Order Update endpoint is working.')
})

router.delete('/order/remove', function (req, res) {
    res.send('Order Remove endpoint is working.')
})

module.exports = router