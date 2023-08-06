const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    name: String,
    userName: String,
    password: String,
});

const Admin = mongoose.model('admins', adminSchema);


module.exports = Admin;