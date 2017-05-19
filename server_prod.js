var crypto = require('crypto');
var express = require("express");
var app = express();

var path = __dirname + '/';

// Enable compression plugin
var compression = require("compression");
app.use(compression());

var routing = require("./node/routing.js");
routing.set(app, path)

var apis = require("./node/api.js")
apis.set(app, path);

var helmet = require("helmet");
app.use(helmet());

app.use("*", function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(80, function(){
  console.log("Live at Port 80");
});

