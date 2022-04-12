/**
 * @file: 07-seconds.js
 * @author: Raul Constantin Bercea
 * Using the date object methods to get the ammount of seconds
 * from the start of today and to tomorrow
 * 
 */

/**
 * Function that prints to the console the seconds since the current day
 * has started
 * 
 * @param {Object} now the current date 
 */
function getSecondsToday(now) {
    // create an object using the current day/month/year
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // ms difference
    console.log("seconds since today has started: " + Math.round(diff / 1000)); // make seconds
}

/**
 * Function that prints the seconds to tomorrow from the current date
 * @param {Object} now the current date 
 */
function getSecondsToTomorow(now) {
    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let diff = tomorrow - now; // difference in ms
    console.log("Seconds to tomorrow : " + Math.round(diff / 1000));// convert to seconds
}

//test
let date = new Date();
getSecondsToday(date);
getSecondsToTomorow(date);