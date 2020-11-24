const express = require('express');

const shopController = require('../controllers/shop-owner'); 

const router = express.Router();

router.post('/create-shop', shopController.postCreateShop);

router.get('/create-shop', shopController.getCreateShop);

module.exports = router;

