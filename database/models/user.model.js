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
        type: String,
    },

    phone: {
        type: String,

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

    password: String,
    shippingAddress: String,
})


const User = mongoose.model('users', schemaUser);
module.exports = User;