function toggleMenu() {
    const nav = document.querySelector(".nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    nav.classList.toggle("open");
    menuToggle.classList.toggle("active");
}
