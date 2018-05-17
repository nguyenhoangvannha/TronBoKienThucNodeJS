var EventEmitter = require("events");
var util = require("util");
function Dialog() {
    this.message = "Hello";

}
util.inherits(Dialog, EventEmitter);
Dialog.prototype.sayHello = function () {
    console.log(this.message);
    this.emit("hello");
}
var dialog = new Dialog();
dialog.on("hello", function () {
    console.log("Co mot loi chao");
});
dialog.sayHello();