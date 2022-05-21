/**
 * @file: 01-dogSpeak.js
 * @author: Raul Bercea
 * @description: adding a prototype to the String object in javascript
 *
 * by using .prototype i've added a prototype function to the String object
 * this way it can be used when calling it on a String variable
 */

//adding a prtototype function directly to the String in javascript
String.prototype.dogSpeak = function () {
	// this gets the value of the string when the dogSpeak method is called
	console.log(this + " WOOF!");
};

// test
let s = "We like to learn";
s.dogSpeak();
"Dogs are smart".dogSpeak();
