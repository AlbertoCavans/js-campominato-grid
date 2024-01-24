/* LINKS TO ELEMENTS */
const gameBoard = document.getElementById("game-board");
const startButton = document.querySelector(".btn");
const inputLevel = document.getElementById("inputLevel");

generateGameBoard(gameBoard);

startButton.addEventListener("click", function () {
  generateGameBoard(gameBoard);
});

/* GENERATE GAMEBOARD */
function generateGameBoard(container) {
  gameBoard.innerHTML = "";
  const numberCell = parseInt(inputLevel.value);
  for (let i = 1; i < numberCell + 1; i++) {
    const cell = generateCell(i, numberCell);
    container.append(cell);
  }
}

/* GENERATE CELL */
function generateCell(text, cellNumber) {
  const singleCell = document.createElement("div");
  singleCell.classList.add("box");
  singleCell.classList.add("box-" + cellNumber);
  singleCell.innerText = text;
  singleCell.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });

  return singleCell;
}
