# 02 The Book List

## Author Details

- Name : Raul
- Surname: Bercea
- Mail: raul.bercea@edu.itspiemonte.it

## Excercise Requirements

- Create a complete webpage with a title, description and all other HTML tags
- In the body add an h1 title of "My Book List"
- In javascript, iterate through the array of books.
  ○ For each book, create HTML element with the book title and author and append it to the page

  ○ Use a ul and li to display the books

  ○ Add a url property to each book object that contains the cover image of the book

  ○ Add the image to the HTML using Javascript

  ○ Using javascript change the style of the book depending on whether you have read it or not

- Add an external css file that applies after 5 seconds

  ○ Now change the style of the book depending on whether you have read it or not using both css and javascript (the CSS should use a different color for read books)

## Aproach To Solution

By using a for each to accsess every element of the boook array
and using an index i can create new html elements and assign them id's
with the .id method in order to be uinque. By using the .getElementById method i can target the newly created html element using it's id and by using the innerHTML or innerTEXT methods i can change the content of the elements based on the content within the object
