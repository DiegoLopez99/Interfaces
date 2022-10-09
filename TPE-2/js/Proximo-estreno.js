addEventListener("DOMContentLoaded", (e) => {

    const carrusel = document.querySelector(".containerCarruselEscenarios");
    const btnIzquierda = document.querySelector("#btnScrollIzquierda");
    const btnDerecha = document.querySelector("#btnScrollDerecha");


    btnDerecha.addEventListener("click", function(){ 
        carrusel.scrollLeft += (carrusel.offsetWidth + 5);
    });

    btnIzquierda.addEventListener("click", function(){ 
        document.querySelector(".containerCarruselEscenarios").scrollLeft -= (document.querySelector(".containerCarruselEscenarios").offsetWidth +5);
    });
});