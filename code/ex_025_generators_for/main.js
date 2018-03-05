function* funGenerator(){
    yield 'a';
    yield;
    yield* [1,2,3];
    return 'completado';
}

for(var x of funGenerator()){
    console.log(x);
}
