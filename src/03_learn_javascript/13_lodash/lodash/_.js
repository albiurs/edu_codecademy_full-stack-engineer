const _ = {

    /**
     * _.clamp()
     * https://lodash.com/docs/4.17.15#clamp
     * https://content.codecademy.com/programs/programming-with-javascript/lodash-assets/clamp.svg
     * @param number
     * @param lower
     * @param upper
     */
    // my _.clamp solution
    // clamp(number, lower, upper) {
    //     let arr = [number, lower, upper, ];
    //
    //     // sort array
    //     let counter = 0;
    //
    //     while(counter < arr.length - 1) {
    //         if(arr[counter] > arr[counter + 1]) {
    //             // swap number and lower
    //             let tmp = arr[counter];
    //             arr[counter] = arr[counter + 1];
    //             arr[counter + 1] = tmp;
    //         }
    //         counter ++;
    //     }
    //     return arr[1];
    // },

    // CodeCademy's _.clamp solution:
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },


    /**
     * _.inRange()
     * https://lodash.com/docs/4.17.15#inRange
     * @param number
     * @param start
     * @param end
     * @returns {boolean}
     */
    // my _.inRange solution
    // inRange(number, start, end = 0) {
    //     if(start > end) {
    //         [start, end] = [end, start];
    //     }
    //     return number >= start && number < end;
    // },

    // CodeCademy's _.inRange solution
    inRange(number, start, end) {
        if(end === undefined) {
            end = start;
            start = 0;
        }
        if(start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        let isInRange = start <= number && number < end;
        return isInRange;
    },


    /**
     * _.words()
     * https://lodash.com/docs/4.17.15#words
     * Pattern not implemented.
     * @param string
     * @returns {*}
     */
    // my solution
    words(string) {
        return string.split(' ');
    },

    // CodeCademy's solution
    // words(string) {
    //     let words = string.split(' ');
    //     return words;
    // },


    /**
     * _.pad()
     * https://lodash.com/docs/4.17.15#pad
     * https://content.codecademy.com/programs/programming-with-javascript/lodash-assets/pad.svg
     * chars not implemented.
     * @param string
     * @param length
     * @returns {string|*}
     */
    // my solution
    // pad(string, length) {
    //     let diffLength = length - string.length;
    //     if(diffLength <= 0) {
    //         return string;
    //     } else if(diffLength % 2 === 0) {
    //         let concatString = '';
    //         for(let i=0; i<diffLength/2; i++) {
    //             concatString = concatString + ' ';
    //         }
    //         return concatString + string + concatString;
    //     } else {
    //         let concatString = '';
    //         for(let i=0; i<Math.floor(diffLength/2); i++) {
    //             concatString = concatString + ' ';
    //         }
    //         return concatString + string + concatString + ' ';
    //     }
    // },

    // CodeCademy's solution
    pad(string, length) {
        if(length <= string.length) {
            return string;
        }
        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },


    /**
     * _.has()
     * https://lodash.com/docs/4.17.15#has
     * modified implementation:
     * check if object contains key.
     * @param object
     * @param key
     * @returns {boolean}
     */
    // my solution
    has(object, key) {
        // return object[key] ? true : false;
        return !!object[key];                   // short cut of the above: double negation check => positive check
    },
    // CodeCademy's solution
    // has(object, key) {
    //     let hasValue = object[key] != undefined;
    //     return hasValue;
    // },


    /**
     * _.invert()
     * https://lodash.com/docs/4.17.15#invert
     * modified implementation of invert:
     * Inverts the key and the value of all properties in an object
     * @param object
     * @returns {{}}
     */
    // my solution
    invert(object) {
        let newObject = {};
        for(let prop in object) {
            newObject[object[prop]] = prop;
        }
        return newObject;
    },


    /**
     * _.findKes()
     * https://lodash.com/docs/4.17.15#findKey
     * @param object
     * @param predicateFunc
     * @returns {string|undefined}
     */
    findKey(object, predicateFunc) {
        let match = '';
        for(let prop in object) {
            // console.log(prop);
            // console.log(object[prop]);
            // console.log(object[prop].age);
            // let flag = predicateFunc(object[prop]);
            // console.log(flag);
            // let currentProperty = object[prop];
            if(predicateFunc(object[prop])) {
                match = prop;
                return match;
            }
        }
        return undefined;
    },


    /**
     * _.drop()
     * https://lodash.com/docs/4.17.15#drop
     * @param array
     * @param number
     * @returns {*}
     */
    // my solution
    // drop(array, number = 1) {
    //     let droppedArray = array;
    //     for(let i = 0; i<number; i++) {
    //         droppedArray.shift();
    //     }
    //     return droppedArray;
    // },

    // CodeCademy's solution
    drop(array, n) {
        if(n === undefined) {
            n = 1;
        }
        let droppedArray = array.slice(n, array.length);
        return droppedArray;
    },


    /**
     * _.dropWhile()
     * https://lodash.com/docs/4.17.15#dropWhile
     * @param array
     * @param predicateFunc
     * @returns {*}
     */
    // dropWhile(array, predicateFunc) {
    //     // for(let key in array) {
    //     for(let i=0; i<array.length; i++) {
    //         // console.log('array[i] = ' + array[i]);
    //         console.log(array[i].user);
    //         if(predicateFunc(!array[i])) {
    //             array.shift();
    //             break;
    //         }
    //         array.shift();
    //     }
    //     return array;
    // },

    // CodeCademy's solution
    dropWhile(array, predicate) {
        const callback = (element, index) => {
            return !predicate(element, index, array);
        }
        let dropNumber = array.findIndex(callback);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },


    /**
     * _.chunk()
     * https://lodash.com/docs/4.17.15#chunk
     * @param array
     * @param size
     * @returns {[]}
     */
    // my solution
    chunk(array, size) {
        if(size === undefined) {
            size = 1;
        }
        let chunkArray = [];
        let chunk = [];
        while(array.length > 0) {
            chunk = array.slice(0, size);
            array = array.slice(size, array.length);
            chunkArray.push(chunk);
        }
        return chunkArray;
    },

    // CodeCaemy's solution
    // !!!!! WRONG SOLUTION FROM CODECADEMY BELOW !!!!!
    // chunk(array, size=1) {
    //     let arrayChunks = [];
    //     for(let i=0; i<array.length; i+=1) {
    //         let arrayChunk = array.slice(i, i+size);
    //         arrayChunks.push(arrayChunk);
    //     }
    //     return arrayChunks;
    // }
}


// console.log(_.clamp(3, 2, 4));    // 3
// console.log(_.inRange(2, 1, 3));    // true
// console.log(_.words(('xxx yyyy & zzz')));              // [ 'xxx', 'yyyy', '&', 'zzz' ]
// console.log(_.pad('xxxx', 7));            //    ' xxxx  '
// console.log(_.has({"key": "value"}, "key"));    // true
// console.log(_.has({"key": "value"}, "notKey")); // false
// console.log(_.invert({"key": "value", "key2": "value2"}));  // { value: 'key', value2: 'key2' }
//
//
// let usersObject = {
//     'barney':  { 'age': 36, 'active': true },
//     'fred':    { 'age': 40, 'active': false },
//     'pebbles': { 'age': 1,  'active': true }
// };
//
// // conventional predicate function (= returns true or false)
// console.log(_.findKey(usersObject, function(o) { return o.age < 40; }));  // => 'barney'
// console.log(_.findKey(usersObject, function(o) { return o.age === 40; }));  // => 'fred'
// console.log(_.findKey(usersObject, function(o) { return o.age < 0; }));  // => 'undefined'
//
// // predicate arrow function (= returns true or false)
// console.log(_.findKey(usersObject, (o) => o.age < 40));  // => 'barney'
// console.log(_.findKey(usersObject, (o) => o.age === 40));  // => 'fred'
// console.log(_.findKey(usersObject, (o) => o.age < 0));  // => 'undefined'
//
//
//
// console.log(_.drop([1, 2, 3]));         // => [2, 3]
// console.log(_.drop([1, 2, 3], 2));   // => [3]
// console.log(_.drop([1, 2, 3], 5));   // => []
// console.log(_.drop([1, 2, 3], 0));   // => [1, 2, 3]
//
//
//
// let usersArray = [
//     { 'user': 'barney',  'active': true },
//     { 'user': 'fred',    'active': true },
//     { 'user': 'pebbles', 'active': false }
// ];
//
// console.log(_.dropWhile(usersArray, function(o) { return o.active; })); // [ { user: 'pebbles', active: true } ]
// console.log(_.dropWhile(usersArray, function(o) { return o.user != 'pebbles'; })); // [ { user: 'pebbles', active: false } ]
// console.log(_.dropWhile(usersArray, function(o) { return o.user != 'fred'; })); // [ { user: 'fred', active: true }, { user: 'pebbles', active: false } ]
//
//
//
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));  // => [['a', 'b'], ['c', 'd']]
console.log(_.chunk(['a', 'b', 'c', 'd'], 3));  // => [['a', 'b', 'c'], ['d']]








// Do not write or modify code below this line.
module.exports = _;