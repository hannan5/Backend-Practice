const mongoose  = require("mongoose");

const CartSchema = new mongoose.Schema({
    Product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    Price:{
        type:Number,
        required:true,
    },
    Quantity:{
        type:Number,
        required:true,
    },
})
module.exports = new mongoose.model('Cart',CartSchema)