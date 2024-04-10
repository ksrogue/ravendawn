// const distance = document.querySelector("#select");
// const demand = document.querySelector("#demand");
// const check = document.querySelector("#check");
// const warmode = document.querySelector("#warmode");
// const valueTxt = document.querySelector(".finalValue");

// const base = 10000;
// const tiles = 6;

// let value;
// let finalValue;

let v1;
let v2;
const demand = document.querySelector("#demand");
const bonusCheck = document.querySelector("#check");
const warmode = document.querySelector("#warmode");
const valueTxt = document.querySelector(".finalValue");

const base = 10000;
const tiles = 6;

let value;
let finalValue;
let distance;

function calcular() {
  v1 = document.querySelector("#from").value;
  v2 = document.querySelector("#to").value;
  if (v1 == v2) {
    console.log("erro");
  }
  // seabreeze
  else if (v1 == "seabreeze" && v2 == "darzuac") {
    distance = 1601;
  } else if (v1 == "seabreeze" && v2 == "tarmire") {
    distance = 1011;
  } else if (v1 == "seabreeze" && v2 == "defiance") {
    distance = 1888;
  } else if (v1 == "seabreeze" && v2 == "riverend") {
    distance = 1527;
  } else if (v1 == "seabreeze" && v2 == "margrove") {
    distance = 942;
  } else if (v1 == "seabreeze" && v2 == "ravencrest") {
    distance = 1114;
  } else if (v1 == "seabreeze" && v2 == "orcabay") {
    distance = 713;
  } else if (v1 == "seabreeze" && v2 == "glaceforde") {
    distance = 788;
  } else if (v1 == "seabreeze" && v2 == "gilead") {
    distance = 698;
  }
  // glaceforde
  else if (v1 == "glaceforde" && v2 == "darzuac") {
    distance = 1318;
  } else if (v1 == "glaceforde" && v2 == "tarmire") {
    distance = 1133;
  } else if (v1 == "glaceforde" && v2 == "defiance") {
    distance = 1241;
  } else if (v1 == "glaceforde" && v2 == "riverend") {
    distance = 880;
  } else if (v1 == "glaceforde" && v2 == "margrove") {
    distance = 508;
  } else if (v1 == "glaceforde" && v2 == "ravencrest") {
    distance = 741;
  } else if (v1 == "glaceforde" && v2 == "orcabay") {
    distance = 944;
  } else if (v1 == "glaceforde" && v2 == "seabreeze") {
    distance = 788;
  } else if (v1 == "glaceforde" && v2 == "gilead") {
    distance = 1486;
  }
  // ravencrest
  else if (v1 == "ravencrest" && v2 == "darzuac") {
    distance = 577;
  } else if (v1 == "ravencrest" && v2 == "tarmire") {
    distance = 392;
  } else if (v1 == "ravencrest" && v2 == "defiance") {
    distance = 773;
  } else if (v1 == "ravencrest" && v2 == "riverend") {
    distance = 412;
  } else if (v1 == "ravencrest" && v2 == "margrove") {
    distance = 233;
  } else if (v1 == "ravencrest" && v2 == "seabreeze") {
    distance = 1115;
  } else if (v1 == "ravencrest" && v2 == "orcabay") {
    distance = 402;
  } else if (v1 == "ravencrest" && v2 == "glaceforde") {
    distance = 741;
  } else if (v1 == "ravencrest" && v2 == "gilead") {
    distance = 745;
  }
  // defiance
  else if (v1 == "defiance" && v2 == "darzuac") {
    distance = 485;
  } else if (v1 == "defiance" && v2 == "tarmire") {
    distance = 878;
  } else if (v1 == "defiance" && v2 == "ravencrest") {
    distance = 775;
  } else if (v1 == "defiance" && v2 == "riverend") {
    distance = 362;
  } else if (v1 == "defiance" && v2 == "margrove") {
    distance = 947;
  } else if (v1 == "defiance" && v2 == "seabreeze") {
    distance = 1889;
  } else if (v1 == "defiance" && v2 == "orcabay") {
    distance = 1176;
  } else if (v1 == "defiance" && v2 == "glaceforde") {
    distance = 1243;
  } else if (v1 == "defiance" && v2 == "gilead") {
    distance = 1496;
  }
  // margrove
  else if (v1 == "margrove" && v2 == "darzuac") {
    distance = 811;
  } else if (v1 == "margrove" && v2 == "tarmire") {
    distance = 626;
  } else if (v1 == "margrove" && v2 == "ravencrest") {
    distance = 234;
  } else if (v1 == "margrove" && v2 == "riverend") {
    distance = 584;
  } else if (v1 == "margrove" && v2 == "defiance") {
    distance = 945;
  } else if (v1 == "margrove" && v2 == "seabreeze") {
    distance = 943;
  } else if (v1 == "margrove" && v2 == "orcabay") {
    distance = 437;
  } else if (v1 == "margrove" && v2 == "glaceforde") {
    distance = 507;
  } else if (v1 == "margrove" && v2 == "gilead") {
    distance = 979;
  }
  // riverend
  else if (v1 == "riverend" && v2 == "darzuac") {
    distance = 535;
  } else if (v1 == "riverend" && v2 == "tarmire") {
    distance = 517;
  } else if (v1 == "riverend" && v2 == "ravencrest") {
    distance = 414;
  } else if (v1 == "riverend" && v2 == "margrove") {
    distance = 586;
  } else if (v1 == "riverend" && v2 == "defiance") {
    distance = 360;
  } else if (v1 == "riverend" && v2 == "seabreeze") {
    distance = 1528;
  } else if (v1 == "riverend" && v2 == "orcabay") {
    distance = 815;
  } else if (v1 == "riverend" && v2 == "glaceforde") {
    distance = 882;
  } else if (v1 == "riverend" && v2 == "gilead") {
    distance = 1135;
  }
  // gilead
  else if (v1 == "gilead" && v2 == "darzuac") {
    distance = 1207;
  } else if (v1 == "gilead" && v2 == "tarmire") {
    distance = 617;
  } else if (v1 == "gilead" && v2 == "ravencrest") {
    distance = 745;
  } else if (v1 == "gilead" && v2 == "riverend") {
    distance = 1133;
  } else if (v1 == "gilead" && v2 == "defiance") {
    distance = 1494;
  } else if (v1 == "gilead" && v2 == "seabreeze") {
    distance = 699;
  } else if (v1 == "gilead" && v2 == "orcabay") {
    distance = 542;
  } else if (v1 == "gilead" && v2 == "glaceforde") {
    distance = 1486;
  } else if (v1 == "gilead" && v2 == "margrove") {
    distance = 978;
  }
  // tarmire
  else if (v1 == "tarmire" && v2 == "darzuac") {
    distance = 590;
  } else if (v1 == "tarmire" && v2 == "margrove") {
    distance = 626;
  } else if (v1 == "tarmire" && v2 == "ravencrest") {
    distance = 393;
  } else if (v1 == "tarmire" && v2 == "riverend") {
    distance = 516;
  } else if (v1 == "tarmire" && v2 == "defiance") {
    distance = 877;
  } else if (v1 == "tarmire" && v2 == "seabreeze") {
    distance = 1011;
  } else if (v1 == "tarmire" && v2 == "orcabay") {
    distance = 298;
  } else if (v1 == "tarmire" && v2 == "glaceforde") {
    distance = 1134;
  } else if (v1 == "tarmire" && v2 == "gilead") {
    distance = 618;
  }
  // darzuac
  else if (v1 == "darzuac" && v2 == "margrove") {
    distance = 811;
  } else if (v1 == "darzuac" && v2 == "tarmire") {
    distance = 590;
  } else if (v1 == "darzuac" && v2 == "ravencrest") {
    distance = 578;
  } else if (v1 == "darzuac" && v2 == "riverend") {
    distance = 536;
  } else if (v1 == "darzuac" && v2 == "defiance") {
    distance = 486;
  } else if (v1 == "darzuac" && v2 == "seabreeze") {
    distance = 1601;
  } else if (v1 == "darzuac" && v2 == "orcabay") {
    distance = 888;
  } else if (v1 == "darzuac" && v2 == "glaceforde") {
    distance = 1319;
  } else if (v1 == "darzuac" && v2 == "gilead") {
    distance = 1208;
  }
  // orca bay
  else if (v1 == "orcabay" && v2 == "darzuac") {
    distance = 888;
  } else if (v1 == "orcabay" && v2 == "tarmire") {
    distance = 298;
  } else if (v1 == "orcabay" && v2 == "ravencrest") {
    distance = 402;
  } else if (v1 == "orcabay" && v2 == "riverend") {
    distance = 815;
  } else if (v1 == "orcabay" && v2 == "defiance") {
    distance = 1176;
  } else if (v1 == "orcabay" && v2 == "seabreeze") {
    distance = 713;
  } else if (v1 == "orcabay" && v2 == "margrove") {
    distance = 437;
  } else if (v1 == "orcabay" && v2 == "glaceforde") {
    distance = 944;
  } else if (v1 == "orcabay" && v2 == "gilead") {
    distance = 542;
  }

  calculo();
}

function calculo() {
  if (demand.value >= 1 && demand.value <= 300) {
    finalValue = (base + tiles * distance) * (demand.value / 100);

    if (bonusCheck.checked && warmode.checked) {
      valueTxt.style.color = "white";
      valueTxt.innerHTML = Math.floor(finalValue * 1.25) * 2;
    } else if (bonusCheck.checked) {
      valueTxt.style.color = "white";
      valueTxt.innerHTML = Math.floor(finalValue * 1.15) * 2;
    } else if (warmode.checked) {
      valueTxt.style.color = "white";
      valueTxt.innerHTML = Math.floor(finalValue * 1.1) * 2;
    } else {
      valueTxt.style.color = "white";
      valueTxt.innerHTML = Math.floor(finalValue) * 2;
    }
  } else {
    valueTxt.style.color = "red";
    valueTxt.innerHTML = "Por favor, insira uma demanda válida.";
  }

  console.log(finalValue, distance);
}
