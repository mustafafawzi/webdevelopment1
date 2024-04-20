let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // Valideer alle ingevoerde gegevens en controleer of er geen fouten meer zijn
    if (!valideer()) return;

    // Als de validatie succesvol is, bewaar dan de ingevoerde gegevens.
    // Voeg een nieuwe persoon toe als er geen geselecteerde persoon is
    // Bewerk een bestaande persoon in de lijst als er een geselecteerde persoon is
    let person = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorteDatum: new Date(document.getElementById("txtGeboorteDatum").value),
        email: document.getElementById("txtEmail").value,
        aantalKinderen: parseInt(document.getElementById("txtAantalKinderen").value),
    };

    let list = document.getElementById("lstPersonen");
    if (list.selectedIndex !== -1) {
        personen[list.selectedIndex] = person;
    } else {
        personen.push(person);
        let newOption = document.createElement("option");
        newOption.text = `${person.voornaam} ${person.familienaam}`;
        list.add(newOption);
    }

    // Zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na het updaten
    updateUI(list.selectedIndex !== -1, person);
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Reset het formulier om gegevens van een nieuwe persoon in te voeren
    let form = document.getElementsByTagName("form")[0];
    form.reset();
    clearAllErrors();
};


const updateUI = (exists, person) => {
    let list = document.getElementById("lstPersonen");
    let uName = `${person.voornaam} ${person.familienaam}`;

    if (exists) {
        // Als de persoon al in de lijst bestaat, update de bestaande optie
        let option = list.options[list.selectedIndex];
        option.value = uName;
        option.text = uName;
    } else {
        // Als de persoon nieuw is toegevoegd, voeg een nieuwe optie toe aan de lijst
        let newOption = document.createElement("option");
        newOption.text = uName;
        newOption.value = uName;
        list.add(newOption);
    }
};

// Onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // Voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // Moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("change", showUserData);
};

window.addEventListener("load", setup);