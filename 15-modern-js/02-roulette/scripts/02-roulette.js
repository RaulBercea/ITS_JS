/**
 * @file: 02-roulette.js
 * @author: Raul Bercea
 * @description: Handling multiple promises using the Promise API
 *
 * In order to create a promise with a 50/50 chance of resolving the
 * function uses math.random and checks if it is bigger than 0.5
 * after that the program calls the resolve or reject function
 * based on the result.
 * after that the function is called 3 times using the allSettled
 * function in the promise Object then by cicling trough the results
 * and generating an output based on the result
 */

/**
 * Function with a promise with 50/50 chance of resolving
 * @param {String} label - The name for the matches within the promise
 * @param {Number} delay - the delay for the call of the promise
 * @returns a promise with a 50/50 chance of resolving
 */
let roulette = (label = "round", delay = 500) => {
	// creating a promise
	return new Promise((resolve, reject) => {
		// giving it a 50/50 chance of succeding
		if (Math.random() > 0.5) {
			setTimeout(() => resolve(label), delay);
		} else {
			setTimeout(() => reject(label), delay);
		}
	});
};

// calling the function 3 times and handling them when they all resolve or reject
Promise.allSettled([roulette(), roulette(), roulette()])
	.then((results) => {
		// managing all of the results and giving a result
		for (result of results) {
			if (result.status === "fulfilled") {
				console.log(
					`${result.value} ${results.indexOf(result) + 1} won!`
				);
			} else {
				console.log(
					`${result.reason} ${results.indexOf(result) + 1} lost!`
				);
				// if the result is a reject the loop stops
				break;
			}
		}
	})
	// getting the errors if there are any
	.catch((error) => console.log(error))
	// signaling that the program has finished
	.finally(() => console.log("game over"));
