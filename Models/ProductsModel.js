const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

     productName: {
        type: String,
        required: true,
    },
    unitePrice: {
        type: Number,
        required: true,
    },
    quantityInStock: {
        type: String
    },
    availableQuantity: {
        type: Number,
        required: true,
    },
    
}, { timestamps: true });

module.exports = mongoose.model('products', productSchema);