const game = [
  "MAYA",
  "JADEN",
  "NAVI",
  "JUSTIN",
  "SARINA",
  "DILLON",
  "ARIA",
  "MIRA",
  "DEAN",
  "ZADE",
  "TAJ",
  "TOMMY",
  "LOGAN",
];
let choice = Math.floor(Math.random() * 4);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split("");
let attemptsLeft = 7;
const attemptedLetters = [attemptsLeft];
let output = "";
let outputGuesses = "";
let userLetter = "";
let userWord = "";

// Displays the setup of the game.
function setup() {
  // Alerts answer to the game for testing.
  alert(answer);
  for (let i = 0; i < answer.length; i++) {
    display[i] = "_ ";
    output = output + display[i];
  }
  document.getElementById("word").innerHTML = output;
}

// Checks the user's letter guess.
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault(); //this prevents the page from reloading and clearing the input value
  output = "";
  userLetter = document.getElementById("guess").value;

  if (attemptsLeft > 1 || win < 1) {
    attemptedLetters[attemptsLeft] = userLetter.toUpperCase();
    outputGuesses = outputGuesses + attemptedLetters[attemptsLeft] + ", ";
    document.getElementById("lettersGuessed").innerHTML = outputGuesses;
  }

  document.getElementById("guess").value = "";

  for (let c = 0; c < answer.length; c++) {
    if (userLetter.toUpperCase() == letters[c]) {
      display[c] = userLetter.toUpperCase();
      win--;
    }
    output = output + display[c] + " ";
  }

  document.getElementById("word").innerHTML = output;
  output = "";
  attemptsLeft--;

  if (win < 1) {
    document.getElementById("guesses").innerHTML = "YOU WIN!!!";
  } else if (attemptsLeft < 1) {
    document.getElementById("guesses").innerHTML = "YOU LOSE!!!";
  } else {
    document.getElementById("guesses").innerHTML =
      "You have " + attemptsLeft + " guesses left";
  }

  if (attemptsLeft == 7) {
    document.getElementById("hangman").src = "./images/01.png";
  } else if (attemptsLeft == 6) {
    document.getElementById("hangman").src = "./images/02.png";
  } else if (attemptsLeft == 5) {
    document.getElementById("hangman").src = "./images/03.png";
  } else if (attemptsLeft == 4) {
    document.getElementById("hangman").src = "./images/04.png";
  } else if (attemptsLeft == 3) {
    document.getElementById("hangman").src = "./images/05.png";
  } else if (attemptsLeft == 2) {
    document.getElementById("hangman").src = "./images/06.png";
  } else if (attemptsLeft == 1) {
    document.getElementById("hangman").src = "./images/07.png";
  } else if (attemptsLeft == 0) {
    document.getElementById("hangman").src = "./images/08.jpg";
  }
});

// Checks the user's word guess.
document.getElementById("submitW").addEventListener("click", function (event) {
  event.preventDefault();
  output = "";
  attemptsLeft--;
  userWord = document.getElementById("guessW").value;
  document.getElementById("guessW").value = "";

  if (userWord.toUpperCase() == answer && attemptsLeft > 0) {
    document.getElementById("word").innerHTML = answer;
    document.getElementById("guesses").innerHTML = "YOU WIN!!!";
  } else if (attemptsLeft < 1) {
    document.getElementById("guesses").innerHTML = "YOU LOSE!!!";
  } else {
    document.getElementById("guesses").innerHTML =
      "Wrong, You have " + attemptsLeft + " guesses left";
  }

  if (attemptsLeft == 7) {
    document.getElementById("hangman").src = "./images/01.png";
  } else if (attemptsLeft == 6) {
    document.getElementById("hangman").src = "./images/02.png";
  } else if (attemptsLeft == 5) {
    document.getElementById("hangman").src = "./images/03.png";
  } else if (attemptsLeft == 4) {
    document.getElementById("hangman").src = "./images/04.png";
  } else if (attemptsLeft == 3) {
    document.getElementById("hangman").src = "./images/05.png";
  } else if (attemptsLeft == 2) {
    document.getElementById("hangman").src = "./images/06.png";
  } else if (attemptsLeft == 1) {
    document.getElementById("hangman").src = "./images/07.png";
  } else if (attemptsLeft == 0) {
    document.getElementById("hangman").src = "./images/08.jpg";
  }
});
