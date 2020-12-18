require('dotenv').config();

/* EXPRESS SETUP */
let express = require('express');
let app = express();

/* SEQUELIZE SETUP */
let sequelize = require('.db')

/* CONTROLLER ACCESS */
let menu = require('./controllers/menucontroller');
let user = require('./controllers/usercontroller');

/* SEQUELIZE SYNC TO DATABASE */
sequelize.sync();
//DROP TABLE sequelize.sync({force: true})

/* MIDDLEWARE */
app.use(require('./middleware/header'));

/* EXPRESS JSON */
app.use(express.json());

/* USER CONTROLLER ENDPOINT SETUP */
app.use('/user', user);

/* MENU ENDPOINT SETUP */
app.use('/menu', menu)

/* SERVER SETUP */
app.listen(4000, function() {
    console.log('App is listening on port 4000.')
})