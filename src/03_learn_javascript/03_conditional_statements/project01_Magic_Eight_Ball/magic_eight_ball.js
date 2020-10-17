let userName = 'Noa';
// let userQuestion = 'Will I become a werewolf tonight?';
let userQuestion = 'Werde ich Mona heiraten?';
let randomNumber;
let eightBall = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

userName
    ? console.log(`${userName} asked: ${userQuestion}`)
    : console.log(`The user asked: ${userQuestion}`);

randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

switch (randomNumber) {
    case 1:
        eightBall = 'It is certain';
        break;
    case 2:
        eightBall = 'It is decidedly so';
        break;
    case 3:
        eightBall = 'Reply hazy try again';
        break;
    case 4:
        eightBall = 'Cannot predict now';
        break;
    case 5:
        eightBall = 'Do not count on it';
        break;
    case 6:
        eightBall = 'My sources say no';
        break;
    case 7:
        eightBall = 'Outlook not so good';
        break;
    case 8:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'Number must be between 1 and 8';
        break;
}

console.log(eightBall);
