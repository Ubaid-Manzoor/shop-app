const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/shop-app', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

db.once('open', function(){
    console.log("Connected")
})

module.exports = mongoose;