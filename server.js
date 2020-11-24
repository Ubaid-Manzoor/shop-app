// Import inbuild Libraries
const path = require('path');

// Import Downloaded Libraries
const express = require('express');
const bodyParser = require('body-parser');

// Import Self Created Libraries
const shopOwnerRouter = require('./routes/shop-owner');

const mongoose = require('./util/database')
// const Product = require('./models/product');
// const Shop = require('./models/shop');




const app = express();

// app.set('views engine', 'ejs');
// app.set('views', 'views'); 

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(process.cwd(), 'public')));

// app.use('/admin',()=>{});

// app.use('/shop-owner', shopOwnerRouter);

// app.use('/customer',()=>{});


app.use((req, res, next) => {
    res.send("<h1>404 not found</h1>")
});

app.listen(3000);