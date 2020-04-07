const Food = require('../../models/Food');

module.exports = removeProducts;

async function removeProducts (body) {
  if(body.sysPass != process.env.SYS_PASS)throw new Error('you not admin');

  try {
    await Food.findOneAndDelete(body.id);
  } catch (error) {
    throw new Error('food already exists');
  }
  return true;
}