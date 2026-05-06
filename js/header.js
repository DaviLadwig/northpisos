const header = document.querySelector(".site-header");
const openButton = document.querySelector(".site-header__toggle");
const closeButton = document.querySelector(".mobile-menu__close");
const overlay = document.querySelector(".mobile-menu__overlay");
const mobileLinks = document.querySelectorAll(".mobile-menu__nav a");

function openMenu() {
    header.classList.add("menu-open");
}

function closeMenu() {
    header.classList.remove("menu-open");
}

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

//esconde o header quando o usuário rola para baixo e mostra quando rola para cima

