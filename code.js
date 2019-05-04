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

function announceWinner() {
    buttons.forEach(button => button.hidden = true);
    document.querySelector('h1').innerText = (computerWins == 5
                                              ? "The computer is"
                                              : "You are"
                                             ) + " the winner";
}

function playRound(e) {
    const playerSelection = e.srcElement.innerText,
          computerSelection = computerPlay(),
          results = document.querySelector('#results'),
          paragraph = document.createElement('p');

    if (playerSelection == computerSelection) {
        paragraph.innerText = "You Draw! Both selected " + playerSelection;
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper' ||
               playerSelection == 'Paper' && computerSelection == 'Scissors' ||
               playerSelection == 'Scissors' && computerSelection == 'Rock') {
        paragraph.innerText = "You Lose! " + computerSelection + " beats " + playerSelection;
        document.querySelector('#computer').innerText = ++computerWins;
    } else {
        paragraph.innerText = "You Win! " + playerSelection + " beats " + computerSelection;
        document.querySelector('#you').innerText = ++playerWins;
    }

    results.appendChild(paragraph);

    if (computerWins == 5 || playerWins == 5) {
        announceWinner();
    }
}

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', playRound));
let computerWins = 0,
    playerWins = 0;
