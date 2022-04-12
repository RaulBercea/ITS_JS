/**
 * @file: 06-MixUp.js
 * @author: Raul Bercea Constantin
 * How to swap the first two characters of two strings
 * 
 * by turning the strings into arrays we are able to easily
 * swap the first two characters by simply storing the first two
 * characters of the first string into an auxiliary variable,
 * then swapping the first words begining two character with the
 * second word, and then using the auxiliary variable replace the
 * first two characters of the second word with it, then just
 * use join("") to put them back together as strings
 * 
 */

/**
 * A function that swaps the first two letters of two words
 * 
 * @param {String} word1 first word
 * @param {String} word2 second word
 * @returns a string with the two words combined after getting their first letters swaped
 */
function mixUp(word1, word2) {
    let mxiedWords = "";//output variable

    // converting the words into arrays
    let word1ToArray = word1.split("");
    let word2ToArray = word2.split("");

    //auxiliary variable
    let firstCharsOfWord1 = word1ToArray[0, 1];

    //swapping
    word1ToArray[0, 1] = word2ToArray[0, 1];
    word2ToArray[0, 1] = firstCharsOfWord1;

    //back as strings
    let word1String = word1ToArray.join("");
    let word2String = word2ToArray.join("");

    //crating the output
    mxiedWords = word1String + " " + word2String;

    //function return
    return mxiedWords;
}

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));