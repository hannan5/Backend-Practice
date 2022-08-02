const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: [true, "Full name required."],
    },
    Gender:{
        type:String,
        required: [true, "Gender is required."],
    },
    Occupation:{
        type:String,
        required: [true, "Occupation is required."],
    },
    Phone:{
        type:Number,
        required: [true, "Phone Number is required."],
    },
    Email:{
        type:String,
    },
    Password:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model('User', UserSchema);