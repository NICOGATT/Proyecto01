// Añadimos un evento que hace que se se escucha el click 
document.addEventListener("DOMContentLoaded", function(){
    // Aca se agrega dos constantes uno para el menu hamburguesa y otro para el nav
    const toggleBtn = document.getElementById("menu__hamburguer");
    const nav = document.querySelector("nav");
    toggleBtn.addEventListener("click", function() {
        if (window.innerWidth < 768) {
            nav.style.display = (nav.style.display === "flex") ? "none" : "flex"
        }
    })
    window.addEventListener("resize", function(){
        if(window.innerWidth >= 768) {
            nav.style.display = "flex";
        } else {
            nav.style.display = "none";
        }
    })
    const circulo = document.querySelector(".bx-x-circle"); 
    circulo.addEventListener("click", function(){
       if (nav.style.display === "none") {
            nav.style.display = "block"; 
       } else {
            nav.style.display = "none"; 
       }
    })
})

//Cambiando la position del carrito
document.addEventListener("DOMContentLoaded", () => {
    const inicio = document.getElementById("inicio");
    const carrito = document.getElementById("carrito");
    let isAbsolute = false; 
    function tooglePosition() {
        const pathname = window.location.pathname
        if(pathname === "/" || pathname.endsWith("index.html")){
            if(isAbsolute) {
                carrito.style.position = "relative";
                carrito.style.top = "0"
                carrito.style.right = "0"
            } else {
                carrito.style.position = "absolute"
                carrito.style.top = "20%"
                carrito.style.right = "15%"
            }
        }
        isAbsolute = !isAbsolute
    }
    //Agregamos el evento click
    inicio.addEventListener("click", tooglePosition())

    const pathname = window.location.pathname
    if (pathname !== "/" && !pathname.endsWith("index.html")) {
        carrito.style.position = "absolute"
        carrito.style.top = "28%"
        carrito.style.right = "1%"
    }
})

// console.log(window.location.pathname)