const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    supplier: {
        type: "String",
    },
    orderOfDate: {
        type: String,
    },
    unitsOrder: {
        type: String,
    },
    condition: {
        type: String,
    }
});

module.exports = mongoose.model("Order", orderSchema);