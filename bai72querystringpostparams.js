var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended:false});

var port = 3000;

app.use("/", function (req, res, next) {
    console.log("Request URL:", req.url);
    req.requestTime = new Date();
    next();
});
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    console.log(req.cookies);
    res.render('login');
});

app.get("/api", function (req, res) {
    res.json({
        firstName: "Mai",
        lastName: "Hoa"
    })
})
app.get("/user/:id", function (req, res) {
    res.render('user', {
        ID:req.params.id,
        queryString: req.query.qstr
    });
})
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
app.listen(port, function () {
    console.log("Sever on " + port);
});