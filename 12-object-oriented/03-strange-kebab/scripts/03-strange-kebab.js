/**
 * @file: 03-strange-kebab.js
 * @author: Raul Bercea
 * Adding a method to the string object in javascript that modifies a string with regular expressions
 * 
 * in order to add the method to the String object i've used prototype the way to modify strings in javascript is
 * to use regular expressions to find matches in the string and using the replace method swapping them with the
 * appropriate characters
 */

// sample strings
const source = [
  "MyNameIsMyPassportVerifyMe",
  "My Name Is My Passport Verify Me MMM",
  " -- -My?Name&*is**my$$Passport???p??",
  "mY--name--- is- - 2023---",
  "mynameismypassport",
  "2022 my name is",
  "2024-my-name-is",
];

/**
 * Function that will transform a string to a strange kebab string
 */
String.prototype.toStrangeKebab = function () {
  let string = this.replace(/[^a-zA-Z0-9 ]/g, " ") // removing all symbols
    .replace(/^[0-9]{4}/, "") // removing numbers at the begining
    .replace(/[A-Z]/g, " $&") // adding a white space before capital letters
    .replace(/\s\s+/g, " ") // replacing multiple whitespaces with one
    .trim() // removing whitespaces at the begining of the string
    .replace(/\s+/g, "-") // replacing spaces with dashes
    .toLowerCase(); // making the string lowercase

  return string;
  c;
};

// running the function for all the sample strings
source.forEach((item) => console.log(item.toStrangeKebab()));
