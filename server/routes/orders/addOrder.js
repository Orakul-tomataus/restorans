const Order = require('../../models/Order');

module.exports = addProduct;

async function addProduct (body) {
  console.log(body.body);
  return true;
}