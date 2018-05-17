function sayHello() {
    console.log("Hello NodeJS");
}
function logSay(fn) {
    fn();
}
logSay(sayHello);
var sayGoodbye = function () {
    console.log("Goodbye NodeJS");
}
sayGoodbye();
logSay(function () {
   console.log("This is an expression"); 
});