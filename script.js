function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');

}

document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in-on-scroll");

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
        }
    });
    }, {
        threshold: 0.1
    });

        faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
