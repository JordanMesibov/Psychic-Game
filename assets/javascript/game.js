// declare the variable "alphabet" as an array of the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// declare the variables "wins", "losses", and "guesses"
var wins = 0;
var losses = 0;
var guessesLeft = 7;

// set up the computer choice guess

var computerChoice = alphabet[Math.floor(Math.random() * 26)];


// set up a function for checking the key that the user pressed against the letter chosen by the computer
document.onkeypress = function(event) {

  var userChoice = event.key;
// if user's letter is the same as computer's letter, then they get +1 wins and a win alert
  if (userChoice === computerChoice) {
    wins++;
    alert("You guessed correctly!");
  }
  // if user's letter is not the3 same as computer's letter, then they lose a guess
  else {
    guessesLeft--;
  }
  // if user's guesses becomes 0, then they get +1 losses and a loss alert
  if (guessesLeft ===0) {
    losses++;
    alert("You ran out of lives! The computer wins!");
  }

};
