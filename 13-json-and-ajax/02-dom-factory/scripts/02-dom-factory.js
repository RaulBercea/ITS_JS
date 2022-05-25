/**
 * @file: 02-dom-factory.js
 * @author: Raul Bercea
 */

let carArray =
    '[{"id":1,"make":"Fiat","model":"Panda","doors":5,"features":["alloy rims","leather seats","air conditioning"],"engine":{"Cylinders":4,"HorsePower":69,"Displacement":1242},"electric":false,"licence plate":null},{"id":2,"make":"Fiat","model":"500e","doors":3,"features":["leather seats","air conditioning"],"engine":{"HorsePower":118,"PowerUsage":1242},"electric":true,"licence plate":null},{"id":3,"make":"Alfa Romeo","model":"Giulia","doors":5,"features":["cruise control","leather seats","alloy rims"],"engine":{"Cylinders":6,"HorsePower":134,"Displacement":1660},"electric":false,"licence plate":null},{"id":4,"make":"BMW","model":"i3","doors":5,"features":["alloy rims","leather seats","wood finishes"],"engine":{"HorsePower":100,"Displacement":1100},"electric":true,"licence plate":null},{"id":5,"make":"Jaguar","model":"ftype","doors":3,"features":["alloy rims","leather seats","air conditioning"],"engine":{"Cylinders":8,"HorsePower":575,"Displacement":4000},"electric":false,"licence plate":null}]';

let factory =
    '{"name":"factory1","employees":400,"main branch":true,"cars":[1,2,3,4,5],"contacts":{"phone":"123456789","email":"car@factory.com"},"ceo":null}';
/**
 * Function that prints an array of objects to the html page
 * @param {Array<Object>} array of objects
 * @param {Object} list an html node where the list of objects will go
 */
let printArrayOfObjects = function (array, list) {
    for (const obj of array) {
        // creating an unordered list node
        let ul = document.createElement("ul");
        
        // calling the printobject function
        printObject(obj, ul);

        // adding the list to the document
        list.appendChild(ul);
    }
};

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

// getting the two divs that will have the lists in the html page
const factoryList = document.getElementById("factory");
const carsContainer = document.getElementById("cars");

// applying the function
printArrayOfObjects(JSON.parse(carArray), carsContainer);
printObject(JSON.parse(factory), factoryList);
