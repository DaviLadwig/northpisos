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

//pre header
const headerShell = document.querySelector(".header-shell");
const siteHeader = document.querySelector(".site-header");

let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
let ticking = false;

function handleHeaderScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const menuIsOpen = siteHeader.classList.contains("menu-open");

    if (menuIsOpen) {
        ticking = false;
        return;
    }

    if (currentScrollPosition <= 20) {
        headerShell.classList.remove("header-shell--hidden");
    } else if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 140) {
        headerShell.classList.add("header-shell--hidden");
    } else if (currentScrollPosition < lastScrollPosition) {
        headerShell.classList.remove("header-shell--hidden");
    }

    lastScrollPosition = Math.max(currentScrollPosition, 0);
    ticking = false;
}

window.addEventListener(
    "scroll",
    () => {
        if (!ticking) {
            window.requestAnimationFrame(handleHeaderScroll);
            ticking = true;
        }
    },
    { passive: true }
);