pos = 0;
hasreachedborder = false;
let img = document.getElementById("catImage");
let imgWidth = img.offsetWidth;

// variant1
// let catWalk = function () {
//     

//     if (pos >= window.innerWidth - imgWidth) {
//         pos = 0;
//     } else {
//         pos += 10;
//         img.style.left = pos + 'px';
//     }

// };

//variant2
// let catWalk = function () {

//     if (pos >= window.innerWidth - imgWidth) {
//         hasreachedborder = true;
//     }
//     else if (pos === 0) {
//         hasreachedborder = false;
//     }

//     if (!hasreachedborder) {
//         pos += 10;
//         img.style.left = pos + 'px';
//     }

//     if (hasreachedborder) {
//         pos -= 10;
//         img.style.left = pos + 'px';
//     }

// };

//variant3
let catWalk = function () {
    if (pos === 800) {
        img.src = "/10-events-and-animation/03-cat-walk/img/cat.jpg";
        setTimeout(() => {
            img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
        }, 10000);
    }
    else if (pos >= window.innerWidth - imgWidth) {
        hasreachedborder = true;
    }
    else if (pos === 0) {
        hasreachedborder = false;
    }

    if (!hasreachedborder) {
        pos += 10;
        img.style.left = pos + 'px';
    }

    if (hasreachedborder) {
        pos -= 10;
        img.style.left = pos + 'px';
    }

}

let animationid = window.setInterval(catWalk, 50);