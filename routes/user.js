const express = require('express');
const userController = require('../controllers/user');
const validate = require('../middleware/validate')
const defaultResponse = require('../middleware/fillDefaultResponse');
const auth = require('../middleware/auth');

const router = new express.Router();


router.get('/sign-up', defaultResponse.signUp, userController.signUpPage);
router.post('/sign-up', defaultResponse.signUp, validate, userController.signUp)

router.get('/login', defaultResponse.login, userController.loginPage);
router.post('/login', defaultResponse.login, userController.login);

router.get('/', (req, res)=>{
    res.render('main.ejs', {
        title: "Main Page",
        successMessage: ""
    });
})

module.exports = router;