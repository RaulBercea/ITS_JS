/**
 * function that returns a string made of a noun and a numnber
 * if the number is greater than 1 the function converts the noun to plural
 * it can also handle a few iregular plurals
 * @param {string} noun the noun
 * @param {number} num the number of objects
 * @returns the noun and the number adjusted if there are more than tow objects
 */
function pluralize(noun, num) {
    //using a switch case to handle irregular plurals
    switch (noun) {
        case "sheep":
            if (num > 1) {
                console.log("there are " + num + " " + noun);
                return num + " " + noun;
            }
            else {
                console.log("there is " + num + " " + noun);
                return num + " " + noun;
            }
            break;
        case "goose":
            if (num > 1) {
                console.log("there are " + num + " " + "geese");
                return num + " " + "geese";
            }
            else {
                console.log("there is " + num + " " + noun);
                return num + " " + noun;
            }
        case "mouse":
            if (num > 1) {
                console.log("there are " + num + " " + "mice");
                return num + " " + "mice";
            }
            else {
                console.log("there are " + num + " " + noun);
                return num + " " + noun;
            }
        case "deer":
            if (num > 1) {
                console.log("there are " + num + " " + noun);
                return num + " " + noun;
            }
            else {
                console.log("there is " + num + " " + noun);
                return num + " " + noun;
            }
        default: //the default case handels regular plurals
            if (num > 1) {
                console.log("there are " + num + " " + noun + "s");
                return num + " " + noun + "s";
            }
            else {
                console.log("there is " + num + " " + noun);
                return num + " " + noun;
            }
    }
}

//test

pluralize("cow", 1);
pluralize("goose", 6);
pluralize("pig", 3);