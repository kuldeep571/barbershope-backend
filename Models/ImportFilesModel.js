const mongoose = require('mongoose');

const ImportSchema = mongoose.Schema({
    uploadFile: {
        type: String,
        required:true,
    },
    fileDetails: {
        type: String,
        required:true,
    },
});

module.exports = mongoose.model("importfile", ImportSchema);