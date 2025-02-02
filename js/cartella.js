
// 🌟 
// **Bonus (cartelle)**

/*********************  FUNZIONI  *********************/
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

// funzione di scelta di 4 numeri scelti casualmente e rimossi dalla riga
function removeRandomNumbers(row, count) {
    for (let i = 0; i < count; i++) {
        let randomIndex = Math.floor(Math.random() * row.length);
        row.splice(randomIndex, 1);
    }
}

// creare la funzione di rimozione dei numeri dai div
function remove(number) {
    const allDivs = document.querySelectorAll('.casella');
    allDivs.forEach((div) => {
        if (parseInt(div.innerText) === number) {
            div.innerText = ''; // Svuota il testo all'interno del div
        }
    });
}
/************************************************+*********************/

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

// array di salvataggio dei numeri casuali scelti
let allShuffleNumber = [];

// applichiamo la funzione di shuffle a tutti gli array
const colonne = [
    { id: '1-9', array: uno },
    { id: '10-19', array: dieci },
    { id: '20-29', array: venti },
    { id: '30-39', array: trenta },
    { id: '40-49', array: quaranta },
    { id: '50-59', array: cinquanta },
    { id: '60-69', array: sessanta },
    { id: '70-79', array: settanta },
    { id: '80-90', array: ottanta }
  ];
  
  colonne.forEach(({ id, array }) => {
    const colonna = document.getElementById(id);
    for (let i = 0; i < 3; i++) {
      const randomNumber = shuffle(array);
      const newDiv = document.createElement('div');
      newDiv.className = 'casella';
      newDiv.innerText = randomNumber;
      colonna.appendChild(newDiv);
      allShuffleNumber.push(randomNumber);
    }
  });

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

// utilizzo la funzione di rimozione sulle righe 
removeRandomNumbers(rigaUno, 5);    //(riga, numeri da mantenere sulla riga)
removeRandomNumbers(rigaDue, 5);    //(riga, numeri da mantenere sulla riga)
removeRandomNumbers(rigaTre, 5);    //(riga, numeri da mantenere sulla riga)

// stampo i valori delle righe
allShuffleNumber = [...rigaUno, ...rigaDue, ...rigaTre];
console.log('i 15 numeri scelti sono:', allShuffleNumber);

// Nascondiamo i numeri nelle colonne che corrispondono ai numeri nelle righe
rigaUno.forEach(number => remove(number));
rigaDue.forEach(number => remove(number));
rigaTre.forEach(number => remove(number));

    // Ottieni tutte le caselle con la classe "casella"
    const caselle = document.getElementsByClassName("casella");
    console.log('SONO LE CASELLE',caselle);
    
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