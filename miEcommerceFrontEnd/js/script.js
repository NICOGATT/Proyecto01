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

//Añadiendo productos al carrito
document.addEventListener("DOMContentLoaded", () => {
    const carrito = document.getElementById("carrito"); 
    const precio1 = document.getElementById("precio1");
    const añadirAlCarrito = document.getElementById("añadirAlCarrito")
    //Cargar el carrito desde el localStorage
    let carritoItems = JSON.parse(localStorage.getItem("carrito"))
    //Funcion para renderizar el carrito
    const renderizarCarrito = () => {
        //Renderizar los articulos existentes en el carrito 
        carritoItems.forEach((item, index) => {
            const articulo1 = document.createElement("div");
            articulo1.className = "articulo1";
            articulo1.innerHTML = 
            `
                <img src = "${item.imagen}" class = "imagen1"></img>
                <p class = "titulo1">${item.titulo}</p>
                <p id = "precio1">${item.precio}</p>
                <p id = "cantidad">${item.cantidad}</p>
                <button data-index = ${index} class = "eliminarProducto">X</button>
            `; 
            articulo1.style.display = "flex"
            articulo1.style.justifyContent = "space-between"
            articulo1.style.width = "100%"
            const referenceMode = carrito.children[2]; 
            carrito.insertBefore(articulo1, referenceMode)
            const imagen1 = document.querySelector(".imagen1"); 
            imagen1.style.width = "20%"
        })
        //Creamos el evento de eliminacion directamente
        document.querySelectorAll(".eliminarProducto").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index"); 
                eliminarProducto(index)
            })
        })
    }
    
    //Funcion para eliminar el procucto
    const eliminarProducto = (index) => {
        index = parseInt(index) // aseguramos que es un numero 
        if (carritoItems[index].cantidad > 1) {
            carritoItems[index].cantidad -= 1
        } else {
            carritoItems.splice(index, 1); 
        }
        localStorage.setItem("carrito", JSON.stringify(carritoItems)); 
        //Renderizamos de nuevo el carrito 
        renderizarCarrito(); 
    }
    //Inicializamos el carrito al cargar la pagina
    renderizarCarrito(); 

    añadirAlCarrito.addEventListener("click", () => {
        const nuevoArticulo = {
                imagen : "../Img/catalogo/bolso-transportador.jpg", 
                titulo : "Bolso transportador",
                precio : precio1.textContent, 
                cantidad : 1
        }
        //Verificar si el articulo esta en el carrito
        const index = carritoItems.findIndex(item => item.titulo === nuevoArticulo.titulo)
        if(index > 0) {
            //Incrementar la cantidad si el articulo esta en el carrito 
            carritoItems[index].cantidad += 1
        } 
        carritoItems.push(nuevoArticulo)
        
        //Guardar el carrito en el localStorage
        localStorage.setItem("carrito", JSON.stringify(carritoItems)); 

        //actualizar la interfaz de usuario
        renderizarCarrito()
    })
})