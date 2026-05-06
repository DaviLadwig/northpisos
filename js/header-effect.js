document.addEventListener("DOMContentLoaded", () => {
    const siteHeader = document.querySelector(".site-header");

    if (!siteHeader) return;

    let lastScrollPosition = window.scrollY;
    let ticking = false;

    function updateHeader() {
        const currentScrollPosition = window.scrollY;
        const menuIsOpen = siteHeader.classList.contains("menu-open");

        if (!menuIsOpen) {
            if (currentScrollPosition <= 20) {
                siteHeader.classList.remove("site-header--hidden");
            } else if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 140) {
                siteHeader.classList.add("site-header--hidden");
            } else if (currentScrollPosition < lastScrollPosition) {
                siteHeader.classList.remove("site-header--hidden");
            }
        }

        lastScrollPosition = currentScrollPosition;
        ticking = false;
    }

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        },
        { passive: true }
    );
});