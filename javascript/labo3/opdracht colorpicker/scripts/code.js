const setup = () => {
    let sliderRed = document.getElementById("rangeRed");
    let valueSliderRed = sliderRed.value
    let spanRed = document.getElementById("spanRed");
    spanRed.innerHTML = valueSliderRed
    sliderRed.addEventListener("change", updateRed);
    sliderRed.addEventListener("input", updateRed);

    let sliderGreen = document.getElementById("rangeGreen");
    let valueSliderGreen = sliderGreen.value;
    let spanGreen = document.getElementById("spanGreen")
    spanGreen.innerHTML = valueSliderGreen;
    sliderGreen.addEventListener("change", updateGreen);
    sliderGreen.addEventListener("input", updateGreen);

    let sliderBlue = document.getElementById("rangeBlue");
    let valueSliderBlue = sliderBlue.value;
    let spanBlue = document.getElementById("spanBlue")
    spanBlue.innerHTML = valueSliderBlue;
    sliderBlue.addEventListener("change", updateBLue);
    sliderBlue.addEventListener("input", updateBLue);

    let block = document.getElementById("block");
    block.style.backgroundColor = 'rgb(' + parseInt(valueSliderRed, 10) + ',' + parseInt(valueSliderGreen, 10) + ',' + parseInt(valueSliderBlue, 10) + ')';
}


const updateRed = () => {
    let rangeRed = document.getElementById("rangeRed");
    let rangeRedValue = rangeRed.value;
    let spanRed = document.getElementById("spanRed");

    spanRed.innerHTML = rangeRedValue;
    rangeRed.setAttribute("value", rangeRedValue);

    updateBlockColor();
}

const updateGreen = () => {
    let rangeGreen = document.getElementById("rangeGreen");
    let rangeGreenValue = rangeGreen.value;
    let spanGreen = document.getElementById("spanGreen")

    spanGreen.innerHTML = rangeGreenValue;
    rangeGreen.setAttribute("value", rangeGreenValue);

    updateBlockColor();
}

const updateBLue = () => {
    let rangeBlue = document.getElementById("rangeBlue");
    let rangeBlueValue = rangeBlue.value;
    let spanBlue = document.getElementById("spanBlue")

    spanBlue.innerHTML = rangeBlueValue;
    rangeBlue.setAttribute("value", rangeBlueValue);

    updateBlockColor();
}

const updateBlockColor = () => {
    let block = document.getElementById("block");
    let valueSliderRed = document.getElementById("rangeRed").value;
    let valueSliderGreen = document.getElementById("rangeGreen").value;
    let valueSliderBlue = document.getElementById("rangeBlue").value;

    block.style.backgroundColor = 'rgb(' + parseInt(valueSliderRed, 10) + ',' + parseInt(valueSliderGreen, 10) + ',' + parseInt(valueSliderBlue, 10) + ')';
}

window.addEventListener("load", setup);