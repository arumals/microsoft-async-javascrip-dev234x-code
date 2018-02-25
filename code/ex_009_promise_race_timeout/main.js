var promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('completado en 5 segundos');
    }, 5000);
});
var promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('rechazado en 3 segundos');
    }, 3000);
});
Promise.race([promise1,promise2]).then(function(result){
    console.log(result);
}).catch(function(result){
    console.log(result);
})

