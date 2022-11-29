import mongoose from 'mongoose';
import {string} from "prop-types";

const User = new mongoose.Schema({
    id: {type: string, required: true},
    name: {type: string, required: true},
    email: {type: string, required: true},
    password: {type: string, required: true},
});

export default mongoose.model('User', User);