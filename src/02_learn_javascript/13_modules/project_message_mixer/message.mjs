// const MessageMixer = require('./messageMixer.mjs');
import MessageMixer from "./messageMixer.mjs";

function displayMessage() {
    console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
    console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(MessageMixer.reverseWord("What is the color of the sky?"));
    console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
    console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(MessageMixer.encode("What is the color of the sky?"));
    console.log(MessageMixer.palindrome('Hallo'));
    console.log(MessageMixer.pigLatin('Hello this is a World.', 'X'));
}

displayMessage();
