var promise = Promise.resolve('hola');
var promise2 = promise.then(function(result){
    console.log(result);
    return Promise.resolve('12345');
});
promise2.then(function(result){
    console.log(result);
});

