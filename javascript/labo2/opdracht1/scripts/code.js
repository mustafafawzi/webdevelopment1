const setup = () => {
    window.alert("dit is een alert");

    let confirmwaarde = window.confirm("ben je zeker?");
    console.log("de confirmwaarde is " + confirmwaarde);

    let promptwaarde = window.prompt("vul iets in");
    console.log("de promptwaarde is " + promptwaarde);
}
window.addEventListener("load", setup);