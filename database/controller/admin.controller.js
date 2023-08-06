const bcrypt = require('bcrypt');
require('dotenv').config();
var jwt = require('jsonwebtoken');

const orderModel = require('../models/order.model');
const adminModel = require('../models/admin.model');
const productModel = require('../models/product.model');

const saltRound = 10;

//admin login test
const loginAdmin = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const existingUser = await adminModel.findOne({ userName: userName });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" })
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ userName: existingUser.userName, id: existingUser._id }, process.env.SECRET_KEY)
        res.status(200).json({ response: true, message: "Login in success.", token: token });
    } catch (error) {
        res.send(500).json({ response: false, message: "Something went wrong" });
    }
}

//admin request all order list
const getAllOrder = async (req, res) => {
    try {
        const allOrders = await orderModel.find({});
        res.status(200).json({ response: true, orders: allOrders });
    } catch (error) {
        res.send(500).json({ response: false, message: "Something went wrong" });
    }

}

//update order current status(Cancel, Deliver, Pending etc)
const updateOrderStatus = async (req, res) => {
    try {
        const { orderStatus, id } = req.body;
        await orderModel.findByIdAndUpdate(id, { orderStatus }, { new: true })
        res.status(200).json({ response: true, message: "Successful" });
    } catch (error) {
        res.send(500).json({ response: false, message: "Something went wrong" });
    }
}

//add new product 
const addNewProduct = async (req, res) => {
    try {
        const { name, price, quantity, url } = req.body;
        await productModel.create({ name, price, quantity, url });
        res.status(200).json({ response: true, message: "New Product Added Successfully" });
    } catch (error) {
        res.send(500).json({ response: false, message: "Something went wrong" });

    }

}

//adding new admin manually (This function have no UI because of security)
const addAdmin = async (req, res) => {
    try {
        const { name, userName, password } = req.body;
        const existingUser = await adminModel.findOne({ userName: userName });
        if (existingUser) {
            return res.status(400).json({ response: false, message: "User already exist" })
        }
        const hashedPassword = await bcrypt.hash(password, saltRound);
        const result = await adminModel.create({
            name,
            userName,
            password: hashedPassword,
        });
        const token = jwt.sign({ email: result.userName, id: result._id }, process.env.SECRET_KEY);
        res.status(201).json({ response: true, message: 'Registration successful', token: token });
    } catch (error) {
        res.status(501).json({ response: false, message: error.message });
    }

}


module.exports = { loginAdmin, getAllOrder, updateOrderStatus, addNewProduct, addAdmin };