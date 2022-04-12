/**
 * @file: 02-oh-no-you-dont.js
 * @author: Raul Constantin Bercea
 * Using clearTimeout() to end a setTimeout() call early
 *
 * The setTImeout() method returns an integer wich rappresents
 * it's call id, by using the clearInterval() method with said
 * id as a parameter we can cancel a specific setTimeout() call
 *
 */

/**
 * Very usefull function
 */
function usefull() {
	console.log("This function is usefull");
}

/**
 * Function that cancells a setTimeout() call and logs to the console
 * a message
 *
 * @param {Number} timeout_id the timeout id of the setInterval()
 */
function no(timeout_id) {
	clearInterval(timeout_id);
	console.log("Function canceled");
}
//setTimout() call and id asignation
let timeoutID = setTimeout(usefull, 10000);

//call of the function that cancels the setTImeout()
no(timeoutID);
