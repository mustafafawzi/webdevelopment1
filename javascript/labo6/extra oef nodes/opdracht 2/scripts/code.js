const setup = () => {
    let li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        li[i].setAttribute("class", "listitem");
    }
}
window.addEventListener("load", setup);