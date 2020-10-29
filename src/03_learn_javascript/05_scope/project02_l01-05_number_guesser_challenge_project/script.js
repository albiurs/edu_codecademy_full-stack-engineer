let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// == functions ==
const generateTarget = () => Math.floor(Math.random() * 10);
// console.log(generateTarget());


const compareGuesses = (humanGuess, computerGuess, secretNumber) => {

    console.log(secretNumber);
    let humanDistance = Math.abs(humanGuess - secretNumber);
    console.log(humanDistance);
    let computerDistance = Math.abs(computerGuess - secretNumber);
    console.log(computerDistance);

    return humanDistance < computerDistance || humanDistance === computerDistance;
}
// console.log(compareGuess(3,4,5));


const updateScore = winner => winner === 'human' ? humanScore++ :
    winner === 'computer' ? computerScore++ :
        '';

// const updateScore = winner => {
//     if(winner === 'human' ) {
//         humanScore++;
//     } else if (winner === 'computer') {
//         computerScore++;
//     }
// };
// console.log(updateScore('human'));
// console.log(updateScore('human'));
// console.log(updateScore('human'));
// console.log(updateScore('human'));
// console.log(humanScore);
// console.log(updateScore('computer'));
// console.log(updateScore('computer'));
// console.log(updateScore('computer'));
// console.log(computerScore);


const advanceRound = () => currentRoundNumber++;
// console.log(advanceRound());
// console.log(advanceRound());

