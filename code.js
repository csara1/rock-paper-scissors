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
    for (let i=0; i<5; i++) {
        do {
        playerSelection = prompt('Select "Rock", "Paper", or "Scissors"');
        if (typeof playerSelection != 'string') {
            console.log("Game cancelled!");
            return;
        }
        playerSelection = playerSelection.charAt(0).toUpperCase()
                        + playerSelection.substring(1).toLowerCase();
        } while (playerSelection != 'Rock' && playerSelection != 'Paper' && playerSelection != 'Scissors');
        let roundResult = playRound(playerSelection, computerPlay());
        console.log(roundResult);
        if (roundResult.indexOf("Lose") == 4) {
           computerWins++;
        } else if (roundResult.indexOf("Win") == 4) {
            playerWins++;
        } 
    }
    console.log(computerWins > playerWins ? "The computer is the winner!" :
                playerWins > computerWins ? "You are the winner!" :
                                            "You and the computer drew!");
}
