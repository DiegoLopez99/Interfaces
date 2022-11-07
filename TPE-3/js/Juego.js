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

    let crearTablero = () =>{
        if(cantFichasGanar == 4){
            tamanio = 70;
            tablero = new Tablero(ctx, 6, 7, tamanio, cantFichasGanar);
        }
        else if(cantFichasGanar == 5){
            tamanio = 50;
            tablero = new Tablero(ctx, 7, 8, tamanio, cantFichasGanar);
        }
        else if(cantFichasGanar == 6){
            tamanio = 40;
            tablero = new Tablero(ctx, 8, 9, tamanio, cantFichasGanar);
        }
    };

    let agregarFicha = (ficha) => {
        fichas.push(ficha);
        dibujarInicio();
    };

    let generarFichasJugador = (numJugador, src, widthJugador) => {
        let cantFichasJugador = tablero.getCantidadFichas() /2;
        for (let i = 0; i <= cantFichasJugador; i++) {
            let img = crearImagen(src);
            let ficha = new Ficha(widthJugador, (height / 2) + (Math.random() * 150), ctx, tamanio - (tamanio*0.15), img, numJugador);
            agregarFicha(ficha);
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
        tablero.iniciarTablero(width*0.2);
        diBujarNombreJugadores();
    };

    let borrarCanvas = () => {
        ctx.fillStyle = '#FFF';
        ctx.fillRect(0, 0, width, height);
    };

    let setJugadores = () =>{
        jugador1 = document.querySelector("#nombreJugador1").value;
        jugador2 = document.querySelector("#nombreJugador2").value;
    }

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

    let diBujarNombreJugadores = () => {
        ctx.strokeStyle = "#FF0";
        ctx.font = "20px Comic Sans MS";
        ctx.fillStyle = "#000";
        ctx.fillText(jugador1, 20, 25);
        ctx.fillStyle = "#000";
        ctx.fillText(jugador2, width-100, 25);
    }

    let iniciarJuego = () => {
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
        tablero.iniciarTablero(width*0.2);
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
        let seleccionJug1 = document.querySelector("#seleccionJugador1").value;
        let seleccionJug2 = document.querySelector("#seleccionJugador2").value;
        generarFichasJugador(1, "./img/Fichas/"+seleccionJug1+".png", 30 + (Math.random() * 150));
        generarFichasJugador(2, "./img/Fichas/"+seleccionJug2+".png", (width-150) + (Math.random() * 150));
        reubicarUltimaFicha();
    };

    let mostrarJuego = () => {
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