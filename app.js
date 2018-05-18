var express = require('express');
var app = express();
var port = 3000;
app.use("/public", express.static(__dirname + "/public"));
app.get("/", function (req, res) {
    res.send(`
    <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>NodeJS Server</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="./public/css/bootstrap.min.css">
</head>
<body>
    <h1>Hello {user}</h1>
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
    res.send(`<h1>Hello ${req.params.id}</h1>`);
})
app.listen(port, function () {
    console.log("Sever on " + port);
});