/**
 * @file: 06-dateAgo.js
 * @author: Raul Constantin Bercea
 * Getting a previous date from the current day
 * 
 * By creating a new date object we can use setDate and
 * assigning the current date as a parameter - the days
 * given to the function as a parameter we can return a
 * previous date
 * 
 */

/**
 * Function that returns the day x days ago the from the current day
 * @param {object} date the current date
 * @param {number} days how many days a ago you want to check(must be a positive number)
 */
function getDateAgo(date, days) {
	//new date object containing the current date
	let prevDate = new Date(date);

	//counting the days backwards using setDate and the days variable
	prevDate.setDate(prevDate.getDate() - days);

	//console output
	console.log(prevDate);
}

//tests
let currentDate1 = new Date();
getDateAgo(currentDate1, 2);
let currentDate2 = new Date(2022, 3, 21);
getDateAgo(currentDate2, 2);
let currentDate3 = new Date("March 21, 2022");
getDateAgo(currentDate3, 2);