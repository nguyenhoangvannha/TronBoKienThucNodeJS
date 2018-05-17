var Dialog = require("./dialog");
var dialog = new Dialog();
dialog.on("hello", function (data) {
    console.log("Co mot loi chao", data);
});
dialog.sayHello("2018");