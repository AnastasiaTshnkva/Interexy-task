import express from 'express';
import mongoose from 'mongoose';
import User from './User.js';

const PORT = 3004;
const DB_URL = 'mongodb+srv://user:user@cluster0.jd7wap1.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json())

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => {console.log('SERVER IS WORKING ON PORT' + PORT)})
    } catch (err) {
        console.log(err)
    }
}

startApp();