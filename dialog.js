var EventEmitter = require("events");
class Dialog extends EventEmitter{
    constructor(){
        super();
        this.message = "Hello";
    }
    sayHello (data) {
        console.log(`Hello ${this.message} ${data}`);
        this.emit("hello", data);
    }
}
module.exports = Dialog;