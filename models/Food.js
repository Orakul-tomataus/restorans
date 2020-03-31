const {Schema, Types ,model} = require('mongoose')

const schema = new Schema({
    id: {type: Types.ObjectId},
    name: {type: String, required: true, unique: true},
    price: {type: String, required: true},
    description: {type: String},
    photoURL: {type: String}
})

module.exports = model('Food',schema) 