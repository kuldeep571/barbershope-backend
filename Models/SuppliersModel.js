const mongoose = require("mongoose");
const SuppliersSchema = mongoose.Schema({
    
    supplierName: {
        type: String,
        required: true,
    },
    contactPerson: {
        type: Number,
        required: true,
    },
    telephoneNo: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    assignedProduct: {
        type: Number,
        required: true,
    }
    
},{timestamps: true})

module.exports = mongoose.model('supplier', SuppliersSchema);