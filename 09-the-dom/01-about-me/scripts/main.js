/**
 * @file: main.js
 * @author: Raul Constantin Bercea
 * using javascript to change content of an html page
 *
 * By using various methods for manipulating the dom in javascript i've
 * modified the content of an html page. By using the .style proptiety i
 * can style the element using css rules.
 * 
 * by using the .getElementsByTagName and .getElementById proprieties i can
 * manipulate an element within the document by finding it's tag or id
 * 
 * by using the .createElement propriety and the body.appendChild proprieties
 * i can add html tags to the page with javascript 
 * 
 */

// changing the font for the body with the page with arial
document.body.style.fontFamily = "Arial, sans-serif";

// changing the spans
document.getElementById("nickname").innerText = "Raul";
document.getElementById("favorites").innerText = "Music,Videogames,Programming";
document.getElementById("hometown").innerText = "Lugnacco";

// Changing the classes of all the li elements
let items = document.getElementsByTagName("li");
for (let i = 0; i < items.length; i++) {
    items[i].className = "list-item";
}

// creating an image element and adding it to the page
let image = document.createElement("img");
image.src = "./images/pic.PNG";
document.body.appendChild(image);

// adding an external css file and applying it after 4 seconds
//making the link element and adding the css file
let cssLink = document.createElement("link");
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("type", "text/css");
cssLink.setAttribute("href", "./styles/style.css");

// adding the imagge to the body after 4 seconds
setTimeout(() => { document.head.appendChild(cssLink); }, 4000);