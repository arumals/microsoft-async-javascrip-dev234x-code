function* funGenerator(){
    var a = yield 'a';
    console.log(a);
    var b = yield 'b';
    console.log(b);
    var c = yield 'c';
    console.log(c);
    return 'completado!';
}

var go = funGenerator();

console.log(go.next());
console.log(go.next(123));
console.log(go.throw(new Error('error invocado')));
console.log(go.next('abc'));
