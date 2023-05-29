PROBLEMA: Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

- creo l'array che conterrà il numero delle celle contenenti una bomba;
- creo una funzione che mi genera un numero casuale (con min 1, max il numero delle celle a seconda del livello di difficoltà e non possono esserci due numeri uguali all'interno dell'array);

PROBLEMA: In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

- inserisco un controllo sul click della cella;
- SE la cella selezionata appartiene all'array delle bombe aggiungo una classe che rende la cella rossa;
- Altrimenti diventa azzurra;

PROBLEMA: La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

- creo un elemento nel DOM dove far apparire il punteggio alla fine della partita;
- creo un contatore che viene incrementato ogni volta che viene selezionata una cella blu;
- se il contatore arriva a un totale del numero di celle - 16, il giocatore ha vinto e mostro il punteggio a schermo;
- se il giocatore scopre una cella rossa, la partita è terminata e mostro il punteggio a schermo;