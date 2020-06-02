const {Schema, Types ,model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true, unique: true, auto:true}
})

module.exports = model('Categories',schema) 