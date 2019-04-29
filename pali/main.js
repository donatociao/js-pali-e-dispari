//Capire se la parola inserita dall’utente è palindroma o no (e quindi output di conseguenza)

//Chiedo all'utente di inserire la parola come stringa
var parola = prompt("Inserisci una parola")

//creo un array formato dalle lettere della parola inserita
var parolaArray = parola.split('');

//creo un array in reverse
var reverseArray = parolaArray.reverse();

//creo una stringa con le lettere dell'array reverse
var joinArray = reverseArray.join('');

//controllo palindromia
if (parola == joinArray) {
  document.writeln("La parola " + parola + " è palindroma");
} else {
  document.writeln("La parola " + parola + " non è palindroma")
}
