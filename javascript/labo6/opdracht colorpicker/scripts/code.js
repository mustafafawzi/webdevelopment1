const setup = () => {
    let sliderRed = document.getElementById("rangeRed");
    let sliderGreen = document.getElementById("rangeGreen");
    let sliderBlue = document.getElementById("rangeBlue");

    sliderRed.addEventListener("input", updateRed);
    sliderGreen.addEventListener("input", updateGreen);
    sliderBlue.addEventListener("input", updateBlue);

    updateColorPreview();
}

const updateRed = () => {
    let redValue = document.getElementById("rangeRed").value;
    document.getElementById("spanRed").textContent = redValue;
    updateColorPreview();
}

const updateGreen = () => {
    let greenValue = document.getElementById("rangeGreen").value;
    document.getElementById("spanGreen").textContent = greenValue;
    updateColorPreview();
}

const updateBlue = () => {
    let blueValue = document.getElementById("rangeBlue").value;
    document.getElementById("spanBlue").textContent = blueValue;
    updateColorPreview();
}

const updateColorPreview = () => {
    let red = document.getElementById("rangeRed").value;
    let green = document.getElementById("rangeGreen").value;
    let blue = document.getElementById("rangeBlue").value;

    let colorBlock = document.getElementById("block");
    colorBlock.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

const saveColor = () => {
    let red = document.getElementById("rangeRed").value;
    let green = document.getElementById("rangeGreen").value;
    let blue = document.getElementById("rangeBlue").value;

    let savedColorsContainer = document.getElementById("savedColorsContainer");

    let colorBlock = document.createElement("div");
    colorBlock.className = "savedBlock";
    colorBlock.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    savedColorsContainer.appendChild(colorBlock);
}

document.getElementById("saveColorBtn").addEventListener("click", saveColor);


window.addEventListener("load", setup);
