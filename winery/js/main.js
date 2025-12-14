window.addEventListener("load", init);

function init() {

    /* 			window.addEventListener("scroll", () => {
        const scrollTop = document.querySelector("a.scroll-top");
        if (window.scrollY > 100) {
            scrollTop.style.display = "inline-block";
            //console.log("Window is scrolled");
        } else {
            scrollTop.style.display = "none";
        }
    }); */

    let tick = false;
    window.addEventListener("scroll", () => {
        if (!tick) {
            const scrollTop = document.querySelector("a#scroller");
            window.requestAnimationFrame(() => {
                if (window.scrollY > 100) {
                    scrollTop.style.display = "inline-block";
                    //console.log("Window is scrolled");
                } else {
                    scrollTop.style.display = "none";
                }
                tick = false;
            });
            tick = true;
        }
    });    


    const maxPageWidth = 1400; // check with css variable
    const breakPoint = 800; //check with css break point too

    const burgerIcon = document.querySelector("nav#burger-icon");
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
    window.dispatchEvent(new Event("scroll"));

}

function getLightBox(event) {
    let image = event.target;

    // create shade
    let shade = document.createElement("div");
    shade.className = "shade";
    shade.addEventListener("click", () => {
        document.body.removeChild(shade);
    });

    // create image
    let img = document.createElement("img");
    img.setAttribute("src", image.src);
    img.addEventListener("click", () => {
        event.stopPropagation();
    });

    shade.appendChild(img);

    document.body.append(shade);
}


