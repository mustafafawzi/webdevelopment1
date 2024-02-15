const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let txtOutput = document.getElementById("txtOutput");

    txtOutput.innerHTML = txtInput.value;
    txtInput.value = "";
}
window.addEventListener("load", setup);