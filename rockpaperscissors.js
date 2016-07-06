
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    var move
           if (move !=null){
            move = move;
        }
        else {
            move = getInput();
        }
    return move 
}

function getComputerMove(move) {
    var move 
        if (move !=null) {
            move = move;
        }
        else {
            move = randomPlay();
        }
    console.log("Computer chose " + move)    
    return move;
}



function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove == "rock" && computerMove == "paper"){
        winner = "computer"
        console.log("Computer wins!");
    } 
    else if(playerMove == "paper" && computerMove == "rock"){
        winner = "player"
        console.log("Player wins!");
    }
    else if(playerMove == "paper" && computerMove == "scissors"){
        winner = "computer"
        console.log("Computer wins!");
    }
    else if(playerMove == "rock" && computerMove == "scissors"){
        winner = "player"
        console.log("Player wins!");
    }
    else if(playerMove == "scissors" && computerMove == "paper"){
        winner = "player"
        console.log("Player wins!");
    }
    else if(playerMove == "scissors" && computerMove == "rock"){
        winner = "computer"
        console.log("Computer wins!")
    }
    else{
        winner = "tie"
        console.log("It's a tie!");
    }
    return winner; 
}
    


function playToFive() {
    console.log("Rock, Paper, Scissors, go!");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 || computerWins < 5) {
        var player_move = getPlayerMove();
        var computer_move = getComputerMove();
        var winner = getWinner(player_move, computer_move)

        if (winner === "player") {
            playerWins += 1;
            console.log("Player won that round...");
        }
        else if(winner === "computer"){
            computerWins += 1;
            console.log("Computer won that round...");
        }
        else {
          console.log("Score does not change.");
        }

    }
     if (playerWins == 5) {
        console.log("Player is the winner!");
     }
     else {
        console.log("Computer is the winner!");
     }
}

playToFive();
