const mongoose = require('mongoose');
const User = require('../models/user.model');


const userRepository = {
    insertUser: (userObj) => User.create(userObj),
    getUserByEmail: (email) => User.findOne({ email: email }),
    getAllUsers: () => User.find({}),
}

module.exports = userRepository;