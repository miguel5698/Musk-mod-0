const readLine = require("readline-sync");
const num = parseInt(readLine.question("Introduce un número: "));

function esPrimo(num) {
    let cont = 0;
    for (let i = num; i > 0; i--) {
        if (num % i === 0) {
            cont++;
        }
        if (cont > 2) {
            break;
        }
    }
    if (cont > 2) {
        console.log('No es primo');
    } else {
        console.log('Es un numero primo');
    }

}


esPrimo(num);