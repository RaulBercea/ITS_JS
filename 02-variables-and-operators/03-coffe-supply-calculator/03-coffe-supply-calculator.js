let currentAge = "24";
let maximumAge = "70";
let coffePerDay = "3";

let cupsOfCOffe = (maximumAge - currentAge) * 365 * coffePerDay;

console.log(
  "You will need " +
    cupsOfCOffe +
    " cups of coffee to last you until the ripe old age of " +
    maximumAge
);
