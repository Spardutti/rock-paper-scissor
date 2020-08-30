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
let pSelec = document.querySelector(".pSelec");
let cSelec = document.querySelector(".cSelec");
let pScore = document.querySelector(".pScore");
let cScore = document.querySelector(".cScore");


function rockBtn() {
  if (playerScr < 5 && ComputerScr < 5) {
      pSelec.textContent = "Rock";

    let computerChoice = computerPlay();
    if (computerChoice == "rock") {
      cSelec.textContent = "Rock";
    } else if (computerChoice == "paper") {
      cSelec.textContent = "Paper";
      ComputerScr++;
      cScore.textContent = ComputerScr;
    } else {
      cSelec.textContent = "Scissor";
      playerScr++;
      pScore.textContent = playerScr;
    }
  } if (playerScr == 5) {
    pSelec.textContent = "Player Win";
  }
  if (ComputerScr == 5) {
    cSelec.textContent = "Computer Wins";
  }
  
  
}
function paperBtn() {
  if (playerScr < 5 && ComputerScr < 5) {
    pSelec.textContent = "Paper";

    let computerChoice = computerPlay();
    if (computerChoice == "rock") {
      cSelec.textContent = "Rock";
      playerScr++;
      pScore.textContent = playerScr;
    } else if (computerChoice == "paper") {
      cSelec.textContent = "Paper";
    } else {
      cSelec.textContent = "Scissor";
      ComputerScr++;
      cScore.textContent = ComputerScr;
    }
  }
  if (playerScr == 5) {
    pSelec.textContent = "Player Win";
  }
  if (ComputerScr == 5) {
    cSelec.textContent = "Computer Wins";
  }
  
 
}
function scissorBtn(){
  if (playerScr < 5 && ComputerScr < 5) {
    pSelec.textContent = "Scissor";

    let computerChoice = computerPlay();
    if (computerChoice == "rock") {
      cSelec.textContent = "Rock";
      ComputerScr++;
      cScore.textContent = ComputerScr;
    } else if (computerChoice == "paper") {
      cSelec.textContent = "Paper";
      playerScr++;
      pScore.textContent = playerScr;
    } else {
      cSelec.textContent = "Scissor";
    }
  }
  if (playerScr == 5) {
    pSelec.textContent = "Player Win";
  } if (ComputerScr == 5) {
    cSelec.textContent = "Computer Wins"
  }
  
}

  const rock = document.querySelector(".btn-rock");
  rock.addEventListener("click", rockBtn, 
  );
  const paper = document.querySelector(".btn-paper");
  paper.addEventListener("click", paperBtn
  );
  const scissor = document.querySelector(".btn-scissor");
  scissor.addEventListener("click", scissorBtn);


