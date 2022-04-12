/**
 * @file: 01-reverse.js
 * @author: Raul Bercea Constantin
 * Reversing a string using array methods
 * 
 * This file contains a function to showcase how array functions
 * are also usable on strings. By converting the string into an array
 * using the split method we can get an array of characters that can
 * be easily manipulated using array methods(in this example the method reverse is used)
 * 
 */


/**
 * Function that reverses a string using array functions and logs it to the console
 * @param {String} word the word that needs to be reversed
 * @returns the word as a string reversed
 */
function printReverse(word) {
    //splitting the string into an array
    let wordToArray = word.split("");
    //reversing the array
    let arrayReverse = wordToArray.reverse();

    //turning the array back to a string
    let reversedWord = arrayReverse.join("");

    //the function returns the word for future usage
    return reversedWord;
}

//tests

console.log(printReverse("hello"));