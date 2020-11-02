// Whale Talk

// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

// There are a few simple rules for translating text to whale language:

//     There are no consonants. Only vowels excluding “y”.
//     The u‘s and e‘s are extra long, so we must double them in our program.

// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

// To accomplish this translation, we can use our knowledge of loops. Let’s get started!

// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.




let input = 'Hello, my name is Urs';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

// counter = 0;

// do {
//     console.log(counter);
//     let letter = input[counter];
//     console.log(letter);
//     counter++;
// } while(counter < input.length);

for(let i=0; i<input.length; i++) {
    console.log('i = ' + i);

    for(let j=0; j<vowels.length; j++) {
        console.log('j = ' + j);

        // double the e and u vowels
        if(input[i].toLowerCase() === vowels[j]) {
            // add vowels to resultArray
            resultArray.push(input[i]);

            if(input[i].toLowerCase() === 'e' || input[i].toLowerCase() === 'u') resultArray.push(input[i]);
        }
    }
}

resultArray = resultArray.join('').toUpperCase();
console.log(resultArray);

