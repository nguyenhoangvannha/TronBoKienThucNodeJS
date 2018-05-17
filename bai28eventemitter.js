var Emitter = require("./emitter");
var emitter = new Emitter();

emitter.on("bad", function () {
    console.log("Diem kem");
});
emitter.on("bad", function () {
    console.log("Thong bao!");
});
var scores = [10, 4];
for(var score of scores){
    if(score < 5){
        emitter.emit("bad");
    }
}
