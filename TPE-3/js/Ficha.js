class Ficha{

    constructor(posX, posY, ctx, tamanio, imagen, numJugador){
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.imagen = imagen;
        this.tamanio = tamanio;
        this.radio = tamanio/2;
        this.jugador = numJugador;
        this.fill = "#fff"
        this.jugada = false;
    }

    getJugador(){
        return this.jugador;
    }

    setFill(fill){
        this.fill = fill;
    }

    dibujarFicha(){
        let img = this.imagen;
        img.onload = ()=>{
            /*this.ctx.fillStyle = this.fill;*/
            this.ctx.drawImage(this.imagen, this.posX - this.radio, this.posY - this.radio, this.tamanio, this.tamanio);
        }
    }

    setPosicion(x, y){
        if(this.jugo == false){
            this.posX = x;
            this.posY = y;
        }
    }

    setFueJugada(buleano){
        this.jugada = buleano;
    }

    getPosicion(){
        return {
            x: this.getPosX(),
            y: this.getPosY(),
        }
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    getFill(){
        return this.fill;
    }

    isPointInside(x, y){
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radio;
    }

    getRadio(){
        return this.radio;
    }

    reiniciarPosicionesOrigen() {
        if (this.getJugador() == 1) {
            this.setPosicion(30 + (Math.random() * 150), (height / 2) + (Math.random() * 150));
        } else {
            this.setPosicion(width - 180 + (Math.random() * 150), (height / 2) + (Math.random() * 150));
        }
    }

}