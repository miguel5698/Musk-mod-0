//const readLine = require("readline-sync");

/*function pedirMatriz() {
    const filas = readLine.questionInt("Introduce el número de filas: ");
    const columnas = readLine.questionInt("Introduce el número de columnas: ");

    const matriz = [];

    for (let i = 0; i < filas; i++) {
        const fila = [];
        for (let j = 0; j < columnas; j++) {
            const valor = readLine.question(`Introduce el valor para la posición [${i}][${j}]: `);
            fila.push(valor);
        }
        matriz.push(fila);
    }

    return matriz;
}*/



const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


const columnas = matriz[0].length;
const filas = matriz.length;



function recorrerFila(matriz, posX, posY, columnas) {
    let sudoku = true;
    let cont = 0;
    let auxY = posY + 1;

    while (cont < columnas - 1 && sudoku) {
        if (auxY === columnas) {
            auxY = 0;
        }

        if (matriz[posX][posY] === matriz[posX][auxY]) {
            sudoku = false;
        } else {
            cont++;
            auxY++;
        }
    }

    //console.log("Se han dado ", cont, "vueltas");
    return sudoku;
}



function recorrerColumna(matriz, posX, posY, filas) {
    let sudoku = true;
    let cont = 0;
    let auxX = posX + 1;

    while (cont < filas - 1 && sudoku) {
        if (auxX === filas) {
            auxX = 0;
        }

        if (matriz[posX][posY] === matriz[auxX][posY]) {
            sudoku = false;
        } else {
            cont++;
            auxX++;
        }
    }


    return sudoku;
}


function sudoku(matriz, filas, columnas) {
    let sudoku = true;

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (!recorrerFila(matriz, i, j, columnas) || !recorrerColumna(matriz, i, j, filas)) {
                sudoku = false;
                break;
            }
        }
        if (!sudoku) break;
    }

    return sudoku;
}

if (sudoku(matriz, filas, columnas)) {
    console.log("Es correcto");
} else {
    console.error("No es correcto");
}