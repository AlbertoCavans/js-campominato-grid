/* LINKS TO ELEMENTS */
const gameBoard = document.getElementById("game-board");
const startButton = document.querySelector(".btn");
generateGameBoard(gameBoard);

/* GENERATE GAMEBOARD */
function generateGameBoard(container) {
  for (let i = 0; i < 100; i++) {
    const cell = generateCell();
    container.append(cell);
  }
}

/* GENERATE CELL */
function generateCell() {
  const singleCell = document.createElement("div");
  singleCell.classList.add("box");

  return singleCell;
}
