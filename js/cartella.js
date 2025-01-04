
// 🌟 

// **Bonus (cartelle)**

// Perché non provare anche a generare le cartelle per giocare? Potreste inserire un form che chiede il numero dei giocatori e far generare delle cartelle di 15 numeri, controllando però che siano tutte diverse tra loro.


// creare delle liste di numeri divise per colonne
// da 1 a 9
const uno = [1, 9]

for (let i = 2; i < 9; i++){
    uno.splice(uno.length - 1, 0, i);
}
console.log(uno);

// da 10 a 19
const dieci= [10, 19]

for (let i = 11; i < 19; i++){
    dieci.splice(dieci.length - 1, 0, i);
}
console.log(dieci);

// da 20 a 29
const venti = [20, 29]

for (let i = 21; i < 29; i++){
    venti.splice(venti.length - 1, 0, i);
}
console.log(venti);

// da 30 a 39
const trenta = [30, 39] 
for (let i = 31; i < 39; i++){
    trenta.splice(trenta.length - 1, 0, i);
}
console.log(trenta);

// da 40 a 49
const quaranta = [40, 49] 
for (let i = 41; i < 49; i++){
    quaranta.splice(quaranta.length - 1, 0, i);
}
console.log(quaranta);

// da 50 a 59
const cinquanta = [50, 59]
for (let i = 51; i < 59; i++){
    cinquanta.splice(cinquanta.length - 1, 0, i);
}
console.log(cinquanta);

// da 60 a 69
const sessanta = [60, 69]
for (let i = 61; i < 69; i++){
    sessanta.splice(sessanta.length - 1, 0, i);
}
console.log(sessanta);

// da 70 a 79
const settanta = [70, 79]
for (let i = 71; i < 79; i++){
    settanta.splice(settanta.length - 1, 0, i);
}
console.log(settanta);

// da 80 a 90
const ottanta = [80, 90]
for (let i = 81; i < 89; i++){
    ottanta.splice(ottanta.length - 1, 0, i);
}
console.log(ottanta);




// creare uno shuffle per inserire all'interno delle colonne questi numeri
// Ogni cartella ha 3 righe e 9 colonne, per un totale di 27 caselle.
// Ogni cartella contiene esattamente 15 numeri distribuiti su queste 27 caselle.
// Questo significa che ci sono 12 caselle vuote per cartella.
// Per ogni riga, ci devono essere esattamente 4 caselle vuote.
// Le caselle vuote sono distribuite casualmente, rispettando le regole sopra descritte
