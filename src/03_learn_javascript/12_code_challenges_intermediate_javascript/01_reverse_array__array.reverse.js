// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the
// elements in the reverse order.
//
// There’s a built-in method that does a lot of this work for you:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// , but here you’re not allowed to use it. Don’t worry
// you’ll have plenty of opportunities to use built-in methods later on!

// Write your code here:
const reverseArray = array => {
    newArray = [];
    for(let i=array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

// When you're ready to test your code, uncomment the below and run:
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
// print ['This', 'will', 'all', 'make', 'sense.'];
console.log(reverseArray(sentence).join(' '));
// print This will all make sense.
