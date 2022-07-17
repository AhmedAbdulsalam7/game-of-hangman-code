const outputPuzzle = document.querySelector("#puzzle");
const outputGuessNum = document.querySelector("#guess-num");

let game;

const render = () => {
  outputPuzzle.innerHTML = "";
  outputGuessNum.textContent = game.statusMessage;
  game.puzzle.split("").forEach((letter) => {
    const LetterEl = document.createElement("span");
    LetterEl.textContent = letter;
    outputPuzzle.appendChild(LetterEl);
  });
};

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game.makingGuess(guess);
  render();
});

const startGame = async () => {
  const puzzle = await getPuzzle(1);
  game = new Hangman(puzzle, 5);
  render();
};

startGame();

document.querySelector("#reset").addEventListener("click", () => {
  startGame();
});
