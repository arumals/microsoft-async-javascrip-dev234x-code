function* funGeneratorA(){
    yield 'a';
    yield 'b';
    yield 'c';
    return 'completada funGeneratorA()';
}

function* funGeneratorB(){
    yield 1;
    yield* funGeneratorA();
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
