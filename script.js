function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const compChoice = choice[(Math.floor(Math.random()*3))];
    return compChoice;
}

// console.log(getComputerChoice());


let playerScore = 0;
let computerScore = 0;

// let computerSelection;

let playerSelection = document.getElementById("choice").value;
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return "You lose! rock loses to paper, player score: "+playerScore+". Computer score: "+computerScore+"." ;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return "You lose! paper loses to scissors, player score: "+playerScore+". Computer score: "+computerScore+".";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock'){
        computerScore++;
        return "You lose! scissors loses to rock, player score: "+playerScore+". Computer score: "+computerScore+".";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        return "You win! rock beats scissors, player score: "+playerScore+". Computer score: "+computerScore+".";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return "You win! paper beats rock, player score: "+playerScore+". Computer score: "+computerScore+".";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return "You win! scissors beats paper, player score: "+playerScore+". Computer score: "+computerScore+".";
    } else {
        return "Draw!, player score: "+playerScore+". Computer score: "+computerScore+".";
    }
}
  
//   let playerSelection;
//   const computerSelection = getComputerChoice();
//   console.log(computerSelection);
//   console.log(playRound(playerSelection, computerSelection));
  

function playGame(){
    while (computerScore<5 && playerScore<5){
        // playerSelection = prompt('enter')
        document.getElementById("score").innerHTML = playRound(playerSelection, computerSelection);
    }
    if (playerScore==5){
        return "You won the game!"
    } else {
        return "You lost the game!"
    }
}
playGame();

// console.log(playGame());