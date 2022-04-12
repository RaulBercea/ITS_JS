# The difference between slice() and splice() for javascript arrays

Both **slice()** and **splice()** in javascript are used to select a number of elements from and array, but the way in wich they function is different.

## slice()

By using the **slice()** method and giving it 2 indexes it will create a new array containing the elements from the first index until the second index without changing the original array.

##### For example:

```javascript
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

let citrus = fruits.slice(1, 3);
```

The result of the previous code will be `citrus = ['Orange','Lemon']`

## splice()

The **splice()** method will remove the elements from an array and optionaly add others depending on the parameters givven. This process changes the original array

##### For example:

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");
```

The result of the previous code will be:
`frutis = ['Banana','Orange','Lemon','Kiwi','Apple','Mango']`
