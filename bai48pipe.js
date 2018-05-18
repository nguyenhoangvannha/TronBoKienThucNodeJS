var fs = require("fs");
var readable = fs.createReadStream(__dirname +"/readme.txt",{
    encoding:"utf8",
    highWaterMark:16 * 1024
});
var writeable = fs.createWriteStream(__dirname + "/readmecopy.txt");
readable.pipe(writeable);