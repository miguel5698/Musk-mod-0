const readLine = require("readline-sync");

const numTabla = readLine.question("Introduce un número: ");

function tablaMult(numTabla) {
    let mult;
    for (let i = 1; i <= 10; i++) {
        mult = numTabla * i;
        // console.log(mult);
        console.log(numTabla + ' * ' + i + ' = ' + mult);
    }
}

tablaMult(numTabla);

