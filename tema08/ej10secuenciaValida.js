const readLine = require("readline-sync");
const secuencia = readLine.question("Introduce una secuencia: ");

function secuenciaValida(secuencia) {
    let pila = [];
    let pares = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let caracter of secuencia) {
        if (caracter === '(' || caracter === '[' || caracter === '{') {
            pila.push(caracter);
        } else if (caracter === ')' || caracter === ']' || caracter === '}') {
            if (pila.length === 0 || pila.pop() !== pares[caracter]) {
                return false;
            }
        }
    }

    return pila.length === 0;
}

if (secuenciaValida(secuencia)) {
    console.log('Es válida')
} else {
    console.log('No es válida');
}

