/**
 * @file: main.js
 * @author: Raul Constantin Bercea
 * using event listeners to generate a story
 * 
 * by using an event listener targetting the button on the html page
 * i can change the content of the "story" div based on the value of
 * the input tags
 * 
 */

// getting the button in the html file
let storyGeneratorButton = document.getElementById("gen-button");

// crating the function wich will add the text to the div in the page
let generateStory = function () {
    // getting the vallue of the inputs in the page
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;

    // adding the content to the div
    document.getElementById("story").innerText =
        person + " realy " + adjective + " " + noun;
};

// event listener for the button wich calls the function to generate a story
storyGeneratorButton.addEventListener("click", generateStory);
