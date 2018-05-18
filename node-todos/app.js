var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config/index');
var setupController = require('./api/controller/setupController');
var todoController = require('./api/controller/todoController');

var app = express();
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan("dev"));

app.set('view engine', 'ejs');

setupController(app);
todoController(app);

app.get('/', function (req, res) {
   res.render("index"); 
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});