// SVOLGIMENTO
// PALINDROMA


// Creo funzione che verifica se la parola inserita dall'utente è palindroma

function verifyPalindrome() {
const userWord = prompt(`Inserisci una parola:`)

// Per evitare che la parola non passi la verifica per via delle maiuscole, la converto in lowercase e la salvo nella sua variabile
const lowerCaseWord =  userWord.toLowerCase();

// Per verificare che scorrendo quindi i caratteri salvati in lowerCaseWord al contrario siano tutti nella stessa posizione, prima trasformo la stringa in un array, la inverto, e poi la trasformo di nuovo in una stringa
const reversedWord = lowerCaseWord.split("").reverse().join("");
}

