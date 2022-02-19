const mongoose = require("mongoose");
require('mongoose-type-email');
//mongoose.SchemaTypes.Email.defaults.message = 'Please enter valid email address';


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        //unique: [true, "Username already taken."]
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: [true, "Please enter valid email id."],
        //unique: [true, "Email already taken."],
    },
    phone: {
        type: String,
        required: [true, "Phone Number is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    gender: {
        type: String
    },
    language: {
        type: String
    },
    maritial_status: {
        type: String,
        required: [true, "Maritial Status is required"],
    },
    dob: {
        type: Date,
        required: [true, "Date of birth is required"],
    },
    tob: {
        type: String,
        required: [true, "Time of birth is required"],
    },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
