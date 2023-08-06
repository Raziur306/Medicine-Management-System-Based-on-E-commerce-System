const express = require('express');
const router = express.Router();

const { loginAdmin, getAllOrder, updateOrderStatus, addNewProduct, addAdmin } = require('../controller/admin.controller');
const auth = require('../middleware/auth');

//get all order data
router.get('/all-order', getAllOrder);

//update order status
router.put('/update-order', updateOrderStatus);

//add new product
router.post('/add-product', addNewProduct);

//add new admin
router.post('/new-admin', addAdmin);

//admin login
router.post('/login', loginAdmin)



module.exports = router;
