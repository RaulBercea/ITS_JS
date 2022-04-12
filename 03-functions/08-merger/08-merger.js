/**
 * Funzione che fa la somma di due parametri se sono tutti e due numeri 
 * o li concatena se sono tuttie e due stringhe
 * in tutti gli altri casi restituisce null
 * 
 * @param {number,string} param1 primo parametro
 * @param {number,string} param2 secondo parametro
 * @returns la somma dei parametri o la loro concatenazione o null
 */
function merger(param1, param2) {
    if ((typeof param1 === "number") && (typeof param2 === "number")) {
        return param1 + param2;
    }
    else if ((typeof (param1) == "string") && (typeof (param2) == "string")) {
        return param1 + param2;
    }
    else {
        return null;
    }
}

//console output
console.log(merger(2, 3));
console.log(merger("hello", "world"));
console.log(merger(1, "43"));