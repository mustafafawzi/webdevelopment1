const setup = () => {
    let valideertBtn = document.getElementById("valideerBtn");
    valideertBtn.addEventListener("click", checkFormulier)
}

const checkFormulier = () => {
    if (isNaamValid()) {
        window.alert("porficiat")
    }
}

const isNaamValid = () => {
    let naamveld = document.getElementById("voornaam")
    let voornaam = naamveld.value;
    let elemNode = maakErrorSpan();


    if (voornaam.length > 30) {
        let voornaamblok = document.getElementById("voornaamblok");
        let texNode = document.createTextNode("max 30 karakters");
        elemNode.appendChild(texNode)
        voornaamblok.appendChild(elemNode);
        errorMaatregelenToevoegen(elemNode, naamveld);
        return false;
    } else {
        errorMaatregelenVerwijderen(elemNode, naamveld);
        return true;
    }
}

const isAchternaamValid = () => {
    let achternaamveld = document.getElementById("achternaam");
    let achternaam = achternaamveld.value;

    if (achternaam.length === 0) {

    }
}

const errorMaatregelenToevoegen = (elementNode, inputVeld) => {
    elementNode.classList.add("textError");
    inputVeld.classList.add("borderError");
}

const errorMaatregelenVerwijderen = (elementNode, inputVeld) => {
    elementNode.classList.remove("textError");
    inputVeld.classList.remove("borderError");
}

const maakErrorSpan = () => {
    return document.createElement("span");
}
window.addEventListener("load", setup);