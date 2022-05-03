/**
 * @file: main.js
 * @author: Raul Constantin Bercea
 * @description: adding the content of an array to a page
 *
 * By using a for each to accsess every element of the boook array 
 * and using an index i can create new html elements and assign them id's
 * with the .id method in order to be uinque. By using the .getElementById
 * method i can target the newly created html element using it's id and by
 * using the innerHTML or innerTEXT methods i can change the content of
 * the elements based on the content within the object
 */

// the book array
let books = [
  {
    title: "book0",
    author: "author0",
    cover: "cover0.png",
    read: true,
  },
  {
    title: "book1",
    author: "author1",
    cover: "cover1.png",
    read: false,
  },
  {
    title: "book2",
    author: "author2",
    cover: "cover2.png",
    read: false,
  },
  {
    title: "book3",
    author: "author3",
    cover: "cover3.png",
    read: true,
  },
  {
    title: "book4",
    author: "author4",
    cover: "cover4.png",
    read: false,
  },
  {
    title: "book5",
    author: "author5",
    cover: "cover5.png",
    read: true,
  },
];

// looping trough the array to create a list for each book
books.forEach((book, index) => {
  // ! creating a list for the book

  // creating the book list
  let bookList = document.createElement("ul");

  // giving the book list an id
  bookList.id = "book-" + index;

  // adding the book list to the body
  document.body.appendChild(bookList);

  // ! creating the list elements within the book list

  // * title
  // creating the list element for the title
  let title = document.createElement("li");

  // giving the element an id
  title.id = "book-title" + index;

  // adding the element to the list
  document.getElementById("book-" + index).appendChild(title);

  // putting the book title within the element
  document.getElementById("book-title" + index).innerHTML =
    "<h2> Title : " + book.title + "</h2>";

  // * author
  // creating the list element for the author
  let author = document.createElement("li");

  // giving the element an id
  author.id = "book-author" + index;

  // adding the element to the list
  document.getElementById("book-" + index).appendChild(author);

  // putting the authors from the book within the element
  document.getElementById("book-author" + index).innerHTML =
    "<h3> Author : " + book.author + "</h3>";

  // * cover
  // crating the list element for the cover
  let cover = document.createElement("li");

  // giving it an id
  cover.id = "book-cover" + index;

  // adding the element to the book list
  document.getElementById("book-" + index).appendChild(cover);

  // adding the book cover from the book object to the element
  document.getElementById("book-cover" + index).innerHTML =
    "<img src=./img/" + book.cover + ">";

  // * css
  // changing the color of the title and loading a class based on weather or not the book has been read
  if (book.read) {
    document.getElementById("book-" + index).className = "bookRead";
    document.getElementById("book-title" + index).style.color = "green";
  } else {
    document.getElementById("book-" + index).className = "bookNotRead";
    document.getElementById("book-title" + index).style.color = "red";
  }
});

// creating a css link element
let cssLink = document.createElement("link");
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("type", "text/css");
cssLink.setAttribute("href", "./styles/bookRead.css");

// appliying style to the page after 5 seconds
setTimeout(() => {
    document.head.appendChild(cssLink);
}, 5000);
