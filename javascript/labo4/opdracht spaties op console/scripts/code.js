const setup = () => {
    let splitBTN = document.getElementById("splitBTN");
    splitBTN.addEventListener("click", split);
}

const split = () => {
    let txtElement = document.getElementById("txt");
    let txt = txtElement.value;

    let sub = ""

    for (let i = 0; i < txt.length; i++) {
        sub += txt.charAt(i);
        if (txt.charAt(i) !== " ") {

            sub += " ";
        }
    }

    console.log(sub)
}
window.addEventListener("load", setup);