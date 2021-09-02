"use strict";

let matriz = [];

for(let x = 0; x < 100; x++){
    matriz[x] = [];
    for(let y = 0; y < 100; y++){
        matriz[x][y] = Math.floor(Math.random()*500);
    }
}

//Ejercicio 1) a
function valorMaxMatriz(matriz){
    let valorMayor = 0;
    for(let x = 0; x < 100; x++){
        for(let y = 0; y < 100; y++){
            if(valorMayor < matriz[x][y]){
                valorMayor = matriz[x][y];
            }
        }
    }
    return valorMayor;
}

//Ejercicio 1) b
function valorMayorFilasPares(matriz){
    let valoresMayores = [];
    for(let x = 0; x < 100; x++){
        let valorMayor = 0;
        for(let y = 0; y < 100; y++){
            if((x/2 == 0) && (valorMayor < matriz[x][y])){
                valorMayor = matriz[x][y];

            }
        }
        valoresMayores.push(valorMayor);
    }
    return valoresMayores;
}

function valorMenorFilasImpares(matriz){
    let valoresMenores = [];
    for(let x = 0; x < 100; x++){
        let valorMenor = 500; //500 es el valor maximo que devuelve el math.ramdom
        for(let y = 0; y < 100; y++){
            if((x/2 != 0) && (valorMenor > matriz[x][y])){
                valorMenor = matriz[x][y];
            }
        }
        valoresMenores.push(valorMenor);
    }
    return valoresMenores;
}

//Ejercicio 1) c
function promedioFila(matriz){
    let promediosFila = [];
    for(let x = 0; x < 100; x++){
        let suma = 0;
        let promedio = 0;
        for(let y = 0; y < 100; y++){
            suma = suma+matriz[x][y];
        }
        promedio = suma/100;
        promediosFila.push(suma);
    }
    return promediosFila;
}


//Ejercicio 2)