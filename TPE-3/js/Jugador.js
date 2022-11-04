class Jugador{

    constructor(nombre, seleccion, posX, posY, ctx, numJugador){
        this.nombre = nombre;
        this.seleccion = seleccion;
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.numJugador = numJugador;
        this.fichas = new Array();
        this.gano = false;
    }

    getNombre(){
        return this.nombre;
    }

    getTurno(){
        return this.turno;
    }

    getFichas(){
        return this.fichas;
    }

    getSeleccion(){
        return this.seleccion;
    }

    getNumJugador(){
        return this.numJugador;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setTurno(turno){
        this.turno = turno;
    }

    addFicha(ficha){
        this.fichas.push(ficha);
    }



}