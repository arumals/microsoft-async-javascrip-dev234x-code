function* funGeneratorA(){
    yield 'a';
    yield 'b';
    return 'completada funGeneratorA()';
}

function* funGeneratorB(){
    yield 1;
    var valA = yield* funGeneratorA();
    yield valA;
    yield 2;
    yield 3;
    return 'completada funGeneratorB()';
}

var oG = funGeneratorB();

console.log(oG.next());
console.log(oG.next());
console.log(oG.next());
console.log(oG.next());
console.log(oG.next());
console.log(oG.next());
console.log(oG.next());
console.log(oG.next());
console.log(oG.next());
