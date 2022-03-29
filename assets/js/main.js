//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// PRIMO PASSAGGIO - creo una lista di chi può accedere, uso arrey

const Accesso = ['verdi@gmail.com', 'rossi@gmail.com', 'gialli@gmail.com']

// VARIABILI DI RICHIAMO
const listaAccesso = Accesso

// Chiedo all'utente la sua email
const email = prompt('Digitare email')

// VARIABILI DI RICHIAMO
const nomeUtente = email

//Verifico l'accesso
for (let i = 0; i < Accesso.length; i++) {
    if (`${nomeUtente} == ${listaAccesso}`) {
        console.log('utente verificato')
    } else {
        console.log('accesso negato')
    }

}