
window.addEventListener("load", init);

function init() {
    let burgerMenu = document.querySelector("nav#burger-menu");
    let iconContainer = document.querySelector("nav.icon-container");
    iconContainer.addEventListener("click", () => {
        iconContainer.classList.toggle("change");
        burgerMenu.classList.toggle("hidden");
    });
}

