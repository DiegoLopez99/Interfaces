addEventListener("DOMContentLoaded", (e) => {

    // ------- Loader --------
    const loader = document.querySelector("#loader");
    const containerSitio = document.querySelector("#containerSitio");

    setTimeout(function(){
        loader.classList.add('cerrarLoader');
        containerSitio.classList.add('activarSitio')
    }, 5000);


    // ------ Menu-------
    document.querySelector(".btnMenu").addEventListener("click", btnToggle);

    let icono = document.querySelector("#iconoMenu");
    let menu = document.querySelector(".menu");

    function btnToggle(){
        if(icono.classList.contains("fa-bars")){
            icono.classList.remove("fa-bars");
            icono.classList.add("fa-xmark");
        }
        else{
            icono.classList.remove("fa-xmark");
            icono.classList.add("fa-bars");     
        }
        menu.classList.toggle("activar")
    }

    // ------ Carrusel ------

    const fila = document.querySelectorAll(".containerCarrusel");

    const btnScrollDer = document.querySelectorAll("#btnScrollDer");
    const btnScrollIzq = document.querySelectorAll("#btnScrollIzq");

    for(let i = 0; i < btnScrollDer.length;i++){
        btnScrollDer[i].addEventListener("click", function(){
            const carrusel = fila[i];
            carrusel.scrollLeft += (carrusel.offsetWidth - 383);
        });
    }

    for(let i = 0; i < btnScrollIzq.length;i++){
        btnScrollIzq[i].addEventListener("click", function() {
            const carrusel = fila[i];
            carrusel.scrollLeft -= carrusel.offsetWidth;
        });
    }

    // ------ Botones Like agina de juego -------

    const botones = document.querySelectorAll("#btnInteraccionJuego");
    const iconos = document.querySelectorAll("#iconosInteraccionJuego");

    for(let i = 0; i < botones.length; i++){
        botones[i].addEventListener("click", function() {
            if(iconos[i].classList.contains("fa-regular")){
                iconos[i].classList.remove("fa-regular");
                iconos[i].classList.add("fa-solid");
                if(i == 0){
                    iconos[i].classList.add("activarMG")
                    if(iconos[i+1].classList.contains("fa-solid")){
                        iconos[i+1].classList.remove("fa-solid");
                        iconos[i+1].classList.add("fa-regular");
                        iconos[i+1].classList.remove("activarNoMG")
                    }
                }else if(i == 1){
                    iconos[i].classList.add("activarNoMG")
                    if(iconos[i-1].classList.contains("fa-solid")){
                        iconos[i-1].classList.remove("fa-solid");
                        iconos[i-1].classList.add("fa-regular");
                        iconos[i-1].classList.remove("activarMG")
                    }
                }else{
                    iconos[i].classList.add("activarFavorito")
                }
            }else{
                iconos[i].classList.remove("fa-solid");
                iconos[i].classList.add("fa-regular");
                if(i == 0){
                    iconos[i].classList.remove("activarMG")
                }else if(i == 1){
                    iconos[i].classList.remove("activarNoMG")
                }else{
                    iconos[i].classList.remove("activarFavorito")
                }
            }


        });
    }

});