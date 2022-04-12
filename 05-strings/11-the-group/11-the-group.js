/**
 * @file: 11-the-group.js
 * @author: Raul Bercea Constantin
 * Checking whether a string is part of another longer string 
 * that is a list of names of a group
 * 
 * by using the function aContainsb we can easily
 * check weather or not the shorter string is
 * contained in the bigger string wich in this case
 * is a list of names
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

function group(list, string) {
    if (aContainsb(list, string)) {
        return string + " is part of the group";
    }
    else {
        return string + " is not part of the group";
    }
}

//test
let groupString = "Mary, James, and John";
let oldGuy = "James";
let newGuy = "Philip";

console.log(group(groupString, oldGuy));
console.log(group(groupString, newGuy));