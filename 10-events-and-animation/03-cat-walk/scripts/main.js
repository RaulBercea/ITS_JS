/**
 * @file: main.js
 * @author: Raul Bercea
 * making an image on a html page move using javascript animation
 * 
 * By using the window.setInterval() method and giving it a function
 * as a parameter i can animate an element on a html page. In this
 * case the function called makes an image move to the left or to the right
 * by using the .style.left propriety and adding or subrtacting from it. In
 * order to do that i've used a global varaible for the position of the image,
 * a global flag wich changes based on weather or not the image reaches the edge
 * of the screen, lastly the imgWidth variable is used to remove the actual
 * width of the image from the calculations involving it's position
 * 
 */

pos = 0; // global variable for the position of the image
hasreachedborder = false; // flag for whether the image has reached the right border or not
let img = document.getElementById("catImage"); // getting the image from the html page
let imgWidth = img.offsetWidth; // the width of the image in the document

// variant1
// let catWalk = function () {
//     // when the image reaches the edge of the screen it goes back to the left
//     if (pos >= window.innerWidth - imgWidth) {
//         pos = 0;
//     } else {
//         // if the image hasn't reached the right of the screen it keeps going to the right
//         pos += 10;
//         img.style.left = pos + 'px';
//     }

// };

// variant2
// let catWalk = function () {
//     // if image contacts right the border then it changes the flag to true
//     if (pos >= window.innerWidth - imgWidth) {
//         hasreachedborder = true;
//         // when the position of the image reaches 0 the flag changhes to true 
//     } else if (pos === 0) {
//         hasreachedborder = false;
//     }

//     // if the flag is false the image moves to the right
//     if (!hasreachedborder) {
//         pos += 10;
//         img.style.left = pos + "px";
//     }

//     // if the flag is true the image moves to the left
//     if (hasreachedborder) {
//         pos -= 10;
//         img.style.left = pos + "px";
//     }
// };

//variant3
let catWalk = function () {
    // 800 was calculated aproximatively
    if (pos === 800) {
        // changing the source of the image with another cat
        img.src = "/10-events-and-animation/03-cat-walk/img/cat.jpg";

        // stoping the animation
        window.clearInterval(animationid);

        // setting a timer of 10 seconds that will change the image back to the original and restart the animation
        setTimeout(() => {
            img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
            animationid = window.setInterval(catWalk, 50);
        }, 10000);

        // if image contacts right the border then it changes the flag to true
    } else if (pos >= window.innerWidth - imgWidth) {
        hasreachedborder = true;
        // when the position of the image reaches 0 the flag changhes to true 
    } else if (pos === 0) {
        hasreachedborder = false;
    }

    // if the flag is false the image moves to the right
    if (!hasreachedborder) {
        pos += 10;
        img.style.left = pos + "px";
    }

    // if the flag is true the image moves to the left
    if (hasreachedborder) {
        pos -= 10;
        img.style.left = pos + "px";
    }
};

// animation intervall id and call
let animationid = window.setInterval(catWalk, 50);
