const counters = document.querySelectorAll(".counter");

function formatCounter(counter, value) {
    const suffix = counter.dataset.suffix || "";

    if (suffix === "MIL") {
        return (value / 1000).toFixed(1).replace(".", ".") + "MIL";
    }

    return value;
}

function startCounter(counter) {
    const target = Number(counter.dataset.target);
    const duration = 1500;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(easedProgress * target);

        counter.textContent = formatCounter(counter, value);

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = formatCounter(counter, target);
        }
    }

    requestAnimationFrame(updateCounter);
}

const counterObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.4,
    }
);

counters.forEach((counter) => counterObserver.observe(counter));