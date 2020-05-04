const {Schema, Types ,model} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true, unique: true, auto:true},
    category: {type: Number, required: true},
    price: {type:Number,required:true},
    description: {type:String,required: false},
    popular: {type:Boolean,required:true},
    imageUrls: [String]
})

module.exports = model('Food',schema) 