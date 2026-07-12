/*const name= document.querySelector(".toggle")

function bienvenida(){
    const name = prompt("Bienvenido, danos tu nombre, por favor: ");
    alert(`Mucho gusto saludarte ${name}`);
}

name.addEventListener ("click", bienvenida);*/


const menuToggle = document.querySelector(".toggle");
const mobileMenu = document.querySelector(".header__navbar");

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
})