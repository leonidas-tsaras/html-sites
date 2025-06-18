
window.addEventListener("load", init);

function init() {
    let wd = getWeekDay();
    let fd = getCurrentDate();
    let div = document.querySelector("div#date");
    div.textContent = wd + ": " + fd;

    let icon = document.querySelector("header > div > nav:nth-child(3)");
    icon.addEventListener("click", getDropDownMenu);
}

window.addEventListener("resize", () => {
    let nav = document.querySelector("header > div > nav:nth-child(2)");
    let icon = document.querySelector("header > div > nav:nth-child(3)");
    if(window.innerWidth > 800) {
        nav.style.display = "block";
        icon.textContent = "☰";
    } else {
        nav.style.display = "none";
    }
});

function getDropDownMenu() {
    let nav = document.querySelector("header > div > nav:nth-child(2)");
    let icon = document.querySelector("header > div > nav:nth-child(3)");

    if(nav.style.display == "block") {
        nav.style.display = "none";
        icon.textContent = "☰";
    } else {
        nav.style.display = "block";
        icon.textContent = "⛌";
    }
}
