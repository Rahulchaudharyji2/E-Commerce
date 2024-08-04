const mongoose = require('mongoose');
const {Schema}= mongoose;
const user= new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique:true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},{timestamps:true,versionKey:false})

const User = mongoose.model('User', user); 



module.exports = User;