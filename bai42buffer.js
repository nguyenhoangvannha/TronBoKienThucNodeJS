var buffer = new Buffer("Xin chào", "utf8");
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toString("ascii"));
console.log(buffer.toJSON());
buffer.write("New");
console.log(buffer.toString());