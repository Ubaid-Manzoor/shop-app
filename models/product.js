const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shop_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Shop'
    }
}) 
const Product = mongoose.model("Product", productSchema);

module.exports = Product;