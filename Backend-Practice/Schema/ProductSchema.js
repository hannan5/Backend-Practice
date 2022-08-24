const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ProductName:{
        type:String,
        required: [true, "Full name required."],
    },
    Price:{
        type:Number,
        required:[true,'Price is Required'],
    },
    Quantity:{
        type:Number,
        default:0,
        required:true,
    },
    Category:{
        type:String,
    },
    Description:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        default:Date.now,
        required:true,
    },
    ProductImage:{
        type:String,
    },
})
module.exports = new mongoose.model('Product',ProductSchema)