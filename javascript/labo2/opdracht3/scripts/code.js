const setup = () => {

    let wijzigbutton = document.getElementById("wijzigbutton")
    wijzigbutton.addEventListener("click", wijzig)
}

const wijzig = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!"
}
window.addEventListener("load", setup);