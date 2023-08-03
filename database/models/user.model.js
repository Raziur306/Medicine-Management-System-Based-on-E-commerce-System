const mongoose = require('mongoose');

const schemaUser = mongoose.Schema({

    pharmacyName: {
        type: String,
        min: [3, 'Name must contain 3 character.'],
        required: [true, "Name required"],
        trim: true,
    },

    name: {
        type: String,
        min: [3, 'Name must contain 3 character.'],
        required: [true, "Name required"],
        trim: true,
    },

    licenseNumber: {
        type: Number,
    },

    phone: {
        type: Number,

    },

    email: {
        type: String,
        required: [true, "Email Required"],
        unique: true,
        trim: true,
        validate: (v) => {
            return /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(v);
        }
    },

    password: {
        type: String,
        require: [true, "Password Required."],
        minLength: [3, "Minimum password length 3."]
    },
    shippingAddress: String,
})


const User = mongoose.model('users', schemaUser);
module.exports = User;