

const readLine = require("readline-sync");

const elementos = readLine.question("Introduce una lista: ");
const lista = elementos.split(',');

function totalRepetidos(lista) {
    const repetidos = new Set();
    const unicos = new Set();

    for (let i = 0; i < lista.length; i++) {
        let repetido = false;
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] === lista[j]) {
                repetido = true;
                repetidos.add(lista[j]);
                lista.splice(j, 1);
                j--;
            }
        }
        if (repetido) {
            repetidos.add(lista[i]);
        } else {
            unicos.add(lista[i]);
        }
    }


    if (repetidos.size === 0) {
        console.log('Todos los elementos son únicos');
    } else {
        console.log('Los elementos repetidos son:', Array.from(repetidos).join(', '));
        console.log('Los elementos únicos son:', Array.from(unicos).join(', '));
    }
}

totalRepetidos(lista);
