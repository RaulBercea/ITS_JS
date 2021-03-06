/**
 * @file: main.js
 * @author: Raul Bercea
 * Using javascript events to calculate some basic operation
 * 
 * by using the event listeners in javascript and and by getting the
 * value of an input i can call functions based on the action an user
 * makes. In this case the event listeners first target the click of
 * the buttons to call the functions, while in the second case the
 * event listener used is the "keyup" event listener wich triggers
 * after the user has typed when the key has been released
 */

/**
 * Calculate half of a number
 * @param {Number} num number to half
 * @returns the number halved
 */
function halfNumber(num) {
    let halfedNumber = num / 2;
    return halfedNumber;
}

/**
 * Function that squares a number
 * @param {number} num number to square
 * @returns the squared number
 */
function squareNumber(num) {
    let squaredNumber = Math.pow(num, 2);
    return squaredNumber;
}

/**
 * Function that calculates the percentage of a number
 * to a second number
 * @param {number} num1 the first number
 * @param {number} num2 the second number
 * @returns the percentage of the first number to the second number
 */
function percentOf(num1, num2) {
    let percentage = (num1 / num2) * 100;
    return percentage;
}

/**
 * Function that calculates the are of a circle from the radius
 * @param {number} rad the radius of the circle
 * @returns the are of the circle
 */
function areaOfCIrcle(rad) {
    area = Math.pow(rad, 2) * Math.PI;
    return Math.round(area);
}

/**
 * Function used to display the result of the square calculation
 */
let calculateSquare = function () {
    let numToSquare = document.getElementById("square-input").value;

    if (numToSquare != "") {
        document.getElementById("solution").innerText =
            "squared number: " + squareNumber(numToSquare);
    }
};

/**
 * Function used to display the result of the half calculation
 */
let calculateHalf = () => {
    let numToHalf = document.getElementById("half-input").value;

    if (numToHalf != "") {
        document.getElementById("solution").innerText =
            "halved number: " + halfNumber(numToHalf);
    }
};

/**
 * Function used to display the result of the percent calculation
 */
let calculatePercent = () => {
    let percentNum1 = document.getElementById("percent-input1").value;
    let percentNum2 = document.getElementById("percent-input2").value;

    if (percentNum1 != "" && percentNum2 != "") {
        document.getElementById("solution").innerText =
            percentNum1 +
            " is " +
            percentOf(percentNum1, percentNum2) +
            " of " +
            percentNum2;
    }
};

/**
 * Function used to display the result of the area calculation
 */
let calculateArea = () => {
    let radius = document.getElementById("rad-input").value;

    if (radius != "") {
        document.getElementById("solution").innerText =
            "area of circle with radius: " +
            radius +
            " = " +
            areaOfCIrcle(radius);
    }
};

/*using the buttons to calculate the result of the operations*/
// let squareButton = document.getElementById("square-button");
// let halfButton = document.getElementById("half-button");
// let percentButton = document.getElementById("percent-button");
// let areaButton = document.getElementById("area-button");

// squareButton.addEventListener("click", calculateSquare);
// halfButton.addEventListener("click", calculateHalf);
// percentButton.addEventListener("click", calculatePercent);
// areaButton.addEventListener("click", calculateArea);

/*Using the keyup event listener to calculate the result of the operations*/

// getting all the inputs as variables to be targeted later by the event
let squareInput = document.getElementById("square-input");
let halfInput = document.getElementById("half-input");
let percentInput = document.getElementById("percent-input2");
let areaInput = document.getElementById("rad-input");

// adding the keyup event listener to the inputs
squareInput.addEventListener('keyup', calculateSquare);
halfInput.addEventListener('keyup', calculateHalf);
percentInput.addEventListener('keyup', calculatePercent);
areaInput.addEventListener('keyup', calculateArea);