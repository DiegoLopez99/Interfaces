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

    // ------ Carrusel Inicio ------

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
            carrusel.scrollLeft -= (carrusel.offsetWidth - 383);
        });
    }
    
    // ------ Botones Like Pagina de juego -------

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

    /* -------- Botones Comentar -------- */

    const btnCancelar = document.querySelector("#btnCancelar");
    const btnComentar = document.querySelector("#btnComentar");
    const botonesComentar = document.querySelector("#botonesComentar");

    document.querySelector("#inputComentario").addEventListener("click", function(){
        botonesComentar.classList.add("mostrarBotones")
    });

    document.querySelector("#inputComentario").addEventListener("input", function(){
        btnComentar.classList.add("activarBtn");
    });

    btnCancelar.addEventListener("click", function(){
        botonesComentar.classList.remove("mostrarBotones")
    });

    // ------ Sliders Imagenes Juego ------

    const sliderGrupos = document.querySelector("#sliderGrupos");
    const sliderEstadios = document.querySelector("#sliderEstadios");

    let imagenesSliderGrupos = document.querySelectorAll(".imagenSliderGrupos");
    let imagenesSliderEstadios = document.querySelectorAll(".imagenSliderEstadios");
    let imagenesSliderGruposLast = imagenesSliderGrupos[imagenesSliderGrupos.length-1];
    let imagenesSliderEstadiosLast = imagenesSliderEstadios[imagenesSliderEstadios.length-1];

    const btnSliderGruposLeft = document.querySelector("#btnSliderGruposLeft");
    const btnSliderGruposRight = document.querySelector("#btnSliderGruposRight");
    const btnSliderEstadiosLeft = document.querySelector("#btnSliderEstadiosLeft");
    const btnSliderEstadiosRight = document.querySelector("#btnSliderEstadiosRight");

    sliderGrupos.insertAdjacentElement('afterbegin', imagenesSliderGruposLast);
    sliderEstadios.insertAdjacentElement('afterbegin', imagenesSliderEstadiosLast);

    function SliderGruposSiguiente(){
        let imagenesSliderGruposFirst = document.querySelectorAll(".imagenSliderGrupos")[0];
        sliderGrupos.style.marginLeft = "-200%";
        sliderGrupos.style.transition = "all 0.5s";
        setTimeout(function(){
            sliderGrupos.style.transition = "none";
            sliderGrupos.insertAdjacentElement("beforeend", imagenesSliderGruposFirst);
            sliderGrupos.style.marginLeft = "-100%";
        }, 500);
    }
    function SliderEstadiosSiguiente(){
        let imagenesSliderEstadiosFirst = document.querySelectorAll(".imagenSliderEstadios")[0];
        sliderEstadios.style.marginLeft = "-200%";
        sliderEstadios.style.transition = "all 0.5s";
        setTimeout(function(){
            sliderEstadios.style.transition = "none";
            sliderEstadios.insertAdjacentElement("beforeend", imagenesSliderEstadiosFirst);
            sliderEstadios.style.marginLeft = "-100%";

        }, 500);
    }

    function SliderGruposAtras(){
        let imagenesSliderGrupos = document.querySelectorAll(".imagenSliderGrupos");
        let imagenesSliderGruposLast = imagenesSliderGrupos[imagenesSliderGrupos.length-1];
        sliderGrupos.style.marginLeft = "0";
        sliderGrupos.style.transition = "all 0.5s";
        setTimeout(function(){
            sliderGrupos.style.transition = "none";
            sliderGrupos.insertAdjacentElement('afterbegin', imagenesSliderGruposLast);
            sliderGrupos.style.marginLeft = "-100%";
        }, 500);
    }

    function SliderEstadiosAtras(){
        let imagenesSliderEstadios = document.querySelectorAll(".imagenSliderEstadios");
        let imagenesSliderEstadiosLast = imagenesSliderEstadios[imagenesSliderEstadios.length-1];
        sliderEstadios.style.marginLeft = "0";
        sliderEstadios.style.transition = "all 0.5s";
        setTimeout(function(){
            sliderEstadios.style.transition = "none";
            sliderEstadios.insertAdjacentElement('afterbegin', imagenesSliderEstadiosLast);
            sliderEstadios.style.marginLeft = "-100%";

        }, 500);
    }

    btnSliderGruposRight.addEventListener("click", function(){
        SliderGruposSiguiente();
    });

    btnSliderEstadiosRight.addEventListener("click", function(){
        SliderEstadiosSiguiente();
    });

    btnSliderGruposLeft.addEventListener("click", function(){
        SliderGruposAtras();
    });

    btnSliderEstadiosLeft.addEventListener("click", function(){
        SliderEstadiosAtras();
    });

});