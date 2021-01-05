const {DataTypes} = require('sequelize');
const db = require('../db');

const Menu = db.define('menu', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roast: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
    },
    calories: {
        type: DataTypes.INTEGER,
    },
})

module.exports = Menu