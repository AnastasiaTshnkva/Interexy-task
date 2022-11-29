import express from 'express';
import mongoose from 'mongoose';
import User from './User.js';

const PORT = 3004;
const DB_URL = 'mongodb+srv://user:user@cluster0.jd7wap1.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json())

app.post('/', async (req, res) => {
    const {id, name, email, password} = req.body;
    const user = await User.create({id, name, email, password})
    res.status(200).json('server is working now')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => {console.log('SERVER IS WORKING ON PORT' + PORT)})
    } catch (err) {
        console.log(err)
    }
}

startApp();

// const express = require('express');
// const app = express();
// const path = require('path');
//
// app.use(express.static(path.join(__dirname, '../public')))
//
// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/../public/index.js`)
// })
//
// app.get('/', (req, res) => {
//     res.send({message: 'Hello world!'});
// });
//
// app.listen(3004, () => {
//     console.log('Application listening on port 3004');
// });