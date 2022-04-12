//function with a local scope variable
/**
 * Function that adds toghether two numbers and outputs the result to the console
 * @param {number} num1 first number
 * @param {number} num2 second number
 */
function addNumbers(num1, num2) {
  let localResult = num1 + num2;
  console.log("The local result is: " + localResult);
}

addNumbers(5, 7);
console.log(localResult);

//function with a global scope variable
let globalResult;
/**
 * Function that adds toghether two numbers and outputs the result to the console
 *
 * @param {number} num1 first number
 * @param {number} num2 second number
 */
function addNumbers(num1, num2) {
  globalResult = num1 + num2;
  console.log("The global result is: " + globalResult);
}
addNumbers(5, 7);
console.log(globalResult);
