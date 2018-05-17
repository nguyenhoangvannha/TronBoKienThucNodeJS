var Emitter = require("events");
var emitter = new Emitter();
var config = require("./config");

emitter.on(config.events.BAD_SCORE, function () {
    console.log("Diem kem");
});
emitter.on(config.events.BAD_SCORE, function () {
    console.log("Thong bao!");
});
var scores = [10, 4];
for(var score of scores){
    if(score < 5){
        emitter.emit(config.events.BAD_SCORE);
    }
}
