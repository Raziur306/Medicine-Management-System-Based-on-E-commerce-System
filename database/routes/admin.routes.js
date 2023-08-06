const express = require('express');
const router = express.Router();

const { loginAdmin, getAllOrder, updateOrderStatus, addNewProduct, addAdmin } = require('../controller/admin.controller');
const auth = require('../middleware/auth');

//get all order data
router.get('/all-order', auth, getAllOrder);
//update order status
router.post('/update-order', auth, updateOrderStatus);
//add new product
router.post('/add-product', auth, addNewProduct);
//add new admin
router.post('/new-admin', addAdmin);



module.exports = router;
