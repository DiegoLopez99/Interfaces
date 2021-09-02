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


//Ejercicio 3)

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let imageData = ctx.createImageData(width, height);

let r = 255;
let g = 100;
let b = 50;
let a = 255;

function drawRect(imageData, r, g, b, a){
    for(let x = 0; x < width; x++){
        for(let y = 0; y < height; y++){
            setPixel(imageData, x, y, r, g, b, a);
        }
    }
}

function setPixel(imageData, x, y, r, g, b, a){
    let index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}

drawRect(imageData, r, g, b, a);
ctx.putImageData(imageData, 0, 0);

//Ejercicio 4)

let canvasDegrade = document.querySelector('#canvasDegrade');
let ctx2 = canvasDegrade.getContext('2d');
let canvasWidth = canvasDegrade.width;
let canvasHeight = canvasDegrade.height;
let imageData2 = ctx2.createImageData(canvasWidth, canvasHeight);

function drawRectDegrade(imageData){
    for(let x = 0; x < width; x++){
        
        for(let y = 0; y < height; y++){
            var coeficiente = 255/height;
            let r = coeficiente * y;
            let g = coeficiente * y;
            let b = coeficiente * y;
            let a = 255
            setPixel(imageData, x, y, r, g, b, a);
        }
    }
}

drawRectDegrade(imageData2);
ctx2.putImageData(imageData2, 0, 0);


//Ejercicio 5)

let canvas5 = document.querySelector('#canvas5');
let ctx5 = canvas5.getContext('2d');
let width5 = canvas5.width;
let height5 = canvas5.height;
let imageData5 = ctx5.createImageData(width5, height5);

function drawRect5(imageData){
    for(let x = 0; x < width; x++){
        let r;
        let g ;
        let b;
        let a = 255
        if(x <= width5/2){
            var coeficiente = 255 / (width5/2);
            r = coeficiente * x;
            g = coeficiente * x;
            b = 0;
        }else{
            var coeficiente2 = 255 / (width5);
            r = coeficiente * x;
            g = 255 - coeficiente2;
            b = 0;
        }
        for(let y = 0; y < height5; y++){
            setPixel(imageData, x, y, r, g, b, a);
        }
    }
}

drawRect5(imageData5);
ctx5.putImageData(imageData5, 0, 0);