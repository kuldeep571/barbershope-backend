const mongoose = require("mongoose");
const validator = require('validator');
const EmployeesSchema = mongoose.Schema({

    images:{
        type: String,
    },
    name: {
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
    phone: {
        type: String,
    },
    services: {
        type: String,
    },

},{timestamps: true})

module.exports = mongoose.model('employees', EmployeesSchema);