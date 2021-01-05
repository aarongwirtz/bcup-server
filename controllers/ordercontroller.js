let express = require('express');
let router = express.Router();
const {Order} = require('../models');
const validateSession = require('../middleware/validateSession');

//WORKING
router.get('/test', function (req, res) {
    res.send('The test endpoint is working.')
})

//WORKING -- this gets ALL orders, how do I filter this to only the specific customer's order?
router.get('/myorder', function (req, res) {
    //res.send('My Orders endpoint is working.')
    Order.findAll()
    .then(order => res.status(200).json(order))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//WORKING
router.post('/create', validateSession, async (req, res) => {
    //res.send('Order Create endpoint is working.')
    try {
        const {menu_id, item, serving_size, quantity, options, customer_id} = req.body.Order;

        let newOrder = await Order.create({
            menu_id, item, serving_size, quantity, options, customer_id
        })
        res.status(200).json({
            order: newOrder,
            message: "Order Created!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Order Creation Failed."
        })
    }
})

//WORKING
router.put('/:id', function (req, res) {
    //res.send('Order Update endpoint is working.')
    Order.update(req.body.Order, { where: { id: req.params.id }})
    .then(order => res.status(200).json(order))
    .catch(err => res.json(req.errors))
})

//WORKING
router.delete('/:id', function (req, res) {
    //res.send('Order Remove endpoint is working.')
    Order.destroy({
        where: {id: req.params.id}
    })
    .then(order => res.status(200).json(order))
    .catch(err => res.json({error: err}))
})

module.exports = router