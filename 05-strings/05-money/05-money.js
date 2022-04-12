/**
 * @file: 05-money.js
 * @author: Raul Bercea Constantin
 * 
 * A function that is able to recognize the ammount of money
 * given to it as a parameter and return singular plural and a custom message
 * depending on the ammount
 */

/**
 * checks the value of the given number or the length
 * and returns a string depending on them
 * 
 * @param {Number} ammount the ammount of money in dollars
 * @returns a custom string based on the vallue and length of the ammount given
 */
function money(ammount) {
    let ammountToEuros = ammount * 0.9;

    if (ammount === 1) {
        return ammount + " Dollar, witch is " + ammountToEuros + " In euros";
    }
    else if (ammount.toString().length > 6) {
        return ammount + " Dollars :), witch is " + ammountToEuros + " In euros";
    }
    else {
        return ammount + " Dollars, witch is " + ammountToEuros + " In euros";
    }
}

console.log(money(1));
console.log(money(10));
console.log(money(1000000));