"use strict";
document.addEventListener("DOMContentLoaded", (e) =>{

    let canvas = document.querySelector("#canvas");
    let contenedorCanvas = document.querySelector("#contenedorCanvas");
    /** @type {CanvasRenderingContext2D} */
    let ctx = canvas.getContext("2d");
    let height = contenedorCanvas.clientHeight;
    let width = contenedorCanvas.clientWidth;
    canvas.height = height;
    canvas.width = width;
    /*let cantFichasGanar = document.querySelector('#cantFichasGanar').value;*/
    let tablero = null;
    let turno = 1;
    let fichas = [];
    let ultimaFichaClicked = null;
    let isMouseDown = false;
    let jugador1 = null;
    let jugador2 = null;
    let ganador = -1;

    let crearTablero = () =>{
        if(cantFichasGanar == 4){
            tablero = new Tablero(ctx, 6, 7, 70, cantFichasGanar)
        }
        else if(cantFichasGanar == 5){
            tablero = new Tablero(ctx, 7, 8, 50, cantFichasGanar)
        }
        else if(cantFichasGanar == 6){
            tablero = new Tablero(ctx, 8, 9, 40, cantFichasGanar)
        }
    }

    let agregarFichas = () => {
        let fichasJugador1 = jugador1.getFcihas();
        let fichasJugador2 = jugador2.getFcihas();
        for(let i =0; i < fichasJugador1.length(); i++){
            fichas.push(fichasJugador1[i]);
        }
        for(let i =0; i < fichasJugador2.length(); i++){
            fichas.push(fichasJugador2[i]);
        }
        dibujarInicio();
    };

    let generarFichasCadaJugador = () => {
        let cantFichasJugador = tablero.getCantidadFichas() /2;
        for (let i = 0; i <= cantFichasJugador; i++) {
            let src = './img/'+jugador1.getSeleccion()+'.png';
            let img = crearImagen(src);
            let ficha = new Ficha((width*0.2) + (Math.random() * 150), (height / 2) + (Math.random() * 150), ctx, tamanio - (tamanio*0.15), img, jugador1.getNumJugador());
            jugador1.addFicha(ficha);
        }

        for (let i = 0; i <= cantFichasJugador; i++) {
            let src = './img/'+jugador2.getSeleccion()+'.png';
            let img = crearImagen(src);
            let ficha = new Ficha((width*0.8) + (Math.random() * 150), (height / 2) + (Math.random() * 150), ctx, tamanio - (tamanio*0.15), img, jugador2.getNumJugador());
            jugador2.addFicha(ficha);
        }
    };

    let crearImagen = (src)=>{
        let img = new Image();
        img.src = src;
        return img;
    };

    let dibujarInicio = () => {
        borrarCanvas();
        for (let i = 0; i < fichas.length; i++) {
            if (fichas[i] != ultimaFichaClicked) {
                fichas[i].dibujarFicha();
            }
        }
        if (ultimaFichaClicked != null) {
            ultimaFichaClicked.dibujarFicha();
        }
        tablero.iniciarTablero();
        diBujarPuntajeYTurno();
    };

    let borrarCanvas = () => {
        context.fillStyle = '#FFF';
        context.fillRect(0, 0, width, height);
    };

    let crearJugadores= () =>{
        let nombre1 = document.querySelector("#nombreJugador1").value;
        let nombre2 = document.querySelector("#nombreJugador2").value;
        let seleccion1 = document.querySelector("#seleccionJugador1").value;
        let seleccion2 = document.querySelector("#seleccionJugador2").value;
        jugador1 = new Jugador(nombre1, seleccion1, posX, posY, ctx, 1);
        jugador2 = new Jugador(nombre2, seleccion2, posX, posY, ctx, 2);
    };

    function buscarFichaClicked(x, y) {
        for (let i = 0; i < fichas.length; i++) {
            const ficha = fichas[i];
            if (ficha.isPointInside(x, y)) {
                return ficha;
            }
        }
    };

    let setGanador = (numJugador) => {
        ganador = numJugador;
        if (player == 1) {
            
        }
        else {
            
        }
    };

    function onMouseDown(event) {
        isMouseDown = true;
        if (ultimaFichaClicked != null) {
            ultimaFichaClicked = null;
        }
        let fichaClicked = buscarFichaClicked(event.layerX, event.layerY);
        if (fichaClicked != null && turno == fichaClicked.getJugador() && ganador == -1) {
            ultimaFichaClicked = fichaClicked;
        }
        dibujarInicio();
    };
    
    function onMouseMoved(event) {
        if (isMouseDown && ultimaFichaClicked != null) {
            ultimaFichaClicked.setPosicion(event.layerX, event.layerY);
            drawFigures();
        }
    };

    function onMouseUp(event) {
        isMouseDown = false;
        if (ultimaFichaClicked != null) {
            let x = 300;
            let y = 550;
            if (event.layerX > tablero.getTamanioTablero() && event.layerX < (tablero.getTamanioTablero() * tablero.getColumnas()) && event.layerY >= 0 && event.layerY < tablero.getTamanioCasillero()) {
                for (let i = 0; i <= tablero.getColumna(); i++) {
                    let tamanio = tablero.getTamanioTablero() + (tablero.getTamanioCasillero() * i);
                    for (let j = 0; j <= tablero.getFila(); j++) {
                        if (event.layerX >= tamanio && event.layerX <= tamanio + 99) {
                            if (tablero.getFicha(i, j) == 0) {
                                tablero.setFicha(i, j, ultimaFichaClicked.getJugador());
                                ultimaFichaClicked.setPosicion(x + (tablero.getTamanioCasillero() * i), y - (tablero.getTamanioCasillero() * j));
                                ultimaFichaClicked.setFueJugada(true);
                                cambiarTurno();
                                dibujarInicio();
                                if (tablero.checkGanador(i, j, ultimaFichaClicked.getJugador())) {
                                    setGanador(ultimaFichaClicked.getJugador());
                                }
                                break;
                            }
                        }
                    }
                }
            } else {
                reubicarUltimaFicha();
            }
        }
    };

    let cambiarTurno = () => {
        if (turno == 1) {
            turno = 2;
        }
        else {
            turno = 1;
        }
    };

    let reubicarUltimaFicha = () => {
        if (ultimaFichaClicked != null) {
            ultimaFichaClicked.setFueJugada(false);
            ultimaFichaClicked.reiniciarPosicionesOrigen();
        }
        ultimaFichaClicked = null;
        dibujarInicio();
    };

    let iniciarJuego = () => {
        ganador = -1;
        crearJugadores();
        generarFichasCadaJugador();
        agregarFichas();
        tablero.setCantFichasGanar();
        tablero.iniciarTablero();
        tablero.iniciarMatriz();
        canvas.addEventListener('mousedown', onMouseDown, false);
        canvas.addEventListener('mouseup', onMouseUp, false);
        canvas.addEventListener('mousemove', onMouseMoved, false);
        dibujarInicio();
    };

    let reiniciarJuego = () => {
        ganador = -1;
        turno = 1;
        fichas = [];
        tablero.iniciarMatriz();
        generarFichasCadaJugador();
        agregarFichas();
        reubicarUltimaFicha();
    };

    let mostrarJuego = () => {
        canvas.classList.add("mostrarCanvas");
    };
    
    document.querySelector('#btnPlay').addEventListener("click", mostrarJuego);

});