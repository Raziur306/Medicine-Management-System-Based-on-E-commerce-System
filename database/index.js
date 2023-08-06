const express = require('express');
const app = require('./config/express');
var cors = require('cors')

const userRoute = require('./routes/user.routes');
const adminRoute = require('./routes/admin.routes');

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/user', userRoute);
app.use('/api/admin', adminRoute);


app.get('/', (req, res) => {
    res.status(200).json({ response: true, message: "The server is running." })
});

app.use('*', (req, res) => {
    res.status(404).json({ response: false, message: "404! Bad Request" });
});