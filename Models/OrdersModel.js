const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supplier',
        required:true
    },
    orderDate: {
        type: String,
        required: true,
    },
    unitsOrder: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    }
});

module.exports = mongoose.model("Order", orderSchema);