var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("/",router);
app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/js/angular", express.static(__dirname + "/node_modules/angular"));
app.use("/js/angular-route", express.static(__dirname + "/node_modules/angular-route"));
app.use("/js/angular-ui-bootstrap", express.static(__dirname + "/node_modules/angular-ui-bootstrap"));
app.use("/app", express.static(__dirname + "/app"));

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(80,function(){
  console.log("Live at Port 80");
});

