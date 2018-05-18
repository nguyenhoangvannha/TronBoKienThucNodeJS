var express = require('express');
var app = express();
var port = 3000;
app.get("/", function (req, res) {
    res.send("<h1>Hello</h1>");
});
app.get("/api", function (req, res) {
    res.json({
        firstName:"Mai",
        lastName:"Hoa"
    })
})
app.get("/user/:id", function (req, res) {
    res.send(`<h1>Hello ${req.params.id}</h1>`);
})
app.listen(port, function () {
    console.log("Sever on " + port);
});