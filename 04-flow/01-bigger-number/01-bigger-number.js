/**
 * Function that returns the bigger between two numbers
 * @param {number} num1 the first number
 * @param {number} num2 the second number
 * @returns the bigger number
 */
function greaterNum(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is the bigger number");
        return num1;
    }
    else {
        console.log(num2 + " is the bigger number");
        return num2;
    }
}

let biggerNumber = greaterNum(2, 7);
biggerNumber = greaterNum(3, 2);