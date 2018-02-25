var promise = Promise.resolve([1,2,3,4]);

promise.then(function(result){
    console.log(result);
    return result.map(x => x * x);
}).then(function(result2){
    console.log(result2);
    return result2.filter(x => x > 10)
}).then(function(result3){
    console.log(result3);
    return result3.toString() + '!!';
}).then(function(result4){
    console.log(result4);
    return result4;
}).catch(function(error){
    console.log(error);
});

