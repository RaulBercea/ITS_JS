const maxAge = 70;

/**
 * Funzione che calcola quante tazze di caffe dovrai bere fino ad una certa eta
 * in base al eta attuale ed il numero di tazze di caffe consumate al giorno
 * 
 * @param {number} age eta attuale
 * @param {number} AmmountPerDay quantita di caffe al giorno
 */
function calculateSupply(age, AmmountPerDay) {
  let coffeConsumed = (maxAge - age) * 365 * AmmountPerDay;
  console.log(
    "you will need " +
    coffeConsumed +
    " cups of coffee to last you until the ripe old age of " +
    maxAge
  );
}

calculateSupply(24, 3);
calculateSupply(27, 2);
calculateSupply(39, 1);

//versione in litri

/**
 * Funzione che calcola quante tazze di caffe dovrai bere fino ad una certa eta
 * in base al eta attuale ed il numero di tazze di caffe consumate al giorno
 * 
 * @param {number} age eta attuale
 * @param {number} AmmountPerDay quantita di caffe al giorno
 */
function calculateSupplyLiters(age, AmmountPerDayLiters) {
  let coffeConsumed = (maxAge - age) * 365 * AmmountPerDayLiters;
  console.log(
    "you will need " +
    Math.round(coffeConsumed) +
    " liters of coffee to last you until the ripe old age of " +
    maxAge
  );
}

calculateSupplyLiters(24, 0.5);