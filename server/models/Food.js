const {Schema, Types ,model} = require('mongoose')

const schema = new Schema({
    id: {type: Types.ObjectId},
    name: {type: String},
    price: {type: Number},
    photoURL: {type: String}
})

module.exports = model('Food',schema) 