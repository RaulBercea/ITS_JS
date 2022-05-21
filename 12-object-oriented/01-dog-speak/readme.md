# 01 dogSpeak

## Author Details

-   Name : Raul
-   Surname: Bercea
-   Mail: raul.bercea@edu.itspiemonte.it

## Excercise requirements

-   Add a method to the String prototype called dogSpeak() that works as follows:

```javascript
let s = "We like to learn";
s.dogSpeak();
"Dogs are smart".dogSpeak();
```

```javascript
// Console output
// We like to learn Woof!
// Dogs are smart Woof!
```

## Aproach to solution

In order to add a method to the string prototype I've the used `.prototype` propriety this way i can add a function to string in javascript. in order to get the value of the string to use in the function I've used the `this` keyword.
