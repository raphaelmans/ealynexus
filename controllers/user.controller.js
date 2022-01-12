
const UserService = require('../services/user.service');

const userService = new UserService();

const userController = {
    getAllUsers: async (req, res, next) => {
        const users = await userService.getAllUsers();
        res.status(200).json({
            success: true,
            data: users,
        });
    },

    getUserByEmail: async (req, res, next) => {
        const {
            email
        } = req.body;
        const user = await userService.getUserByEmail(email);

        res.status(200).json({
            success: true,
            data: user,
        })
    },

};

module.exports = userController;