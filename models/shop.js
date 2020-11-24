const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
})

shopSchema.virtual('products',{
    ref: 'Product',
    localField: '_id',
    foreignField: 'shop_id'
})

shopSchema.virtual('owner', {
    ref: 'User',
    localField: 'owner_id',
    foreignField: '_id'
})

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;