const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res, next)=>{
    const { defaultResponse } = req.body; delete req.body.defaultResponse;

    const user = new User(req.body);
    delete user.confirm_password;
    try{
        user.password = await bcrypt.hash(user.password, 8);

        const token = await user.generateAuthToken();
        await user.save();

        res.cookie('token', token, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            secure: false,
            httpOnly: true
        })

        res.status(201).render('./main.ejs',{
            title: "shop-app",
            successMessage: "Sign up succesful"
        })
    }catch(err){

        res.status(400).render('./user/sign-up.ejs',{
            ...defaultResponse,
            errorMessage: err.message,
        });
    }
    
}

exports.signUpPage = async (req, res, next)=>{
    const { defaultResponse } = req.body; delete req.defaultResponse;

    if(req.cookies['token']){
        return res.redirect('/');
    }

    res.render('./user/sign-up.ejs',{
        ...defaultResponse,
        ...req.body
    });
}

exports.login = async (req, res, next)=>{
    let { defaultResponse, email, password } = req.body; delete req.defaultResponse;

    const user = new User(req.body);

    try{
        email = email.trim();
        password = password.trim();

        if(await User.findOne({ email })){
            const token = await user.generateAuthToken();
            user.tokens.push(token); await user.save();

            res.cookie('token', token, {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
                secure: false,
                httpOnly: true
            })

            res.status(201).render('./main.ejs',{
                ...defaultResponse,
                successMessage: "Login succesful"
            })
        } 
    }catch(err){
        res.status(400).render('./user/login.ejs',{
            ...defaultResponse,
            errorMessage: err.message
        })
    }
}


exports.loginPage = async (req, res, next)=>{
    const { defaultResponse } = req.body; delete req.defaultResponse;
    if(req.cookies['token']){
        return res.redirect('/');
    }

    res.render('./user/login.ejs',{
        ...defaultResponse,
        ...req.body
    })
}