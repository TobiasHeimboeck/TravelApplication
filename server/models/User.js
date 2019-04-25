const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username:  { type: String, default: '' },
    password:  { type: String, default: '' },
    email:     { type: String, default: '' },
    firstname: { type: String, default: '' },
    lastname:  { type: String, default: '' },
    loggedIn:  { type: Boolean, default: false },
    uuid:      { type: String, default: '' }
});

module.exports = mongoose.model("User", User);