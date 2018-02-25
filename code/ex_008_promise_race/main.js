var promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('completado en dos segundos');
    }, 2000);
});
var promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('completado en tres segundos');
    }, 3000);
});
Promise.race([promise1,promise2]).then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});
