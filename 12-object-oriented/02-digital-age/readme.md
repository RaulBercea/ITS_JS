# 02 Digital Age

## Author Details

-   Name : Raul
-   Surname: Bercea
-   Mail: raul.bercea@edu.itspiemonte.it

## Excercise requirements

- A Video has the following methods and properties
  - title (a string)
  - seconds (a number)
  - watch(x seconds [optional]) prints "You watched X seconds of 'TITLE'" e.g. "You watched 120 seconds of 'Lord of the rings'". If x is missing prints "You watched all SECONDS seconds of 'TITLE'" e.g. "You watched all 160 seconds of 'Lord of the rings'"
- A MusicVideo extends Video and has these extra methods and properties
  - artist (a string)
  - play() prints "You played 'TITLE' by 'ARTIST'" e.g. "You played 'Another Brick in the Wall' by 'Pink Floyd'"
- Use the prototype method, not classes, to write a constructors for Video and MusicVideo
  - The constructor functions accept a single config object
  - All arguments are optional, use defaults if missing
- Create an array that contains a mix of Video and MusicVideo instances
- Loop on the Array and for each item
  - call the watch() method
  - call the play() method only if it's a MusicVideo. Hint: Use instanceof
- Optional:
  - in a new folder, repeat the exercise using the class syntax rather than the prototype method
  - All behaviors should be identical

## Aproach to solution 

Objects in javascript are created with constructor functions in this case the music video is created by giving the constructo function the title and seconds of duration of the video. In order to add a method to an object we use .prototype and add a function in this case the function will show how much of the video the user has watched. Extending object is also done with prototypes.