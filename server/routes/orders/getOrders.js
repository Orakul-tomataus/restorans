const Order = require('../../models/Order');

module.exports = getProducts;

async function getProducts () {
    console.log("Get Orders")
    const orders = await Order.find();

    if(!orders) throw new Error('Food list empty');

    return orders;
}