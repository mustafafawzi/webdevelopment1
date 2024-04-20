const setup = () => {
    let vandaag = new Date();
    let verjaardag = new Date(2000,11,8);
    let verschil = Math.floor((vandaag - verjaardag)/(1000*3600*24))
    console.log(verschil)
}
window.addEventListener("load", setup);