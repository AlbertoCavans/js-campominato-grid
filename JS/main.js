/* LINKS TO ELEMENTS */
const gameBoard = document.getElementById("game-board");
const startButton = document.querySelector(".btn");
const inputLevel = document.getElementById("inputLevel");

let bombsLet;

startGame(gameBoard, inputLevel);

/* START BUTTON */

startButton.addEventListener("click", function () {
  startGame(gameBoard, inputLevel);
  gameBoard.classList.add("d-flex");
  gameBoard.classList.remove("d-none");
});

/* START GAME */

function startGame(gameBoard, inputLevel) {
  const numberCell = parseInt(inputLevel.value);
  bombsLet = createBombs(numberCell);
  console.log("bombs", bombsLet);
  generateGameBoard(gameBoard, bombsLet);
}

/* GENERATE GAMEBOARD */
function generateGameBoard(container, bombsLet) {
  gameBoard.innerHTML = "";

  const numberCell = parseInt(inputLevel.value);
  for (let i = 1; i < numberCell + 1; i++) {
    const cell = generateCell(i, numberCell, bombsLet);
    container.append(cell);
  }
}

/* GENERATE CELL */
function generateCell(text, cellNumber, bombsLet) {
  const singleCell = document.createElement("div");
  singleCell.classList.add("box");
  singleCell.classList.add("box-" + cellNumber);
  /*   singleCell.innerText = text; */
  singleCell.addEventListener("click", function () {
    console.log(text);

    if (bombsLet.includes(text)) {
      /* HO CLICCATO SU UNA BOMBA */
      singleCell.classList.add("bomb");
      alert("Hai perso, fai click su 'Nuova partita' per riprovare");
      gameBoard.classList.add("d-none");
      gameBoard.classList.remove("d-flex");
      startButton.addEventListener("click", function () {
        startGame(gameBoard, inputLevel);
      });
    } else {
      /* NON HO CLICCATO SU UNA BOMBA */
      singleCell.classList.add("nobomb");
    }
    /*         this.classList.toggle("nobomb");
    const cellIndex = this.getAttribute(text);
    console.log(cellIndex, bombsLet); */
  });

  return singleCell;
}

function createBombs(maxBombs) {
  const numberBombs = 16;
  const arrayBombs = [];

  while (arrayBombs.length < numberBombs) {
    const bombs = getrandomNumber(1, maxBombs);
    if (!arrayBombs.includes(bombs)) {
      arrayBombs.push(bombs);
    }
  }
  return arrayBombs;
}
