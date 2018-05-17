var util = require('util');
function Person() {
    this.firstName = "Hoa";
    this.lastName = "Mai";
}
Person.prototype.sayHello = function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}
function Student() {
    Person.apply(this, []);
    this.id = 1234;
}
util.inherits(Student, Person);
var student = new Student();
console.log(student.sayHello());