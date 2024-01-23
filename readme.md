# Griglia Campo Minato

## Obiettivo

L'utente deve poter cliccare su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Procedimento

- Collegare gli elementi di HTML che serviranno sul main.js
- Creare l'addEventListener collegato al bottone che permette di generare la griglia
- Creare la funzione che genera la griglia ed invocarla senro l'addEventListener del punto precedente
- Creare la funzione che permette di generare la cella e collegarla ad una const dentro alla funzione che genera la griglia
  - Dentro la funzione della cella creare un addEventListener che gestisce il comportamento della cella in caso di click (cambio colore)
  - Dentro l'addEventListener del cambio colore della cella differenziare:
    - SE l'oggetto cliccato contiene già la classe bg-info allora rimuoverla e stampare in console.log "cell n. X clicked to color"
    - ALTRIMENTI aggiungere la classe bg-info e stampare in console.log "cell n. X clicked to remove"
- Nella funzione delle celle aggiungere il parametro che permettono di speficificare i numeri dentro di esse
