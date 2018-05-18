var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended:false});



module.exports = function (app) {
    app.get("/", function (req, res) {
        console.log(req.cookies);
        res.render('api');
    });
    app.post("/login", urlencodedParser, function (req, res) {
        res.send("Wellcome "+ req.body.username);
        console.log("username" , req.body.username);
        console.log("password" , req.body.password);
    });
    app.post("/loginjson", jsonParser, function (req, res) {
        res.send("OK");
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    })
}