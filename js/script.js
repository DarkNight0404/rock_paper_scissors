function getComputerChoice() {
    let random_number = Math.random();

    if (random_number < (1 / 3)) {
        return "rock";
    } else if (random_number < (2 / 3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let human_choice = prompt("Enter a choice: \nrock\npaper\nscissors");

    return human_choice;
}


function playGame(number_of_rounds) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            return "draw";
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            return "human";
        } else {
            return "computer";
        }
    }

    function updateScore(winner) {
        if (winner === "human") humanScore++;
        else if (winner === "computer") computerScore++;
    }

    for (let i =0; i < number_of_rounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        let winner = playRound(humanChoice, computerChoice);
        updateScore(winner);
    }

}

//playGame(number of rounds)
playGame(5);
