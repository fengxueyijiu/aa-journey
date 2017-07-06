const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let routes = require('./routes');
const app=express();
routes(app);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.listen(3000,function(){
  console.log('running on port 3000...')
})
