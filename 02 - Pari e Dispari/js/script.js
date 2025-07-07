// SVOLGIMENTO
// Pari e Dispari

// Ho bisogno di creare tre funzioni, una per generare un numero random per il pc, un'altra per giocare contro il pc e un'ulteriore per stabilire se il risultato della somma dei due numeri (random del pc + numero dell'utente) è pari o dispari

// Creo una funzione che genera un numero random da 1 a 5 per il computer
function generaNumeroComputer() {
	// Con return posso riutilizzare il numero random fuori dalla funzione
  return Math.floor(Math.random() * 5) + 1;
}