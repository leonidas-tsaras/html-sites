
(() => {

    const maxPageWidth = 1400; // check with css variable
    const breakPoint = 870; //check with css break point too

    const burgerIcon = document.querySelector("nav#burger-menu");
    const burgerMenu = document.querySelector("nav#main-menu");
    burgerIcon.addEventListener("click", () => {
        burgerMenu.classList.toggle("block");
        burgerIcon.textContent = burgerMenu.classList.contains("block")
            ? "⛌"
            : "☰";
    });

    //no delay
    /* 				window.addEventListener("resize", () => {
        if (window.innerWidth > breakPoint) {
            if (burgerMenu.classList.contains("block")) {
                burgerIcon.click();
            }
        }
    }); */

    let ticking = false;
    window.addEventListener("resize", () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.innerWidth > breakPoint) {
                    if (burgerMenu.classList.contains("block")) {
                        burgerIcon.click();
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    window.dispatchEvent(new Event("resize"));
})();
