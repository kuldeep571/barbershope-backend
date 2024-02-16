const mongoose = require("mongoose");
const validator = require('validator');
const SuppliersSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
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
    
},{timestamps: true})

module.exports = mongoose.model('supplier', SuppliersSchema);