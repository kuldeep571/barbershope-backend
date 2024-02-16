const mongoose = require("mongoose");
const validator = require('validator');
const EmployeesSchema = mongoose.Schema({

    images:{
        type: String,
        required: true,
    },
    name: {
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
    phone: {
        type: String,
        required: true,
    },
    services: {
        type: String,
        required: true,
    },

},{timestamps: true})

module.exports = mongoose.model('employees', EmployeesSchema);