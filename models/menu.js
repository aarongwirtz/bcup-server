module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('menu', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
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
    return Menu;
}