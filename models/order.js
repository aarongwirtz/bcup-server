module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
        menu_id: {
            type: DataTypes.STRING,
            allowNull: false,
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
            type: DataTypes.INTEGER,
        },
        customer_id: {
            type: DataTypes.INTEGER,
        },
    })
    return Order;
}