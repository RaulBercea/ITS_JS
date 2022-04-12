/**
 * @file: 01-the-time-calculator.js
 * @author: Raul Constantin Bercea
 * Using setTimeout() to call a function after a set interval of time
 *
 * In this program we use setTimeout() to call different function with
 * a delay between each call by adding a delay in increments of 3 seconds
 *
 */

/**
 * calcola il quadrato di un numero
 * @param {Number} num numero di cui calcolare il quadrato
 * @returns il numero elevato alla seconda
 */
function squareNumber(num) {
	let squaredNumber = Math.pow(num, 2);
	return squaredNumber;
}

/**
 * Calcola la meta di un numero
 * @param {Number} num numero del quale calcolare la meta
 * @returns il numero diviso in 2
 */
function halfNumber(num) {
	let halfedNumber = num / 2;
	return halfedNumber;
}

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

/**
 * Funzione che calcola l'area di un cerchio dato il raggio
 * @param {number} rad raggio del cerchio
 * @returns area del cerchio
 */
function areaOfCIrcle(rad) {
	area = Math.pow(rad, 2) * Math.PI;
	return Math.round(area);
}

/**
 * Funzione che calcola la meta di un numero ne fa il quadrato calcola l'area del cechio con
 * il risultato come raggio e trova in che percentuale si trova il quadrato nel area
 * @param {Number} num numero su cui verranno effettuate le operazioni
 */
function calculator(num) {
	let half = halfNumber(num);
	console.log("Half of " + num + " : " + half);

	let square;
	setTimeout(() => {
		square = squareNumber(half);
		console.log("Square of " + half + " : " + square);
	}, 3000);

	let area;
	setTimeout(() => {
		area = areaOfCIrcle(square);
		console.log(
			"Area of the circle with " + square + " radius : " + area
		);
	}, 6000);

	let percentage;
	setTimeout(() => {
		percentage = percentOf(square, area);
		console.log(square + " is " + percentage + "% of " + area);
	}, 9000);
}

calculator(12);
