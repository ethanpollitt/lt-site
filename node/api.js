module.exports.set = function(app, path) {
    var mongoose = require("mongoose");
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
    // Endpoints below

    app.get("/dates", function(req, res) {
        var Dates = mongoose.model("Dates", datesSchema);

        Dates.find().exec(function(err, data) {
            res.end(JSON.stringify(data));
        });
    });
    
    app.post("/dates", function(req, res) {
        var Dates = mongoose.model("Dates", datesSchema);
        var newEvent = req.body.body;
        
        // TODO: need some validation
        
        console.log("Creating new event: " + JSON.stringify(newEvent));
        
        Dates.create(newEvent, function (err, small) {
            if(err) 
                res.end(err);
            else    // saved successfully
                res.end(JSON.stringify({error: false, description: "success!"}));
        });
    });
    
    app.delete("/dates", function(req, res) {
        var Dates = mongoose.model("Dates", datesSchema);
        
        console.log("Req params: " + JSON.stringify(req.query));
        console.log("Removing event: " + req.query.id);
        
        Dates.findByIdAndRemove(req.query.id, function (err, small) {
            if(err) 
                res.end(err);
            else    // saved successfully
                res.end(JSON.stringify({error: false, description: "success!"}));
        });
    });
};