var obj = {name:"nha", age:21, say: function () {
    console.log(this.age);
}};
console.log(obj.say());