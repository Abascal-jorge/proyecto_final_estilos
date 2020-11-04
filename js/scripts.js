document.addEventListener("DOMContentLoaded", () => {

    //Boton Flotante en el footer

    const btnFlotante = document.querySelector(".btn-flotante");
    btnFlotante.addEventListener("click", (e) => {
        e.preventDefault();

        //Prevenimos default, pero ejecutamos el siguiente codigo

        const footer = document.querySelector("#footer");

        if(footer.classList.contains("activo")){
            //Si lo contiene, ejecuta codigo
            footer.classList.remove("activo");
            btnFlotante.classList.remove("activo");
            btnFlotante.innerHTML = "Idioma y Moneda"
        }else{
            //Sino lo contiene, ejecuta este otro
            footer.classList.add("activo");
            btnFlotante.classList.add("activo");
            btnFlotante.innerHTML = "X Cerrar"
        }
    });
});