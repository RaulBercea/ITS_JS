/**
 * @file: 01-your-top-choices.js
 * @author: Raul Constantin Bercea
 * cicling trough an array doing something with the data within it
 * 
 * by using a for loop and the length propriety we are able to
 * accsess each element of an array and do something with the data
 * within it, in this case we are logging a different output based
 * on the position of a string inside the array.
 * 
 */

//array to hold the choices
let topChoices = ["red", "green", "blue", "yellow", "Orange"];

//using a for loop to cicle each element of the array
for (let i = 0; i < topChoices.length; i++) {
    //based on the position in the array we'll log a different output
    if (i === 0) {//1st
        console.log("My 1st choice is " + topChoices[i]);
    }
    else if (i === 1) {//2nd
        console.log("My 2nd choice is " + topChoices[i]);
    }
    else if (i === 2) {//3rd
        console.log("My 3rd choice is " + topChoices[i]);
    }
    else {//every other case is Nth
        console.log("My " + (i + 1) + "th choice is " + topChoices[i]);
    }
}