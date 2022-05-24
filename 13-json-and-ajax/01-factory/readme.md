## 01 Factory

## Author Details

-   Name : Raul
-   Surname: Bercea
-   Mail: raul.bercea@edu.itspiemonte.it

## Excercise requirements

-   Write car.json, a JSON that represents a car object
-   Try to make your object as complete as possible, having at least one
    property of the following types:
    -   Number, String, Boolean, Array, Object, Null
-   Write a factory.json that represents a car factory. Follow the same rules
    above.
    -   Transform car.json into cars.json with 5 cars
-   Cars should belong to a factory. Write two variants of factory.json:
    -   One that has cars directly embedded in the factory JSON structure.
    -   Another that uses cars referring to their IDs

## Aproach to Solution

Json files are declared similarly to javascript object in this case to create a car the json file also has inside it the engine details as an object and the optionals as an array the licence plate is null because the car hasn't been sold yet. The factory itself is made by adding the cars to the json file (in this case both the full car array and the id in separate files)
