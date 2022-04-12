/**
 * @file: 03-the-movie-database.js
 * @author: Raul Constantin Bercea
 * storing objects in an array, accessing them and working with their content
 * 
 * objects can also store arrays within them, this program also showcases how to
 * use a function for every element in an array by using forEach()
 * 
 */

//array of objects
let movies = [
    {
        title: "Kill Bill Vol. 1",
        duration: 111,
        stars: ["Uma Thurman", "David Carradine", "Daryl Hannah"],
    },
    {
        title: "Sin City",
        duration: 124,
        stars: ["Mickey Rourke", "Clive Olwen", "Bruce WIllis"],
    },
    {
        title: "The Matrix",
        duration: 136,
        stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    },
];

/**
 * Function that outputs an object to the console
 * @param {Object} movie 
 */
function printMovies(movie) {
    console.log(
        movie.title +
        " lasts for " +
        movie.duration +
        ". Stars:" +
        movie.stars.join(",")
    );
}

printMovies(movies[0]);

movies.forEach(printMovies);
