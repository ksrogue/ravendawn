const distance = document.querySelector("#select");
const demand = document.querySelector("#demand");
const check = document.querySelector("#check");
const valueTxt = document.querySelector(".finalValue")

const base = 10000;
const tiles = 6;

let value;
let finalValue;

function calcular() {
    value = distance.options[select.selectedIndex].value;
    finalValue = (base + (tiles * value)) * demand.value;

    if(check.checked) {
        valueTxt.innerHTML = Math.floor(finalValue * 1.15);
    } else {
        valueTxt.innerHTML = Math.floor(finalValue);
    }
}

