/**
 * @file: 03-the-timed-temperature-converter.js
 * @author: Raul Constantin Bercea
 * Using setInterval() and then doing the same thing with setTimeout()
 *
 * by using setInterval() we can call a function once per x amount of
 * time untill cancelled.
 * To do the same thing with setTimout we have to call it recursively
 * wich takes more resurces since setTimout() has to be called multiple
 * times instead of just once like in setInterval()
 *
 */

//temperature variable
let temperature;

//set interval to call a function once per second
setInterval(() => {
	//giving the temperature a random value between 1 and 100
	temperature = Math.floor(Math.random() * 101);

	//conversion
	let tempToFarhenit = temperature * 1.8 + 32;

	//console log
	console.log(temperature + " C is " + tempToFarhenit + " in farheneit");
}, 1000);

// using recursion to call a setTimeout() once per second instead of using setTImout
setTimeout(
	(repeat = () => {
		//giving the temperature a random value between 1 and 100
		temperature = Math.floor(Math.random() * 101);

		//conversion
		let tempToFarhenit = temperature * 1.8 + 32;

		//console output
		console.log(
			temperature + " C is " + tempToFarhenit + "F in farheneit"
		);
		setTimeout(repeat, 1000);
	}),
	1000
);
