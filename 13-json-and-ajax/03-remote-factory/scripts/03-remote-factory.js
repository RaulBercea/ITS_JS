const jsonBlobIdCars = "https://jsonblob.com/api/jsonBlob/979092603962408960";
const JSONBlobIDFactory = "http://jsonblob.com/978962332843786240";

// generate a new get request for the cars array
let getRequest = new XMLHttpRequest();

getRequest.open('GET', jsonBlobIdCars);

getRequest.onload = function () {
    if (getRequest.status === 200) {
        // printing the object to the html page if the request is successfull
        objectArrayPrint(JSON.parse(getRequest.responseText));
    }
    else {
        console.log("request failed " + getRequest.status);
    }
}

getRequest.send();

/**
 * Function that adds a JSON array to the HTML dom
 * @param {Array<Object>} arrayOfObjects 
 */
let printObject = function (objects, list) {
    for (const key in objects) {
        // getting the current object
        let curr = objects[key];

        // creating a list element
        let li = document.createElement("li");

        // creating a span element
        let span = document.createElement("span");

        // adding the name of the current propriety to the span
        let spanText = document.createTextNode(`${key}: `);
        span.appendChild(spanText);

        // adding the name to the list
        li.appendChild(span);

        // checking if the current object is an object and not an array
        if (curr !== null && typeof curr === "object" && !Array.isArray(curr)) {
            // adding an li element to the list
            list.appendChild(li);

            // adding the list to the unordered list
            printObject(curr, list);
        } else {
            let text;

            // check if the current object is an array
            if (Array.isArray(curr)) {
                // if the current object is an array it turns it into a string
                text = curr.join(", ");
            } else if (curr === null) {
                // if the object is null it turns it in 'N/A'
                text = "N/A";
            } else {
                // in all other cases it converts the text to the curent object
                text = curr;
            }

            // adding the object as a list to the document
            const listText = document.createTextNode(text);
            li.appendChild(listText);
            list.appendChild(li);
        }
    }
};