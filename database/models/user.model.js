const mongoose = require('mongoose');

const schemaUser = mongoose.Schema({

    pharmacyName: {
        type: String,

    },

    name: {
        type: String,

    },

    licenseNumber: {
        type: String,
    },

    phone: {
        type: String,

    },

    email: {
        type: String,

    },

    password: String,
    shippingAddress: String,
})


const User = mongoose.model('users', schemaUser);
module.exports = User;