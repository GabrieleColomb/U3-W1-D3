"use strict";
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseirpef = tasseirpef;
    }
}
class LavoratoreAutonomoImpl extends LavoratoreAutonomo {
    getUtileTasse() {
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    }
    getTasseInps() {
        return this.redditoannuolordo * 0.25; // 25% di tasse INPS
    }
    getTasseIrpef() {
        return this.redditoannuolordo * this.tasseirpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
// Codice per l'interazione con l'HTML
const calculateButton = document.getElementById('calculate');
const resultsDiv = document.getElementById('results');
calculateButton.addEventListener('click', () => {
    const codreddInput = document.getElementById('codredd');
    const redditoInput = document.getElementById('reddito');
    const codredd = parseInt(codreddInput.value);
    const reddito = parseInt(redditoInput.value);
    const lavoratore = new LavoratoreAutonomoImpl(codredd, reddito, 0.2); // Tasse IRPEF al 20%
    const utileTasse = lavoratore.getUtileTasse();
    const tasseInps = lavoratore.getTasseInps();
    const tasseIrpef = lavoratore.getTasseIrpef();
    const redditoNetto = lavoratore.getRedditoAnnuoNetto();
    resultsDiv.innerHTML = `
      <p>Utile tasse: ${utileTasse}</p>
      <p>Tasse INPS: ${tasseInps}</p>
      <p>Tasse IRPEF: ${tasseIrpef}</p>
      <p>Reddito Annuo Netto: ${redditoNetto}</p>
    `;
});
