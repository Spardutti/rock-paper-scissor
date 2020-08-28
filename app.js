//crea una funcion que lanza un numero entre 1 y 3
//cada numero representa rock paper scissor
function computerPlay() {
    //creates random number
    let rps = Math.floor(Math.random() * 3) + 1;
    if (rps === 1) {
        return "rock"
    } else if (rps === 2) {
        return "paper"
    } else {
        return "scissor"
    }
}
//ser both scores
let playerScr = 0;
let ComputerScr = 0;
//create a func that will play each round and add the score to the winner
function roundPlay(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissor") {
        playerScr++;
        return "Rock beat scissors! Player Win!";
    } if (playerSelection == "paper" && computerSelection == "rock") {
        playerScr++
        return "Paper beat rock! Player Win";
    } if (playerSelection == "scissor" && computerSelection == "paper") {
        playerScr++
        return "Scissor beat paper! Player Win!"
    } if (computerSelection == "rock" && playerSelection == "scissor") {
        ComputerScr++
        return "Rock beat scissor! Computer Win!";
    } if (computerSelection == "paper" && playerSelection == "rock") {
        ComputerScr++
        return "Paper beat rock! Computer Win"
    } if (computerSelection == "scissor" && playerSelection == "paper") {
        ComputerScr++
        return "Scissor beat paper! Computer Win!"
    } else return ("Draw")
}
//Func game will repeat 5 times and check who have won more rounds to pick a winner
function game() {
    for (let round = 1; round <= 5; round++) {
        playerSelection = prompt("Choose rock paper or scissor").toLowerCase();
        //check if user userd the correct words
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor") {
            console.log(playerSelection)
            computerSelection = computerPlay();
            console.log(roundPlay(playerSelection, computerSelection));
            console.log(playerScr, ComputerScr)
        } else {
            //if the input is wrong print an alert and dont advance the round count 
            playerSelection = alert("Please enter ROCK PAPER or SCISSOR only");
            round--
        }
    }
    //if is a draw on scores, play one more round
    if (playerScr == ComputerScr) {
        console.log(roundPlay(playerSelection, computerSelection))
    }
    //check for winner
    else if (playerScr > ComputerScr) {
        console.log("Plaer wins " + playerScr + " to " + ComputerScr)
    } else {
        console.log("Computer wins: " + ComputerScr + " to " + playerScr);
    }


}
//log the game to the console
console.log(game())