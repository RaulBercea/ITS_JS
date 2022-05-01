/**
 * @file: main.js
 * @author: Raul Constantin Bercea
 * @description: adding the content of an array to a page
 * 
 */

// the book array
let books = [
    {
        title: "book0",
        author: "author0",
        cover: "cover0.png",
        read: true
    },
    {
        title: "book1",
        author: "author1",
        cover: "cover1.png",
        read: false
    },
    {
        title: "book2",
        author: "author2",
        cover: "cover2.png",
        read: false
    },
    {
        title: "book3",
        author: "author3",
        cover: "cover3.png",
        read: true
    },
    {
        title: "book4",
        author: "author4",
        cover: "cover4.png",
        read: false
    },
    {
        title: "book5",
        author: "author5",
        cover: "cover5.png",
        read: true
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
    document.getElementById("book-title" + index).innerHTML = "<h2> Title : " + book.title + "</h2>";

    // * author
    // creating the list element for the author
    let author = document.createElement("li");

    // giving the element an id
    author.id = "book-author" + index;

    // adding the element to the list
    document.getElementById("book-" + index).appendChild(author);

    // putting the authors from the book within the element
    document.getElementById("book-author" + index).innerHTML = "<h3> Author : " + book.author + "</h3>";

    // * cover
    // crating the list element for the cover
    let cover = document.createElement("li");

    // giving it an id
    cover.id = "book-cover" + index;

    // adding the element to the book list
    document.getElementById("book-" + index).appendChild(cover);

    // adding the book cover from the book object to the element
    document.getElementById("book-cover" + index).innerHTML = "<img src=./img/" + book.cover + ">";
});