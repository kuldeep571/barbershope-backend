const mongoose = require("mongoose");
const VenueSchema = mongoose.Schema({
    
    phoneno: {
        type: String,
    },
    email: {
        type: String,
    },
    website: {
        type: String,
    },
    openinghours: {
        monday:{
            start:String,
            end:String,
        },
        tuesday:{
            start:String,
            end:String,
        },
        wednesday:{
            start:String,
            end:String,
        },
        thursday:{
            start:String,
            end:String,
        },
        friday:{
            start:String,
            end:String,
        },
        saturday:{
            start:String,
            end:String,
        },
        sanday:{
            start:String,
            end:String,
        },
    },
    
},{timestamps: true})

module.exports = mongoose.model('venue', VenueSchema);