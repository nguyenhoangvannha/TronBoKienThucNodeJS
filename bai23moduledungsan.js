var util = require("util");
var name = "Iron Main";
var msg = util.format("Hello, %s", name);
util.log(msg);


var link = "https://nodejs.org/dist/latest-v8.x/docs/api/http.html";
var url = require("url");
var urlInfo = url.parse(link);
console.log(urlInfo);