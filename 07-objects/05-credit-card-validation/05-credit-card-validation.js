/** 
 * @file: 05-credit-card-validation.js
 * @author: Raul Constantin Bercea
 * Using functions and object to create a credit card validation program
 * 
 * In this program a function is used to validate a credit card number and then returns an
 * object with the number itself, if it is valid or not and in case it isn't the object
 * will also contain an error message.
 * The function checks all of the possible issues one by one and if it finds a probblem
 * it returns the object containing the erros so that the number inserted is guaranteed 
 * to be correct
 * 
*/

/**
 * Function that validates a credit card number and returns an object with
 * the credit card number if it is valid, if it isn't an error message is also added
 *
 * @param {String} cardNumber a string of characters separated with a '-' that contains a credit card number
 * @returns a credit card object composed of the credit card number, if it is valid or not and an error message if needed
 */
function validateCreditCard(cardNumber) {
	//variables
	let valid = true; //flag for the validity of the number
	let errorMsg = ""; //error message variable
	const regular_expression = /[a-zA-Z]/; //regular expression to check if the input contains alphabetic caracters
	let num = cardNumber.replace(/-/g, ""); //removing the '-' out of the string

	let sum = sumOfString(num); //sum of all the numbers in the string
	//length check
	if (num.length != 16) {
		valid = false;
		errorMsg = "Wrong Length";
	}
	//controlling if the input contains letters
	else if (regular_expression.test(num)) {
		valid = false;
		errorMsg = "Input contains letters";
	}
	//checking if there are different numbers in the string
	else if (!characterVariation(num)) {
		valid = false;
		errorMsg = "All numbers are the same";
	}
	// checking if the last number is even
	else if (num.charAt(num.length - 1) % 2 != 0) {
		valid = false;
		errorMsg = "Last number isn't even";
	}
	// checking if the sum of all the numbers is greater than 16
	else if (sum < 16) {
		valid = false;
		errorMsg = "Number of numbers inserted is less than 16";
	}

	//returning an object based on weather the input is valid or not
	if (valid) {
		return { cardNumber, valid };
	} else {
		return { cardNumber, valid, errorMsg };
	}
}

/**
 * Function that sums all the numbers in a string of numbers
 *
 * @param {String} stringOfNumbers a string of integers
 * @returns the sum of all the numbers
 */
function sumOfString(stringOfNumbers) {
	let numArray = stringOfNumbers.split(""); //converting the number into an array

	//using the reduce method we sum each element of the array
	let sum = numArray.reduce(function (total, num) {
		return parseInt(total) + parseInt(num);
	});

	return sum;
}

/**
 * Function to control if the elements of an array of numbers are different
 *
 * @param {String} arrayOfCharacters an array containing numbers
 * @returns true if the numbers are different, false otherwise
 */
function characterVariation(arrayOfCharacters) {
	let character = arrayOfCharacters[0]; // first character of the array
	let different = false; //flag for the difference

	//loop to confront every element against the first one
	for (let i = 0; i < arrayOfCharacters.length; i++) {
		if (character != arrayOfCharacters[i]) {
			different = true;
			return different;
		}
	}

	return different;
}

/**
 * function that outputs a credit card object in the correct
 * format to the console
 * @param {Object} creditCard a credit card object
 */
function consoleOutput(creditCard) {
	console.log("================================");
	console.log("= number: " + creditCard.cardNumber + " =");
	console.log("= valid: " + creditCard.valid + " =");
	if (!creditCard.valid) {
		console.log("= error: " + creditCard.errorMsg + " =");
	}
	console.log("================================");
}

//output test
consoleOutput(validateCreditCard("9999-9999-8888-0000"));
consoleOutput(validateCreditCard("4444-4444-4444-4444"));
consoleOutput(validateCreditCard("6666-6666-6666-1666"));
consoleOutput(validateCreditCard("a923-3211-9c01-1112"));
consoleOutput(validateCreditCard("2232-2333-2221"));
