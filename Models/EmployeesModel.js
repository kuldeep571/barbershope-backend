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
    monworkinghours: {
        type: String,
    },
    tueworkinghours: {
        type: String,
    },
    wedworkinghours: {
        type: String,
    },
    thuworkinghours: {
        type: String,
    },
    friworkinghours: {
        type: String,
    },
    satworkinghours: {
        type: String,
    },
    sunworkinghours: {
        type: String,
    },
    joiningdate: {
        type: String,
    },
    mon2workinghours: {
        type: String,
    },
    tue2workinghours: {
        type: String,
    },
    wed2workinghours: {
        type: String,
    },
    thu2workinghours: {
        type: String,
    },
    fri2workinghours: {
        type: String,
    },
    sat2workinghours: {
        type: String,
    },
    sun2workinghours: {
        type: String,
    },

},{timestamps: true})

module.exports = mongoose.model('employees', EmployeesSchema);