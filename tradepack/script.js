const distance = document.querySelector("#distance");
const demand = document.querySelector("#demand");
const check = document.querySelector("#check");
const valueTxt = document.querySelector(".finalValue")

const base = 10000;
const tiles = 6;

let finalValue;

function calcular() {
    finalValue = (base + (tiles * distance.value)) * demand.value;

    if(check.checked) {
        valueTxt.innerHTML = Math.floor(finalValue * 1.15);
    } else {
        valueTxt.innerHTML = Math.floor(finalValue);
    }
}