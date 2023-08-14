 // Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); // For testing purposes

// Set the maximum number of trials
var maxTrials = 6;
var trialsLeft = maxTrials;

function checkGuess() {
  // Get the user's guess from the input field
  var guessInput = document.getElementById("guessInput");
  var guess = parseInt(guessInput.value);

   // Get the result element
  var result = document.getElementById("result");

  // Check if the guess is correct, too high, or too low
  if (guess === randomNumber) {
    result.innerHTML = "Congratulations! You guessed the correct number!";
    disableGame();
  } else if (guess > randomNumber) {
    result.innerHTML = "Too high! Try again.";
  } else {
    result.innerHTML = "Too low! Try again.";
  }

  // Decrease the number of trials left
  trialsLeft--;

  // Check if the maximum number of trials has been reached
  if (trialsLeft === 0) {
    result.innerHTML += " Game over! The number was " + randomNumber + ".";
    disableGame();
  } else {
    result.innerHTML += " You have " + trialsLeft + " trial(s) left.";
  }

  // Clear the input field
  guessInput.value = "";

  // Focus on the input field
  guessInput.focus();
}

function disableGame() {
  // Disable the input field and the check button
  var guessInput = document.getElementById("guessInput");
  guessInput.disabled = true;

  var checkButton = document.getElementsByTagName("button")[0];
  checkButton.disabled = true;
}
