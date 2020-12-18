let express = require('express');
let router = express.Router();

router.get('/test', function (req, res) {
    res.send('The test endpoint is working.')
})

router.get('/menu', function (req, res) {
    res.send('Menu endpoint is working.')
})

router.post('/menu/create', function (req, res) {
    res.send('Menu Create endpoint is working.')
})

router.put('/menu/update', function (req, res) {
    res.send('Menu Update endpoint is working.')
})

router.delete('/menu/remove', function (req, res) {
    res.send('Menu Remove endpoint is working.')
})

module.exports = router