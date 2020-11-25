const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error! Wrong user input');
    }
};

// console.log(getUserChoice('Paper')); // should print 'paper'
// console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`


const getComputerChoice = () => {
    let number = Math.floor(Math.random() * 3);

    switch (number) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// console.log(getComputerChoice());  // should print 'rock', 'paper', or 'scissors'


const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return 'The game was a tie!';
    } else if(userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    } else if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    } else if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
}

// console.log(determineWinner('paper', 'scissors')); // prints 'The computer won!'
// console.log(determineWinner('paper', 'paper')); // prints 'The game is a tie!'
// console.log(determineWinner('paper', 'rock')); // prints 'You won!'

function playGame(yourChoice) {
    let userChoice = getUserChoice(yourChoice);
    console.log(`The user choice was: ${userChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`The computer choice was: ${computerChoice}`);

    if(userChoice === 'bomb') {
        console.log('You won with a thunder!!! :-) ');
    } else {
        console.log(determineWinner(userChoice, computerChoice));
    }
}

playGame('bomb');
