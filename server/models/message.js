const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defines message schema in the database.
const MessageSchema = new Schema({
    isBackup: {
        type: Boolean,
        require: true
    },
    date: {
        type: Date,
        require: true,
        default: Date.now
    },
    message: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Message", MessageSchema);