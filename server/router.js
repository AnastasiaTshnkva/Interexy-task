import Router from 'express';
import User from "./User.js";

const router = new Router();

router.post('/users', async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = await User.create({name, email, password})
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }});

router.get('/users');
router.get('/users/:id');
router.put('/users');
router.delete('/users/:id');

export default router;