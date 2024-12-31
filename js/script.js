// 2️⃣ **Estrazione dei numeri**

// Al click sul tasto Estrai verrà estratto un numero a caso dall’array dei numeri disponibili. Questo numero andrà  mostrato e la casella corrispondente verrà colorata in modo da segnalarne l’estrazione. Non dimenticate di rimuovere il numero estratto dalla lista dei numeri estraibili per evitare doppioni!!

// creare l'array di dimensione 90
// e gli assegnamo i valori da 1 a 90 con il ciclo for
// creiamo la funzione che ci estrae (e cancella dal vettore) il valore che viene richiamata quando pigiamo il bottone estrai
// e lo stampiamo nel console log e successivamente a video
// quanto esce il numero si colora anche la casella del numero sul tabellone

// creare l'array di dimensione 90 ok
const N = 4
const numeriOriginali = [N]

// e gli assegnamo i valori da 1 a 90 con il ciclo for
for (let i= 0; i < N; i++) {

    numeriOriginali [i] = i+1;   
    // console.log(numeri [i]);
}

// creo una copia di gioco
let numeri = [...numeriOriginali];

// creo la funzione random
function estrazione() {
    if (numeri.length > 0) {

        // generazione dell'indice casuale
        let randomIndex = Math.floor(Math.random() * numeri.length);

        // conversione dall'indice al numero
        let randomNumber = numeri[randomIndex];

        //stampo output random che viene richiamata quando pigiamo il bottone estrai
        //output video 
        document.getElementById('numero-estratto').innerHTML = randomNumber;
        //output debug
        console.log("numero estratto:", randomNumber);

        // quando esce il numero si colora anche la casella del numero sul tabellone
        // Seleziona tutti gli elementi con la classe "number"
        let tabellone = document.getElementsByClassName('number');
        
        // Itera su ciascun elemento
        for (let i = 0; i < tabellone.length; i++) {

            // creiamo un if per comparare il valore dei numeri inserti nel html e quelli generati randomicamente
            if (tabellone[i].innerHTML === randomNumber.toString()) {

                // cambiamo lo stile dei numeri
                tabellone[i].style.backgroundColor = '#f68da0';
                tabellone[i].style.boxShadow = '-2px 2px 1px #c82027';
                tabellone[i].style.border = '1px solid #c82027';
            }
        }

        // creiamo la funzione che ci estrae (e cancella dal vettore) il valore
        numeri.splice(randomIndex,1)
        console.log("numeri rimasti da estrarre:",numeri.length);

        // altrimenti
    } else {
        document.getElementById('btn-estrazione').disabled=true;
    }

}


// creiamo la funzione che resetta il gioco in qualsiasi momento
function reset (){

    numeri = [...numeriOriginali];
    console.log('numeri',numeri);

    // quando viene premuto questo tasto tutte le caselle tornano bianche 
    // Seleziona tutti gli elementi con la classe "number"
    let tabellone = document.getElementsByClassName('number');
    
    // Itera su ciascun elemento
    for (let i = 0; i < tabellone.length; i++) {

        // cambiamo lo stile dei numeri
        tabellone[i].style.backgroundColor = 'white';
        tabellone[i].style.boxShadow = '-2px 2px 1px #b2c6c4';
        tabellone[i].style.border = '1px solid #b2c6c4';
    }
    
    //cancello il valore mostrato sul numero estratto
    //output video 
    document.getElementById('numero-estratto').innerHTML = '';

 }
    


