# Several ways to replace a character in a string

#### solution 1

_Using array functions_

by using the split() method we can turn a string into an array

```javascript
let word = "Abracadabra"; //word to change

//turn the string into an array of characters
let wordToArray = word.split("");
```

and then simply replace the character at a given index with something else (in this case the 4th character with 'X')

```javascript
//replace a character
wordToArray[3] = "X";
```

and then turn the array back into a string using the join() method

```javascript
//back to a string
word = wordToArray.join("");
```

#### solution 2

_Using replace()_

by using replace() and a simple regular expression we can change the 4th character with an 'X'

```javascript
let word = "Abracadabra"; //word to change

// the first lower case 'a' found will turn into an 'X'
word = word.replace(/a/, "X");
```

#### solution 3

_Using substring()_

by splitting the string into 2 using substring() twice we can add a character in between the 2 parts and put it back together with a new character in place of another

```javascript
let word = "Abracadabra"; //word to change

//split the string in 2 parts and add a character in between
word = word.substring(0, 3) + "X" + word.substring(4);
```
