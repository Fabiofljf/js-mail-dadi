//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//CREO PULSANTE PER GENERARE IL TUTTO
document.getElementById('btndiVerifica').addEventListener('click', verifica)

function verifica() {

    // PRIMO PASSAGGIO - creo una lista di chi può accedere, uso arrey
    const Accesso = ['verdi@gmail.com', 'rossi@gmail.com', 'gialli@gmail.com']

    // VARIABILI DI RICHIAMO (facoltativa)
    const listaAccesso = Accesso

    // SECONDO PASSAGGIO - Chiedo all'utente la sua email
    const email = document.getElementById('email').value

    // VARIABILI DI RICHIAMO (facoltativa)
    const nomeUtente = email

    //Variabile email non torvata (variabile sentinella) la imposto false perché ancora non ho nessun valore
    let elementoTrovato = false


    // TERZO PASSAGGIO - Verifico l'accesso
    for (let i = 0; i < Accesso.length; i++) {
        if (nomeUtente == listaAccesso[i]) {
            elementoTrovato = true
        }
    }

    //Quando trovo l'elementoTrovato vero stampo il messaggio
    if (elementoTrovato == true) {
        document.getElementById('risultatoAccesso').innerHTML = 'Accesso consentito'
    } else {
        document.getElementById('risultatoAccesso').innerHTML = 'Accesso negato'
    }
}

// GIOCO !!!

//CREO PULSANTE PER GENERARE IL TUTTO
document.getElementById('btnGioca').addEventListener('click', verificoGioco)

function verificoGioco() {
    // QUARTO PASSAGGIO - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 

    // Genero numero random per giocatore
    const dadiUser = Math.floor(Math.random() * 7)

    // VARIABILI DI RICHIAMO (facoltativa)
    const giocataUser = dadiUser

    // Genero numero random per il computer
    const dadiPc = Math.floor(Math.random() * 7)

    // VARIABILI DI RICHIAMO (facoltativa)
    const giocataPc = dadiPc

    //Scrivo i rispettivi risultati sulla pagina
    document.getElementById('giocataGiocatore').innerHTML = `${dadiUser}`
    document.getElementById('giocataComputer').innerHTML = `${dadiPc}`

    // DICHIARO IL VINCITORE
    if (giocataUser < giocataPc) {
        document.getElementById('risultato').innerHTML = 'Hai perso'
    } else if (giocataUser > giocataPc) {
        document.getElementById('risultato').innerHTML = 'Hai vinto'
    } else {
        document.getElementById('risultato').innerHTML = 'Pareggio'
    }
}