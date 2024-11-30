window.addEventListener("resize", () => {
    let w = window.innerWidth;
    let nav = document.querySelector("nav#main-menu");
    let burger = document.querySelector("nav#burger-icon");
    if(w > 800) {
        nav.style.display = "block";
        burger.textContent = "☰";
    } else {
        nav.style.display = "none";
    }
});

function setDropDownMenu() {
    let nav = document.querySelector("nav#main-menu");
    let burger = document.querySelector("nav#burger-icon");
    if(nav.style.display == "block") {
        nav.style.display = "none";
        burger.textContent = "☰";
    } else {
        nav.style.display = "block";
        burger.textContent = "⛌";
    }
}
