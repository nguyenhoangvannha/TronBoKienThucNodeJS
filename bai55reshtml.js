var http = require("http");
var fs = require("fs");
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-type":"text/html"
    });
    var html = fs.readFileSync(__dirname + "/index.html", "utf8");
    var user = "Hoa Mai";
    html = html.replace("{user}", user);
    res.end(html);
}).listen("1337", "localhost");