const calcolaButton = document.getElementById("calcola");
const risultatoDiv = document.getElementById("risultato");

calcolaButton!.addEventListener("click", function() {
  const fatturatoInput = document.getElementById("fatturato") as HTMLInputElement;
  const speseInput = document.getElementById("spese") as HTMLInputElement;
  const inpsInput = document.getElementById("inps") as HTMLInputElement;

  const fatturato = parseFloat(fatturatoInput.value);
  const spese = parseFloat(speseInput.value);
  const inps = parseFloat(inpsInput.value);

  let irpefPercentuale: number;

  if (fatturato >= 50000) {
    irpefPercentuale = 43;
  } else if (fatturato >= 28000) {
    irpefPercentuale = 35;
  } else if (fatturato >= 15000) {
    irpefPercentuale = 25;
  } else {
    irpefPercentuale = 23;
  }

  const irpef = fatturato * (irpefPercentuale / 100);
  const redditoNetto = fatturato - spese - (fatturato * (inps / 100)) - irpef;

  risultatoDiv!.textContent = "Il reddito netto annuo è: " + redditoNetto.toFixed(2) + " euro";
});