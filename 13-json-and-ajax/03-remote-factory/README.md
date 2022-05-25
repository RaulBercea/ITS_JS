# Remote Factory

## Author Details

-   Name : Raul
-   Surname: Bercea
-   Mail: raul.bercea@edu.itspiemonte.it

---

## Exercise Requirements

-   Use jsonblob to store JSON data about cars and a car factory
-   You can use as many blobs as you need. Decide the structure in a way to reduce the amount of data you modify with HTTP requests
-   Write an application that displays a factory with a list of cars
-   Clicking on each car should display a collapsible panel with more information about the car
-   It should be possible to edit the car details
-   Save the modified data to jsonblob with an HTTP request
-   Whenever data is modified you should reload the new data from jsonblob once the writing has finished
-   You should handle all error cases in your application. If an HTTP request fails, you should display a message to the user
-   Your project should include a folder called ‘json’ with all the initial json files that you upload to jsonblob (the initial state of your DB)
-   Your readme (markdown) should include links to all the jsonblobs that you are using as well as a list of their IDs

---

## Approach to Solution

in order to interact with a json blob api we need to initialazie an XMLHttpRequest request after that the json file recived with the get request is parsed as an object this object is then added to the dom based on it's content, if it's a non-complex value it just gets added normaly if it is an array it gets converted to a string, objects get their key and value printed side by side.
In order to modify the json data we use a form that will be initialized based on the ammount of object and by targeting their id's the form can change the content of a propriety present in the object, in order to apply the changes a put XMLHttpRequest is created and sent
