/**
 * Funzione che calcola la circomferenza di un cerchio dato il raggio
 * @param {Number} rad 
 * @returns la ciconferenza di un cerchio
 */
function calcCircumfrence(rad) {
    let circumference = 2 * rad * Math.PI;
    return circumference;
}

/**
 * Funzione che calcola l'area di un cerchio dato il raggio
 * @param {Number} rad 
 * @returns area di un cerchio
 */
function calcArea(rad) {
    let area = Math.pow(rad, 2) * Math.PI;
    return area;
}

let radius = 3;
let circonferenza = calcCircumfrence(radius);
let area = calcArea(radius);

console.log("The circumference is: " + circonferenza);
console.log("The area is: " + area);