const userRepository = require('../repositories/user.repository');

class UserService {
    async getUserByEmail(email){
        return await userRepository.getUserByEmail(email);
    }

    async getUserById(id){
        return await userRepository.getUserById(id);
    }

    async getAllUsers(){
        return await userRepository.getAllUsers();
    }
}

module.exports = UserService;