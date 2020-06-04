const User = require('../models/User');


module.exports = {
    save: async (req, res) => {
        try {
            let { email, password, name, avatar } = req.body;
            const result = await User.create({
                email, password, name, avatar
            });
            res.status(200).json({ result });
        } catch (error) {
            res.status(401).json({ error });
        }
    },

    edit: async (req, res) => {
        try {
            let id = req.params.id;
            let { email, password, name, avatar } = req.body;
            let result = await User.update({ email, password, name, avatar },
                {
                where: {
                    id
                }
            });
            res.status(200).json({ result });
        } catch (error) {
            res.status(401).json({ error });
        }
    }
};