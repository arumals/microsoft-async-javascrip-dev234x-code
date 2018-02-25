var promise = Promise.resolve('hola');

var promise2 = promise.then(function(result){
    console.log(result);
    return result + ' mundo';
});

promise2.then(function(result){
    console.log(result);
});
