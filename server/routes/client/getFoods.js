const Food = require('../../models/Food');

module.exports = getFoodsList;

async function getFoodsList (body) {
    const foods = await Food.find()
    return foods;
}