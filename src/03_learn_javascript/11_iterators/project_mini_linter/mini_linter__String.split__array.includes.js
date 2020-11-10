// Mini Linter
//
// In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.
//
// This is the same type of work that word processing software does. Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. In this project, you will create a miniature version of a linter using array methods that you have learned.



let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Split a string into substrings using the specified separator and return them as an array.
const storyWords = story.split(' ');
console.log(storyWords.length);


const betterWords = storyWords.filter(el => {
    return !unnecessaryWords.includes(el);
});
console.log(betterWords);
console.log(betterWords.length);


let overusedWordCount = 0;
overusedWords.forEach(overusedWord => {
    let counter = 0;
    betterWords.forEach(word => {
        if (overusedWord === word) {
            counter++;
            overusedWordCount++;
        };
    })
    console.log('You used the word "' + overusedWord + '" ' + counter + " times.");
});


let sentences = 0;
betterWords.forEach(el => {
    // console.log(el);
    if (el[el.length - 1] === '.' || el[el.length - 1] === '!') {
        // console.log(el[el.length - 1]);
        sentences++;
    }
});


// word count
console.log('Word count: ' + betterWords.length);       // Word count: 182
console.log('Sentence count: ' + sentences);            // Sentence count: 12
console.log('Overused words: ' + overusedWordCount);    // Overused words: 8
console.log(betterWords.join(' '));                     // Output the array as a String, separated words by blanks ' '.