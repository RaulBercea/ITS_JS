/**
 * @file: solution-2.js
 * @author: Raul Constantin Bercea
 * replacing a specific character in a string usin replace()
 * 
 * by using replace() and a simple regular expression we can
 * change the 4th character with an 'X'
 */

let word = "Abracadabra";//word to change

// the first lower case 'a' found will turn into an 'X'
word = word.replace(/a/, 'X');

//output
console.log(word);