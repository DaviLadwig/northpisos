gsap.registerPlugin(ScrollTrigger);

const floorTypesTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".floor-types-section",
        start: "top 78%",
        once: true
    }
});

floorTypesTimeline
    .to(".floor-types-section__wipe", {
        scaleX: 1,
        duration: 0.9,
        ease: "power3.inOut"
    })
    .to(".floor-types-section__inner", {
        opacity: 1,
        duration: 0.2
    })
    .from(".floor-types-section__head > *", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out"
    })
    .from(
        ".floor-type-card",
        {
            y: 42,
            opacity: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out"
        },
        "-=0.35"
    );