const slides = document.querySelectorAll(".hero-banners__slide");
const dots = document.querySelectorAll(".hero-banners__dots button");
const prev = document.querySelector(".hero-banners__arrow--prev");
const next = document.querySelector(".hero-banners__arrow--next");

let currentSlide = 0;
let bannerTimer;

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === currentSlide);
    });

    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === currentSlide);
    });
}

function startBanners() {
    bannerTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5200);
}

function restartBanners() {
    clearInterval(bannerTimer);
    startBanners();
}

prev.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    restartBanners();
});

next.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    restartBanners();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        restartBanners();
    });
});

startBanners();