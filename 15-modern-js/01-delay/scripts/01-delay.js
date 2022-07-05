/**
 * @file: 01-delay.js
 * @author: Raul Bercea
 * @description: simulating a delay using javascript promises
 * 
 * When a promise is resolved succesfuly the parameter passed in the 
 * .then() method is called in this case passing a function outputs
 * a string to the console, by crating a function with the promise
 * we can apply the parameter to delay for a setTimeout to execute
 * the function after a certain ammount of time
 */


/**
 * Function that delays the execution of a function by a given amount of time
 * @param {number} ms - the ammount of milliseconds the program should wait
 * @returns {function} - the function that was passed as a parameter after a certain ammount of time
 */
let delay = (ms) => {
  // after the delay the function will be called
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

/**
 * regular function that returns a string to the console
 */
let regularFunction = function () {
  console.log("wee");
};

/**
 * arrow function that returns a string to the console
 */
let arrowFunction = () => {
  console.log("woo");
};

// running various tests with the delay function
delay(1000).then(regularFunction);
delay(3000).then(arrowFunction);
// test for the anonimous function
delay(5000).then(() => {
  console.log("waa");
});
