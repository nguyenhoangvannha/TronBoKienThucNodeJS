function Person(name, password) {
    this.name = name;
    this.password = password;
}
Person.prototype.getName = function () {
    return this.name;
}
Person.prototype.getPassword = function () {
    return this.password;
}
Person.prototype.getLevel = function () {
    return this.level;
}
Person.prototype.level = "admin";

function User(name) {
    this.name = name;
}
User.prototype = new Person();

var person = new Person("Nha", "123");
var user = new User("NACO","456");

console.log(user.getName());
console.log(user.getLevel());
console.log(user.getPassword());

Date.prototype.vnFormat = function () {
    var y = this.getFullYear();
    var m = this.getMonth() + 1;
    var d = this.getDate();
    return d + ":" + m + ":" + y;
}

var date = new Date();
console.log(date.vnFormat());