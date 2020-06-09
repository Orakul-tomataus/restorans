const Food = require('../../models/Food');

module.exports = getProducts;

async function getProducts () {
    console.log("Get Produkts")
    const foods = await Food.find();

    if(!foods) throw new Error('Food list empty');

    return foods;
}