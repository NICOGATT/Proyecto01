document.addEventListener("DOMContentLoaded", function(){
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