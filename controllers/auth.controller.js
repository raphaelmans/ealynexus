
const AuthService = require('../services/auth.service');

const authService = new AuthService();

const authController = {
    loginUser: async(req,res,next) =>{
        const {
            email,
            password,
        } = req.body;
        const user = await authService.loginUser(email,password);

        res.status(200).json({
            success: true,
            data: user,
        })
    },
    registerUser: async (req, res, next) => {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const user = await authService.registerUser(firstName, lastName, email, password);

        res.status(200).json({
            success: true,
            data: user
        });
    },
}

module.exports = authController;