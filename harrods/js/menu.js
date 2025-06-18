//const maxPageWidth = 1350; // check with css variable
const breakPoint = 800; //check with css break point too
let burgerIcon, burgerMenu;

window.addEventListener("load", () => {
    burgerIcon = document.querySelector("nav#burger-icon");
    burgerMenu = document.querySelector("nav.burger-menu");
    burgerIcon.addEventListener("click", () => {
        burgerMenu.classList.toggle("nodisplay");
        burgerIcon.textContent = (burgerIcon.textContent === "⛌") ? "☰" : "⛌";
    });
});

window.addEventListener("resize", () => {
    if(window.innerWidth > breakPoint) {
        burgerMenu.classList.add("nodisplay");
        burgerIcon.textContent = "☰";
    }
});
