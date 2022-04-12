/**
 * @file: solution-1.js
 * @author: Raul Constantin Bercea
 * replacing a specific character in a string usin array methods
 * 
 * by using the split() method we can turn a string into an array
 * of character and then simply replace the character at a given
 * index with something else (in this case the 4th character with 'X')
 * and then turn the array back into a string using the join() method
 */

let word = "Abracadabra";//word to change

//turn the string into an array of characters
let wordToArray = word.split("");

//replace a character
wordToArray[3] = "X"

//back to a string
word = wordToArray.join("");

//output
console.log(word);