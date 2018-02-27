const apiUrl = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";
const apiKey = "012ff130efb54ef2963a04d8f0e79406";

const analyzeBtn = document.querySelector('#analyze-button');
const urlInput = document.querySelector('#url-input');
const imgContainer = document.querySelector('#image-container');
const attributesContainer = document.querySelector('#attributes-container');

analyzeBtn.addEventListener('click', () => {
    // create headers container
    const headers = new Headers();
    headers.set('Content-Type','application/json'); // define ctype
    headers.append('Ocp-Apim-Subscription-Key', apiKey); // set key
    // prepare url
    const requestUrl = apiUrl + "?" + encodeURI('returnFaceAttributes=age,gender')
    // retrieve photo url
    const url = urlInput.value;
    // prepare initObj
    const initObj = {
        method: 'POST',
        body: JSON.stringify({url}),
        headers,
    }
    // prepare request
    const request = new Request(requestUrl, initObj);
    // perform request
    fetch(request).then(result => {
        if(!result.ok) return Promise.reject(result.status);
        return result.json();
    }).then(json => {
        imgContainer.innerHTML = `<img src='${url}' />`;
        attributesContainer.innerHTML = `
            Age: ${json[0].faceAttributes.age}<br />
            Gender: ${json[0].faceAttributes.gender}
        `;
    }).catch(err => {
        console.log('Err:', err);
    });
});


