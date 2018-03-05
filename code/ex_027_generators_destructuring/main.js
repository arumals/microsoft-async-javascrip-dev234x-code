function* funGenerator(){
    yield 'a';
    yield;
    yield* [1,2,3];
    yield 123;
    return 'completado';
}

var [a,b,c,d,e,f,g] = funGenerator(); // destructurar el generador

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
