/**
 * @file: 09-NotBad.js
 * @author: Raul Bercea Constantin
 * replaicing a part of a string with something else
 * 
 * by converting the sentence into an array of strings we can check
 * each word individualy and it's position, then we can use the splice()
 * method to remove a part of that array, convert that array into a string
 * using join() and add the new part
 * 
 */

/**
 * Function that replaces the characters in between "not" and "bad" with good
 * (if they exist)
 *  
 * @param {String} sentence the sentence that will have it's contents modified
 * @returns the modified sentence (or the sentence itself if it doesn't pass the check)
 */
function notBad(sentence) {
    //first replace all not letter characters with a whitespace
    let fillteredSentence = sentence.replace(/[^\w]/g, ' ')

    //convert the sentence into an array of strings
    let sentenceToArray = fillteredSentence.split(" ");

    //creating the position variables
    let notPos;
    let badPos;

    //controlling if any of the strings in the sentence array are
    //equal to "bad" or "not" and if they are the position is saved
    for (let i = 0; i < sentenceToArray.length; i++) {
        if (sentenceToArray[i] === "not") {
            notPos = i;
        }
        if (sentenceToArray[i] === "bad") {
            badPos = i;
        }
    }

    //if the position of "not" is less than the position of "bad"
    //we create a new string with "good" instead
    if (notPos < badPos) {
        //the splice method removes all words from the array after the not position
        sentenceToArray.splice(notPos);

        //putting the string back together and adding "good!"
        return sentenceToArray.join(" ") + " good!";
    }
    else {
        //otherwise we just return the sentence
        return sentence;
    }


}

//test
console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));