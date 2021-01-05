const express = require('express');
const router = express.Router();
const {Menu} = require('../models');
const validateSession = require('../middleware/validateSession');

//WORKING
router.get('/test', function (req, res) {
    res.send('The test endpoint is working.')
})

//WORKING
router.get('/', function (req, res) {
    //res.send('Menu endpoint is working.')
    Menu.findAll()
    .then(menu => res.status(200).json(menu))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//WORKING
router.post('/create', validateSession, async (req, res) => {
    //res.send('Menu Create endpoint is working.')
    try {
        const {name, description, roast, price, calories} = req.body.Menu;

        let newMenu = await Menu.create({
            name, 
            description, 
            roast, 
            price, 
            calories
        })
        res.status(200).json({
            menu: newMenu,
            message: "Menu Created!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Menu Creation Failed."
        })
    }
})

//WORKING
router.put('/:id', function (req, res) {
    //res.send('Menu Update endpoint is working.')
    const query = req.params.id;
    console.log(query);
    Menu.update(req.body.Menu, { where: { id: query } })
    .then((menuUpdated) => {
        Menu.findOne({ where: { id: query } })
        .then((locatedUpdatedMenu) => {
            res.status(200).json({
                menu: locatedUpdatedMenu,
                message: "Menu updated successful",
                menuChanged: menuUpdated,
              });
            });
          })
          //Basic error message
          .catch((err) => res.json(req.errors));
    
})


router.delete('/:id', function (req, res) {
    res.send('Menu Remove endpoint is working.')
    Menu.destroy({
        where: {id: req.params.id}
    })
    .then(menu => res.status(200).json(menu))
    .catch(err => res.json({error: err}))

})

module.exports = router