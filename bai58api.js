var http = require("http");
var fs = require("fs");
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-type":"application/json"
    });
    var obj = {
        firstName:"Hoa",
        lastName:"Mai"
    };
    res.end(JSON.stringify(obj));
}).listen("1337", "localhost");