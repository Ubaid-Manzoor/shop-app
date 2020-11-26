const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email not valid');
            }
        }
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 7
    },
    tokens: [{
        token: {
            type: String,
            require: true
        }
    }]
});




userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({ _id: user._id.toString()}, "thisissecret",{
        expiresIn: '1 day'
    });
    user.tokens.push({ token });

    return token;
}

const User = mongoose.model('User', userSchema);

module.exports = User;