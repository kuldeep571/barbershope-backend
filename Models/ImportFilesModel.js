const mongoose = require('mongoose');

const ImportSchema = mongoose.Schema({

    image: {
        type: String,
    },
    path: {
        type: String,
    },
    size: {
        type: Number,
    },

});

module.exports = mongoose.model("importfile", ImportSchema);