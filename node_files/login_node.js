const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const app = express();
const userSchem = require("./models/userModel");
const User = require('./models/userModel');

app.use(require('cors')());

let jsonParser = body_parser.json();
app.use(jsonParser);
app.use(body_parser.urlencoded({ extended: true }));

const DB = "mongodb+srv://sukesh04:Sv6erPc9mxSjYAVC@cluster0.sx4t5.mongodb.net/Movie_Booking?retryWrites=true&w=majority";
const PORT = 3000;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('DB Connection Successful');
    });

app.post("/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );

        res.status(201).json({
            status: "success",
            data: {
                user,
            }
        })
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ status: "failure" });
    }
});

app.post('/signup', async (req, res) => {
    const newUser = new User(req.body);
    try {
        await newUser.save();
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: 'failure',
            error: e.message || e,
        });
    }
});

app.listen(3000, () => {
    console.log("Server app running on port:3000");
});