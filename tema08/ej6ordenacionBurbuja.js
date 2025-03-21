const crypto = require("crypto");


const lista = [];
for (let i = 0; i < 10_000; i++) {
    lista.push(crypto.randomInt(1000));
}


let listaBurbuja = lista.slice();

console.time("Tiempo de ejecución");
for (let i = 0; i < listaBurbuja.length; i++) {
    for (let j = 0; j < listaBurbuja.length - 1; j++) {
        if (listaBurbuja[j] > listaBurbuja[j + 1]) {
            const aux = listaBurbuja[j];
            listaBurbuja[j] = listaBurbuja[j + 1];
            listaBurbuja[j + 1] = aux;
        }
    }
}
console.timeEnd("Tiempo de ejecución");



