let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
console.log(secretMessage.length);

secretMessage[7] = 'right';
console.log(secretMessage);

secretMessage.shift();
secretMessage.unshift('Programming');
console.log(secretMessage);

// array.splice(startIndex, deleteCounter, replaceElement1, replaceElement2...)
// delete and replace elements starting at index 6, deleting 5 elements and replacing by 'know'.
secretMessage.splice(6, 5, 'know');
console.log(secretMessage);

// array.join('separator')
// chain array elements together, separated with a blank ' '.
console.log(secretMessage.join(' '));
