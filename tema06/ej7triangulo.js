//const altura = 5;
const readLine = require("readline-sync"); 

const altura = readLine.question("Introduce una altura: ");


function dibujarEspacios(altura,posicion){
    let espacio ="";
    for(let i = posicion;i<altura; i++){
        espacio+=" ";
    }
    return espacio;
}

function dibujarTriangulo(altura){
    let asterisco ='*';
    let cont = 0;
    while(cont < altura){
        console.log(dibujarEspacios(altura,cont)+asterisco);
        asterisco+='**';
        cont++;
    }
}


dibujarTriangulo(altura)