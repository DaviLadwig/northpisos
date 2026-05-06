const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const button = item.querySelector("button");

    button.addEventListener("click", () => {
        faqItems.forEach((currentItem) => {
            if (currentItem !== item) {
                currentItem.classList.remove("is-open");
            }
        });

        item.classList.toggle("is-open");
    });
});