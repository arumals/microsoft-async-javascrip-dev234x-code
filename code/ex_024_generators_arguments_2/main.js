function* funGenerator(){
    var a = yield 'a'; // retorna 'a' como valor y captura el argumento
    console.log('a:', a); // a tomará el valor del primer argumento enviado
    var b = yield 'b';
    console.log('b:', b);
    var c = yield 'c';
    console.log('c:', c);
}

var og = funGenerator();

var v1 = og.next(); // la primera llamada invocada inicia el proceso "sin argumentos"
console.log('v1:', v1);

var v2 = og.next('Andrew');
console.log('v2:', v2);

var v3 = og.next('Pete');
console.log('v3:', v3);

var v4 = og.next('Jordan');
console.log('v4:', v4);
