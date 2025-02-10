function toggleMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    mobileMenu.classList.toggle("open");
    menuToggle.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".marcas");
    let autoScroll;

    function startAutoScroll() {
        if (window.innerWidth <= 768) {
            autoScroll = setInterval(() => {
                carousel.scrollBy({ left: 150, behavior: "smooth" });
            }, 2000); // Move a cada 2 segundos
        }
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    // Iniciar rolagem automática no carregamento
    startAutoScroll();

    // Parar ao interagir (toque ou clique)
    carousel.addEventListener("mouseenter", stopAutoScroll);
    carousel.addEventListener("mouseleave", startAutoScroll);
    carousel.addEventListener("touchstart", stopAutoScroll);
    carousel.addEventListener("touchend", startAutoScroll);
});


