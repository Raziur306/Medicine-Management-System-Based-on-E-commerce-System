const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/Medicine_Management_System')
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB not connected");
        console.log("DB ERROR: ", error.message);
    }
}

module.exports = connectDB;
