/**
 * @file: 04-the-cash-register.js
 * @author: Raul Constantin Bercea
 * 
 * Adding together the elements of an object by using the keys() method
 * 
 * the keys() method is used to create an array of all the keys in an object
 * this keys can then be used by a for loop to accsess each element of the
 * object in order and use them in the program(in this case we are adding all
 * of the values of the elements in the object)
 */

/**
 * Function that sums all the value of all the elements in an onject as a float number
 *
 * @param {Object} shoppingCart
 * @returns the sum of all the vallues of the object
 */
function cashRegister(shoppingCart) {
	let sum = 0;
	//creating an array of keys
	const products = Object.keys(shoppingCart);

	//accsesing all of the elements in the object and adding them together
	for (const product of products) {
		sum += parseFloat(shoppingCart[product]);
	}

	return sum;
}

//cart object
let cartForParty = {
	banana: "1.25",
	handkerchief: "0.99",
	Tshirt: "25.01",
	apple: "0.6",
	nalgene: "10.34",
	proteinShake: "22.36",
};

//console output
console.log(cashRegister(cartForParty));
