const {Schema, Types ,model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true, unique: true,auto:true},
    price: {type: Number, required: true},
    photoURL: {type: String, required: true}
})

module.exports = model('Food',schema) 