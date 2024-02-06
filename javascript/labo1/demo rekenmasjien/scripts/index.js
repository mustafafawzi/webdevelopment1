const setup = () => {
    let btnOptellen = document.getElementById("btnOptellen");
    let btnAftrekken = document.getElementById("btnAftrekken");
    let btnVermenigvuldigen = document.getElementById("btnVermenigvuldigen");
    let btnDelen = document.getElementById("btnDelen");

    btnOptellen.addEventListener("click", optellen);
    btnAftrekken.addEventListener("click", aftrekken);
    btnVermenigvuldigen.addEventListener("click", vermenigvuldigen);
    btnDelen.addEventListener("click", delen);
}

const optellen = () => {
    let txtOutput = document.getElementById("txtOutput");
    let txtLinks = document.getElementById("txtLinks");
    let txtRechts = document.getElementById("txtRechts");

    let g1 = parseInt(txtLinks.value, 10);
    let g2 = parseInt(txtRechts.value, 10);
    let resultaat = g1 + g2;

    let resultaatTekst = g1 + " + " + g2 + " = " + resultaat;
    txtOutput.innerHTML = resultaatTekst;
}

const aftrekken = () => {
    let getal1 = document.getElementById("txtLinks").value;
    let getal2 = document.getElementById("txtRechts").value;
    let output = document.getElementById("txtOutput");

    let resultaat = parseInt(getal1, 10) - parseInt(getal2, 10);

	let resultaatTxt = getal1 + " - " + getal2 + " = " + resultaat;

	output.innerHTML = resultaatTxt;


}

const vermenigvuldigen = () => {
	let getal1 = document.getElementById("txtLinks").value;
	let getal2 = document.getElementById("txtRechts").value;
	let output = document.getElementById("txtOutput");

	let resultaat = parseInt(getal1, 10) * parseInt(getal2, 10);

	let resultaatTxt = getal1 + " * " + getal2 + " = " + resultaat;

	output.innerHTML = resultaatTxt;
}

const delen = () => {
	let getal1 = document.getElementById("txtLinks").value;
	let getal2 = document.getElementById("txtRechts").value;
	let output = document.getElementById("txtOutput");

	let resultaat = parseInt(getal1, 10) / parseInt(getal2, 10);

	let resultaatTxt = getal1 + " / " + getal2 + " = " + resultaat;

	output.innerHTML = resultaatTxt;
}

window.addEventListener('load', setup);

















