/**
 * @file: 02-babies.js
 * @author: Raul Bercea
 * Manipulating arrays of objects
 *
 * By using push,unshif,the length of the array and the splice method i've
 * added four objects to the array after that i've added a random color to
 * three parts of the outfit of the baby in order to output to the console
 * in a properly formatted manner i've used a for in nested inside another
 * for in to print any nested objects and the proprieties of the objects
 * themselves
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

// looping trough the array of babies and printing the object
babiesArray.forEach((baby) => {
	for (const propriety in baby) {
		console.log(propriety + " : " + baby[propriety]);
	}
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

// looping trough the array of babies and printing the object
babiesArray.forEach((baby) => {
	for (const propriety in baby) {
		if (typeof baby[propriety] === "object" && !Array.isArray(baby[propriety])) {
			for (let part in baby[propriety]) {
				console.log(part + " : " + baby[propriety][part]);
			}
		} else {
			console.log(propriety + " : " + baby[propriety]);
		}
	}
});
