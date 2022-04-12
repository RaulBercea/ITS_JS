/**
 * Funzione che restituisce una frase a console utilizzando i parametri passati
 * @param {number} childrenNumber numero di figli
 * @param {string} partnerName nome del futuro compagno
 * @param {string} location luogo in cui avverra
 * @param {string} jobTitle lavoro che fara
 */
function tellFortune(childrenNumber, partnerName, location, jobTitle) {
  console.log(
    "you will be a " +
    jobTitle +
    " in " +
    location +
    ", and married to " +
    partnerName +
    " with " +
    childrenNumber +
    " kids"
  );
}

tellFortune(3, "Mary", "Paris", "Accountant");
tellFortune(2, "John", "Seattle", "Doctor");
tellFortune(4, "Claire", "Venice", "Lawyer");
