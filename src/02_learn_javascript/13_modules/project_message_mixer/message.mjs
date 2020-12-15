// require-in the module.export
// const MessageMixer = require('./messageMixer.mjs');

// import the default export
import MessageMixer from "./messageMixer.mjs";

// import named exports
// import {countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin} from './messageMixer.mjs';

function displayMessage() {
    console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
    console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(MessageMixer.reverseWord("What is the color of the sky?"));
    console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
    console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(MessageMixer.replaceAllOccurrences("What is the color of the sky? The sky is blue.", "sky", "water"));
    console.log(MessageMixer.encode("What is the color of the sky?"));
    console.log(MessageMixer.palindrome('What is the color of the sky?'));
    console.log(MessageMixer.pigLatin('What is the color of the sky?', 'ay'));
}

// function displayMessage() {
//     console.log(countCharacter("What is the color of the sky?", "t"));
//     console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
//     console.log(reverseWord("What is the color of the sky?"));
//     // console.log(reverseAllWords("What is the color of the sky?"));
//     console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
//     console.log(replaceAllOccurrences("What is the color of the sky? The sky is blue.", "sky", "water"));
//     // console.log(encode("What is the color of the sky?"));
//     // console.log(palindrome('What is the color of the sky?'));
//     console.log(pigLatin('What is the color of the sky?', 'ay'));
// }


displayMessage();
