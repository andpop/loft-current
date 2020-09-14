var arg = 1;

var F = function(arg) {
    (function() { this.a = arg; })();
}

F.prototype.a = 3;

var obj = new F(2);
// console.log(obj);
// obj.sayHello();

console.log(obj.a);