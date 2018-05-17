var person = {
    firstName: "",
    lastName: "",
    getFullName: function () {
        return this.firstName + this.lastName;
    }
}
var hoa = Object.create(person);
hoa.firstName = "Hoa";
hoa.lastName = "Ha";

var yen = Object.create(person);
yen.firstName = "Yen";
yen.lastName = "Da";

console.log(hoa.getFullName());
console.log(yen.getFullName());
