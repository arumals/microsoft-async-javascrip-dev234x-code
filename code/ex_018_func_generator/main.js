function* funGenerator(){
    yield 'a';
    yield;
    yield 123;
    return 'completado';
}

var objGenerator = funGenerator();

console.log(objGenerator.next());
console.log(objGenerator.next());
console.log(objGenerator.next());
console.log(objGenerator.next());
console.log(objGenerator.next());
