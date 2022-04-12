/**
 * @file: 08-verbing.js
 * @author: Raul Bercea Constantin
 * How to check the last given number of character and do something based on that
 * 
 * By using the substring() method and the length propriety we can check the last
 * characters of a string.
 * 
 * In this case we use that information to check if the string ends with "ing" to
 * know if we should add "ly" at the end otherwise we just add "ing", all of this
 * of course if the string is at least 3 characters long
 * 
 */

/**
 * Function that adds "ing" or "ly" or does nothing to a string based on its length
 * and if it already ends with "ing"
 * 
 * @param {String} word the string to modify
 * @returns the modified string in case it is longer than 3 character or ends wiht "ing"
 */
function verbing(word) {
    //first check for the length
    if (word.length < 3) {
        return word;
    }
    //if the last 3 characters of the string are equal to "ing" we add "ly" to the string
    else if (word.toLowerCase().substring(word.length - 3, word.length) === "ing") {
        return word + "ly";
    }
    //in all other cases we just add "ing"
    else {
        return word + "ing";
    }
}

//test
console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));