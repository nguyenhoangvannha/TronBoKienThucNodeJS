var obj = {
    sayHello : "Hello"
}
console.log(obj.sayHello);
var pro = "sayHello";
console.log(obj[pro]);

var arr = [];
arr.push(function () {
    console.log("hi");
});
arr.push(function () {
    console.log("hi 2");
});
arr.push(function () {
    console.log("hi 3");
});

arr[0]();
arr[1]();
arr[2]();
for(var item of arr){
    item();
}