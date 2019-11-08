const express = require('express');
const app = express();

//list of users
app.get('/', function(req, res){
    res.json({
        success: true,
        message: 'Hello world'
    })
});

//listen to port 8000
app.listen(3000,function(){ console.log("server is running") })