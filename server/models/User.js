const {Schema,Types, model} = require('mongoose')

const schema = new Schema({
    id: {type: Types.ObjectId,required: true ,unique:true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

module.exports = model('User',schema)