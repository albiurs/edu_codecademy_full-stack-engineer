// Mixed Messages Portfolio Project

// For this project, you will build a message generator program. Every time a user runs a program, they should get a
// new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology
// generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it
// outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far
// to build the program and customize it to your liking.
//
// Project Objectives:
//     Build a message generator program using JavaScript
//     Use Git version control
//     Use command line
//     Develop locally on your computer
//
// Prerequisites:
//     JavaScript
//     Git and GitHub
//     Command line


const jokes = {
    jokesForKids: [
        "Why did the kid throw his clock out the window? - Because he wanted to see time fly!",
        "\n" + "Knock, knock.\n" + "\n" + "Who’s there?\n" + "\n" + "Scold.\n" + "\n" + "Scold who?\n" + "\n" + "Scold outside, let me in!\n",
        "What do you call a bear with no ears? - A “B!”",
        "Where do cows go on Friday nights? - They go to the moo-vies!",
        "What did one eye say to the other eye? - Between us, something smells!"
    ],
    darkJokes: [
        "What's red and bad for your teeth? A brick.",
        "Give a man a match, and he'll be warm for a few hours. Set a man on fire, and he will be warm for the rest of his life.",
        "I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors.",
        "The other day, my wife asked me to pass her lipstick but I accidentally passed her a glue stick. She still isn't talking to me."
    ],
    chuckNorrisJokes: [
        "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.",
        "Time waits for no man. Unless that man is Chuck Norris.",
        "If you spell Chuck Norris in Scrabble, you win. Forever.",
        "Chuck Norris breathes air … five times a day."
    ]
}

const jokeNames = Object.getOwnPropertyNames(jokes);

const getRandomJoke = () => {
    let randJokeCat = jokeNames[Math.floor(Math.random() * jokeNames.length)];
    let randJokeElement = Math.floor(Math.random() * jokes[randJokeCat].length);
    return jokes[randJokeCat][randJokeElement];
}

console.log((getRandomJoke()));
