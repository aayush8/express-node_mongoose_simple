const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    created: {
        type: Date,
        default: Date.now
    }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;