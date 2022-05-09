/**
 * @file: 04-clone.js
 * @author: Raul Bercea
 * Creating a deep clone of an object using native js functions
 *
 * in javascript copying an object by assingement still gives the reference to the original object
 * to the asigned object making it so that the modifying the asigned object will also modify the original
 * object. In order to clone an object using only native javacript methods i've made a container object
 * wich gets the value of the original object passed to it while also making a new propriety with the
 * same name and value and putting it in the new object, this way the two objects are completely distinct
 * and modifying one of them doesn't change the other
 */

/**
 * Function that creates a deep copy of an object
 * @param {Object} mainObject the object that you want to copy
 * @returns the cloned object without any reference to the original object
 */
function clone(mainObject) {
	// object variable that will hold the cloned object
	let objectCopy = {};
	// object used to store any nested object within the original object
	let nestedObjectCopy = {};

	// variable that will hold the name of the propriety of the nested object
	let nestedPropriety;

	// going tough every propriety of the original object and copying it
	for (let property in mainObject) {
		// checking if there is a propriety withing the object that is also an object
		if (typeof mainObject[property] === "object") {
			// if it is an object iterate trough the objects proprieties and assign them to a new object
			for (let nestedPropriety in mainObject[property]) {
				nestedObjectCopy[nestedPropriety] = mainObject[property][nestedPropriety];
			}

			// getting the name of the propriety
			nestedPropriety = property;

			// adding the nested object to the clone object
			objectCopy[nestedPropriety] = nestedObjectCopy;
		} else {
			// copying the propriety of the object to the nested object
			objectCopy[property] = mainObject[property];
		}
	}

	return objectCopy;
}

// object to clone
let original = {
	name: "Green Mueller",
	email: "Rigoberto_Muller47@yahoo.com",
	address: "575 Aiden Forks",
	bio: "Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.",
	active: false,
	salary: 37993,
	birth: "Sun Apr 18 1965 13:38:00 GMT+0200 (W. Europe Daylight Time)",
	bankInformation: {
		amount: "802.04",
		date: "Thu Feb 02 2012 00:00:00 GMT+0100 (W. Europe Standard Time)",
		business: "Bernhard, Kuhn and Stehr",
		name: "Investment Account 8624",
		type: "payment",
		account: "34889694",
	},
};

let cloneObject = clone(original);

// test
cloneObject.name = "Mario Rossi";
cloneObject.email = "mario.rosi78@gmail.com";
cloneObject.address = "via G.Verdi 17";
cloneObject.bio = "New Bio";
cloneObject.active = true;
cloneObject.salary = 40900;
cloneObject.birth = new Date("1987-03-25T12:00:00-06:00").toString();
cloneObject.bankInformation.amount = "10322.56";
cloneObject.bankInformation.date = new Date("2012-10-20T19:45:00-06:00").toString();
cloneObject.bankInformation.business = "Prati Verdi SRL";
cloneObject.bankInformation.name = "Savings Account 423";
cloneObject.bankInformation.type = "savings";
cloneObject.bankInformation.account = "43244006";

// output
console.log(cloneObject);
console.log(original);
