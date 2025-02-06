function toggleMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    mobileMenu.classList.toggle("open");
    menuToggle.classList.toggle("active");
}
