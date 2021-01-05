const {DataTypes} = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
    menu_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    serving_size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    options: {
        type: DataTypes.STRING,
    },
    customer_id: {
        type: DataTypes.INTEGER,
    }
})

module.exports = Order