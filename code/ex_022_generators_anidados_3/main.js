function* funGenerator(){
    yield 'a';
    yield* ['b','c','d'];
    yield 'f';
    return 'g';
}

var og = funGenerator();

console.log(og.next());
console.log(og.next());
console.log(og.next());
console.log(og.next());
console.log(og.next());
