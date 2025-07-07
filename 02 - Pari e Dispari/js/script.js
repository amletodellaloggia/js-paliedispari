// SVOLGIMENTO
// PARI E DISPARI

// Ho bisogno di creare tre funzioni, una per generare un numero random per il pc, un'altra per giocare contro il pc e un'ulteriore per stabilire se il risultato della somma dei due numeri (random del pc + numero dell'utente) è pari o dispari

// Creo una funzione che genera un numero random da 1 a 5 per il computer
function generateComputerNumber() {
  // Con return posso riutilizzare il numero random fuori dalla funzione
  return Math.floor(Math.random() * 5) + 1;
}

// Funzione che verifica se un numero è pari o dispari
function isEvenOdd(num) {
  // Controllo se il resto della divisione per 2 è zero
  if (num % 2 === 0) {
    return "pari"; // Se resto zero, è pari
  } else {
    return "dispari"; // Altrimenti dispari
  }
}

// Creo la funzione per giocare
function playEvenOdd() {
  // 1. Chiedo all'utente di scegliere "pari" o "dispari"
  const userChoice = prompt("Scegli pari o dispari:");

  // 2. Chiedo all'utente di inserire un numero da 1 a 5 e lo salvo in una variabile dedicata
  const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"), 10);

  // 3. Genero il numero casuale per il computer e lo salvo in una variabile dedicata
  const computerNumber = generateComputerNumber();

  // 4. Sommo i numeri scelti dall'utente e dal computer e li salvo in una variabile dedicata
  const sum = userNumber + computerNumber;

  // 5. Determino se la somma è pari o dispari passando 'sum' a una funzione dedicata che creo in testa, e creo una variabile dedicata dove salvarne l'esito
  const result = isEvenOdd(sum);

  // 6. Decido chi ha vinto confrontando la scelta dell'utente con il risultato
		// 6.1 Dichiaro una variabile dedicata che restituisce un messaggio in base a un confronto di uguaglianza
		let vincitore;

		// 6.2 Utilizzo 'if' ed 'else' per decidere
		if (result === userChoice) {
			winner = "Hai vinto!"; // L'utente ha indovinato il risultato
		} else {
			winner = "Ha vinto il computer."; // Altrimenti vince il computer
		}

}
