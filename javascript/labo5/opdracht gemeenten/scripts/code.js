const setup = () => {

    voegGemeenteToe();
}

const voegGemeenteToe = () => {
    let keuzelijst = document.getElementById('gemeenten');
    let gesorteerdeGemeenten = sorteertGemeenten();

    gesorteerdeGemeenten.forEach(gemeente => {
        let option = document.createElement("option");
        option.setAttribute("value", gemeente);
        option.textContent = gemeente;
        keuzelijst.appendChild(option);
    });
}

const sorteertGemeenten = () => {
    let gemeente = vraagGemeenteOp();
    let gemeenten = [];

    while (gemeente.toLowerCase() !== "stop") {
        gemeenten.push(gemeente);
        gemeente = vraagGemeenteOp();
    }
    gemeenten.sort()
    return gemeenten;
}

const vraagGemeenteOp = () => {
    return window.prompt("geef een gemeente op");
}
window.addEventListener("load", setup);