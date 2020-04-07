const Food = require('../../models/Food');

module.exports = getProducts;

async function getProducts () {
    const foods = await Food.find();

    if(!foods) throw new Error('Food list empty');

    return foods;
}