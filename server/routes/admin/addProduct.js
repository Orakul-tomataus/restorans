const Food = require('../../models/Food');

module.exports = addProduct;

async function addProduct (body) {
  if(body.sysPass != process.env.SYS_PASS)throw new Error('you not admin');

  const {name, price,photoURL} = body;
  const food = new Food({name, price, photoURL});

  try {
    await food.save();
  } catch (error) {
    throw new Error(error);
  } 
  return true;
}