const { name } = require('ejs')
const mongoose = require('mongoose')
const ItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    newPrice:{
        type: Number,
        required: true
    },
    oldPrice:{
        type: Number
    },
    Image1:{
        type: String,
        required: true
    },
    Image2:{
        type: String,
    },
    seasonalItem:{
        type: Boolean,
        default: false
    },
    newItem:{
        type: Boolean,
        default: true
    },

});
const Item = mongoose.model('Item', ItemSchema)
 module.exports = Item
