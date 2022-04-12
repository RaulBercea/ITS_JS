/**
 * Function that takes a score from 0 to 100 and returns a grade in the USA format
 * @param {*} score a score from 0 to 100
 * @returns a grade in the usa format(A,B,C,D,F)
 */
function assignGrade(score) {
    if (score <= 50) {
        console.log("F");
        return "F";
    }
    if (score > 55 && score < 60) {
        console.log("D");
        return "D";
    }
    if (score >= 60 && score < 65) {
        console.log("C");
        return "C";
    }
    if (score >= 65 && score < 70) {
        console.log("B");
        return "B";
    }
    if (score >= 70) {
        console.log("A");
        return "A";
    }
}

let grade = assignGrade(73);
grade = assignGrade(50);
grade = assignGrade(68);