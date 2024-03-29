const setup = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    tekst = tekst.toLowerCase()
    let amount = 0;
    let index = tekst.indexOf("an");


    while (index !== -1) {
        amount++;

        index = tekst.indexOf("an", index + 1)
    }
    console.log(amount)

}
window.addEventListener("load", setup);