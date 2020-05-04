const {Schema, model} = require('mongoose')
const ItemCart = new Schema({
    id:{type:String},
    quantity:{type:Number}});
const schema = new Schema({
    cart: [ItemCart],
    phone: {type:String},
    addres: {type:String}
})

module.exports = model('Order',schema)