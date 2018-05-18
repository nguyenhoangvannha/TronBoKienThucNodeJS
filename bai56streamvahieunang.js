var http = require("http");
var fs = require("fs");
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-type":"text/html"
    });
    fs.createReadStream(__dirname +"/index.html").pipe(res);
}).listen("1337", "localhost");