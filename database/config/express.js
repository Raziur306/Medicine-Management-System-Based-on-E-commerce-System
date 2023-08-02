const express = require('express');
const app = express();
require('./database');

app.listen(3000, () => {
    console.log("Server is connected.");
});

module.exports = app;