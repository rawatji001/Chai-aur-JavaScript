// let num = Math.floor(Math.random() * 100 + 1);
let num = parseInt(Math.random() * 100 + 1); //we can do both of these....
// console.log(num);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

//we need-----
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

//starting our logic----------------

//check if user is alowed or not to play game-------
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

//validation--------
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess); //we puch guess numbers to above array "prevGuess"

    if (numGuess === 10) {
      displayGuess(guess);
      displayMsg(`Game Over!!! Random number was ${num}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//checking the number whether it is lower, higher or equal.......
function checkGuess(guess) {
  if (guess === num) {
    displayMsg(`You guessed it right......!!!`);
    endGame();
  } else if (guess < num) {
    displayMsg(`You guessed a lower number!`);
  } else if (guess > num) {
    displayMsg(`You guessed a higher number!`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg) {
  lowOrHigh.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="newGame" class="bg-[black] mx-auto text-[white] p-[5px_10px] rounded-[4px]">Start new Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", () => {
    num = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remainingGuess.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled", "");
    startOver.removeChild(p);
    playGame = true;
  });
}
