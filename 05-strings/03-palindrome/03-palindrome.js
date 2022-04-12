/**
 * @file: 03-palindrome.js
 * @author: Raul Bercea Constantin
 * Checking if a string is palindrome using the printReverse() function
 * 
 * by using the printReverse() function we are able to reverse a string we recive
 * making it easy to check if it is palindrome by just confronting the original
 * string with the printReverse() output
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

/**
 * Function that checks if a given string is palindrome using printReverse()
 *  and returns true in that case, false otherwise
 * 
 * @param {String} word the string we want to chek if it a palindrome
 * @returns true if the string is palindrome false otherwise
 */
function palindrome(word) {

    //simple check using the printReverse() function
    if (word === printReverse(word)) {

        //if the string is a palindrome we return true
        return true;
    }

    //in any other case we return false
    return false;
}

//tests

//will return true
console.log(palindrome("radar"));

//will return false
console.log(palindrome("hello"));

/**
 * Bonus: function that does the same thing 
 * but without using any external function
 */

/**
 * Function that checks if a given string is palindrome and returns true
 * in that case, false otherwise
 * 
 * @param {String} word the string we want to chek if it a palindrome
 * @returns true if the string is palindrome false otherwise
 */
function palindrome2(word) {

    let reversedWord = "";

    //backwards for loop to add the characters from the original string 
    //in backwards order to a new string
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    //Confronting the input string with the result of the loop
    if (word === reversedWord) {

        //if the string is a palindrome we return true
        return true;
    }

    //in any other case we return false
    return false;
}

//will return true
console.log(palindrome2("radar"));

//will return false
console.log(palindrome2("hello"));
