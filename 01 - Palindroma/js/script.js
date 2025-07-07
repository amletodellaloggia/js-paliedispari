// SVOLGIMENTO
// PALINDROMA

// Creo funzione che verifica se la parola inserita dall'utente è palindroma

function verifyPalindrome() {
  const userWord = prompt(`Inserisci una parola:`);

  // Per evitare che la parola non passi la verifica per via delle maiuscole, la converto in lowercase e la salvo nella sua variabile
  const lowerCaseWord = userWord.toLowerCase();

  // Per verificare che scorrendo quindi i caratteri salvati in lowerCaseWord al contrario siano tutti nella stessa posizione, prima trasformo la stringa in un array, la inverto, e poi la trasformo di nuovo in una stringa e la salvo in una variabile dedicata
  const reversedWord = lowerCaseWord.split("").reverse().join("");

  // Effettuo un controllo con operatore di uguaglianza tra la variabile ottenuta (reversedWord) e lowerCaseWord (originale) e stampo in console un messaggio per gestire il caso 'palindroma' e 'non palindroma'

  if (lowerCaseWord === reversedWord) {
    console.log(`La parola che hai inserito è palindroma.`);
  } else {
    console.log(`La parola che hai inserito non è palindroma.`);
  }
}

// La funzione quindi entra in gioco, viene chiamata e ha effetto
verifyPalindrome();
