

//IMAGEM MAPA
window.addEventListener("load", () => {
    if (!window.gsap || !window.ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        ".coverage-section__map img",
        {
            opacity: 0,
            scale: 0.86,
            y: 36
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".coverage-section__map",
                start: "top 80%",
                once: true
            }
        }
    );

    gsap.to(".coverage-section__map img", {
        y: -10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
    });
});