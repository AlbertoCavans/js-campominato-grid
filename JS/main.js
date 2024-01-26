/* LINKS TO ELEMENTS */
const gameBoard = document.getElementById("game-board");
const startButton = document.querySelector(".btn");
const inputLevel = document.getElementById("inputLevel");

let bombsLet;
let gameOver = true;
let score;

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
  gameOver = false;
  score = 0;
  console.log("bombs", bombsLet);
  generateGameBoard(gameBoard, bombsLet);
}

/* GENERATE GAMEBOARD */
function generateGameBoard(container, bombsLet) {
  gameBoard.innerHTML = "";

  const numberCell = parseInt(inputLevel.value);
  const freeCells = numberCell - bombsLet.length;
  for (let i = 1; i < numberCell + 1; i++) {
    const cell = generateCell(i, numberCell, bombsLet, freeCells);
    container.append(cell);
  }
}

/* GENERATE CELL */
function generateCell(text, cellNumber, bombsLet, freeCells) {
  const singleCell = document.createElement("div");
  singleCell.classList.add("box");
  singleCell.classList.add("box-" + cellNumber);
  /*   singleCell.innerText = text; */
  singleCell.addEventListener("click", function () {
    const isCellClicked =
      this.classList.contains("bomb") || this.classList.contains("nobomb");
    if (!gameOver && !isCellClicked) {
      if (bombsLet.includes(text)) {
        /* HO CLICCATO SU UNA BOMBA */
        singleCell.classList.add("bomb");

        endGame(false, score, bombsLet);
      } else {
        /* NON HO CLICCATO SU UNA BOMBA */
        singleCell.classList.add("nobomb");
        score++;

        if (freeCells == score) {
          endGame(true, score, bombsLet);
        }
      }
    }
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

function endGame(win, score, bombsLet) {
  gameOver = true;
  let message;
  if (win) {
    message = "Hai vinto con " + score + " punti";
  } else {
    message = "Hai perso con " + score + " punti";
  }

  const allCells = document.getElementsByClassName("box");
  for (let i = 0; i < allCells.length; i++) {
    const cell = allCells[i];
    const text = cell.getAttribute("data-index");

    console.log(bombsLet, text);
    if (bombsLet.include(text)) {
      cell.classList.add("bomb");
    }
  }

  alert(message);
}
