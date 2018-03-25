var activeGame = true;
var pTotal = 0;
var cTotal = 0;
var choices = document.getElementById("choices");
var results = document.getElementById("results");
var score = document.getElementById("score");
var info = document.getElementById("info");


document.getElementById('rock').addEventListener('click', function(){
    if (activeGame){
      game('rock');
    }
})

document.getElementById('paper').addEventListener('click', function(){
    if (activeGame){
      game('paper');
    }
})

document.getElementById('scissors').addEventListener('click', function(){
    if (activeGame){
      game('scissors');
    }
})

document.getElementById('newGame').addEventListener('click', function(){
  activeGame = true;
  pTotal = 0;
  cTotal = 0;
  choices.textContent="The first to reach 5 points wins.";
  results.textContent="";
  score.textContent="";
})


function game(pChoice){
  let cChoice = computerPlay();
  let round = playRound(pChoice, cChoice);

  if (round[4] === "w"){
    pTotal++
  }
  if (round[4] === "l"){
    cTotal++
  }

  choices.textContent = `You chose ${pChoice} and the computer chose ${cChoice}`
  results.textContent = round;

  if(pTotal === 5){
    score.textContent = "You won the match, " + pTotal + " to " + cTotal + ".";
    activeGame = false;
  } else if (cTotal === 5) {
    score.textContent = "You lost the match, " + pTotal + " to " + cTotal + "."
    activeGame = false;
  } else {
    score.textContent = `You have ${pTotal} and the computer has ${cTotal}`;
  }
}

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

function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    return "Tie!"
  } else{
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
            return "You win! Paper beats rock!"
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
    }
  }
}
