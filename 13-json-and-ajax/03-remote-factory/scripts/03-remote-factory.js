const jsonBlobIdCars = "http://jsonblob.com/api/jsonBlob/978961243226521600";
const JSONBlobIDFactory = "http://jsonblob.com/978962332843786240";

// generate a new get request for the cars array
let getRequest = new XMLHttpRequest();

getRequest.open('GET',jsonBlobIdCars);

getRequest.onload = function(){
    if(getRequest.status === 200){
        // printing the object to the html page if the request is successfull
        objectArrayPrint(JSON.parse(getRequest.responseText));
    }
    else{
        console.log("request failed "+getRequest.status);
    }
}

getRequest.send();

/**
 * Function that adds a JSON array to the HTML dom
 * @param {Array<Object>} arrayOfObjects 
 */
function objectArrayPrint(arrayOfObjects) {
    let bodyDiv = document.getElementById("cars");

    for(let carObject of arrayOfObjects){
        let currentObject = carObject
        

        for(key in currentObject){
            let div = document.createElement("div");

            div.innerText = key+" : ";

            if(typeof currentObject[key] === "object" && !Array.isArray(currentObject[key])){
                for(cur in currentObject[key]){
                    var objectSpan = document.createElement("span");
                    objectSpan.innerText = cur+" : "+currentObject[key][cur]+" ";    
                    div.appendChild(objectSpan);
                    objectSpan.classList.add("objectDiv");
                }
                
            }
            else if(Array.isArray(currentObject[key])){
                for (let cur of currentObject[key]) {
                    let arraySpan = document.createElement("span");
                    arraySpan.innerText = cur + " ";
                    div.appendChild(arraySpan);
                }
            }
            else{
                let dataSpan = document.createElement("span");
                dataSpan.innerText = currentObject[key];
                div.appendChild(dataSpan);
            }
            
            document.body.appendChild(div);
        }
    }

}