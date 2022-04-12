/**
 * Function that takes a language code and returns hello world translated in the given language
 * @param {string} languageCode the language code
 * @returns hello world in the given language
 */
function helloWorld(languageCode) {
    switch (languageCode) {
        case "es":
            console.log("Hola Mundo");
            return "Hola Mundo";
            break;
        case "de":
            console.log("Hallo Welt");
            return "Hallo Welt";
        case "it":
            console.log("Ciao Mondo");
            return "Ciao Mondo";
        case "en":
            console.log("Hello World");
            return "Hello World";
        default:
            console.log("Hello World");
            return "Hello World"
            break;
    }
}

//test
let hello = helloWorld("es");
hello = helloWorld("de");
hello = helloWorld("it");
hello = helloWorld("en");