## 01 Dealay

## Exercise Reqiuirements

-   Use promises to implement a delay function that can be used like in the code below
-   Your implementation should work for any type of Javascript function such as
    -   regular functions
    -   arrow functions
    -   anonymous function

```javascript
delay(300).then(myFunction);
```

## Aproach to Solution

When a promise is resolved succesfuly the parameter passed in the
then() method is called in this case passing a function outputs
a string to the console, by crating a function with the promise
we can apply the parameter to delay for a setTimeout to execute
the function after a certain ammount of time
