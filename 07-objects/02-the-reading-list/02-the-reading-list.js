/**
 * @file: 02-the-reading-list.js
 * @author: Raul Constantin Bercea
 * storing objects in an array, accessing them and working with their content
 * 
 */

//array of objects(in this case books)
let books = [
    {
        title: "The Raven",
        author: "Edgar Allan Poe",
        alreadRead: false,
    },
    {
        title: "The Shadow Over Innsmouth",
        author: "H.P. Lovecraft",
        alreadRead: true,
    },
    {
        title: "Frankenstein",
        author: "Merry Shelly",
        alreadRead: false,
    },
    {
        title: "The Shining",
        author: "Stephen King",
        alreadRead: true,
    },
];

//cicle trough all of the books
for (let i = 0; i < books.length; i++) {
    let book = books[i];//creating an object for the element in the array

    //different outputs depending on weather it is already read or not
    if (book.alreadRead) {
        console.log("You have already read " + book.title + " by " + book.author);
    } else {
        console.log("You havent yet read " + book.title + " by " + book.author);
    }
}
