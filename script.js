let randomNumber = Math.floor(Math.random() * 10 + 1);

const finalOutput = document.querySelector(".final-output");
const triesOutput = document.querySelector(".Tries-output");

let tries = 3;
let isPlaying = true;

triesOutput.innerHTML = `Number of Tries: <b>${tries}</b>`;

function guessNumber() {
  const guess = document.querySelector(".inputs-Values").value;
  if (isPlaying) {
    if (guess === "" || guess <= 0 || guess > 10)
      finalOutput.innerHTML = "Please enter a number <b>between 1 and 100</b>";
    else {
      if (guess > randomNumber) {
        tries--;
        triesOutput.innerHTML = `Number of Tries: <b>${tries}</b>`;
        finalOutput.innerHTML = "Number is <b>too high</b>, <em>Try Again!</em>";
      } else if (guess < randomNumber) {
        tries--;
        triesOutput.innerHTML = `Number of Tries: <b>${tries}</b>`;
        finalOutput.innerHTML = "Number is <b>too low</b>, <em>Try Again!</em>";
      } else {
        triesOutput.innerHTML = "It took you <b>" + (3 - tries + 1) + "</b> tries!";
        finalOutput.innerHTML = "Guess is correct :)) <b>You win!</b>";
        isPlaying = false;
      }
    }

    if (tries === 0) {
      triesOutput.innerHTML = `<em>You Lose</em>, the number was <b>${randomNumber}</b>`;
      isPlaying = false;
    }
  } else finalOutput.innerHTML = "<b>Game Over!</b> <em>Start New Game</em> :)";
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 10 + 1);
  document.querySelector(".inputs-Values").value = "";
  finalOutput.innerText = "Guess a number between 1 and 10";

  tries = 7;
  triesOutput.innerHTML = `Number of Tries: <b>${tries}</b>`;
  isPlaying = true;
}

function keyBoardEvents(e) {
  if (e.keyCode === 13) guessNumber();
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.addEventListener("keypress", keyBoardEvents);
