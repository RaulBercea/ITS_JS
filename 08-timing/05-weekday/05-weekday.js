/**
 * @file: 05-weekday.js
 * @author: Raul Constantin Bercea
 * using the date object
 *
 * By using the getDay method of the date object we can get the current numeric
 * vallue of the day (starting at sunday)
 */

//current date
let date = new Date();

/**
 * function that prints the current day in a short date format
 * in english or italian based on the parameters given
 * @param {Object} currentDate a date object with the current date
 * @param {String} language the language in wich the function will print the day
 */
function getWeekDay(currentDate, language) {
	//the day arrays
	const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
	const daysIta = ["DO", "LU", "MA", "ME", "GI", "VE", "SA"];

	//getting the current day number
	let currentDayNumber = currentDate.getDay();

	if (language === "en") {
		console.log(days[currentDayNumber]);
	} else if (language === "it") {
		console.log(daysIta[currentDayNumber]);
	}
}

//test
getWeekDay(date, "en");
getWeekDay(date, "it");
