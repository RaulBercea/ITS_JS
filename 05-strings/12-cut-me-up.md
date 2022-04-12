# The Difference Between slice(), substring() and substr() In Javascript

slice(), substring() and substr() are all methods for manipulating strings in javascript, they more or less do the same thing with subtle differences

## the substr() method

the substr() method is considered deprecated and shouldn't be used in new websites
however it can be found in legacy code

```javascript
let text = "Hello world!";
let result = text.substr(0, 4);
```

in the **substr()** method the first parameter reppresents the index of the string where you want to start the substring from. The second parameter is a length that counts the characters until your desired end point.

For example, if you specify `3` for the second parameter, it will count three characters from the specified index in the first parameter

## the slice() method

##### the result of the following code will be "Hello"

```javascript
let text = "Hello world!";
let result = text.slice(0, 5);
```

The first argument in the **slice()** method is the `start`, it's an integer that indicates the index where you want the given string to be sliced from.

The second argument is the `end`.The end parameter is used to indicate where you want the slicing to end(if it isn't indicated the method will just go to the end of the string)

## the substring() method

##### the result of the following code will be "ell"

```javascript
let text = "Hello world!";
let result = text.substring(1, 4);
```

The **substring()** method has the same exact parameters as the **slice()** method and they are used in the exact same way.

## The differences

Since the parameters and syntax is almost identical between **slice()** and **substring()** what are the differences?

The biggest difference between the two methods is with the vallue of the parameters given, specificaly what happens if the first parameter is greater than the second one.

In the **slice()** method what happens is that the function returns an empty string, since logicaly there is no way to have a starting position be bigger than the endding position.

In the **substring()** method however the result will actualy be the same as with the parameters in the correct order.

```javascript
let str = "hello world";

//the result will be identical
str.substring(0, 3);
str.substring(3, 0);
```

#### Negative parameters

In the **Slice()** method the parameters are allowed to be negative, what that does is that you count _backwards_

```javascript
let str = "hello world";

str.slice(-3, -1);
```

What this does is count thre characters from the end

> hello wo**r**ld

Then again one character from the end

> hello wor**l**d

the result will then be `rl`

In the **substring()** method both negative arguments resolve to `0` as such it will return an empty string if one negative argument is used the method will do nothing and just return the given string

#### What happens if we use one argument?

The answer is pretty simple.

All of the methods do the exact same thing

```javascript
let str = "hello world";

//the result will be identical
str.slice(3);
str.substring(3);
str.substr(3);
```
