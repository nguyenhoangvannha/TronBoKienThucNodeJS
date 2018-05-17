function changeByValue(a){
    ++a;
}
var a = 10;
changeByValue(a);
console.log(a);
function changeByRef(obj){
    obj.pro1 = function () {
        
    };
    obj.pro2 = function () {
        
    };
}

var obj = {};
obj.pro1 = {};
changeByRef(obj);
console.log(obj);