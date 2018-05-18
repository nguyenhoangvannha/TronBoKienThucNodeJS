var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
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
    res.render('index');
});

app.get("/api", function (req, res) {
    res.json({
        firstName: "Mai",
        lastName: "Hoa"
    })
})
app.get("/user/:id", function (req, res) {
    res.render('user', {
        ID:req.params.id
    });
})
app.listen(port, function () {
    console.log("Sever on " + port);
});