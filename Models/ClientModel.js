const mongoose = require("mongoose");
const validator = require('validator');
const ClientSchema = mongoose.Schema({
    
    name: {
        type: String,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format',
        },
    },
    gender: {
        type: String,
    },
    birth: {
        type: String,
    },
    note: {
        type: String,
    },
    
},{timestamps: true})

module.exports = mongoose.model('client', ClientSchema);