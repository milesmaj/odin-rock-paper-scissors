// Uses Math.random to generate a random result for the computer.
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

// Plays a round of rock paper scissors.
const playRound = (compSelect, playerSelect) => {
    let comp = compSelect;
    let player = playerFormat(playerSelect);

    if (comp == "Rock") {
        player == "Scissor" ? loseMessage(comp, player) : (player == "Rock" ? tieMessage() : winMessage(comp, player));
    } else if (comp == "Scissor") {
        player == "Paper" ? loseMessage(comp, player) : (player == "Scissor" ? tieMessage() : winMessage(comp, player));
    } else {
        player == "Rock" ? loseMessage(comp, player) : (player == "Paper" ? tieMessage() : winMessage(comp, player));
    }
}

// Formats player input to required format.
const playerFormat = (playerSelect) => {
    let arr = playerSelect.toLowerCase().split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
}

// Sends out a message to let player know he has lost.
const loseMessage = (comp, player) => {
    console.log("You Lose! " + comp + " beats " + player);
}

// Sends out a message to let player know he has won.
const winMessage = (comp, player) => {
    console.log("You Win! " + player + " beats " + comp);
}

// Sends out a message to let player know he has tied.
const tieMessage = () => {
    console.log("You tied!");
}