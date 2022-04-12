/**
 * @file: 01-the-recipie-card.js
 * @author: Raul Constantin Bercea
 * Storing and outputing javascript objects
 * 
 * by using arrays we can store several objects and access them
 * with an index, in this case a for loop is used to accsess 
 * all of the objects in sequence
 */

//object containing a couple of recipes for sweets
let recipes = [
    {
        title: "pancake",
        servings: 4,
        ingredients: ["Flour", "Sugar", "Baking Powder", "Milk", "Eggs", "Butter"]
    },
    {
        title: "Apple Pie",
        servings: 8,
        ingredients: ["Sugar", "FLour", "Apples", "Eggs", "Ginger", "Nutmeg"]
    }
];

//outputting the objects using a for loop
for (let i = 0; i < recipes.length; i++) {
    let recepie = recipes[i];//turning the elements of the array into accsessible objects
    console.log("Recipe for " + recepie.title + ", " + recepie.servings + " Servings, " + " Ingredients: " + recepie.ingredients.join(","));
};