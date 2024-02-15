const setup = () => {
}

let familieleden = ["Mustafa", "Mohammed", "Basma", "Aseel", "Aymen"];

console.log("arrary lenght is " + familieleden.length);
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);

console.log(familieleden);

const VoegNaamToe = (array) => {
    let extranaam = window.prompt("Geef een naam in");
    array.push(extranaam);
}

VoegNaamToe(familieleden);
console.log(familieleden);

console.log(familieleden.join());
window.addEventListener("load", setup);