/**
 * Funzione che converte una temperatura da celsius a Farhenit
 * @param {Number} temperature 
 * @returns temperatura in farhenit
 */
function celsiusToFahrenheit(temperature) {
    let tempToFarhenit = (temperature * 1.8) + 32;
    return tempToFarhenit;
}

/**
 * Funzione che converte una temperatura da farhenit a celsius
 * @param {Number} temperature 
 * @returns temperatura convertita in celsius
 */
function farhenitToCelsius(temperature) {
    let tempToCelsius = (temperature - 32) * 5 / 9;
    return tempToCelsius;
}

let celsius = 23.7;
let farhenit = 88.3;

console.log(celsius + "°C is " + celsiusToFahrenheit(celsius) + "°F");
console.log(farhenit + "°F is " + farhenitToCelsius(farhenit) + "C");