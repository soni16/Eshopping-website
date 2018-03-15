var express= require('express');
var path=require('path');
var bodyparser=require('body-parser');
var filepath=path.join(__dirname,'public');
//var routes = require('./server/routes');
var app=express();
app.use(express.static(filepath));

app.use(bodyparser.json());
app.get('/',function(req,res){
res.sendFile(filepath+'/index.js');
});


app.listen(4001);