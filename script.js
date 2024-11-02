document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation for elements
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

    // Smooth scrolling for in-page links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Parallax Effect for hero section
    window.addEventListener("scroll", () => {
        const hero = document.querySelector(".hero");
        hero.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
    });

 
});
function comingSoon() {
    alert("We will be coming on this platform soon!");
}
function openGitHub() {
    window.location.href = 'https://github.com/07-Ansh'; 
}