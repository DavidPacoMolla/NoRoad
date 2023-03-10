const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defines user schema in the database.
const UserSchema = new Schema({
    alias: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    publicKey: {
        type: String,
        require: true
    },
    rooms: [{
        type: mongoose.Types.ObjectId,
        ref: "Room",
        require: true,
        default: []
    }]
});

module.exports = mongoose.model("User", UserSchema);