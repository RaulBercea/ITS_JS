/**
 * Funzione che calcola l'eta di un cane in anni umani
 * @param {*} age eta del cane
 * @param {*} conversionRate quanto vale un anno da cane in anni umani
 */
function calculateDogAge(age, conversionRate) {
  let convertedAge = age * conversionRate;
  console.log("our dog is " + convertedAge + " years old in dog years!");
}

calculateDogAge(4, 7);
calculateDogAge(10, 7);
calculateDogAge(2, 6);
