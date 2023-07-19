abstract class LavoratoreAutonomo {
    codredd: number;
    redditoannuolordo: number;
    tasseirpef: number;
  
    constructor(codredd: number, redditoannuolordo: number, tasseirpef: number) {
      this.codredd = codredd;
      this.redditoannuolordo = redditoannuolordo;
      this.tasseirpef = tasseirpef;
    }
  
    abstract getUtileTasse(): number;
    abstract getTasseInps(): number;
    abstract getTasseIrpef(): number;
    abstract getRedditoAnnuoNetto(): number;
  }
  
  class LavoratoreAutonomoImpl extends LavoratoreAutonomo {
    getUtileTasse(): number {
      return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    }
  
    getTasseInps(): number {
      return this.redditoannuolordo * 0.25; // 25% di tasse INPS
    }
  
    getTasseIrpef(): number {
      return this.redditoannuolordo * this.tasseirpef;
    }
  
    getRedditoAnnuoNetto(): number {
      return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    }
  }
  
  // Codice per l'interazione con l'HTML
  const calculateButton = document.getElementById('calculate');
  const resultsDiv = document.getElementById('results');
  
  calculateButton!.addEventListener('click', () => {
    const codreddInput = document.getElementById('codredd') as HTMLInputElement;
    const redditoInput = document.getElementById('reddito') as HTMLInputElement;
  
    const codredd = parseInt(codreddInput.value);
    const reddito = parseInt(redditoInput.value);
  
    const lavoratore = new LavoratoreAutonomoImpl(codredd, reddito, 0.2); // Tasse IRPEF al 20%
  
    const utileTasse = lavoratore.getUtileTasse();
    const tasseInps = lavoratore.getTasseInps();
    const tasseIrpef = lavoratore.getTasseIrpef();
    const redditoNetto = lavoratore.getRedditoAnnuoNetto();
  
    resultsDiv!.innerHTML = `
      <p>Utile tasse: ${utileTasse}</p>
      <p>Tasse INPS: ${tasseInps}</p>
      <p>Tasse IRPEF: ${tasseIrpef}</p>
      <p>Reddito Annuo Netto: ${redditoNetto}</p>
    `;
  });