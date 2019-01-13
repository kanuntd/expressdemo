const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const CoinRouter = require('./routes/CoinRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:a000000@ds051980.mlab.com:51980/coins');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/coins',CoinRouter);

app.listen(port, function(){
    console.log('Nose js Express js Tutorial', port)
});

app.get('/', function(req,res){
 res.sendFile(path.join(__dirname,'public', 'index.html'));
});

