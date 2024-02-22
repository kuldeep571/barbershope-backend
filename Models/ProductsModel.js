const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name: {
        type: String,
    },
    unitePrice: {
        type: String,
    },
    quantity: {
        type: String
    },
    availableQuantity: {
        type: String,
    },
    sname: {
        type: String,
    },

}, { timestamps: true });

module.exports = mongoose.model('products', productSchema);