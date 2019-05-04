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

function playRound(e) {
    const playerSelection = e.srcElement.innerText,
          computerSelection = computerPlay(),
          results = document.querySelector('#results'),
          paragraph = document.createElement('p');

    if (playerSelection == computerSelection) {
        paragraph.innerText = "You Draw!";
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper' ||
               playerSelection == 'Paper' && computerSelection == 'Scissors' ||
               playerSelection == 'Scissors' && computerSelection == 'Rock') {
        paragraph.innerText = "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        paragraph.innerText = "You Win! " + playerSelection + " beats " + computerSelection;
    }

    results.appendChild(paragraph);
}

function game() {
    let computerWins = 0,
        playerWins = 0,
        playerSelection;

    console.log(computerWins > playerWins ? "The computer is the winner!" :
            playerWins > computerWins ? "You are the winner!" :
                                        "You and the computer drew!");
}

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', playRound));
