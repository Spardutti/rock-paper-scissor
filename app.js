//crea una funcion que lanza un numero entre 1 y 3
//cada numero representa rock paper scissor
function computerPlay() {
  //creates random number
  let rps = Math.floor(Math.random() * 3) + 1;
  if (rps === 1) {
    return "rock";
  } else if (rps === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}
//set both scores to 0
let playerScr = 0;
let ComputerScr = 0;
//create a func that will play each round and add 1 to the winner
function roundPlay(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissor") {
    playerScr++;
    return "Rock beat scissors! Player Wins this round";
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    playerScr++;
    return "Paper beat rock! Player Wins this round";
  }
  if (playerSelection == "scissor" && computerSelection == "paper") {
    playerScr++;
    return "Scissor beat paper! Player Wins this round!";
  }
  if (computerSelection == "rock" && playerSelection == "scissor") {
    ComputerScr++;
    return "Rock beat scissor! Computer Wins this round";
  }
  if (computerSelection == "paper" && playerSelection == "rock") {
    ComputerScr++;
    return "Paper beat rock! Computer Wins this round";
  }
  if (computerSelection == "scissor" && playerSelection == "paper") {
    ComputerScr++;
    return "Scissor beat paper! Computer Wins this round";
  } else return "Draw";
}
// game will repeat 5 times and check who have won more rounds to pick a winner
function game() {
  for (let round = 1; round <= 5; round++) {
    playerSelection = prompt("Choose rock paper or scissor").toLowerCase();
    //check if user used the correct words
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor") {
      computerSelection = computerPlay();
      console.log(roundPlay(playerSelection, computerSelection));
      console.log(playerScr, ComputerScr);
    } else {
      //if the input is wrong print an alert and dont advance the round count
      playerSelection = alert("Please enter ROCK PAPER or SCISSOR only");
      round--;
    }
  }
  //if there is a  draw on scores, play one more round
  if (playerScr == ComputerScr) {
    console.log("We have a tie: " + playerScr + " to " + ComputerScr);
  }
  //check for winner
  else if (playerScr > ComputerScr) {
    console.log("Player wins " + playerScr + " to " + ComputerScr);
  } else {
    console.log("Computer wins: " + ComputerScr + " to " + playerScr);
  }
}
//log the game to the console
console.log(game());
