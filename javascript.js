let humanScore = 0
let computerScore = 0


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

function getHumanChoice() {
    let humanChoice = prompt("Choose one, scissors, paper, or rock")
    return humanChoice
}

// all possible outcomes without ties: rock, scissors|rock, paper|scissors, paper//


function playRound(humanChoice, computerChoice) {

    console.log(humanChoice)
    console.log(computerChoice)

    if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
        console.log("Human wins!")
        humanScore = humanScore + 1
    } else if (computerChoice == "rock" && humanChoice == "scissors" || computerChoice == "scissors" && humanChoice == "paper" || computerChoice == "paper" && humanChoice == "rock") {
        console.log("Computer wins!")
        computerScore = computerScore + 1
    } else {
        console.log("Tie!")
    }
    console.log("Human score:" + ' ' + humanScore)
    console.log("Computer score:" + ' ' + computerScore)
}

function playGame() {
    for (let index = 0; index < 5; index++) {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
}
}

playGame()