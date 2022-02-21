const computerSelection = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Paper";
            break;
        case 1:
            return "Scissor";
            break;
        case 2:
            return "Rock";
            break;
    }
}

const playRound = (compSelect, playerSelect) => {
    if (compSelect.toLowerCase() == "rock") {

    }
}

const loseMessage = (comp, player) => {
    console.log("You Lose! " + comp + " beats " + player);
}

const winMessage = (comp, player) => {
    console.log("You Win! " + player + " beats" + comp);
}

const tieMessage = () => {
    console.log("You tied!");
}