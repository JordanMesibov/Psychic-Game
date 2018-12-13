// declare the variable "alphabet" as an array of the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// declare the variables "wins", "losses", and "guesses"
var wins = 0;
var losses = 0;
var guessesLeft = 7;
var guesses = 0;

var updatedWins = document.getElementById("xUserWins");
var updatedGuesses = document.getElementById("xUserGuesses");
var updatedGuessesLeft = document.getElementById("xGuessesLeft");
var updatedLosses = document.getElementById("xUserLosses");

// set up the computer choice
var computerChoice = alphabet[Math.floor(Math.random() * 26)];
console.log(computerChoice);


// set up a function for checking the key that the user pressed against the letter chosen by the computer
document.onkeypress = function(event) {

  var userChoice = event.key;


  console.log(userChoice);
// if user's letter is the same as computer's letter, then they get +1 wins and a win alert
  if (userChoice === computerChoice) {
    wins++;
    alert("You guessed correctly!");
    console.log(wins);
    // grab the "userWins" h2 tag from index.html and update it to reflect the variable wins
    updatedWins.textContent = "Number of wins: " + wins;
    updatedGuesses.textContent = "Your guesses so far: " + 0;
    updatedGuessesLeft.textContent = "Guesses left: " + 7;
    guesses = 0;
    guessesLeft = 7;
    
  }
  // if user's letter is not the3 same as computer's letter, then they lose a guess
  else {
    guessesLeft--;
    console.log(guessesLeft);
    // grab the "guessesLeft" h2 tag from index.html and update it to reflect the variable guessesLeft
    updatedGuessesLeft.textContent = "Guesses left: " + guessesLeft;
  }
  // if user's guesses becomes 0, then they get +1 losses and a loss alert
  if (guessesLeft === 0) {
    losses++;
    alert("You ran out of lives! The computer wins!");
    console.log(losses);
        // grab the "userLosses" h2 tag from index.html and update it to reflect the variable losses
    updatedLosses.textContent = "Number of losses: " + losses;
    updatedGuesses.textContent = "Your guesses so far: " + 0;
    updatedGuessesLeft.textContent = "Guesses left: " + 7;
    guesses = 0;
    guessesLeft = 7;
  }

};

//now I need to figure out how to get the computer to choose a new key after a game ends, because I don't think it is doing that anymore.