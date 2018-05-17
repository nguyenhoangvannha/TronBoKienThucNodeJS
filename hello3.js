function Person() {
    this.message = "Hello module 3";
    this.sayHello = function () {
        console.log(this.message);
    }
}
module.exports = new Person();