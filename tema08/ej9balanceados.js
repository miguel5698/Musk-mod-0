const readLine = require("readline-sync");
const texto = readLine.question("Introduce un texto: ");


function estanBalanceados(texto) {
    let balance = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === '(') {
            balance++;
        } else if (texto[i] === ')') {
            balance--;
        }
        if (balance < 0) {
            return false;
        }
    }
    return balance === 0;
}


if (estanBalanceados(texto)) {
    console.log('Están balanceados');
} else {
    console.log('No están balanceados');
}


