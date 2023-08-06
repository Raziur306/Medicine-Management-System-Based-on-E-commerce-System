const bcrypt = require('bcrypt');
require('dotenv').config();
var jwt = require('jsonwebtoken');

const userModel = require('../models/user.model');
const productModel = require('../models/product.model');
const orderModel = require('../models/order.model');

const saltRound = 10;

const registerUser = async (req, res) => {
    try {
        const { pharmacyName, email, name, phone, licenseNumber, password } = req.body;
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ response: false, message: "User already exist" })
        }
        const hashedPassword = await bcrypt.hash(password, saltRound);
        const result = await userModel.create({
            pharmacyName,
            email,
            name,
            phone,
            licenseNumber,
            password: hashedPassword,
            shippingAddress: ""
        });
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET_KEY);
        res.status(201).json({ response: true, message: 'Registration successful', token: token });
    } catch (error) {
        res.status(501).json({ response: false, message: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await userModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" })
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET_KEY)
        res.status(200).json({ response: true, message: "Sign in success.", token: token, user_id: existingUser._id, });
    } catch (error) {
        res.send(500).json({ response: false, message: "Something went wrong" });
    }
};


const products = async (req, res) => {
    try {
        const allProduct = await productModel.find();
        res.status(200).json({ response: true, products: allProduct });
    } catch (error) {
        res.send(500).json({ response: false, message: "Something went wrong" });
    }
}


const getOrders = async (req, res) => {
    try {
        const { user_id } = req.query;
        const allOrders = await orderModel.find({ user_id });
        res.status(200).json({ response: true, orders: allOrders });
    } catch (error) {
        res.send(500).json({ response: false, message: "Something went wrong" });
    }
}


const placeOrder = async (req, res) => {
    try {
        const { user_id, order_id, orderTotal, shippingAddress, paymentMethod, products } = req.body;
        const data = await orderModel.create({
            user_id,
            order_id,
            orderTotal,
            shippingAddress,
            paymentMethod,
            products,
            orderStatus: "Pending",
        });
        res.status(201).json({ response: true, message: 'Order has placed successfully' });
    } catch (error) {
        res.send(500).json({ response: false, message: "Something went wrong" });
    }
}

module.exports = { registerUser, loginUser, products, getOrders, placeOrder };