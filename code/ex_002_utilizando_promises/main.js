var promise = new Promise(function(resolve, reject){
    var seCumple = true;
    setTimeout(function(){
        if(seCumple) resolve('se cumple');
        else reject(Error('no se cumple'));
    }, 2000);
});

promise.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
});
