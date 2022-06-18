/**
 * Function that 
 * @param {*} label 
 * @param {*} delay 
 * @returns 
 */
let roulette = (label, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.random();
      if (random < 0.5) {
        resolve(label || "round");
      } else {
        reject(label || "round");
      }
    }, delay || 500);
  });
};

roulette.then(function won(label){
    console.log(`${label} won`);
});