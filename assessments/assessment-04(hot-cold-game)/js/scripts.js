const numsGuessed = [];
let numWin;
let userGuess;
let guessDistance;
let guessAttempts = 1;

function gameSetup() {
  //   Selects a number the user needs to try and guess for.
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  numWin = getRndInteger(1, 100);
  console.log(numWin);
  //alert("The answer is: " + numWin);
}

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  userGuess = document.getElementById("guess").value;

  // Conditional for determining if guess is "hotter" or "colder" to the right number.
 //function that runs when the button is clicked
function guessNumber() {
  //get the number the user guessed
  let userGuess = document.getElementById("guess").value;
  //increment number of guesses
  guessAttempts++;
  //if the user has already guessed, compare the distance of the guess to the last guess
  if (guessAttempts > 1) {
    let lastGuessDistance = guessDistance;
    guessDistance = Math.abs(numWin - document.getElementById("guess").value);
    //if the user guessed correctly, tell them they won
    if (userGuess == numWin) {
      document.getElementById("hotCold").innerHTML =
        numWin + " is the right number! You won in " + guessAttempts + " attemps.";
        document.getElementById("hotCold").style.color = "green";
    //if the guess is farther away from the number than the last guess, tell the user they are getting colder
    } else if (guessDistance > lastGuessDistance) {
      document.getElementById("hotCold").innerHTML = "Colder";
      document.getElementById("hotCold").style.color = "blue";
    //if the guess is closer to the number than the last guess, tell the user they are getting hotter
    } else if (guessDistance < lastGuessDistance) {
      document.getElementById("hotCold").innerHTML = "Hotter";
      document.getElementById("hotCold").style.color = "red";
    //if the guess is the same distance from the number as the last guess, tell the user to guess a different number
    } else {
      document.getElementById("hotCold").innerHTML = "Guess a different number";
      document.getElementById("hotCold").style.color = "black";
    }
  //if the user has not guessed yet
  } else {
    //if the user guessed correctly on the first try, tell them they won
    if (userGuess == numWin) {
      document.getElementById("hotCold").innerHTML =
        numWin + " is the right number! You won on the first guest!";
        document.getElementById("hotCold").style.color = "green";
    }
    //set the guess distance to the distance between the user's guess and the correct number
    guessDistance = Math.abs(numWin - userGuess);
  }
}

  document.getElementById("guess").value = "";

  numsGuessed.push(userGuess);
  document.getElementById("usersGuesses").innerHTML = numsGuessed;

  guessAttempts++;
});
