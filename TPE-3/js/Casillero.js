class Casillero {
    constructor() {

    }
    
    addImage(src, posX, posY, tamanio, ctx){
        let img = new Image();
        img.src = src;
        ctx.drawImage(img, posX, posY, tamanio, tamanio);
    }

}