//- L’utente sceglie pari o dispari e un numero da 1 a 5.
//Poi generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.
//Il computer genera random altro numero sullo stesso range, così sapremo chi ha vinto.

//Utente sceglie pari o dispari
var scelta = prompt('Pari o Dispari?');

//dichiaro una variabile booleana di appoggio su false
var appoggio = false;

//determino la condizione per il true
if (scelta == "Pari") {
  appoggio = true;
}

//stampo la scelte dell'utente
document.writeln('Hai scelto ' + scelta);

//chiedo all'utente di scegliere un numero;
var numero = parseInt(prompt('Scegli un numero da 1 a 5'));

//genero un numero random da 1 a 5 per la giocata del computer
var computer = Math.floor(Math.random() * 5);

//faccio la somma dei due numeri
var somma = numero + computer;

//stampo la somma dei due numeri
document.writeln('</br>La somma è ' + somma + '.');

//determino condizioni per la vittoria
if (appoggio == true && somma%2 == 0) {
  document.writeln('</br>Hai vinto!');
} else if (appoggio == false && somma%2 != 0) {
  document.writeln('</br>Hai vinto!');
} else {
  document.writeln('</br>Hai perso!');
}
