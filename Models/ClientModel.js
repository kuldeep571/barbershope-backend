const mongoose = require("mongoose");
const validator = require('validator');
const ClientSchema = mongoose.Schema({
    
    fullname: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format',
        },
    },
    marketingCommunication:{
        type:String,
        required:true,
    },
    paymentRequired:{
        type:String,
        required:true,
    },
    // password:{
    //     type:String,
    //     required: true,
    // },
    gender: {
        type: String,
        required: true,
    },
    monthOfBirth: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    
},{timestamps: true})

module.exports = mongoose.model('client', ClientSchema);