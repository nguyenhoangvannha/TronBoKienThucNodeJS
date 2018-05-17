var obj  = {
    name : "Mai hoa",
    sayHello: function (p1, p2) {
        console.log(`Hello I am ${this.name}`);
        console.log("Params", p1, p2);
    }
}
obj.sayHello("Xin chao", 2018);
obj.sayHello.call({name: "Yen Phuong"}, "Xin chao", 2017);
obj.sayHello.apply({name: "Yen Phuong"}, ["Xin chao", 2016]);