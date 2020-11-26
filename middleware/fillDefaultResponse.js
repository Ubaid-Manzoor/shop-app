

exports.signUp = (req, res, next)=>{
    req.body.defaultResponse = {
        title: 'Sign Up',
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        successMessage: "",
        errorMessage: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    };
    next();
}

exports.login = (req, res, next)=>{
    req.body.defaultResponse = {
        title: "Login",
        email: "",
        password: "",
        errorMessage: "",
        emailError: "",
        passwordError: "",
    }
    next();
}

