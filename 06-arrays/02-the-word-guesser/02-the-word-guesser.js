/**
 * @file: 02-the-word-guesser.js
 * @author: Raul Constantin Bercea
 * Contains a function to play hangman
 *
 *
 */

//global vars
let word = ["c", "a", "t"];
let guessedLetters = ["_", "_", "_"];
let maxGuesses = 6;

/**
 * Hangman function
 * @param {String} letter the letter guessed by the user
 */
function guessLetter(letter) {
    let guessed = false;
    maxGuesses--;

    //check if the letter is part of the secret word and adds
    //it to the guessed letters array
    for (i = 0; i < word.length && !guessed; i++) {
        if (letter === word[i] && maxGuesses > 0) {
            guessed = true;
            guessedLetters[i] = letter;
        }
    }

    // if the user guessed a letter in the word then the function
    //will notify the user that they guessed a letter
    //then print out the guessed letters array and the remaining
    //number of guesses
    if (guessed) {
        console.log(guessedLetters);
        console.log("you guessed a letter: " + letter);
        console.log("remaining guesses: " + maxGuesses);
    }
    //else we just notify the user he was wrong and print
    //the remaining guesses
    else {
        console.log("Your guess was incorect");
        console.log("remaining guesses: " + maxGuesses);
    }
    //if the guessed letters array is equal to the word
    //the user winns
    if (word.toString() === guessedLetters.toString()) {
        console.log("Congrtulations you won");
    }
}

guessLetter("a");
guessLetter("e");
guessLetter("c");
guessLetter("b");
guessLetter("t");
