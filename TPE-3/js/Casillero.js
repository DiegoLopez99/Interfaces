class Casillero {
    constructor() {

    }
    
    addImage(src, posX, posY, tamanio, ctx){
        let img = new Image();
        img.src = src;
        img.onload = ()=>{
            ctx.drawImage(img, posX, posY, tamanio, tamanio);
        }
    }

}