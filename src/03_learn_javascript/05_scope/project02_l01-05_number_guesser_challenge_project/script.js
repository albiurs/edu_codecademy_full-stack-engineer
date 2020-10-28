let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);
// console.log(generateTarget());

const compareGuess = (humanGuess, computerGuess, secretNumber) => {

    let humanDistance = Math.abs(humanGuess - secretNumber);
    console.log(humanDistance);
    let computerDistance = Math.abs(computerGuess - secretNumber);
    console.log(computerDistance);

    return humanDistance < computerDistance || humanDistance === computerDistance;
}

