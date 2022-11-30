import User from './User.js';

class UserController {
    async create(req, res) {
        try {
            const {name, email, password} = req.body;
            const user = await User.create({name, email, password})
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getAll(req, res) {
        try {
            const users = await User.find();
            return res.json(users);
        } catch (err) {
            res.status(500).json(err)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: 'id is not specified'})
            }
            const user = await User.findById(id);
            return res.json(user);
        } catch (err) {
            res.status(500).json(err)
        }
    }

    async update(req, res) {
        try {
            const user = req.body;
            if(!user._id) {
                res.status(400).json({message: 'id is not specified'})
            }
            const updatedUser = await User.findByIdAndUpdate(user._id, user, {new: true});
            res.json(updatedUser);
        } catch (err) {
            res.status(500).json(err)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            if(!id) {
                res.status(400).json({message: 'id is not specified'})
            }
            const user = await User.findByIdAndDelete(id);
            return res.json(user);
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

export default new UserController();