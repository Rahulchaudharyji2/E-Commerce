const express = require('express');
const router = express.Router();
const catchAsync = require('../core/catchAsync');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const { BadRequestError, AuthenticationError } = require('../core/ApiError');
const jwt = require('jsonwebtoken');
const {isLoggedIn}=require('../Middleware/authMiddleware')
const authController=require('../Controllers/authController')

// Reference: https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/
const jwtSecretKey = "ifOO3gIusVyChhors3r3dAAlmCZR2xqc";

router.post('/register', catchAsync(async(req,res)=>{
    const {username, email, password} = req.body;
    
    //checking if user with given username already exits
    const isUserAlreadyExist = await User.findOne({username});
    if(isUserAlreadyExist) throw new BadRequestError('Username already exists');
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    //create user in database.
    const user = await User.create({username, email, password: hashedPassword});
    res.status(201).json({message:"User created successfully"})
    
}));


router.post('/login', catchAsync(async(req, res) => {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username });
    
    if (!user) {
        throw new AuthenticationError("User with this username doesn't exist");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new AuthenticationError('Invalid username or password');
    }

    const token = jwt.sign({ userId: user._id }, jwtSecretKey);

    // Setting a cookie in response.
    res.cookie('token', token, {
        httpOnly: false,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        withCredentials: true
    });

    res.status(200).json({ message: "Logged In Successfully."});
}));

router.post('/logout', catchAsync(isLoggedIn), (req, res) => {
    res.cookie('token', "", { httpOnly: false, withCredentials: true });
    res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;