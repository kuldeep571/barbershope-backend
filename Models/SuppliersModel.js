const mongoose = require("mongoose");
const validator = require('validator');
const SuppliersSchema = mongoose.Schema({
    
    name: {
        type: String,
    },
    contact: {
        type: String,
    },
    telephone: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format',
        },
    },
    
},{timestamps: true})

module.exports = mongoose.model('supplier', SuppliersSchema);