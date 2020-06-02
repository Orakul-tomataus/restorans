const Categories = require('../../models/Categories');

module.exports = getProducts;

async function getProducts () {
    const categories = await Categories.find();

    if(!categories) throw new Error('categories list empty');

    return categories;
}