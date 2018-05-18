var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var apiController = require("./controller/apiController");
var homeController = require("./controller/homeController");
var mysql = require('mysql');
var port = 3000;

app.use("/", function (req, res, next) {
    console.log("Request URL:", req.url);
    req.requestTime = new Date();
    var connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"testdb"
    });
    connection.connect();
    connection.query("SELECT * FROM tbl_sinhvien", function (err,rows,fiels) {
        if(err){
            throw err;
        }
       console.log(rows); 
    });
    connection.end();
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