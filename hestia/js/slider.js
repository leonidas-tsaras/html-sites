window.addEventListener("load", init);

function init() {
    simpleSlider();
}

function simpleSlider() {
    const sliders = document.querySelectorAll("div.slider");
    sliders.forEach((slider) => {
        let scroller = slider.querySelector("div.scroller");
        let imageContainer = scroller.querySelector("div.image-container");
        let images = imageContainer.querySelectorAll("img");
        let scrollerWidth = scroller.offsetWidth;
        let length = images.length;
        let counter = 0;

        let left = slider.querySelector("div.arrows > img:first-child");
        let right = slider.querySelector("div.arrows > img:last-child");

        right.addEventListener("click", function() {
            if(counter < length-1) counter++;
            scroller.scroll({top: 0, left: counter*scrollerWidth, behavior: "smooth"})
        });

        left.addEventListener("click", function() {
            if(counter > 0) counter--;
            scroller.scroll({top: 0, left: counter*scrollerWidth, behavior: "smooth"})
        }); 
    })

}
