var fs = require("fs");
var zlib = require("zlib");
var readable = fs.createReadStream(__dirname +"/readme.txt",{
    encoding:"utf8",
    highWaterMark:16 * 1024
});
var writeable = fs.createWriteStream(__dirname + "/readmecopy.txt");
var compressed = fs.createWriteStream(__dirname + "/readme.txt.gz");
var gzib = zlib.createGzip();

//copy
readable.pipe(writeable);

//compress
readable.pipe(gzib).pipe(compressed);