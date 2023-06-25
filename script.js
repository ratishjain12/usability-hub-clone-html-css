const menuButton = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav-link");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");

document.addEventListener("click",e=>{
    const navbar = e.target.matches("[nav-menu]");
    let
    if(!navbar){
        navbar = e.target.closest("[nav-menu]")
        navbar.classList.t
    }
    
});
menuButton.addEventListener("click", () =>{
    console.log("clicked!!");
    nav.classList.toggle("nav-active");
    menuBtn.classList.toggle("activeBtn");
    closeBtn.classList.toggle("closeBtn");
});