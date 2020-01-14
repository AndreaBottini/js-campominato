// alert('funziona?')
// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// faccio generare un numero casuale dal computer
// var numeriCasuali = Math.floor(Math.random() * (16 - 1) ) + 1;
// console.log(numeriCasuali);

// var numeriPc = [];
// for (var i = 1; i <= 16; i++) {
//   var numeriCasuali = Math.floor(Math.random() * (16 - 1) ) + 1;
//   numeriPc.push(numeriCasuali);
//   console.log(numeriPc);
// }

var numeriPc = [];
var tentativiUtente = [];
var tentativi = 84;

while (numeriPc.length < 16) {
  var numeriCasuali = numeriRandom(1, 100);
  if (numeriPc.includes(numeriCasuali) == false) {
  numeriPc.push(numeriCasuali);
  console.log(numeriPc);
  }
}

function controllaNumero(arrayControllo, numeroControllo) {
  for (var i = 0; i < arrayControllo.length; i++) {
    if (numeroControllo == arrayControllo[i]) {
      return true;
    }
  }
  return false;
}

var contatore = 0;
while (tentativiUtente.length < tentativi && controllaNumero(numeriPc, numeroUtente) == false) {
  var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
  console.log(numeroUtente);
  if (tentativiUtente == numeroUtente) {
    console.log(tentativiUtente);
  }
  //controllo che sia una bomba
    //se è un bomba il gioco è finito, indico il punteggio
  // controllo che non ho già dato quel numero
  //   aggiungo il tentativo all'array dei tentativi
  //   aumentare il punteggio
  // se il numero inserito è uguale al numero precedentemente inserito, chiediamo di reinserire il numeroUtente
  // se abbiamo raggiunto il max dei tentativi allora abbiamo vinto
}

function numeriRandom(numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}
