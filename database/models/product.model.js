const mongoose = require('mongoose');

const schemaProduct = mongoose.Schema({
    name: {
        type: String,
        min: [3, 'Name must contain 3 character.'],
        required: [true, "Name required"],
        trim: true,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    url: {
        type: String,
    }
});

const Product = mongoose.model('products', schemaProduct);
module.exports = Product;