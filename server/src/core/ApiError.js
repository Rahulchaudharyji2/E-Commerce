class BadRequestError extends Error{
    constructor(message = "Bad request") {
        super(message);
        this.status = 400;
    }
}

class InternalServerError extends Error{
    constructor(message = "Internal server request") {
        super(message);
        this.status = 500;
    }
}

class AuthenticationError extends Error{
    constructor(message = "Authentication Error") {
        super(message);
        this.status = 401;
    }
}

module.exports = {
    BadRequestError,
    InternalServerError,
    AuthenticationError
}