const userRepository = require('../repositories/user.repository');

class UserService {
    async getUserByEmail(email){
        return await userRepository.getUserByEmail(email);
    }

    async getAllUsers(){
        return await userRepository.getAllUsers();
    }
}

module.exports = UserService;