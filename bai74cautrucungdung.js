var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var apiController = require("./controller/apiController");
var homeController = require("./controller/homeController");
var port = 3000;

app.use("/", function (req, res, next) {
    console.log("Request URL:", req.url);
    req.requestTime = new Date();
    next();
});
apiController(app);
homeController(app);
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.listen(port, function () {
    console.log("Sever on " + port);
});