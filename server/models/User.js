const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    loggedIn: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("User", UserSchema);