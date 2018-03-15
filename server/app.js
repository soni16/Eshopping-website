var express = require("express");
var app = express();
var path=require('path');
var bodyParser = require("body-parser");
var filepath=path.join(__dirname,'../public');
var methodOverride = require("method-override");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/db");
// App configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(filepath));

app.use(methodOverride());
console.log("path",filepath);
app.get("/", function(req, res) { 
console.log("err",err);
 res.sendFile(filepath + "/index.html");
 // res.send("Hello World!");
});

require("./route/index")(app);
// var fashionCtrl = require("./controller/fashionCtrl");
// app.post("/addFahion",fashionCtrl.create); // Create

app.listen(5000, function(){
 console.log("index.js listening on port 5000");
});

