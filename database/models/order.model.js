const mongoose = require('mongoose');
const schemaOrder = mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    order_id: Number,
    products: [
        {
            product_id: mongoose.Schema.Types.ObjectId,
            name: String,
            price: Number,
            quantity: Number,
        }
    ],
    orderStatus: String,
    orderTotal: Number,
    shippingAddress: String,
    paymentMethod: String
});

const Order = mongoose.model('orders', schemaOrder);


module.exports = Order;