## 01 Dealay

## Exercise Reqiuirements

-   Write a function called round that returns a promise with a 50/50
    probability of resolving or rejecting

-   The function should take 2 optional arguments:
    -   label, a label for the round, otherwise the default is "round"
    -   delay, a delay in which to resolve the promise, otherwise 500ms
-   Call the function 3 times and use the Promise API to create an output as in the following page
-   Remember to handle any possible errors cleanly

```
When any round is lost (and terminate)
round x: lost!
Game over

When all rounds are won (and terminate)
round 1:won!
round 2:won!
round 3:won!
Game over

```

## Aproach to solution

In order to create a promise with a 50/50 chance of resolving the
function uses math.random and checks if it is bigger than 0.5
after that the program calls the resolve or reject function
based on the result. After that the function is called 3 times using the allSettled function in the promise Object then by cicling trough the results and generating an output based on the result
