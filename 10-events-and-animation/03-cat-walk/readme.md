# 01 Calculate

## Author Details

-   Name : Raul
-   Surname: Bercea
-   Mail: raul.bercea@itspiemonte.it

## Excercise Requirements

-   The cat should start from the left side of the screen
-   Write a function ‘catWalk()’ that moves the cat 10 pixels to the right
-   Make the cat move across the screen by calling that function every 50ms
-   Write different versions of the function to handle the following variants:
    -   Variant 1: When the cat reaches the right side of the screen it should restart from the left
    -   Variant 2: When the cat reaches the right side of the screen, it should move backwards. When it reaches the left it should move forwards
    -   Variant 3: When the cat reaches the middle of the screen, replace the img with a different
        cat image. Keep it in the middle for 10 seconds, and then replace the img with the original
        image and have it continue the walk as in variant 2

## Aproach to solution

By using the window.setInterval() method and giving it a function
as a parameter i can animate an element on a html page. In this
case the function called makes an image move to the left or to the right
by using the .style.left propriety and adding or subrtacting from it. In
order to do that i've used a global varaible for the position of the image,
a global flag wich changes based on weather or not the image reaches the edge of the screen, lastly the imgWidth variable is used to remove the actual width of the image from the calculations involving it's position
