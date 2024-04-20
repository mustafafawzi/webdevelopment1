const setup = () => {
    let student = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboorteDatum: new Date("1993-12-31"),
        adres: {
            straat: "Kerkstraat 13",
            postcode: "8500",
            gemeente: "Kortrijk"
        },
        isIngeschreven: true,
        namenVanExen: ["Sofie", "Berta", "Philip", "Albertoooo"],
        aantalAutos: 2
    }

    let tekst = JSON.stringify(student);
    console.log(tekst)

    const jsonString = '{"voornaam":"Jan",' +
        '"familienaam":"Janssens",' +
        '"geboorteDatum":"1993-12-31T00:00:00.000Z",' +
        '"adres":{"straat":"Kerkstraat 13",' +
        '"postcode":"8500","gemeente":"Kortrijk"},' +
        '"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}';

    const objectFromJSON = JSON.parse(jsonString);

    console.log(objectFromJSON.voornaam);

}
window.addEventListener("load", setup);