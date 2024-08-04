const { BadRequestError } = require('../core/ApiError');
const jwt = require('jsonwebtoken')

const jwtSecretKey = process.env.JWT_SECRET || "ifOO3gIusVyChhors3r3dAAlmCZR2xqc";

const isLoggedIn = async(req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        throw new BadRequestError('Please login to continue');
    }
    try {
        // below methow will throw an exception in case token is invalid.
        const { userId } = jwt.verify(token, jwtSecretKey); 

        // Adding userId in the request object
        req.userId = userId;
        return next()
    }
    catch (err) {
        throw new BadRequestError('Inavlid Auth Token')
    }
}

module.exports= {
    isLoggedIn
}