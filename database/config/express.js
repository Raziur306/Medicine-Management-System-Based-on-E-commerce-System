const express = require('express');
const app = express();
const connectMongo = require("./database");


app.listen(4000, async () => {
    console.log("Server is connected.");
    await connectMongo();
});

module.exports = app;