'use strict';

//dichiaro le variabili
const grid = document.getElementById('grid');
const bottone = document.getElementById('generator');
let bombs = [];
let scoreCounter = 0;
let scoreMessage = document.getElementById('score');

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
function createGrid(counter, level, bombs) {
    for (let i = 1; i <= counter; i++) {
        //creo una nuova cella
        let cell = createCell(level);
        //inserisco il testo nella cella
        cell.innerText = i;
        //creo un evento relativo al click sulla singola cella che gli fa cambiare colore a seconda se è una bomba o meno
        cell.addEventListener('click', function() {
            if (bombs.includes(i) == true) {
                cell.classList.add('exploded');
                scoreMessage.innerText = `Hai perso! il tuo punteggio è ${scoreCounter}!`
            } else if (!cell.classList.contains('active')) {
                cell.classList.add('active');
                scoreCounter++;
            }
            //controllo quando termina la partita
            if (scoreCounter == counter - 16) {
                //la partita è finita il giocatore ha vinto
                scoreMessage.innerText = `Hai vinto! non hai preso nemmeno una bomba!`
            }
        })
        //inserisco la nuova cella nella griglia
        grid.append(cell);
    }
}

//creo una funzione che genera 16 numeri diversi, casuali e compresi tra 1 e il numero di celle della griglia
function numbersRandom(min, max) {
    let array = [];
    while (array.length < 16) {
        let number = Math.floor(Math.random() * (max - min +1 )) + min;
        if (array.includes(number) == false) {
            array.push(number);
        }
    }
    return array;
    }

//creo il ciclo che aggiunge le celle alla griglia quado viene premuto il bottone
bottone.addEventListener('click', function() {
    grid.innerHTML = '';
    scoreCounter = 0;
    scoreMessage.innerText = '';
    let level = document.getElementById('levelSelection').value;
    let counter;
    switch (level) {
        case '1':
            //ciclo che crea 100 celle
            counter = 100;
            bombs = numbersRandom (1, counter);
            createGrid(counter, level, bombs);
            break;
        case '2':
            //ciclo che crea 81 celle
            counter = 81;
            bombs = numbersRandom (1, counter);
            createGrid(counter, level, bombs);
            break;
        case '3':
            //ciclo che crea 49 celle
            counter = 49;
            bombs = numbersRandom (1, counter);
            createGrid(counter, level, bombs);
            break;
    }
    console.log(bombs);
})