
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

// applichiamo la funzione di shuffle a tutti gli array

for (let i = 0; i < 3; i++) {
    const randomUno = shuffle(uno);
    console.log("Numero casuale dell'array uno", randomUno); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomDieci = shuffle(dieci);
    console.log("Numero casuale dell'array dieci", randomDieci); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomVenti = shuffle(venti);
    console.log("Numero casuale dell'array venti", randomVenti); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomTrenta = shuffle(trenta);
    console.log("Numero casuale dell'array trenta", randomTrenta); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomQuaranta = shuffle(quaranta);
    console.log("Numero casuale dell'array trenta", randomQuaranta); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomCinquanta = shuffle(cinquanta);
    console.log("Numero casuale dell'array cinquanta", randomCinquanta); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomSessanta = shuffle(sessanta);
    console.log("Numero casuale dell'array sessanta", randomSessanta); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomSettanta = shuffle(settanta);
    console.log("Numero casuale dell'array sessanta", randomSettanta); // Stampa i numeri casuali
}
for (let i = 0; i < 3; i++) {
    const randomOttanta = shuffle(ottanta);
    console.log("Numero casuale dell'array sessanta", randomOttanta); // Stampa i numeri casuali
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



















// creare delle liste di numeri divise per colonne
// da 1 a 9
// const uno = [1, 9]

// // inserisco tutti i numeri compresi nell'array
// for (let i = 2; i < 9; i++){
//     uno.splice(uno.length - 1, 0, i);
// }

// console.log("Array originale:", uno);

// // genero una funzione che mi ritorna un numero casuale 
// function shuffle (uno) {

//     // creo la pesca casuale
//     let randomIndex = Math.floor(Math.random() * uno.length);
//     let randomNumber = uno[randomIndex];

//     // Rimuovo l'elemento dall'array
//     uno.splice(randomIndex, 1);

//     return randomNumber;
// }

// // Prendo 3 numeri casuali dall'array, rimuovendoli
// for (let i = 0; i < 3; i++) {
//     const random = shuffle(uno);
//     console.log(random); // Stampa il numero casuale
// }
// console.log("Array aggiornato:", uno); // Mostra l'array dopo la rimozione



// // da 10 a 19
// const dieci= [10, 19]

// for (let i = 11; i < 19; i++){
//     dieci.splice(dieci.length - 1, 0, i);
// }
// console.log("Array originale:", dieci);

// // genero una funzione che mi ritorna un numero casuale 
// function shuffle (dieci) {

//     // creo la pesca casuale
//     let randomIndex = Math.floor(Math.random() * dieci.length);
//     let randomNumber = dieci[randomIndex];

//     // Rimuovo l'elemento dall'array
//     dieci.splice(randomIndex, 1);

//     return randomNumber;
// }

// // Prendo 3 numeri casuali dall'array, rimuovendoli
// for (let i = 0; i < 3; i++) {
//     const random = shuffle(dieci);
//     console.log(random); // Stampa il numero casuale
// }
// console.log("Array aggiornato:", dieci); // Mostra l'array dopo la rimozione


// // da 20 a 29
// const venti = [20, 29]

// for (let i = 21; i < 29; i++){
//     venti.splice(venti.length - 1, 0, i);
// }
// console.log(venti);

// // da 30 a 39
// const trenta = [30, 39] 
// for (let i = 31; i < 39; i++){
//     trenta.splice(trenta.length - 1, 0, i);
// }
// console.log(trenta);

// // da 40 a 49
// const quaranta = [40, 49] 
// for (let i = 41; i < 49; i++){
//     quaranta.splice(quaranta.length - 1, 0, i);
// }
// console.log(quaranta);

// // da 50 a 59
// const cinquanta = [50, 59]
// for (let i = 51; i < 59; i++){
//     cinquanta.splice(cinquanta.length - 1, 0, i);
// }
// console.log(cinquanta);

// // da 60 a 69
// const sessanta = [60, 69]
// for (let i = 61; i < 69; i++){
//     sessanta.splice(sessanta.length - 1, 0, i);
// }
// console.log(sessanta);

// // da 70 a 79
// const settanta = [70, 79]
// for (let i = 71; i < 79; i++){
//     settanta.splice(settanta.length - 1, 0, i);
// }
// console.log(settanta);

// // da 80 a 90
// const ottanta = [80, 90]
// for (let i = 81; i < 89; i++){
//     ottanta.splice(ottanta.length - 1, 0, i);
// }
// console.log(ottanta);




// // creare uno shuffle per inserire all'interno delle colonne questi numeri
// // Ogni cartella ha 3 righe e 9 colonne, per un totale di 27 caselle.
// // Ogni cartella contiene esattamente 15 numeri distribuiti su queste 27 caselle.
// // Questo significa che ci sono 12 caselle vuote per cartella.
// // Per ogni riga, ci devono essere esattamente 4 caselle vuote.
// // Le caselle vuote sono distribuite casualmente, rispettando le regole sopra descritte
