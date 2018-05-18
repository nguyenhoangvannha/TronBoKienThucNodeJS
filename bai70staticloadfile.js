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
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    console.log(req.cookies);
    res.send(`
    <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>NodeJS Server</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./public/css/bootstrap.min.css">
</head>
<body>
    <h1>Hello {user}</h1>
    <h4>Request time ${req.requestTime}</h4>
    <a name="" id="" class="btn btn-success" href="#" role="button">Loaded css</a>
    
    <script src="./public/js/bootstrap.min.js"></script>
</body>
</html>
    `);
});

app.get("/api", function (req, res) {
    res.json({
        firstName: "Mai",
        lastName: "Hoa"
    })
})
app.get("/user/:id", function (req, res) {
    res.cookie("Username ", req.params.id);
    res.send(`<h1>Hello ${req.params.id}</h1>`);
})
app.listen(port, function () {
    console.log("Sever on " + port);
});