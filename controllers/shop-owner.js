const Product = require('../models/shop');

exports.postCreateShop = (req, res, next)=>{
    const { name, shop_owner } = req.body;
    console.log(name, shop_owner);
    Product.create({
        name,
        shop_owner
    })
    .then( (result) => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getCreateShop = (req, res, next)=>{
    res.render('../views/shop/create-shop.ejs', {
        title: "Create Shop"
    });
}
