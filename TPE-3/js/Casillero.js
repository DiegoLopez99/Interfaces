class Casillero {
    constructor() {

    }
    
    addImage(src, posX, posY, tamanio){
        let img = new Image();
        img.src = src;
        context.drawImage(img, posX, posY, tamanio, tamanio);
    }

}