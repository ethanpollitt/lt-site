var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/';

// Enable compression plugin
var compression = require("compression");
app.use(compression());

var routing = require("./node/routing.js");
routing.set(app, router, path)

var apis = require("./node/api.js")
apis.set(app, router, path);

app.use("*", function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(80, function(){
  console.log("Live at Port 80");
});

