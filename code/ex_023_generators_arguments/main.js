function* funGenerator(){
    var a = yield;
    console.log(a);
    var b = yield;
    console.log(b);
    var c = yield;
    console.log(c);
}

var og = funGenerator();

var v1 = og.next(0);
console.log(v1);
var v2 = og.next(1);
console.log(v2);
var v3 = og.next(2);
console.log(v3);
var v4 = og.next(3);
console.log(v4);
var v5 = og.next(4);
console.log(v5)
var v6 = og.next(5);
console.log(v6);
