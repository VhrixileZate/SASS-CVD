const toggleMenu = document.querySelector(".toggle-menu");
const header_nav = document.querySelector(".header-nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  header_nav.classList.toggle("open");
});