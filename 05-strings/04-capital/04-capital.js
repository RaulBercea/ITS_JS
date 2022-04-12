/**
 * @file: 04-capital.js
 * @author: Raul Bercea Constantin
 * Capitalizing the first character of a string
 * 
 * by using the string methods we are able to capitalize the
 * first character of the string by using chatAt(0)
 * 
 * for the bonus example we simply split the sentence into words
 * and add them to an array using the split() method with a
 * whitespace as a parameter and doing the same thing we did
 * in the first exercise with the addition of the substring
 * method witch is used to extract the reminder of the string
 * aftert the first character
 * 
 */

/**
 * function that capitalizes the firts letter of a string
 * 
 * @param {String} word the string wich will have its first letter capitalized
 * @returns the string with the first letter capitalized  
 */
function capital(word) {

    //splitting the string into an array of characters
    let wordToArray = word.split("");

    //capitalizing the first chatacter
    wordToArray[0] = wordToArray[0].toUpperCase();

    //turning the array back into a string
    let capitalizedWord = wordToArray.join("");

    //function return
    return capitalizedWord;
}

console.log(capital("hello everybody"));

/**
 * Bonus the function will capitalize the first character of every word
 * present in the string
 */

/**
 * function that capitalizes the firts letter of every word in a string
 * 
 * @param {String} word the string wich will have its first letters capitalized
 * @returns the sentence with the first letter capitalized  
 */
function capital(word) {

    //splitting the string into an array of characters
    let sentenceToArray = word.split(" ");

    /**
     * By using the split method with a whitespace as a parameter we are able
     * to crate an array containing every word of the sentence for each index
     * we can then cicle trough the resulting array and capitalize the first
     * character of each word using charAt(0) and then adding it to the word
     * using substring(1) witch will create a substring containing the word
     * without it's first character
     */
    for (let i = 0; i < sentenceToArray.length; i++) {
        sentenceToArray[i] = sentenceToArray[i].charAt(0).toUpperCase() + sentenceToArray[i].substring(1);
    }

    //turning the array back into a string
    let capitalizedWord = sentenceToArray.join(" ");

    //function return
    return capitalizedWord;
}

//test

console.log(capital("hello everybody and thanks for being here"));