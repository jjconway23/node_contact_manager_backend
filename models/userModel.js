const mongoose = require('mongoose');

const userSchemea = mongoose.Schema({
    username: {
        type: String, 
        required: [true, "Please add the user name"],
    },
    email : {
        type: String,
        required : [true, "Please add your email address"],
        unique: [true, "Email address already exists."],
    },
    password : {
        type: String,
        required: [true, "Please enter a password"]
    }
}, {
    timestamps: true, 
})

module.exports = mongoose.model("User", userSchemea)