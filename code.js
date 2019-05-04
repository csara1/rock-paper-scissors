function computerPlay() {
    const selection = Math.random() * 3;
    switch (Math.floor(selection)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "You Draw!"
    }
    return (playerSelection == 'Rock' && computerSelection == 'Paper' ||
            playerSelection == 'Paper' && computerSelection == 'Scissors' ||
            playerSelection == 'Scissors' && computerSelection == 'Rock') ?
            "You Lose! " + computerSelection + " beats " + playerSelection :
            "You Win! " + playerSelection + " beats " + computerSelection;
}

function game() {
    let computerWins = 0,
        playerWins = 0,
        playerSelection;

    console.log(computerWins > playerWins ? "The computer is the winner!" :
            playerWins > computerWins ? "You are the winner!" :
                                        "You and the computer drew!");
}
