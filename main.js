//GLOBAL VARIABLES (accesssible by all function)
//---------------------------------------------------------------//
//Array of Word Options (all lowercase)
var wordsList = ["tomato", "cucumber", "corn",]

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

   //It's where we'll do all the comparisons for matches
   function checkLetter(Letter){
        // This boolean will be toggled based on wether or not a user letter is found in the word
        var lettersInWord = false;
        
        //check if the letter exists inside the array at a time
        for (var i - 0); i < numBlanks; i++; {
             //If the letter exists then toggle this boolean to true. This will be used in the next stop.
             lettersInWord = true;

        }
   }

   //if the letter exisits somewhere in the word then figure out exactly where(which indices)
   if (lettersInWord){
        //Loop through the word 
        for (var j = 0;j< nameBlanks; j++){
             //Populate the blanksAndSuccesses with every instance of the letter
             if (chosenWord[j] === letter){
                  //Here we set the specific space in blanks and letter equal to the letter where it matches 
                  blanksAndSuccesses[j]= letter;
             }

        }


       // Logging for testing
       console.log(blanksAndSuccesses);

     }
 
     // If the letter doesn't exist at all...
     else {
 
         //...then we add the letter to the list of wrong letters, and we subtract one of the guesses
         wrongGuesses.push(letter);
         numGuesses--;
 
     }
 }
 
 // Here we will have all of the code that needs to be run after each guess is made
 function roundComplete() {
 
     // First, log an initial status update in the console telling us how many wins, losses, and guesses are left
     console.log(`WinCount: ${winCounter} | LossCount: ${lossCounter} | NumGuesses: ${numGuesses}`);
 
     // Update the HTML to refelct the new number of guesses. Also update the correct guesses
     document.getElementById("guesses-left").innerHTML = numGuesses;
 
     // This will print the wrong guesses onto the page
     document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
 
     // This will print the wrong guesses onto the page
     document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
 
     // If we have gotten all the letters to match the solution...
     if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
 
         //...add to the win counter and give the user an alert
         winCounter++;
         alert("You win!");
 
         // Update the win counter in the HTML and restart the game
         document.getElementById("win-counter").innerHTML = winCounter;
         startGame();
 
     } 
 
     // If we've run out of guesses...
     else if (numGuesses === 0) {
 
         // Add to the loss counter
         lossCounter++;
 
         // Give the user an alert
         alert("You lose");
 
         // Update the loss counter in the HTML
         document.getElementById("loss-counter").innerHTML = lossCounter;
 
         // Restart the game
         startGame();
     }
 
 }
 
 //MAIN PROCESS (This is the code that controls what is actually runs)
 //------------------------------------------------------------------------
 // Starts the Game 
 startGame();

 //Then initiate the function for capturing key clicks
 document.onkeyup = function(event){
      //converts all key clicks to lowercase letters 
      var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase

      //Run the code to check for correctness
      checkLetter(letterGuessed);

      //Runs the code after each round is done
      roundComplete();
     
 }
