const readLine = require("readline-sync");

const num = readLine.question("Introduce un número: ");

function factorial(num) {
    let mult = 1;
    for (let i = 1; i <= num; i++) {
        mult *= i;
    }
    return mult;
}

console.log("resultado:", factorial(num));