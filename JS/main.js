/* LINKS TO ELEMENTS */
const gameBoard = document.getElementById("game-board");
const startButton = document.querySelector(".btn");
generateGameBoard(gameBoard);

startButton.addEventListener("click", function () {
  gameBoard.innerHTML = "";
  generateGameBoard(gameBoard);
});

/* GENERATE GAMEBOARD */
function generateGameBoard(container) {
  for (let i = 1; i < 100 + 1; i++) {
    const cell = generateCell(i);
    container.append(cell);
  }
}

/* GENERATE CELL */
function generateCell(text) {
  const singleCell = document.createElement("div");
  singleCell.classList.add("box");
  singleCell.innerText = text;
  singleCell.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });

  return singleCell;
}
