

/* PARTE 1
 L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

/* PARTE 2
 Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta:
 le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba,
  perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista
 dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la 
 partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può 
 continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo 
possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte 
che l’utente ha cliccato su una cella che non era una bomba. */
// CREO UNA VARIABILE CONTATORE CON VALORE 0
let mainGrid;
let pointsCounter = 0;
const bombArray = [];
// quando l'utente preme il pulsante play si genera una griglia 
const playButton = document.querySelector('#play-button');
//console.log(playButton);
playButton.addEventListener('click', function() {
    
    
    // IL COMPUTER DEVE GENERARE 16 NUMERI CASUALI: LE BOMBE
    //CREO ARRAY VUOTO, 
    
    
    //FINO A CHE ARRAY NON E' DI 16 elementi: CREO NUMERI RANDOM,
    while (bombArray.length < 16) {
        let randomNumber = getRndInteger(1, 100);
        // SE IL NUMERO RANDOM NON E' PRESENTE NELL'ARRAY LO AGGIUNGO NELL'ARRAY 
        let randomNumberFound = bombArray.includes(randomNumber);
        if(randomNumberFound === false){
            bombArray.push(randomNumber);
            console.log(bombArray);
        }
    }
    
    // la griglia diventa visibile aggiungendo una classe
    mainGrid = document.querySelector('#grid');
    mainGrid.classList.add('active');
    // svuoto la griglia quando viene premuto il bottone play
    mainGrid.innerHTML = ''; 

    //per 100 volte creare un quadratino e ogni quadratino si aggiunge alla 
    // griglia grid
    for(let i = 1; i <= 100; i++) {
        let newSquare = generateSquare(i);
        //console.log(newSquare);
        mainGrid.append(newSquare);
    }
    
}); 





// Quando il quadratino viene cliccato:
// SE IL NUMERO DEL QUADRATO NON E' PRESENTE NELL'ARRAY
// il quadrato si colora di azzurro e
// viene emesso un messaggio in console con il numero del quadratino cliccato
// IL CONTATORE DEI PUNTI AUMENTA DI +1
// ALTRIMENTI IL NUMERO DEL QUADRATINO CLICCATO E' PRESENTE NELL'ARRAY HO TROVATO UNA BOMBA
// IL QUADRATO SI COLORA DI ROSSO E LA PARTITA TERMINA
// VIENE MOSTRATO IL NUMERO DEI PUNTI DEL CONTATORE

// SE TUTTE LE CELLE CHE NON SONO BOMBE VENGONO CLICCATE OPPURE UNA BOMBA VIENE CLICCATA,
// VIENE MOSTRATO UN MESSAGGIO CON IL NUMERO DEI PUNTI DEL CONTATORE 


// FUNCTIONS

// Funzione che genera un quadrato
// number -> numero che rappresenta un numero
// return: elemento del DOM che rappresenta un quadrato

function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `${number}`;

    // gestione del click su ogni quadrato
    // Quando il quadratino viene cliccato si colora di azzurro e
    // viene emesso un messaggio in console con il numero del quadratino cliccato
    newSquare.addEventListener('click', function(){
        if(bombArray.includes(parseInt(this.innerHTML))) {
            this.classList.add('red');
            alert(`Game over. Il tuo punteggio e': ${pointsCounter}`);
            
            //execute this line after 2 seconds 
            
            setTimeout(() => {
                mainGrid.classList.remove('active');
                //mainGrid.innerHTML = ''; 
            },2000);
            
            
        } else{
            this.classList.add('blue');
            pointsCounter++;
            console.log('score',pointsCounter);
        }
        
    });

    return newSquare;
    
}

// funzione che crea numeri casuali
// min -> integer che rappresenta il valore minimo del numero casuale
// max -> integer che rappresenta il valore massimo del numeri casuale
//  return :  un integer casuale di valore compreso tra min e max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }