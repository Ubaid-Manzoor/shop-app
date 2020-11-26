const auth = (req, res, next)=>{
    // console.log(req.header('Cookie').get('token'));
    console.log(req.cookies);
    console.log(req.signedCookies);
    next();
}

module.exports = auth;