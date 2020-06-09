const Order = require('../../models/Order');

module.exports = addOrder;

async function addOrder (body) {
  const {cart, addres,phone} = body;
  const order = new Order({cart, addres, phone});
    
    try {
      await order.save();
    } catch (error) {
      throw new Error(error);
    }
  return true;
}