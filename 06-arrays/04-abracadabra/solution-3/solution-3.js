/**
 * @file: solution-3.js
 * @author: Raul Constantin Bercea
 * replacing a specific character in a string using substring()
 * 
 * by splitting the string into 2 we can add a character
 * in between and put it back together with a new character
 * in place of another
 */

let word = "Abracadabra";//word to change

//split the string in 2 parts and add a character in between them
word = word.substring(0, 3) + 'X' + word.substring(4);

//console output
console.log(word);