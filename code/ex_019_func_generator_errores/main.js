function* funGenerator(){
    yield 'a';
    yield 'b';
    throw new Error("error encontrado en funGenerator()");
    yield 'c';
    yield 'd';
}

var objGenerator = funGenerator();

try {
    console.log('c1',objGenerator.next());
    console.log('c2',objGenerator.next());
    console.log('c3',objGenerator.next());
    console.log('c4',objGenerator.next());
}catch(e){
    console.log(e.message);
}

console.log('c5',objGenerator.next());
console.log('c6',objGenerator.next());

