// Funzione per generare la cartella di tombola
function generaCartella() {
    const cartella = Array.from({ length: 3 }, () => Array(9).fill(null)); // 3 righe x 9 colonne
    const intervalli = [
        [1, 9],    // Colonna 1 (1-9)
        [10, 19],  // Colonna 2 (10-19)
        [20, 29],  // Colonna 3 (20-29)
        [30, 39],  // Colonna 4 (30-39)
        [40, 49],  // Colonna 5 (40-49)
        [50, 59],  // Colonna 6 (50-59)
        [60, 69],  // Colonna 7 (60-69)
        [70, 79],  // Colonna 8 (70-79)
        [80, 90],  // Colonna 9 (80-90)
    ];

    // Popoliamo la cartella con numeri casuali
    for (let col = 0; col < 9; col++) {
        const [min, max] = intervalli[col];
        const numeriDisponibili = Array.from({ length: max - min + 1 }, (_, i) => i + min);
        const numeriCasuali = numeriDisponibili.sort(() => Math.random() - 0.5).slice(0, 3); // Prendiamo 3 numeri per colonna

        numeriCasuali.forEach((numero, index) => {
            cartella[index][col] = numero;
        });
    }

    // Aggiungiamo 12 caselle vuote (null)
    let vuotiAggiunti = 0;
    while (vuotiAggiunti < 12) {
        const riga = Math.floor(Math.random() * 3);
        const colonna = Math.floor(Math.random() * 9);
        if (cartella[riga][colonna] !== null) {
            cartella[riga][colonna] = null;
            vuotiAggiunti++;
        }
    }

    return cartella;
}

// Funzione per visualizzare la cartella di tombola
function visualizzaCartella(cartella) {
    cartella.forEach((riga, index) => {
        riga.forEach((numero, colIndex) => {
            const col = document.getElementById(`col${colIndex + 1}`);
            const casella = document.createElement('div');
            casella.classList.add('casella');
            casella.textContent = numero !== null ? numero : ''; // Mostra il numero o lascia vuota la casella

            if (numero === null) {
                casella.classList.add('vuota'); // Aggiungi la classe 'vuota' se la casella è vuota
            } else {
                // Aggiungi un listener per segnare la casella se non è vuota
                casella.addEventListener('click', () => {
                    casella.classList.toggle('segnata');
                });
            }

            col.appendChild(casella);
        });
    });
}

// Genera e visualizza la cartella
const cartella = generaCartella();
visualizzaCartella(cartella);

