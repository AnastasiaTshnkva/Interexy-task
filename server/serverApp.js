import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 3004;
const DB_URL = 'mongodb+srv://user:user@cluster0.jd7wap1.mongodb.net/?retryWrites=true&w=majority';

const serverApp = express();

serverApp.use(express.json());
serverApp.use('/', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        serverApp.listen(PORT, () => {console.log('SERVER IS WORKING ON PORT' + PORT)})
    } catch (err) {
        console.log(err)
    }
}

startApp();