class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}
var person = new Person("Hoa", "Phuong");
person.sayHello();
console.log(person instanceof Person);