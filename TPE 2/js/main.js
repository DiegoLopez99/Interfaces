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



});