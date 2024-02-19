const mongoose = require("mongoose");
const ScheduleSchema = mongoose.Schema({
    
    dayOfWeek: {
        type: [
            {
                day:{
                    type:String,
                    required: true
                },
                start:{
                    type:Number,
                    required: true
                },
                end:{
                    type:Number,
                    required: true
                },
            }
        ],
        required: true
    },
    hours: {
        type: Number,
        required: true
    }
    
},{timestamps: true})

module.exports = mongoose.model('schedule', ScheduleSchema);