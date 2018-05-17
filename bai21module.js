var hello1 = require("./hello1");
hello1();

var hello2 = require("./hello2");
hello2.sayHello();
hello2.sayHi();

var hello3 = require("./hello3");
hello3.sayHello();
hello3.message = "Change hello 3";

var hello32 = require("./hello3");
hello32.sayHello();

var Hello4 = require("./hello4");
var hello4 = new Hello4();
hello4.sayHello();
hello4.message = "Change 4";

var hello5 = require("./hello5");
hello5.sayHello();