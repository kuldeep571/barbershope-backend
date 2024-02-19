const mongoose = require("mongoose");
const PricingSchema = mongoose.Schema({
    
    name: {
        type: String,
    },
    assignedTeamMembers: {
        type: [],
    }
    
},{timestamps: true})

module.exports = mongoose.model('pricinglevel', PricingSchema);