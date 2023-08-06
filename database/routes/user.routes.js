const express = require('express');
const router = express.Router();
const { registerUser, loginUser, products, getOrders, placeOrder } = require('../controller/user.controller');
const auth = require('../middleware/auth');

//register user
router.post('/register', registerUser);

//sign in existing user
router.post('/login', loginUser);


//see all products
router.get('/products', products);


//order medicine 
router.post('/order', placeOrder);

//get all getOrders
router.get('/orders', getOrders);

module.exports = router;