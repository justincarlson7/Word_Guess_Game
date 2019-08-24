var wordOptions = ["apple", "peach", "pear", "orange", "fig"];

var currentWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];


//create the correct number of underscores

console.log("This is the current word " + currentWord);

var currentWordArray = [];
var blanksArray = [];

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
  
  blanksArray.push("_ ");
   
    
  }

  //TODO: clear blanksArray before each attempt

  console.log("These are blanks " + blanksArray);

 

  console.log("spacesCount variable is " + spacesCount)

  for (var i = 0; i < currentWordArray.length; i++) {
    //check to see if playerguess equals this letter and show it on the screen

    if (playerGuess === currentWordArray[i]) {

      var indexLetter = currentWordArray.indexOf(playerGuess);

       console.log("this is the letter and the index " + playerGuess + indexLetter);

      var blanksArrayfinal = blanksArray.splice(indexLetter, 0, playerGuess); 

       console.log("This is answer " + blanksArrayfinal);

    } else {

      console.log("Pick a new letter!!!");

    }

    console.log(currentWordArray[i]);


  
  };

  //replace the underscore with the correct letter when player presses it

  // console.log("These are the letters " + currentWordArray[0]);
  console.log("Look here " + playerGuess);
};
