const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({

    packageName: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    selectPackageService: {
        type: String
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    limitations:{
        type: String,
        required: true,
    },
    usefulInformation:{
        type: String,
        required: true,
    },
    soldOnline:{
        type: String,
        required: true,
    },
    servicePerformed:{
        type: String,
        required: true,
    },
    registrationEarlier:{
        type: String,
        required: true,
    }
    
}, { timestamps: true });

module.exports = mongoose.model('package', packageSchema);