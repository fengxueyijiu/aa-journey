const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let routes = require('./routes');
var mongoose = require('mongoose');
const app=express();
routes(app);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
mongoose.Promise= global.Promise;
let dbURL = 'mongodb://localhost:27017/aa-journey';
mongoose.connect(dbURL);
var db=mongoose.connection;
db.once('open',function(){
  console.log('mongodb connect success')
})
app.listen(3000,function(){
  console.log('running on port 3000...')
})
