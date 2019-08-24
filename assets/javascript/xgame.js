var wordOptions = ["apple", "peach", "pear", "orange", "fig"];

var currentWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

console.log("This is the current word " + currentWord);

var currentWordArray = [];

// document.onkeyup = function(event) {
//   var playerGuess = event.key;

//   console.log("this is the player guess " + playerGuess);
// };

function letters(currentWordArray) {
  currentWordArray = currentWord.split();

  console.log("These are the letters " + currentWordArray);
}
