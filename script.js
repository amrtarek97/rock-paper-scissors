let playerScore = 0;
let computerScore = 0;

let computerSelection;
let playerSelection;



function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const compChoice = choice[(Math.floor(Math.random()*3))];
    return compChoice;
}


// getting player choice from a button
// now that i made the function below i might delete those 3 var

// let rock = document.querySelector('#rock');
// let paper = document.querySelector('#paper');
// let scissors = document.querySelector('#scissors');

// trying event delegation using the parent (see odin dom lesson assignment)
    
let choices = document.querySelector('.choices');
choices.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id){
        case 'rock':
            playerSelection = 'rock';
            break;
        case 'paper':
            playerSelection = 'paper';
            break;
        case 'scissors':
            playerSelection = 'scissors';
            break;
    }
    console.log(playerSelection);
});







// end of button choices section


// console.log(getComputerChoice());

// console.log(computerSelection);



function playRound(playerSelection, computerSelection) {
    
    // no need for prompt now?
    // playerSelection = prompt("pick one: rock, paper, scissors: ");
    computerSelection = getComputerChoice();

    if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        console.log('shebsheb');
        return "You lose! rock loses to paper, player score: "+playerScore+". Computer score: "+computerScore+"." ;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return "You lose! paper loses to scissors, player score: "+playerScore+". Computer score: "+computerScore+".";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++;
        return "You lose! scissors loses to rock, player score: "+playerScore+". Computer score: "+computerScore+".";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        return "You win! rock beats scissors, player score: "+playerScore+". Computer score: "+computerScore+".";
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return "You win! paper beats rock, player score: "+playerScore+". Computer score: "+computerScore+".";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return "You win! scissors beats paper, player score: "+playerScore+". Computer score: "+computerScore+".";
    } else {
        return "Draw!, player score: "+playerScore+". Computer score: "+computerScore+".";
    }
}
  
// make button start the game:

let startGameBtn = document.querySelector('#rock');

startGameBtn.addEventListener('click', () => {
    playRound(playerSelection, computerSelection);
});




// 2 event listeners on same thing
















// function gameFromFive(){
//     while (computerScore<5 && playerScore<5) {
    
//         console.log(playRound(playerSelection,computerSelection));
//         if (playerScore==5) {
//             return "You win!"        
//         } else if(computerScore==5){
//             return "You lose!"
//         }
        
//     }
// }

// function fiveRoundGame (){
//     for (let index = 0; index < 5; index++) {
//        console.log(playRound(playerSelection,computerSelection));

//     }
//     if(playerScore>computerScore){
//         return "You win!";
//     } else if (computerScore>playerScore) {
//         return "You lose!";
//     } else {
//         return "Draw!";
//     }
// }

// fiveRoundGame();

// console.log(fiveRoundGame());


