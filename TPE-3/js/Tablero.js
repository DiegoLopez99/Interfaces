class Tablero{

    constructor(ctx, filas, columnas, tamanio, cantFichasGanar) {
        this.ctx = ctx;
        this.filas = filas;
        this.columnas = columnas;
        this.tamanio = tamanio;
        this.matriz = [];
        this.cantFichasGanar = cantFichasGanar;
    }

    //Inicia y dibuja el tablero
    iniciarTablero(widthJugador1) {
        for (let x = 0; x < this.columnas; x++) {
            for (let y = 0; y < this.filas; y++) {
                let posX = (x * this.tamanio) +  widthJugador1;
                let posY = (y * this.tamanio) + 30;
                let casillero = new Casillero();
                casillero.addImage("./img/casillero.png", posX, posY, this.tamanio, this.ctx);
            }
        }
    }

    //inicia la matriz
    iniciarMatriz() {
        for (let x = 0; x < this.columnas; x++) {
            this.matriz[x] = [];
            for (let y = 0; y < this.filas; y++) {
                this.matriz[x][y] = 0;
            }
        }
    }

    //Checkea si hay ganador
    checkGanador(columna, fila, numJugador) {
        let total = -1;
        let f = fila;
        let c = columna;

        //busca hacia la derecha
        while ((c < this.columnas) && (this.getFichaPosicion(c, f) == numJugador)) {
            total++;
            c++;
        }

        //busca hacia la izquierda
        f = fila;
        c = columna;
        while ((c >= 0) && (this.getFichaPosicion(c, f) == numJugador)) {
            total++;
            c--;
        }

        if (total >= this.cantFichasGanar) {
            return numJugador;
        }

        //busca por altura
        total = 0;
        f = fila;
        c = columna;
        while ((f >= 0) && (this.getFichaPosicion(c, f) == numJugador)) {
            total++;
            f--;
        }
        if (total >= this.cantFichasGanar) {
            return numJugador;
        }

        //busca en diagonal de izquierda hacia abajo
        total = -1;
        f = fila;
        c = columna;
        while ((f >= 0) && (c >= 0) && (this.getFichaPosicion(c, f) == numJugador)) {
            total++;
            f--;
            c--;
        }

        //busca en diagonal de derecha a arriba
        f = fila;
        c = columna;
        while ((c < this.columnas) && (f < this.filas) && (this.getFichaPosicion(c, f) == numJugador)) {
            total++;
            c++;
            f++;
        }
        if (total >= this.cantFichasGanar) {
            return numJugador;
        }

        //busca en diagonal izquierda a arriba
        total = -1;
        f = fila;
        c = columna;
        while ((f < this.filas) && (c >= 0) && (this.getFichaPosicion(c, f) == numJugador)) {
            total++;
            f++;
            c--;
        }

        //busca en diagonal derecha a abajo
        f = fila;
        c = columna;
        while ((c < this.columnas) && (f >= 0) && (this.getFichaPosicion(c, f) == numJugador)) {
            total++;
            c++;
            f--;
        }

        if (total >= this.cantFichasGanar) {
            return numJugador;
        }
        return false;
    }

    getTamanioTablero(){
        return ((document.querySelector('#canvas').width - (this.columnas * this.tamanio))/2);
    }

    getTamanioCasillero(){
        return this.tamanio;
    }

    setFicha(x, y, numJugador) {
        this.matriz[x][y] = numJugador;
    }

    getFichaPosicion(x, y) {
        return this.matriz[x][y];
    }

    setCantFichasGanar(){
        this.cantFichasGanar = document.querySelector('#cantFichasGanar').value;
    }

    getCantidadFichas() {
        return this.columnas * this.filas;
    }

    getColumnas() {
        return this.columnas;
    }

    getFilas() {
        return this.filas;
    }


}