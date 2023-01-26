
const menuToggle = document.querySelector('#menu-hamburguer')
menuToggle.addEventListener('click', showMenu)

function showMenu(){
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}