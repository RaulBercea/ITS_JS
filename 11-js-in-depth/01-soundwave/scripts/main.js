/**
 * @file: main.js
 * @author: Raul Constantin Bercea
 * using javascript to modify string within an array
 *
 * by using a foreach i've got acess to all the array elements
 * after that i got every character within the string with a for loop
 * and modified them using string methods
 *
 */

let noisesArray = ["quack", "sneeze", "boom"]; // array to modify
let resultArray = []; // resulting array

// for every element of the array
noisesArray.forEach(function (noise) {
  let modNoise = noise;// getting the element in order to change them

  // for loop using the strings length
  for (let i = 0; i < modNoise.length; i++) {
    let exclamation = "!".repeat(1 + i);// adding exclamation marks for every cicle
    
    // making the string lowercase
    modNoise = modNoise.toLowerCase();

    // splitting the characters as an array
    modNoise = modNoise.split("");

    // making the character at the current index uppercase
    modNoise[i] = modNoise[i].toUpperCase();

    // putting the string back together
    modNoise = modNoise.join("");

    // adding the result to the resulting array
    resultArray.push(modNoise + exclamation);
  }

});

// output to the console
console.log(resultArray);
