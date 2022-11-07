addEventListener("DOMContentLoaded", (e) =>{
    let canvas = document.querySelector("#canvas");
    let contenedorCanvas = document.querySelector("#contenedorCanvas");
    /** @type {CanvasRenderingContext2D} */
    let ctx = canvas.getContext("2d");
    let height = contenedorCanvas.clientHeight;
    let width = contenedorCanvas.clientWidth;
    canvas.height = height;
    canvas.width = width;
    let cantFichasGanar = document.querySelector('#cantFichasGanar').value;
    let tablero = null;
    let turno = 1;
    let fichas = [];
    let ultimaFichaClicked = null;
    let isMouseDown = false;
    let jugador1 = null;
    let jugador2 = null;
    let ganador = -1;
    let tamanio = 0;

    //crea el tablero segun el modo de juego selecccionado
    function crearTablero(){
        if(cantFichasGanar == 4){
            tamanio = 60;
            tablero = new Tablero(ctx, 6, 7, tamanio, cantFichasGanar);
        }
        else if(cantFichasGanar == 5){
            tamanio = 45;
            tablero = new Tablero(ctx, 7, 8, tamanio, cantFichasGanar);
        }
        else if(cantFichasGanar == 6){
            tamanio = 30;
            tablero = new Tablero(ctx, 8, 9, tamanio, cantFichasGanar);
        }
    };

    //agrega las fichas al arreglo
    function agregarFicha(ficha){
        fichas.push(ficha);
        dibujarInicio();
    };

    //genera fichas de un jugador
    function generarFichasJugador(numJugador, src, widthJugador){
        let cantFichasJugador = tablero.getCantidadFichas() /2;
        for (let i = 0; i <= cantFichasJugador; i++) {
            let img = crearImagen(src);
            let ficha = new Ficha(widthJugador, (height / 2) + (Math.random() * 150), ctx, tamanio - (tamanio*0.15), img, numJugador);
            agregarFicha(ficha);
        }
    };

    //crea una imagen con el src que se le pasa por parametro
    function crearImagen(src){
        let img = new Image();
        img.src = src;
        return img;
    };

    //dibuja la pantalla del juego
    function dibujarInicio(){
        borrarCanvas();
        for (let i = 0; i < fichas.length; i++) {
            if (fichas[i] != ultimaFichaClicked) {
                fichas[i].dibujarFicha();
            }
        }
        if (ultimaFichaClicked != null) {
            ultimaFichaClicked.dibujarFicha();
        }
        tablero.iniciarTablero(width*0.3);
        diBujarNombreJugadores();
    };

    function borrarCanvas(){
        ctx.fillStyle = '#FFF';
        ctx.fillRect(0, 0, width, height);
    };

    //Setea los nombres de los jugadores
    function setJugadores(){
        jugador1 = document.querySelector("#nombreJugador1").value;
        jugador2 = document.querySelector("#nombreJugador2").value;
    }

    //busca el ultima ficha clickeada
    function buscarFichaClicked(x, y) {
        for (let i = 0; i < fichas.length; i++) {
            const ficha = fichas[i];
            if (ficha.isPointInside(x, y)) {
                return ficha;
            }
        }
    };

    //dibuja el ganador
    function setGanador(numJugador){
        ganador = numJugador;
        if (player == 1) {
            ctx.font = "100px Comic Sans MS";
            ctx.fillStyle = "#000";
            ctx.fillText(jugador1, 100, 100);
        }
        else {
            ctx.font = "100px Comic Sans MS";
            ctx.fillStyle = "#000";
            ctx.fillText(jugador2, 100, 100);
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
            dibujarInicio();
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
                                    let menuReinicio = document.querySelector("#menuReinicio");
                                    filtro.classList.remove("activar");
                                    menuReinicio.classList.add("activar");
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

    //cambia el turno
    function cambiarTurno(){
        if (turno == 1) {
            turno = 2;
        }
        else {
            turno = 1;
        }
    };

    //vuelve la ficha a su lugar de origen
    function reubicarUltimaFicha(){
        if (ultimaFichaClicked != null) {
            ultimaFichaClicked.setFueJugada(false);
            ultimaFichaClicked.reiniciarPosicionesOrigen();
        }
        ultimaFichaClicked = null;
        dibujarInicio();
    };

    //dibuja los nombres de los jugadores
    function diBujarNombreJugadores(){
        ctx.strokeStyle = "#FF0";
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "#000";
        ctx.fillText(jugador1, 20, 25);
        ctx.fillStyle = "#000";
        ctx.fillText(jugador2, width-100, 25);
    }

    //Inicia el juego
    function iniciarJuego(){
        filtro.classList.remove("activar");
        menuIncio.classList.remove("activar");
        let seleccionJug1 = document.querySelector("#seleccionJugador1").value;
        let seleccionJug2 = document.querySelector("#seleccionJugador2").value;
        ganador = -1;
        setJugadores();
        crearTablero();
        generarFichasJugador(1, "./img/Fichas/"+seleccionJug1+".png", 30 + (Math.random() * 150));
        generarFichasJugador(2, "./img/Fichas/"+seleccionJug2+".png", (width-150) + (Math.random() * 150));
        tablero.setCantFichasGanar();
        tablero.iniciarTablero(width*0.3);
        tablero.iniciarMatriz();
        canvas.addEventListener('mousedown', onMouseDown, false);
        canvas.addEventListener('mouseup', onMouseUp, false);
        canvas.addEventListener('mousemove', onMouseMoved, false);
        dibujarInicio();
    };

    //Reinicia el juego
    function reiniciarJuego(){
        ganador = -1;
        turno = 1;
        fichas = [];
        tablero.iniciarMatriz();
        let seleccionJug1 = document.querySelector("#seleccionJugador1").value;
        let seleccionJug2 = document.querySelector("#seleccionJugador2").value;
        generarFichasJugador(1, "./img/Fichas/"+seleccionJug1+".png", 30 + (Math.random() * 150));
        generarFichasJugador(2, "./img/Fichas/"+seleccionJug2+".png", (width-150) + (Math.random() * 150));
        reubicarUltimaFicha();
    };

    //Muestra el canvas y el menu de inicio
    function mostrarJuego(){
        canvas.classList.add("mostrarCanvas");
        filtro.classList.add("activar");
        menuIncio.classList.add("activar");

    };

    let filtro = document.querySelector('#filtro');
    let menuIncio = document.querySelector('#MenuInicioJuego');
    document.querySelector('#btnPlay').addEventListener("click", mostrarJuego);
    document.querySelector('#btnComenzar').addEventListener("click", iniciarJuego);
    document.querySelector('#reiniciar').addEventListener("click", reiniciarJuego);
});