/*
Game function:
Player must guess a number between min and max
Player gets a certain number of guesses
Notify player of guesses remaining
Notify player of correct guess if she loses
Let player choose to play again
*/

let min = 6,
    max = 10,
    winningNumber = getRandomNumber(min, max),
    guessesLeft = 3;
console.log(winningNumber);
const game = document.querySelector("#game"),
    minNumber = document.querySelector(".min-num"),
    maxNumber = document.querySelector(".max-num"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");
minNumber.textContent = min;
maxNumber.textContent = max;
// play again event listener
game.addEventListener("mousedown", (e) => {
  if(e.target.className === "play-again") {
    window.location.reload();
  }
  
})

guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }
  if(guess === winningNumber) {
    gameOver(true, `Yay!!! ${winningNumber} is the winning number!!!`);
  } else {
    guessesLeft --;
    if(guessesLeft == 0){
      gameOver(false, `${guess} is not correct.
      Sorry game over--the correct number was ${winningNumber}`, "red");
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
})
function gameOver(won, msg) {
  guessInput.value = "";
  guessInput.disabled = true;
  let color;
  won === true ? color = "green" : color = "red";
  setMessage(msg, color);
  //play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function getRandomNumber(min, max) {
  return(Math.floor(min + Math.random() * (max - min + 1)));

}
