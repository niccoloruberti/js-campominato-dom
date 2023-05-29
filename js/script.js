'use strict';

//dichiaro le variabili
const grid = document.getElementById('grid');
const bottone = document.getElementById('generator');

//creo la funzione che mi permette di creare le celle
function createCell(level) {
    let cell = document.createElement('div');
    //assegno una classe per stilizzare la cella in base alla difficoltà
    switch (level) {
        case '1':
            cell.classList.add('cell-1');
            break;
        case '2':
            cell.classList.add('cell-2');
            break;
        case '3':
            cell.classList.add('cell-3');
            break;           
    }
    return cell;
}

//creo la funzione che mi permette di creare le griglie
function createGrid(counter, level) {
    for (let i = 1; i <= counter; i++) {
        //creo una nuova cella
        let cell = createCell(level);
        //inserisco il testo nella cella
        cell.innerText = i;
        //creo un evento relativo al click sulla singola cella che gli fa cambiare colore
        cell.addEventListener('click', function() {
            this.classList.toggle('active');
        })
        //inserisco la nuova cella nella griglia
        grid.append(cell);
    }
}

//creo il ciclo che aggiunge le celle alla griglia quado viene premuto il bottone
bottone.addEventListener('click', function() {
    grid.innerHTML = ''
    let level = document.getElementById('levelSelection').value;
    let counter;
    switch (level) {
        case '1':
            //ciclo che crea 100 celle
            counter = 100;
            createGrid(counter, level);
            break;
        case '2':
            //ciclo che crea 81 celle
            counter = 81;
            createGrid(counter, level);
            break;
        case '3':
            //ciclo che crea 49 celle
            counter = 49;
            createGrid(counter, level);
            break;
    }
})