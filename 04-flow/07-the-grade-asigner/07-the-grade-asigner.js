/**
 * Function that takes a score from 0 to 100 and returns a grade in the USA format
 * @param {Number} score a score from 0 to 100
 * @returns a grade in the usa format(A,B,C,D,F)
 */
function assignGrade(score) {
    if (score <= 50) {
        return "F";
    }
    if (score > 55 && score < 60) {
        return "D";
    }
    if (score >= 60 && score < 65) {
        return "C";
    }
    if (score >= 65 && score < 70) {
        return "B";
    }
    if (score >= 70) {
        return "A";
    }
}

for (let i = 60; i <= 100; i++) {
    let grade = assignGrade(i);
    console.log("For " + i + "  you got " + grade);
}