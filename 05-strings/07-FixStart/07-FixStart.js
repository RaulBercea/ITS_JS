/**
 * @file: 07-FixStart.js
 * @author: Raul Bercea Constantin
 * How to replace all ocurences of the first character of a string with something else(except for the first character itself)
 * 
 * the easiest way to find something in a string is using regular expressions,
 * in order to do that we use the RegExp object and give it the parameters we
 * want, in this case by using ${...} we can add a variable to the regEx to be
 * able to finding the first character of the string in the string itself.
 * 
 * By using the substring() method we can then simply add the first character
 * and the string without it together while also using the replace method and
 * the regEx to swap the occurances of the first character with something else
 * (in this case a *) in the substring
 * 
 */

/**
 * A function that return a version of a given string where all
 * occurrences of its first character have been replaced with '*', 
 * except for the first character
 * 
 * @param {String} word the input string(at least one character long)
 * @returns the string with its first character replaced with '*'
 */
function fixStart(word) {
    //output variable
    let modifiedString = "";

    //first character of the word as a variable
    let firstChar = word.charAt(0);

    //new regular expression to find the first character of the word in a string
    let reg = new RegExp(`${firstChar}`, 'gi');

    //composing the output string
    modifiedString = firstChar + word.substring(1).replace(reg, "*");

    //function output
    return modifiedString;
}

//test
console.log(fixStart("babble"));
console.log(fixStart("roadrunner"));