const express = require('express');
const app = express();

//list of users
app.get('/', function(req, res){
    console.log('Hello World!');
});

//listen to port 8000
app.listen(3000,function(){ console.log("Hello World!") })