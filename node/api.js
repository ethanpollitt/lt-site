module.exports.set = function(app, path) {
    var mongoose = require("mongoose");
    var crypto = require("crypto");
    var bodyParser = require("body-parser");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    mongoose.connect("mongodb://localhost/ltDb");
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
        // we"re connected!
    });

    var datesSchema = mongoose.Schema({
        date: String,
        city: String,
        state: String,
        venue: String,
        ticketLink: String
    });
    
    var imagesSchema = mongoose.Schema({
        path: String,
        text: String,
        date: String
    });
    
    var emailsSchema = mongoose.Schema({
        email: String,
        firstName: String,
        lastName: String
    });
    
    /* ================================== */
    // Security middleware

    function checkApiAuth(req, res, next) {
        var hash = crypto.createHmac("sha1", new Date().setMinutes(0, 0, 0).valueOf.toString()).update(secret).digest("hex");
        
        if (req.session === undefined || !req.session.api_auth) {
            res.end(JSON.stringify({error: true, msg: "auth required!", auth: false}))
        } if(req.session.api_auth != hash) {
            res.end(JSON.stringify({error: true, msg: "auth required!", auth: false}))
        } else {
            next();
        }
    }
    
    var secret = "losingteethsux669";
    
    /* ================================== */
    // Endpoints below
    

    // Dates ###############
    app.get("/api/auth", function(req, res) {
        var date = new Date();
        var hash = crypto.createHmac("sha1", new Date().setMinutes(0, 0, 0).valueOf.toString()).update(secret).digest("hex");
        req.session.api_auth = hash;
        res.end(JSON.stringify({error: false, auth: true}))
    });

    app.get("/api/dates", function(req, res) {
        var Dates = mongoose.model("Dates", datesSchema);

        Dates.find().exec(function(error, data) {
            res.end(JSON.stringify(data));
        });
    });
    
    app.post("/api/dates", checkApiAuth, function(req, res) {
        var Dates = mongoose.model("Dates", datesSchema);
        var newEvent = req.body.body;
        
        // TODO: need some validation
        
        console.log("Creating new event: " + JSON.stringify(newEvent));
        
        Dates.create(newEvent, function (error, small) {
            if(error)
                res.end(error);
            else    // saved successfully
                res.end(JSON.stringify({error: false, description: "success!"}));
        });
    });
    
    app.delete("/api/dates", checkApiAuth, function(req, res) {
        var Dates = mongoose.model("Dates", datesSchema);
        
        console.log("Req params: " + JSON.stringify(req.query));
        console.log("Removing event: " + req.query.id);
        
        Dates.findByIdAndRemove(req.query.id, function (error, small) {
            if(error)
                res.end(error);
            else    // saved successfully
                res.end(JSON.stringify({error: false, description: "success!"}));
        });
    });
    
    
    // Images ###############
    app.get("/api/images", function(req, res) {
        var Images = mongoose.model("Images", imagesSchema);

        Images.find().exec(function(error, data) {
            res.end(JSON.stringify(data));
        });
    });

    app.get("/api/images/:id", function(req, res) {
        var Images = mongoose.model("Images", imagesSchema);

        Images.findOne({id: req.params.id}).exec(function(error, data) {
            res.end(JSON.stringify(data));
        });
    });
    
    app.post("/api/images", checkApiAuth, function(req, res) {
        var Images = mongoose.model("Images", imagesSchema);
        var newImage = req.body.body;
        
        // TODO: need some validation
        
        console.log("Creating new image: " + JSON.stringify(newImage));
        
        Images.create(newImage, function (error, small) {
            if(error)
                res.end(error);
            else    // saved successfully
                res.end(JSON.stringify({error: false, description: "success!"}));
        });
    });
    
    app.delete("/api/images", checkApiAuth, function(req, res) {
        var Images = mongoose.model("Images", imagesSchema);
        
        console.log("Req params: " + JSON.stringify(req.query));
        console.log("Removing image: " + req.query.id);
        
        Images.findByIdAndRemove(req.query.id, function (error, small) {
            if(error)
                res.end(error);
            else    // saved successfully
                res.end(JSON.stringify({error: false, description: "success!"}));
        });
    });
    
        
    // Email ###############
    app.get("/api/emails", checkApiAuth, function(req, res) {
        var Emails = mongoose.model("Emails", emailsSchema);
        
        Emails.find().exec(function(error, data) {
            res.end(JSON.stringify(data));
        });
    });
    
    app.post("/api/emails", checkApiAuth, function(req, res) {
        var Emails = mongoose.model("Emails", emailsSchema);
        var newEmail = req.body.body;
        
        // TODO: need some validation
        
        console.log("Creating new email subscriber: " + JSON.stringify(newEmail));
        
        Emails.create(newEmail, function (error, small) {
            if(error)
                res.end(error);
            else    // saved successfully
                res.end(JSON.stringify({error: false, description: "success!"}));
        });
    });
    
};