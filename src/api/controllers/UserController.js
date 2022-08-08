import User from '../models/User';

module.exports = {
    async list(req, res) {     
        const userList = await User.findAll();

        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: userList
            }
        )
    },
};