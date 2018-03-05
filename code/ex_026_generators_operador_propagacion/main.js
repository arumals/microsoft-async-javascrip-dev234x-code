function* funGenerator(){
    yield 'a';
    yield;
    yield* [1,2,3];
    yield 123;
    return 'completado';
}

var arr = [...funGenerator()];
console.log(arr);
