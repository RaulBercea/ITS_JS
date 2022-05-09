# 04 Clone

## Author Details

-   Name : Raul
-   Surname: Bercea
-   Mail: raul.bercea@edu.itspiemonte.it

## Excercise Requirements

Write a function clone() that clones any object

-   Test it on the object in the next slide
-   Change the name of the cloned object and make sure that the original did not change

## Aproach to solution

in javascript copying an object by assingement still gives the reference to the original object to the asigned object making it so that the modifying the asigned object will also modify the original object. In order to clone an object using only native javacript methods i've made a container object wich gets the value of the original object passed to it while also making a new propriety with the same name and value and putting it in the new object, this way the two objects are completely distinct and modifying one of them doesn't change the other.
