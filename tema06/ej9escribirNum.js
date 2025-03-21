const readLine = require("readline-sync"); 

const numeros = ['cero','uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez'];

function imprimirNumero(){
    let esNum = false;
    while(esNum == false){
        const input = readLine.question("Introduce un numero del 0 al 10: ");
        const num = parseInt(input);
        if(isNaN(num)){
            continue;
        } else {
            if(num>=0 && num<=10){
                let encontrado = false;
                while(encontrado==false){
                    for(let i=0; i<=10;i++){
                        if(i == num){
                            console.log(numeros[i]);
                            encontrado =true;
                        }else{
                            continue;
                        }
                    }
                }  
                esNum = true;
            } else{
                continue;
            }
            
        }
    }
}

imprimirNumero();