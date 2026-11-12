let adatok = []

async function init() {
    const response = await fetch("/colors.json")

    adatok = await response.json()


}

function megjelenit() {
    for (const i of adatok) {
        let div = document.createElement("div")
    }
}

function displayColors() {

}

init()