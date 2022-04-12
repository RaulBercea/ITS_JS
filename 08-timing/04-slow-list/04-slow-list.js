/**
 * @file: 04-slow-list.js
 * @author: Raul Constantin Bercea
 * Using setTimout() and setInterval() to print an array
 *
 * Since setInterval can go on forever we need to store the interval id and use it within it
 * to end it as soon as we reach the end of the list
 *
 * on the other hand setTimeout ends as soon as the function that it calls is executed so we
 * can use a for loop to print every element with a delay between each element
 */

//list of 30 items
let list = [
	"item1",
	"item2",
	"item3",
	"item4",
	"item5",
	"item6",
	"item7",
	"item8",
	"item9",
	"item10",
	"item11",
	"item12",
	"item13",
	"item14",
	"item15",
	"item16",
	"item17",
	"item18",
	"item19",
	"item20",
	"item21",
	"item22",
	"item23",
	"item24",
	"item25",
	"item26",
	"item27",
	"item28",
	"item29",
	"item30",
];
let i = 0;

// printing every element in the list with setInterval() and cancelling it when we reach the end of the list
let intervalID = setInterval(() => {
	console.log(list[i]);
	i++;
	if (i === list.length) {
		clearInterval(intervalID);
	}
}, 1000);

//same thing but with setTimeout()

let timoutId = setTimeout(() => {
	for (let i = 0; i < list.length; i++) {
		setTimeout(() => {
			console.log(list[i]);
		}, 1000 * i);
	}
}, 1000);
