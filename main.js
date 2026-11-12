let adatok = []
let welcome = document.getElementById("welcome")
let fo = document.getElementById("fo")
async function init() {
    const response = await fetch("/colors.json")

    adatok = await response.json()

    setTimeout(() => {
        welcome.style.display = "none";
        megjelenit()
    }, 3000)

}

function megjelenit() {
    for (const i of adatok) {
        let div = document.createElement("div")
        div.style.backgroundColor = i.cssValue
        div.style.width = "200px"
        div.style.height = "200px"
        div.textContent = i.name
        div.style.textAlign = "center"
        div.style.alignContent = "center"

        div.classList.add("szinel")
        if (i.textColor == "light") {
            div.style.color = "white"
        }
        fo.appendChild(div)

        div.addEventListener("click", () =>{
            let save = adatok[div]
            adatok.splice(adatok.indexOf(div), 1)
            adatok.splice(0, 0, save)
            fo.innerHTML = ""
            megjelenit()
        })
    }
    console.log("Lefut")
}

init();
let form = document.getElementById("form")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const newColor = {
        "name": document.getElementById("felvett_nev").value,
        "cssValue": document.getElementById("felvett_css").value,
        "textColor": document.getElementById("felvett_textcolor").value
    }
    adatok.push(newColor)

    fo.innerHTML = "";
    megjelenit();   
})
