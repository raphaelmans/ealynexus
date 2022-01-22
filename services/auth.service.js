const userRepository = require('../repositories/user.repository');
const ErrorResponse = require('../utils/errorResponse');
const UserService = require('./user.service');

const userService = new UserService();


class AuthService{
    async registerUser(firstName, lastName, email, password){
        const userObj = {
            firstName,
            lastName,
            email,
            password,
        }
        const user = await userRepository.insertUser(userObj);
        return user;
    }

    async loginUser(email,password){
        let user = await userService.getUserByEmail(email);
        if(!user){
            throw new ErrorResponse('User does not exist',400) 
        }

        const isPasswordValid = await user.matchPassword(password);

        console.log(isPasswordValid)

        if(!isPasswordValid){
            throw new ErrorResponse('Invalid credentials',401);
        }

        return user;
    }

}

module.exports = AuthService;