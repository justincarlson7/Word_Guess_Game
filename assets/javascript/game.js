var wordOptions = ["apple", "peach", "pear", "orange", "fig"];

var currentWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];


//create the correct number of underscores

console.log("This is the current word " + currentWord);

var currentWordArray = [];
var blanksArray = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ "];

document.onkeyup = function(event) {
  var playerGuess = event.keyCode;

  // if keycode is between 65- 90 keep it, if not - do nothing or prompt to pick a different key

  if (playerGuess >= 65 && playerGuess <= 90) {
    var playerGuess = event.key;
    letters(currentWordArray, playerGuess);
  } else {
    console.log("Pick another letter!!!!");
  }
};

function letters(currentWordArray, playerGuess) {
  currentWordArray = currentWord.split("");

  var spacesCount = currentWordArray.length;
  

  for (var i = 0; i < currentWordArray.length; i++) {
   var answerField = blanksArray.push(blanks_);
   console.log("These are blanks " + answerField)
    
  }
m
  //console.log("this is var blanks" + blanks_)

  // loop for each number of index
  // array.push.blanks_
  //


  function blanks() {


  }

  console.log("spacesCount variable is " + spacesCount)

  for (var i = 0; i < currentWordArray.length; i++) {
    //check to see if playerguess equals this letter and show it on the screen

    if (playerGuess === currentWordArray[i]) {

      var indexLetter = currentWordArray.indexOf(playerGuess);

       console.log("this is the letter and the index " + playerGuess + indexLetter);



    }
    console.log(currentWordArray[i]);
  }

  //replace the underscore with the correct letter when player presses it

  console.log("These are the letters " + currentWordArray[0]);
  console.log("Look here " + playerGuess);
}
