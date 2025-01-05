
// 🌟 
// **Bonus (cartelle)**

// Perché non provare anche a generare le cartelle per giocare? Potreste inserire un form che chiede il numero dei giocatori e far generare delle cartelle di 15 numeri, controllando però che siano tutte diverse tra loro.


// funzione che restituisce un numero casuale e lo rimuove dal suo array
function shuffle(arr) {
    // Seleziono un indice casuale
    let randomIndex = Math.floor(Math.random() * arr.length)
    // dall'indece leggo il suo numero
    let randomNumber = arr[randomIndex];

    // una volta ricavato l'elemento lo rimuovo dal suo array
    arr.splice(randomIndex, 1) //dall'indice ricavato rimuovo il numero ricavato

    // ritornami il numero casualmente uscito
    return randomNumber; 
}

// funzione per creare un array di numeri da un intervallo
function createArray(start, end) {


    const arr = [];    // inizializziamo la variabile come vuota
    for (let i = start; i <= end; i++){ //inizia a start e finisce ad end, con incremento dell'indice pari a 1
        arr.push(i); //aggiungi +1
    }

    // ritornami il valore dell'array
    return arr;
}

// creiamo gli array

const uno = createArray (1, 9);         // da 1 a 9
const dieci = createArray (10, 19);     // da 10 a 19
const venti = createArray (20, 29);     // da 20 a 29
const trenta = createArray (30, 39);    // da 30 a 39
const quaranta = createArray (40, 49);  // da 40 a 49
const cinquanta = createArray (50, 59); // da 50 a 59
const sessanta = createArray (60, 69);  // da 60 a 69
const settanta = createArray (70, 79);  // da 70 a 79
const ottanta = createArray (80, 90);   // da 80 a 89

// stampiamo gli array
console.log('array originale uno', uno);
console.log('array originale dieci', dieci);
console.log('array originale venti', venti);
console.log('array originale trenta', trenta);
console.log('array originale quaranta', quaranta);
console.log('array originale cinquanta', cinquanta);
console.log('array originale sessanta', sessanta);
console.log('array originale settanta', settanta);
console.log('array originale ottanta', ottanta);

// richiamo le 9 colonne del html
const colonnaUno = document.getElementById('1-9'); 
const colonnaDieci = document.getElementById('10-19'); 
const colonnaVenti = document.getElementById('20-29'); 
const colonnaTrenta = document.getElementById('30-39'); 
const colonnaQuaranta = document.getElementById('40-49'); 
const colonnaCinquanta = document.getElementById('50-59'); 
const colonnaSessanta = document.getElementById('60-69'); 
const colonnaSettanta = document.getElementById('70-79'); 
const colonnaOttanta = document.getElementById('80-90'); 

// applichiamo la funzione di shuffle a tutti gli array

for (let i = 0; i < 3; i++) {
    const randomUno = shuffle(uno);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomUno; // Assegna del testo al div
    colonnaUno.appendChild(newDiv);

    // console.log("Numero casuale dell'array uno", randomUno); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomDieci = shuffle(dieci);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomDieci; // Assegna del testo al div
    colonnaDieci.appendChild(newDiv);

    // console.log("Numero casuale dell'array dieci", randomDieci); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomVenti = shuffle(venti);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomVenti; // Assegna del testo al div
    colonnaVenti.appendChild(newDiv);
    
    // console.log("Numero casuale dell'array venti", randomVenti); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomTrenta = shuffle(trenta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomTrenta; // Assegna del testo al div
    colonnaTrenta.appendChild(newDiv);
    
    // console.log("Numero casuale dell'array trenta", randomTrenta); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomQuaranta = shuffle(quaranta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomQuaranta; // Assegna del testo al div
    colonnaQuaranta.appendChild(newDiv);
    
    // console.log("Numero casuale dell'array trenta", randomQuaranta); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomCinquanta = shuffle(cinquanta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomCinquanta; // Assegna del testo al div
    colonnaCinquanta.appendChild(newDiv);
    
    // console.log("Numero casuale dell'array cinquanta", randomCinquanta); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomSessanta = shuffle(sessanta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomSessanta; // Assegna del testo al div
    colonnaSessanta.appendChild(newDiv);
    
    // console.log("Numero casuale dell'array sessanta", randomSessanta); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomSettanta = shuffle(settanta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomSettanta; // Assegna del testo al div
    colonnaSettanta.appendChild(newDiv);
    
    // console.log("Numero casuale dell'array sessanta", randomSettanta); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomOttanta = shuffle(ottanta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomOttanta; // Assegna del testo al div
    colonnaOttanta.appendChild(newDiv);
    
    // console.log("Numero casuale dell'array sessanta", randomOttanta); // Stampa i numeri casuali
}

// stampiamo gli array modificati
console.log('Array uno aggiornato:', uno);
console.log('Array dieci aggiornato:', dieci);
console.log('Array venti aggiornato:', venti);
console.log('Array trenta aggiornato:', trenta);
console.log('Array quaranta aggiornato:', quaranta);
console.log('Array cinquanta aggiornato:', cinquanta);
console.log('Array sessanta aggiornato:', sessanta);
console.log('Array settanta aggiornato:', settanta);
console.log('Array ottanta aggiornato:', ottanta);

