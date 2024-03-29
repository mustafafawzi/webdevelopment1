const setup = () => {
    let resultBtn = document.getElementById("resultBtn");
    resultBtn.addEventListener("click", printResult)
}

const printResult = () => {
    console.log(isRoker() + "\n" +
        moedertaal() + "\n" +
        favorietBuurland() + "\n" +
        bestellingen());

}

const isRoker = () => {
    let roker = document.getElementById("roker").checked;
    if (roker) {
        return "is een roker";
    } else {
        return "is geen roker";
    }
}

const moedertaal = () => {
    let talen = document.getElementsByName("moedertaal");
    let i = 0;
    let gevonden = false;
    let moedertaal = null;
    while (i < talen.length && !gevonden) {
        if (talen[i].checked) {
            moedertaal = talen[i].value;
            gevonden = true;
        } else {
            i++;
        }
    }

    if (moedertaal === null) {
        return "moedertaal is niet geselecteerd"
    } else {
        return "moedertaal is " + moedertaal;
    }

}

const favorietBuurland = () => {
    let buurlanden = document.getElementById("buurlanden").options;
    let favoBuurland = buurlanden.selectedIndex;
    return "favo buurland is " + buurlanden[favoBuurland].text;
}

const bestellingen = () => {
    let bestellingen = document.getElementById("bestelling").options;
    let besteld = "bestelling bestaat uit";

    for (let i = 0; i < bestellingen.length; i++) {
        if (bestellingen[i].selected) {
            besteld = besteld + " " + bestellingen[i].text;
        }
    }

    return besteld;
}

window.addEventListener("load", setup);
