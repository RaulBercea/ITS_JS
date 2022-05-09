/**
 * @file: 02-babies.js
 * @author: Raul Bercea
 * Manipulating the data withn an object
 *
 * by using for ... in loop i can access all of the proprieties of the
 * each object and manipulate it. in this case getting all of the outfits
 * and favorite foods of the babies and forming sentences based on each of
 * them
 */

let babiesArray = [];

// using push to add to the array
babiesArray.push({
	name: "jessica",
	months: 4,
	noises: ["mama", "weee", "papa"],
	favoriteFoods: ["french fries", "pancakes", "pasta"],
});

// using unshift to add to the array
babiesArray.unshift({
	name: "Mario",
	months: 7,
	noises: ["gneee", "waaa", "aaaa"],
	favoriteFoods: ["cookies", "pies", "lasagna"],
});

// using the array.length propriety to add to the array
babiesArray[babiesArray.length] = {
	name: "Francesca",
	months: 5,
	noises: ["woooo", "waaa", "weeee"],
	favoriteFoods: ["chocolate", "ice cream", "meatballs"],
};

// using splice to add to the array
babiesArray.splice(babiesArray.length, 0, {
	name: "Carlo",
	months: 8,
	noises: ["gnaaaa", "woooo", "mama"],
	favoriteFoods: ["pasta", "lasagna", "ice cream"],
});

// array of colors for the outfits
const colorArray = [
	"blue",
	"red",
	"green",
	"orange",
	"purple",
	"pink",
	"yellow",
	"black",
	"white",
];

// adding the outfit propriety to each baby and adding a random color to each part
babiesArray.forEach((baby) => {
	baby.outfit = {
		shirt: colorArray[Math.floor(Math.random() * colorArray.length)],
		pants: colorArray[Math.floor(Math.random() * colorArray.length)],
		shoes: colorArray[Math.floor(Math.random() * colorArray.length)],
	};
});

// calling the functions for all the babies in the baby array
babiesArray.forEach((baby) => {
	console.log(getBabyOutfit(baby));
	console.log(feedBaby(baby));
});

/**
 * Function that forms a sentence from the outfit of a baby object
 * @param {Object} baby an object containing the proprieties of a baby
 * @returns a sentence based on the outfit of the baby
 */
function getBabyOutfit(baby) {
	let name = baby.name;
	let babyOutfit = {};
	let sentence = "";

	for (const propriety in baby) {
		if (typeof baby[propriety] === "object" && !Array.isArray(baby[propriety])) {
			babyOutfit = baby[propriety];
		}
	}

	for (const propriety in babyOutfit) {
		sentence += babyOutfit[propriety] + " " + propriety + " ";
	}

	return name + " is wearing " + sentence;
}

/**
 * Function that creates a sentence based on the food a baby likes
 * @param {Object} baby an object with the proprieties of a baby
 * @returns a sentence with the baby's name and it's favourite food
 */
function feedBaby(baby) {
	let foods = [];
	let name = baby.name;
	let sentence = "";

	// assigns the favourite food propriety array of the baby to a new array
	for (const propriety in baby) {
		if (typeof baby[propriety] === "object" && Array.isArray(baby[propriety])) {
			foods = baby[propriety];
		}
	}

	// using the shuffle function to randomize the array
	shuffleArray(foods);

	// making the main part of the sentence using a for loop
	for (let i = 0; i < foods.length; i++) {
		if (i === foods.length - 1) {
			sentence += "and " + foods[i];
		} else {
			sentence += foods[i] + ", ";
		}
	}

	return name + " is eating " + sentence;
}

/**
 * Function that shuffles an array
 * @param {Array} array the array to shuffle
 * @returns the shuffled array
 */
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		// Generate random number based on the index
		let j = Math.floor(Math.random() * (i + 1));

		// swapping elements
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}
