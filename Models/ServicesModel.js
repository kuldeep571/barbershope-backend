const mongoose = require("mongoose");
const ServicesSchema = mongoose.Schema({
    
    title: {
        type: String,
    },
    discount: {
        type: Number,
    },
    team: {
        type: [],
    },
    duration: {
        type: String,
    },
    price: {
        type: String,
    },
    saleprice: {
        type: String,
    },
    cleanupTime:{
        type: String,
    },
    description:{
        type: String,
    },
    finePrint:{
        type: String,
    },
    distribution:{
        type:String,
    }
    
},{timestamps: true})

module.exports = mongoose.model('services', ServicesSchema);