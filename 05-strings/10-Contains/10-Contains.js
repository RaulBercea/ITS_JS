/**
 * @file: 10-Contains.js
 * @author: Raul Bercea Constantin
 * checking if a sentence contains a specified string
 * 
 * using the includes() method we can check if a sentence
 * contains a given string and using its output we can get
 * a true or false return based on weather the string is contained
 * or not
 * 
 */

/**
 * Function that checks if a given sting is contained in a sentence
 * @param {String} sentence A sentence
 * @param {String} word A String
 * @returns true if the word is contained in the sentence false otherwise
 */
function aContainsb(sentence, word) {
    return sentence.includes(word);
}

//test
aContainsb("Another hello world", "hell");