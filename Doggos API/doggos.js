const DOG_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggo(){

    const promise = fetch(DOG_URL);
    const doggos = document.querySelector(".doggos")
    
    promise.then(function(response){
        const processingResponse = response.json();
        return processingResponse;
    }).then(function(processedResponse){
        const img = document.createElement("img")
        img.src = processedResponse.message;
        img.alt = "cute-doggo";
        doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addDoggo);
