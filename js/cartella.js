
// 🌟 
// **Bonus (cartelle)**

// Perché non provare anche a generare le cartelle per giocare? Potreste inserire un form che chiede il numero dei giocatori e far generare delle cartelle di 15 numeri, controllando però che siano tutte diverse tra loro.


// funzione che restituisce un numero casuale e lo rimuove dal suo array
function shuffle(arr) {
    // Seleziono un indice casuale
    let randomIndex = Math.floor(Math.random() * arr.length)
    // dall'indice leggo il suo numero
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

// creare la funzione di rimozione

function remove(number) {
    const allDivs = document.querySelectorAll('.casella');
    allDivs.forEach((div) => {
        if (parseInt(div.innerText) === number) {
            div.innerText = ''; // Svuota il testo all'interno del div
        }
    });
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

// array di salvataggio dei numeri casuali scelti
let allShuffleNumber = [];

// applichiamo la funzione di shuffle a tutti gli array
for (let i = 0; i < 3; i++) {
    const randomUno = shuffle(uno);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomUno; // Assegna del testo al div
    colonnaUno.appendChild(newDiv); // Aggiungo il div su html
    allShuffleNumber.push(randomUno); // salva il numero nell'array completa

}
for (let i = 0; i < 3; i++) {
    const randomDieci = shuffle(dieci);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomDieci; // Assegna del testo al div
    colonnaDieci.appendChild(newDiv); // Aggiungo il div su html
    allShuffleNumber.push(randomDieci); // salva il numero nell'array completa

}
for (let i = 0; i < 3; i++) {
    const randomVenti = shuffle(venti);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomVenti; // Assegna del testo al div
    colonnaVenti.appendChild(newDiv); // Aggiungo il div su html
    allShuffleNumber.push(randomVenti); // salva il numero nell'array completa
}

for (let i = 0; i < 3; i++) {
    const randomTrenta = shuffle(trenta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomTrenta; // Assegna del testo al div
    colonnaTrenta.appendChild(newDiv); // Aggiungo il div su html
    allShuffleNumber.push(randomTrenta); // salva il numero nell'array completa
}

for (let i = 0; i < 3; i++) {
    const randomQuaranta = shuffle(quaranta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomQuaranta; // Assegna del testo al div
    colonnaQuaranta.appendChild(newDiv);// Aggiungo il div su html
    allShuffleNumber.push(randomQuaranta); // salva il numero nell'array completa
}

for (let i = 0; i < 3; i++) {
    const randomCinquanta = shuffle(cinquanta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomCinquanta; // Assegna del testo al div
    colonnaCinquanta.appendChild(newDiv); // Aggiungo il div su html
    allShuffleNumber.push(randomCinquanta); // salva il numero nell'array completa
}

for (let i = 0; i < 3; i++) {
    const randomSessanta = shuffle(sessanta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomSessanta; // Assegna del testo al div
    colonnaSessanta.appendChild(newDiv); // Aggiungo il div su html
    allShuffleNumber.push(randomSessanta); // salva il numero nell'array completa
}

for (let i = 0; i < 3; i++) {
    const randomSettanta = shuffle(settanta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomSettanta; // Assegna del testo al div
    colonnaSettanta.appendChild(newDiv); // Aggiungo il div su html
    allShuffleNumber.push(randomSettanta); // salva il numero nell'array completa
}

for (let i = 0; i < 3; i++) {
    const randomOttanta = shuffle(ottanta);
    const newDiv = document.createElement('div'); // Crea un nuovo div
    newDiv.className = 'casella'; // Assegna una classe al div
    newDiv.innerText = randomOttanta; // Assegna del testo al div
    colonnaOttanta.appendChild(newDiv);
    allShuffleNumber.push(randomOttanta); // salva il numero nell'array completa
}

// stampiamo allShuffleNumber aggiornato con tutti i valori
console.log('i 27 numeri casuali sono:', allShuffleNumber);

// mi creo le righe della cartella di gioco
const rigaUno = [];
const rigaDue = [];
const rigaTre = [];

// mi ricavo le riga dal vettore delle colonne
// riga 1
for(let i = 0; i < allShuffleNumber.length; i = i + 3){
    // mi salvo la riga
    rigaUno.push(allShuffleNumber[i]);
}

// riga 2
for(let i = 1; i < allShuffleNumber.length; i = i + 3){
    // mi salvo la riga
    rigaDue.push(allShuffleNumber[i]);
}

// riga 3
for(let i = 2; i < allShuffleNumber.length; i = i + 3){
    rigaTre.push(allShuffleNumber[i]);
}



// creo un ciclo per eliminare casualmente 4 di 9 caselle della riga
for (let i = 0; i < 5; i++){

    // Seleziono un indice casuale
    let randomIndex = Math.floor(Math.random() * rigaUno.length)
    // dall'indice leggo il suo numero
    let randomNumber = rigaUno[randomIndex];
    rigaUno.splice(randomIndex, 1);
}
for (let i = 0; i < 5; i++){

    // Seleziono un indice casuale
    let randomIndex = Math.floor(Math.random() * rigaDue.length)
    // dall'indice leggo il suo numero
    let randomNumber = rigaDue[randomIndex];
    rigaDue.splice(randomIndex, 1);
}
for (let i = 0; i < 5; i++){
    // Seleziono un indice casuale
    let randomIndex = Math.floor(Math.random() * rigaTre.length)
    // dall'indice leggo il suo numero
    let randomNumber = rigaTre[randomIndex];
    rigaTre.splice(randomIndex, 1);
}


// stampo i valori delle righe
allShuffleNumber = [...rigaUno, ...rigaDue, ...rigaTre];
console.log('i 15 numeri scelti sono:', allShuffleNumber);


// Nascondiamo i numeri nelle colonne che corrispondono ai numeri nelle righe
rigaUno.forEach(number => remove(number));
rigaDue.forEach(number => remove(number));
rigaTre.forEach(number => remove(number));


    // Ottieni tutte le caselle con la classe "casella"
    const caselle = document.getElementsByClassName("casella");

    // Itera su tutte le caselle e aggiungi l'evento di clic
    for (let i = 0; i < caselle.length; i++) {
        // se la casella è vuota 
        if(caselle[i].innerText === "" ){
            // inserisci classe disabled
            caselle[i].classList.add( "disabled");
        }else{
            caselle[i].addEventListener("click", function() {
            // Verifica se la casella è già colorata
            if (this.style.backgroundColor === "green") {
              // Ritorna al colore originale
              this.style.backgroundColor = "white";
              this.style.color = "black";
            } else {
              // Colora la casella
              this.style.backgroundColor = "green";
              this.style.color = "white";
            }
          });

        };
    }




    

    





