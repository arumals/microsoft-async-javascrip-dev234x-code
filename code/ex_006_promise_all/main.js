var promise1 = Promise.resolve('hola');
var promise2 = Promise.resolve('hola2');
var promise3 = 43;

Promise.all([promise1, promise2, promise3]).then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})
