// Import inbuild Libraries
const path = require('path');

// Import Downloaded Libraries
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const reload = require('reload');
const http = require('http');

// Import Self Created Libraries
const shopOwnerRouter = require('./routes/shop-owner');
const userRouter = require('./routes/user');
const mongoose = require('./util/database')

// Import Models
const User = require('./models/user');
const Shop = require('./models/shop');
const Product = require('./models/product');




const app = express();

app.set('views engine', 'ejs');
app.set('views', 'views'); 

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/admin',()=>{});

app.use('/shop-owner', shopOwnerRouter);

app.use('/customer',()=>{});

app.use('/', userRouter);


app.use((req, res, next) => {
    res.send("<h1>404 not found</h1>")
});

app.listen(3000);