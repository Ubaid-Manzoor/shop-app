const mongoose = require('mongoose');
const validator = require('validator');

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
    type: {
        type: String,
        require: true,
        trim: true,
        validate(value){
            if(!['owner', 'customer', 'admin'].includes(value)){
                throw new Error('not valid type');
            }
        }
    },
    tokens: [{
        type: String,
        required: true
    }]
});


const User = mongoose.model('User', userSchema);

module.exports = User;