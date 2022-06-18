/**
 * Function that delays the execution of a function by a given amount of time
 * @param {number} ms - the ammount of milliseconds the program should wait
 * @returns {function} - the function that was passed in the then call
 */
let delay = (ms) => {
  // after the delay the function will be called
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

/**
 * function that returns a string to the console
 */
let regularFunction = function () {
  console.log("wee");
};

/**
 * function that returns a string to the console
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
