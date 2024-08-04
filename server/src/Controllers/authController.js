const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const { BadRequestError } = require('../core/ApiError');

const registerUser = async (req, res) => {
    const { username, password, email } = req.body;

    // checking if user with given username already exists
    const isUserAlreadExist = await User.findOne({ username });

    if (isUserAlreadExist) {
        throw new BadRequestError('User with username already exists');
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user in database.
    const user = await User.create({ username, password: passwordHash, email });

    res.status(201).json({ message: 'User created successfully' });
}


module.exports = {
    registerUser
}