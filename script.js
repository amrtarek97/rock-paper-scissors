function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const compChoice = choice[(Math.floor(Math.random()*3))];
    return compChoice;
}

// console.log(getComputerChoice());







function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper'){
        return "You lose! rock loses to paper";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors'){
        return "You lose! paper loses to scissors";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock'){
        return "You lose! scissors loses to rock";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
        return "You win! rock beats scissors";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        return "You win! paper beats rock";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
        return "You win! scissors beats paper";
    } else {
        return "Draw!";
    }
}
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  