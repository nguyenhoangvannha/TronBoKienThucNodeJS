var fun1 = function () {
    console.log("Fun1");
}
var fun2 = function () {
    setTimeout(fun1, 2000);
    console.log("Fun2");
}
fun2();