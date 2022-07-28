

//return a random string from a set of strings

var choicesArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
        var randomChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
        return randomChoice
    }
       
function playRound(playerSelection, computerSelection) {
    
        if (computerSelection === "Rock" && playerSelection.toLowerCase() === "scissors") {
            return "You lose";
        } else if (computerSelection === "Rock" && playerSelection.toLowerCase() === "paper") {
            return "You win";
        } else if (computerSelection === "Rock" && playerSelection.toLowerCase() === "rock") {
            return "This is a draw.";
        } else if (computerSelection === "Paper" && playerSelection.toLowerCase() === "scissors") {
            return "You win";
        } else if (computerSelection === "Paper" && playerSelection.toLowerCase() === "paper") {
            return "This is a draw";
        } else if (computerSelection === "Paper" && playerSelection.toLowerCase() === "rock") {
            return "You lose";
        } else if (computerSelection === "Scissors" && playerSelection.toLowerCase() === "scissors") {
            return "This is a draw";
        } else if (computerSelection === "Scissors" && playerSelection.toLowerCase() === "paper") {
            return "You lose";
        } else if (computerSelection === "Scissors" && playerSelection.toLowerCase() === "rock") {
            return "You win";
         } else {
            return "You need to pick Rock, Paper, or Scissors";
         }

         
    }
     

    function game() {

        var userScore = 0;
        var computerScore = 0;

     for (let i = 0; i < 5; i++) {
         let computerSelection = getComputerChoice();
        
         let playerSelection = prompt("Choose Rock, Paper, or Scissors", ""); //added this

            console.log(computerSelection);
    
            console.log(playerSelection);

            console.log(playRound(playerSelection, computerSelection));

            //return (playRound(playerSelection, computerSelection)); 

            if (playRound(playerSelection, computerSelection) === "You win") {
                ++userScore;
            } else if 
            (playRound(playerSelection, computerSelection) === "You lose") 
            {   ++computerScore; }
            
            console.log(userScore);
            console.log(computerScore);
            
        }

        if (userScore > computerScore) {
                console.log("User wins");
            } else if (userScore < computerScore){
                console.log("User loses");
            } else {
                console.log("Tie game")
            }
    }

    game();

 

            

            