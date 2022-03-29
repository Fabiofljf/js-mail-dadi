//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// PRIMO PASSAGGIO - creo una lista di chi può accedere, uso arrey

const Accesso = ['verdi@gmail.com', 'rossi@gmail.com', 'gialli@gmail.com']

// VARIABILI DI RICHIAMO
const listaAccesso = Accesso

// SECONDO PASSAGGIO - Chiedo all'utente la sua email
const email = prompt('Digitare email')

// VARIABILI DI RICHIAMO
const nomeUtente = email

// TERZO PASSAGGIO - Verifico l'accesso
for (let i = 0; i < Accesso.length; i++) {
    if (`${nomeUtente} == ${listaAccesso}`) {
        console.log('utente verificato')
    } else {
        console.log('accesso negato')
    }
}


// QUARTO PASSAGGIO - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 

// Genero numero random per giocatore
const dadiUser = Math.floor(Math.random() * 7)
console.log(`${dadiUser}`)

// Genero numero random per il computer
const dadiPc = Math.floor(Math.random() * 7)
console.log(`${dadiPc}`)

//Scrivo i rispettivi risultati sulla pagina
document.getElementById('giocataGiocatore').innerHTML = `${dadiUser}`
document.getElementById('giocataComputer').innerHTML = `${dadiPc}`