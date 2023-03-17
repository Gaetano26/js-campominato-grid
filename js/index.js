/*
 `<div class="square">1</div>`
  easy = 100
  medium = 81
  hard = 49
  width: `calc(100% / 10);`
  height: `calc(100% / 10);`
 */


  
//creiamo una costante per prendere il form dal documento
const levelForm = document.getElementById('levelForm')

//aggiungiamo un evento al form
levelForm.addEventListener('submit', play);

//funzione per disegnare e dimensionare la cella
function drawSquare(content, sidenumSquares) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${sidenumSquares})`;
    square.style.height =square.style.width;
    square.innerHTML = content;
    return square;

}

// funzione per generare l'array delle bombe
function generateBombs(bombnum, numsquares) {
    const bombs = [];
    while (bombs.length <= 16) {
        const bomb = getRndNumber(1, numsquares);
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }
    return bombs;
}

function play (e) {
    e.preventDefault ();
     const playground = document.getElementById('playground');
     playground.innerHTML = '';
     const NUM_BOMBS = 16;
    const level = document.getElementById('level').value;
    //console.log(level)
    let squareNumbers;
    switch (level) {
        case 'easy':
            squareNumbers = 100;
            break;
        case 'medium':
            squareNumbers = 81;
            break;
         case 'hard':
            squareNumbers = 49;
            break;
    };
    //console.log (squareNumbers);
    
    //determino il numero di celle per lato usano la radice quadrata
    let squareperRow = Math.sqrt(squareNumbers);
    //console.log(squareperRow)
   
     const bombs = generateBombs (NUM_BOMBS, squareNumbers);

    //genero una cella per ogni numero di celle
    for (let i = 1; i <= squareNumbers; i++) {
          const square = drawSquare(i, squareperRow);
          square.addEventListener('click', function() {
            square.classList.add('safe')
          }) ;

          playground.appendChild(square)
    }
}

