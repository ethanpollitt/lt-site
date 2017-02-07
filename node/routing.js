module.exports.set = function(app, path) {
    var express = require("express");
    var session = require('express-session');
    var cookieParser = require('cookie-parser');
    var bodyParser = require("body-parser");
    var crypto = require("crypto");
    
    var router = express.Router();
    var hash = crypto.createHash("sha256");    

            
    /* ================================== */
    // Security middleware

    function checkAuth(req, res, next) {
        if (req.session === undefined || !req.session.sess_hash) {
            res.redirect("/login");
        } else {
            next();
        }
    }
    
    /* ================================== */
    // Application routing
    
    app.use(function (req, res, next) {
      console.log(req.method + " " + req.path);
      next();
    });    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser('S3CRE7'));
    app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: "boogeyman"
    }));
    app.use("/", router);
    app.use("/css", express.static(path + "css"));
    app.use("/img", express.static(path + "img"));
    app.use("/js/angular", express.static(path + "node_modules/angular"));
    app.use("/js/angular-route", express.static(path + "node_modules/angular-route"));
    app.use("/js/angular-sanitize", express.static(path + "node_modules/angular-sanitize"));
    app.use("/js/angular-ui-bootstrap", express.static(path + "node_modules/angular-ui-bootstrap"));
    app.use("/app", express.static(path + "app"));
    app.use("/admin", express.static(path + "admin"));
    
    app.get("/",function(req, res){
      res.sendFile(path + "/app/index.html");
    });
    
    /* ================================== */
    // Admin routing
    
    app.get("/login", function (req, res) {
        res.sendFile(path + "/admin/login.html");
    });
    
    app.post("/login", function (req, res) {
        var post = req.body;
        if (post.username === "admin" && post.password === "admin123$") {
            req.session.sess_hash = hash.update(post.username + post.password);
            res.redirect("/admin");
        } else {
            res.send("Bad user/pass");
        }
    });
    
    app.get("/logout", function (req, res) {
        delete req.session.sess_hash;
        res.redirect("/login");
    });
    
    app.get("/admin", checkAuth, function(req,res){
        res.sendFile(path + "/admin/index.html");
    });
    
    app.get("/admin/dates", checkAuth, function(req, res) {
        res.sendFile(path + "/admin/pages/dates.html");
    });
};