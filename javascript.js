let humanScore = 0
let computerScore = 0

const humanPoints = document.querySelector("#humanPoints");
const computerPoints = document.querySelector("#computerPoints");

humanPoints.textContent = 'Human Score: ' + humanScore
computerPoints.textContent = 'Computer Score: ' + computerScore

const humanSelection = document.querySelector("#humanChoice");
const computerSelection = document.querySelector("#computerChoice");

const winner = document.querySelector("#winner");


function getComputerChoice() {
    let choice = ''
    let choiceNum = Math.floor(Math.random()*9+1)
    if (choiceNum < 4) {
        choice = 'scissors'
    } else if (choiceNum > 6) {
        choice = 'paper'
    } else {
        choice = 'rock'
    }

    return choice
}

function playRound(humanChoice, computerChoice) {
    humanSelection.textContent = "Human Choice: "  + humanChoice
    computerSelection.textContent = "Computer Choice: "  + computerChoice

    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
        winner.textContent = 'Human Wins!!'
        humanScore = humanScore + 1
    } else if (computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "scissors" && humanChoice == "paper" || computerChoice == "paper" && humanChoice == "rock") {
        winner.textContent = 'Computer Wins!!'
        computerScore = computerScore + 1
    } else {
        winner.textContent = 'Tie!'
    }

    humanPoints.textContent = 'Human Score: ' + humanScore
    computerPoints.textContent = 'Computer Score: ' + computerScore
}
