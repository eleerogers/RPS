function computerPlay(){
  let random = Math.floor(Math.random() * 3);
  if(random === 0){
    return "rock"
  } else if (random === 1){
    return "paper"
  } else {
    return "scissors"
  }
}

// ** ALTERNATE PLAYROUND FUNCTION **
// function playRound(playerSelection, computerSelection){
//   playerSelection = playerSelection.toLowerCase();
//   if(playerSelection === "rock" && computerSelection === "scissors"){
//     return "You win! Rock beat scissors!"
//   } else if (playerSelection === "rock" && computerSelection === "paper"){
//     return "You lose! Paper beats rock!"
//   } else if (playerSelection === "paper" && computerSelection === "scissors"){
//     return "You lose! Scissors beats paper!"
//   } else if (playerSelection === "paper" && computerSelection === "rock"){
//     return "You win! Paper beats rock!"
//   } else if (playerSelection === "scissors" && computerSelection === "rock"){
//     return "You lose! Rock beats scissors!"
//   } else if (playerSelection === "scissors" && computerSelection === "paper"){
//     return "You win! Scissors beats paper!"
//   } else {
//     return "Tie!"
//   }
// }

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection){
    case 'rock':
      switch (computerSelection){
        case 'paper':
          return "You lose! Paper beats rock!"
          break;
        case 'scissors':
          return "You win! Rock beat scissors!"
          break;
      }
    case 'paper':
      switch (computerSelection){
        case 'rock':
          return "You lose! Paper beats rock!"
          break;
        case 'scissors':
          return "You lose! Scissors beats paper!"
          break;
      }
    case 'scissors':
      switch (computerSelection){
        case 'paper':
          return "You win! Scissors beats paper!"
          break;
        case 'rock':
          return "You lose! Rock beats scissors!"
          break;
      }
      default:
          return "Tie!"
  }
}

var pTotal = 0;
var cTotal = 0;
var rounds = 0;

function game(){
  let pChoice = prompt("Rock, paper or scissors?");
  let cChoice = computerPlay();
  let round = playRound(pChoice, cChoice);
  console.log(round);
  if (round[4] === "w"){
    pTotal++
  }
  if (round[4] === "l"){
    cTotal++
  }
  rounds++
  if (rounds === 5){
    if(pTotal > cTotal){
      console.log("You won best out of five rounds, " + pTotal + " to " + cTotal + ".")
    } else if (pTotal < cTotal) {
      console.log("You lost best out of five rounds, " + pTotal + " to " + cTotal + ".")
    } else {
      console.log("You tied: " + pTotal + " to " + cTotal + ".")
    }
    return;
  } else {
    game();
  }
}
