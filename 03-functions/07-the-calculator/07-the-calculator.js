/**
 * calcola il quadrato di un numero
 * @param {Number} num numero di cui calcolare il quadrato
 * @returns il numero elevato alla seconda
 */
function squareNumber(num) {
    let squaredNumber = Math.pow(num, 2);
    return squaredNumber;
}

let numero = 3;
console.log(numero + " squared is: " + squareNumber(3));

/**
 * Calcola la meta di un numero
 * @param {Number} num numero del quale calcolare la meta
 * @returns il numero diviso in 2
 */
function halfNumber(num) {
    let halfedNumber = num / 2;
    return halfedNumber;
}

numero = 5;
console.log("Half of " + numero + " is " + halfNumber(numero));

/**
 * Calcola quanto il num1 e percento di num2
 * @param {Number} num1 primo numero
 * @param {Number} num2 secondo numero
 * @returns la percentuale di num1 da num2
 */
function percentOf(num1, num2) {
    let percentage = (num1 / num2) * 100;
    return percentage;
}

let numero1 = 32;
let numero2 = 654;

console.log(numero + " is " + percentOf(numero1, numero2) + "% of " + numero2);

/**
 * Funzione che calcola l'area di un cerchio dato il raggio
 * @param {number} rad raggio del cerchio
 * @returns area del cerchio
 */
function areaOfCIrcle(rad) {
    area = Math.pow(rad, 2) * Math.PI;
    return Math.round(area);
}

let radius = 2;
console.log("The area of the circle with radius " + radius + " is " + areaOfCIrcle(radius));

/**
 * Funzione che calcola la meta di un numero ne fa il quadrato calcola l'area del cechio con 
 * il risultato come raggio e trova in che percentuale si trova il quadrato nel area
 * @param {Number} num numero su cui verranno effettuate le operazioni
 */
function calculator(num) {
    let half = halfNumber(num);
    let square = squareNumber(half);
    let area = areaOfCIrcle(square);
    let percentage = percentOf(square, area);

    console.log("Half of " + num + " : " + half);
    console.log("Square of " + half + " : " + square);
    console.log("Area of the circle with " + square + " radius : " + area);
    console.log(square + " is " + percentage + "% of " + area);
}

numero = 5;
calculator(numero);