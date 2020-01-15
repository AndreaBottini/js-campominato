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
var punti = [];
var messaggio = 'hai vinto!'

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
  while(checkRangeNumber(numeroUtente) == false)
  if(isInArray(tentativiUtente, numeroUtente) == false) {
    tentativiUtente.push(numeroUtente);
    if(isInArray(numeriPc, numeroUtente) == true){
      messaggio = 'hai perso';
      bombaTrovata = true;
    } else {
      punti++;
      i++;
    }
  }
}
console.log(tentativiUtente);
console.log(messaggio + ' ' + punti);

function isInArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
    result = true;
  }
  i++;
  }
  return result;
}

function numeriRandom(numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}

function checkRangeNumber(min, max, number) {
  var result = false;
  if(number >= min && number <= max) {
    result = true;
  }
  return result;
}
