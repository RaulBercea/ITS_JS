/**
 * @file: 02-reverse.js
 * @author: Raul Bercea Constantin
 * reversing a string using loops
 * 
 * the following function uses loops to reverse a string.
 * By using a for loop that goes backwards we are able to
 * add the characters of the original string to a new string
 * one by one in reverse
 * 
 */


/**
 * Function that reverses a string using loops
 * 
 * @param {String} word a string that will be later reversed
 * @returns the string in reverse
 */
function reverse(word) {
    //String variable that will later be the reverted string
    let reversedWord = "";

    //backwards for loop
    for (let i = word.length - 1; i >= 0; i--) {
        /**
         * By cicling each character of the original string in reverse
         * We can add them in a new string to create the reversed string
         */
        reversedWord += word[i];
    }

    //function output
    return reversedWord;
}

//tests

console.log(reverse("hello"));