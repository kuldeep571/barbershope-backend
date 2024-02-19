const mongoose = require('mongoose');

const ImportSchema = mongoose.Schema({
    image: {
        type: String,
    },
});

module.exports = mongoose.model("importfile", ImportSchema);