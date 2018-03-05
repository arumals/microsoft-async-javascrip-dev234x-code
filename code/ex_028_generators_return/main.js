function* funGenerator(){
    yield 'a';
    yield 'b';
    yield 'c';
    return 'completado';
}

var og = funGenerator();

console.log(og.next());
console.log(og.return('return() ha sido invocado'));
console.log(og.next());
