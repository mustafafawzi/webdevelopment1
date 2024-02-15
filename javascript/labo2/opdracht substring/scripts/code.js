const setup = () => {
    let substringButton = document.getElementById("substringButton");
    substringButton.addEventListener("click", substring);
}

const substring = () => {
    let txtInp = document.getElementById("txtInp").value;
    let slice1 = document.getElementById("slice1").value;
    let slice2 = document.getElementById("slice2").value;
    let txtOutp = document.getElementById("txtOutput");

    txtOutp.innerHTML =  txtInp.slice(slice1, slice2);
}
window.addEventListener("load", setup);