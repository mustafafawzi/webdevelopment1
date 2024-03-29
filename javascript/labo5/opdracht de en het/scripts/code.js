const setup = () => {

    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let resultaat = '';

    let index = tekst.indexOf('de');
    while (index !== -1) {
        resultaat += tekst.slice(0, index);
        resultaat += 'het';
        tekst = tekst.slice(index + 2);
        index = tekst.indexOf('de');
    }
    
    resultaat += tekst;
    console.log(resultaat);
}
window.addEventListener("load", setup);