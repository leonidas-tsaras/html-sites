window.addEventListener("load", init);

function init() {
    const images = document.querySelectorAll("figure > img");
    for(let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", () => {getLightBox(images[i])})
    }
}

let getLightBox = (element) => { // arrow functions
    let shade = document.createElement("div");
    shade.className = "shade";
    shade.onclick = () => {
        document.body.removeChild(shade)
    }

    let bigImage = document.createElement("img");
    bigImage.src = element.src; 
    bigImage.className = "big-image"

    shade.appendChild(bigImage)

    document.body.appendChild(shade)
}  