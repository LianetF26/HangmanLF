//GLOBAL VARIABLES (accesssible by all function)
//---------------------------------------------------------------//
//Array of Word Options (all lowercase)
var wordsList = ["pineapples", "blueberries", "oranges",]

//Solution will be held here
var chooseWord = "";

//This will break the solution into individual letters to be stored in an array
var lettersInChoosenWord = [];

//This will be the number of blanks we show based on the solution 
var numBlanks = 0;

//Holds a mix of blank and solved letters (ex:a_ple)
var blankAndSuccess = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// Functions-----------------------------------------------//

// Note: The start game function is not being run here. Its just being made for future use.
function startGame(){

    //Resets the guesses back to specified amount
    numGuesses = 9;
    
    //Solution is chosen randomly from wordList
    chooseWord = wordsList[Math.floor(Math.random() * wordsList.length)]

    //The word is broken into individual letters
    lettersInChoosenWord = chooseWord.split("");

    //We count the number of letters in the word

    numBlanks = lettersInChoosenWord.length;

    // WE print the solution in console(for testing)
    console.log(chooseWord);

    //CRITICALLINE - HEre we reset the guess and success array at each round
    blankAndSuccess = [];

    //CRITICALLINE - HEre we reset the wrong guess from the previous round
    wrongGuesses = [];

    //Fill up the blankAndSuccess list with the appropriate number of blanks, which is based on the number of letters in the solution
    for (var i = 0; < numBlanks; i++){
         blanksAndSuccesses.push("_");
    }
   //Print the initial blanks in the console 
   console.log(blanksAndSuccesses);

   //Reprints the guessesLeft to 9
   document.getElementById("guesses-left").interHTMML = numGuesses;

   //Prints the blanks at the beginning of each round in the html
   document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join("");

}