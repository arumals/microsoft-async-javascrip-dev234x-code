const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(result){
        if(!result.ok) {
            return Promise.reject(result.status);
        }
        return result.json();
    })
    .then(function(result){
        console.log('Json:', result);
    })
    .catch(function(err){
        console.log('Error:', err);
    });
