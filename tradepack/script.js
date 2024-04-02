const distance = document.querySelector("#select");
const demand = document.querySelector("#demand");
const check = document.querySelector("#check");
const warmode = document.querySelector("#warmode");
const valueTxt = document.querySelector(".finalValue");

const base = 10000;
const tiles = 6;

let value;
let finalValue;

function calcular() {
  value = distance.options[select.selectedIndex].value;

  if (demand.value >= 1 && demand.value <= 300) {
    finalValue = (base + tiles * value) * (demand.value / 100);

    if (check.checked && warmode.checked) {
      valueTxt.style.color = "white";
      valueTxt.innerHTML = Math.floor(finalValue * 1.25);
    } else if (check.checked) {
      valueTxt.style.color = "white";
      valueTxt.innerHTML = Math.floor(finalValue * 1.15);
    } else if (warmode.checked) {
      valueTxt.style.color = "white";
      valueTxt.innerHTML = Math.floor(finalValue * 1.1);
    } else {
      valueTxt.style.color = "red";
      valueTxt.innerHTML = "Por favor, insira um valor entre 1 e 300";
    }
  }
}
