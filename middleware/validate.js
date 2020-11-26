const validator = require('validator');
const User = require('../models/user');


const validate = async (req, res, next)=>{
    let { password, confirmPassword, email, defaultResponse } = req.body;

    try{
        password = password.trim();
        confirmPassword = confirmPassword.trim();
        email = email.trim();

        const message = {};
        if(password.length < 7){
            message["passwordError"] = "min 7 char needed";
        }
        if(password !== confirmPassword){
            message["confirmPasswordError"] = "password did not match";
        }
        if(!validator.isEmail(email)){
            message["emailError"] = "email not valid";
        }else if(await User.findOne({ email })){
            message["emailError"] = "email already exits"
        }

        if(Object.keys(message).length > 0){
            throw new Error(JSON.stringify(message));
        }
        

        next();
    }catch(err){
        delete req.body.defaultResponse;
        const message = JSON.parse(err.message);
        res.status(400).render(`./user${req.url}.ejs`,{
            ...defaultResponse,
            ...message,
            ...req.body
        })
    }
}

module.exports = validate;
