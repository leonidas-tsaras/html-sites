const breakPoint = 900;
let mainMenu, burgerIcon;
window.addEventListener('load', () => {
  const mainMenu = document.querySelector("header nav.main-menu");
  const burgerIcon = document.querySelector("header nav#burger-icon");
  if (!burgerIcon) return;
  burgerIcon.addEventListener("click", () => {
    mainMenu.classList.toggle("block");
    burgerIcon.textContent = (burgerIcon.textContent === "⛌") ? "☰" : "⛌";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > breakPoint) {
      mainMenu.classList.remove("block");
      burgerIcon.textContent = "☰";
    }
  });

});

