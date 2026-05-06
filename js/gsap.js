gsap.registerPlugin(ScrollTrigger);

function animateItems(selector, options = {}) {
    gsap.utils.toArray(selector).forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 86%",
                once: true
            },
            y: options.y || 32,
            x: options.x || 0,
            opacity: 0,
            duration: options.duration || 0.7,
            delay: index * (options.stagger || 0.06),
            ease: options.ease || "power3.out"
        });
    });
}

animateItems(".service-card", {
    y: 36,
    stagger: 0.08
});

animateItems(".number-item", {
    y: 28,
    stagger: 0.1
});

animateItems(".about-section__specialties li", {
    x: -18,
    y: 0,
    stagger: 0.05
});

animateItems(".mobile-menu__social a", {
    y: 16,
    stagger: 0.06
});