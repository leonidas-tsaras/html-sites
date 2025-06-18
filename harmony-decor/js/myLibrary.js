
function getCurrentDate() {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();

    if(date < 10) date = "0" + date; // "01"
    if(month < 10) month = "0" + month; // "04"

    let fullDate = date + "/" + month + "/" + year;

    return fullDate;
}

function getWeekDay() {
    //0=Κυριακή, 1=Δευτέρα, 2=Τρίτη, 3=Τετάρτη, 4=Πέμπτη, 5=Παρασκευή, 6=Σάββατο
    let days = [
        "Κυριακή", 
        "Δευτέρα",
        "Τρίτη",
        "Τετάρτη",
        "Πέμπτη",
        "Παρασκευή",
        "Σάββατο"
    ];
    
    let d = new Date();
    let wd = d.getDay();
    return days[wd];

/*             if(wd==0) return "Κυριακή";
    if(wd==1) return "Δευτέρα";
    if(wd==2) return "Τρίτη";
    if(wd==3) return "Τετάρτη";
    if(wd==4) return "Πέμπτη";
    if(wd==5) return "Παρασκευή";
    if(wd==6) return "Σάββατο"; */
}

function getLightBox(src) {
    //create shade
    let shade = document.createElement("div");
    shade.className = "shade";
    shade.innerHTML = "<span><img width = '50' height = '50' src='./images/please_wait.gif'></span>";
    document.body.appendChild(shade);

    shade.addEventListener("click", () => {
        document.body.removeChild(shade);
    });

    //create bigImage
    let bigImage = document.createElement("img");
    bigImage.src = src;
    bigImage.addEventListener('load', () => {
        shade.innerHTML = "";
        shade.appendChild(bigImage);
    });
}